import logger from '../../lib/logger';
import httpStatus from 'http-status';
import UserService from './user.service';
import { Result } from '../../common/result';
import { prune } from '../../lib/utils';
import PostState from '../../common/post.state';

export default class UserController {
    get = async (req, res, next) => {
        let result;
        const { id } = req.params;

        try {
            const user = await new UserService().get(id);
            result = Result.ok<any>(user).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    };

    update = async (req, res, next) => {
        let result;
        const { id } = req.params;
        const { region, notice } = req.body;

        try {
            const updateData = prune({
                region,
                notice,
            });
            await new UserService().update(id, updateData);

            result = Result.ok<any>({
                user: {
                    _id: id,
                }
            }).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    }

    delete = async (req, res, next) => {
        let result;
        const { id } = req.params;

        try {
            await new UserService().delete(id);

            result = Result.ok<any>({
                user: {
                    _id: id
                }
            }).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    }

    message = async (req, res, next) => {
        let result;
        const { id: userId } = req.params;

        try {
            const message = await new UserService().messageList(userId);

            result = Result.ok<any>(message).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    }

    sendMessage = async (req, res, next) => {
        let result;
        const { id: userId } = req.params;
        const { receiver_id, title, content } = req.body;

        try {
            const messageData = prune({
                receiver_id,
                title,
                content,
                type: PostState.MESSAGE,
            });
            const message = await new UserService().sendMessage(userId, messageData);

            result = Result.ok<any>(message).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    }
}
