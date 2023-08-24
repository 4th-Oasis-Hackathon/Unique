import logger from '../../lib/logger';
import httpStatus from 'http-status';
import NoticeService from './notice.service';
import { Result } from '../../common/result';
import PostState from '../../common/post.state';

export default class NoticeController {
    create = async (req, res, next) => {
        let result;
        const { title, content, files } = req.body;

        try {
            const noticeData = {
                title,
                content,
                files,
                type: PostState.NOTICE,
            };

            const notice = await new NoticeService().create(noticeData);
            result = Result.ok<any>(notice).toJson();
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

}
