import logger from '../../lib/logger';
import httpStatus from 'http-status';
import UserService from './user.service';
import { Result } from '../../common/result';

export default class UserController {
    list = async (req, res, next) => {
        let result;

        try {
            const { rows, count } = await new UserService().list();
            result = Result.ok<JSON>(count, rows).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    };

}
