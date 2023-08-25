import logger from '../../lib/logger';
import httpStatus from 'http-status';
import NoticeService from './notice.service';
import { Result } from '../../common/result';
import PostState from '../../common/post.state';

export default class NoticeController {
    list = async (req, res, next) => {
        let result;

        try {
            const notices = await new NoticeService().list();
            result = Result.ok<any>({notices}).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    }

    create = async (req, res, next) => {
        let result;
        const { title, content } = req.body;
        const files = req?.files;

        try {
            const noticeData = {
                title,
                content,
                files,
                type: PostState.NOTICE,
            };

            const notice = await new NoticeService().create(noticeData);
            result = Result.ok<any>({notice}).toJson();
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
            await new NoticeService().delete(id);
            result = Result.ok<any>({
                notice: {
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

}
