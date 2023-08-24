import logger from '../../lib/logger';
import httpStatus from 'http-status';
import PostService from './post.service';
import { Result } from '../../common/result';
import PostState from '../../common/post.state';

export default class PostController {
    list = async (req, res, next) => {
        let result;
        const region = req.query.region || req.user.region;

        try {
            const attr = {
                region,
                type: PostState.POST
            }
            const { rows, count } = await new PostService().list(attr);
            result = Result.ok<any>({ rows, count }).toJson();
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

        try {
            const { id } = req.params;
            const user = await new PostService().get(id);
            result = Result.ok<any>(user).toJson();
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
        const user = req.user;
        const { title, content, files, likes} = req.body;

        try {
            const postData = {
                title,
                content,
                files,
                likes,
                author_id: user.id,
                author: user.name,
                type: PostState.POST
            }

            const post = await new PostService().create(postData);
            result = Result.ok<any>(post).toJson();
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

        try {
            const { id } = req.params;
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

        try {
            const { id } = req.params;
            const post = await new PostService().like(id);
            result = Result.ok<any>(post).toJson();
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

        try {
            const { id } = req.params;
            const post = await new PostService().unlike(id);
            result = Result.ok<any>(post).toJson();
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
        const user = req.user;
        const content = req.body.content;

        try {
            const { id } = req.params;
            await new PostService().report(id, user.id, content);
            result = Result.ok<any>().toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    }
}
