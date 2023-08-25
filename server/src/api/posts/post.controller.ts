import logger from '../../lib/logger';
import httpStatus from 'http-status';
import PostService from './post.service';
import { Result } from '../../common/result';
import PostState from '../../common/post.state';
import ApiError from '../../common/api.error';
import ApiCodes from '../../common/api.codes';

export default class PostController {
    list = async (req, res, next) => {
        let result;
        const region = req.query.region;

        try {
            if (!region) throw new ApiError(ApiCodes.BAD_REQUEST, "지역을 입력해주세요.");
            const attr = {
                region,
                type: PostState.POST
            }

            const { rows: posts, count } = await new PostService().list(attr);
            result = Result.ok<any>({ count, posts }).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    };

    get = async (req, res, next) => {
        let result;
        const { id } = req.params;

        try {
            const post = await new PostService().get(id);
            result = Result.ok<any>({post}).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    };

    create = async (req, res, next) => {
        let result;
        const { title, content, author_id, author} = req.body;
        const files = req?.files;

        try {
            const postData = {
                title,
                content,
                files,
                author_id,
                author,
                type: PostState.POST
            }

            const post = await new PostService().create(postData);
            result = Result.ok<any>({post}).toJson();
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
            await new PostService().delete(id);
            result = Result.ok<any>({
                post: {
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
            await new PostService().like(id);
            result = Result.ok<any>({
                post: {
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

    unlike = async (req, res, next) => {
        let result;
        const { id } = req.params;

        try {
            await new PostService().unlike(id);
            result = Result.ok<any>({
                post: {
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

    report = async (req, res, next) => {
        let result;
        const { content, user_id } = req.body;
        const { id: postId } = req.params;

        try {
            await new PostService().report(postId, user_id, content);
            result = Result.ok<any>({
                post: {
                    _id: postId
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
