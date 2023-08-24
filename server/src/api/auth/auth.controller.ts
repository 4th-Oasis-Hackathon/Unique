import logger from '../../lib/logger';
import httpStatus from 'http-status';
import AuthService from './auth.service';
import { Result } from '../../common/result';

export default class AuthController {
    signup = async (req, res, next) => {
        let result;
        const { name, email, password, role, region } = req.body;

        try {
            const userData = {
                name,
                email,
                password,
                role,
                region,
            }
            const newUser = await new AuthService().signup(userData);
            result = Result.ok<any>({
                user: {
                    id: newUser._id,
                }
            }).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    };

    login = async (req, res, next) => {
        let result;
        const { email, password } = req.params;

        try {
            const Auth = await new AuthService().login(email, password);
            result = Result.ok<any>(Auth).toJson();
        } catch (e: any) {
            logger.err(JSON.stringify(e));
            logger.error(e);

            result = Result.fail<Error>(e).toJson();
        }

        logger.res(httpStatus.OK, result, req);
        res.status(httpStatus.OK).json(result);
    };
}
