import logger from '../../lib/logger';
import httpStatus from 'http-status';
import UserService from './user.service';
import { Result } from '../../common/result';

export default class UserController {
    list = async (req, res, next) => {
        let result;

        try {
            const { rows, count } = await new UserService().list();
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

    create = async (req, res, next) => {
        let result;

        try {
            const { name, email, password, role, region } = req.body;
            const userData = {
                name,
                email,
                password,
                role,
                region,
            }

            const user = await new UserService().create(userData);
            result = Result.ok<any>(user).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    }
}
