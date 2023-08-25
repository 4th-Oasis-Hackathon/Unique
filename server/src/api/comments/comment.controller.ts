import logger from '../../lib/logger';
import httpStatus from 'http-status';
import CommentService from './comment.service';
import { Result } from '../../common/result';
import PostState from '../../common/post.state';

export default class CommentController {
    create = async (req, res, next) => {
        let result;
        const { content, parent_id, author_id, author } = req.body;

        try {
            const commentData = {
                author_id,
                author,
                content,
                parent_id,
                type: PostState.COMMENT,
            }

            const comment = await new CommentService().create(commentData);
            result = Result.ok<any>({comment}).toJson();
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
            await new CommentService().delete(id);
            result = Result.ok<any>({
                comment: {
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

    like = async (req, res, next) => {
        let result;
        const { id } = req.params;

        try {
            await new CommentService().like(id);
            result = Result.ok<any>({
                comment: {
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

    unlike = async (req, res, next) => {
        let result;
        const { id } = req.params;

        try {
            await new CommentService().unlike(id);
            result = Result.ok<any>({
                comment: {
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
}
