import ApiCodes from '../../common/api.codes';
import ApiError from '../../common/api.error';
import { assertTrue } from '../../lib/utils';
import { User } from '../../models/user.model';

export default class AuthService {
    signup = async (userData): Promise<User> => {
        const exist = await User.findOne({
            where: {
                email: userData.email,
                deleted_at: null,
            },
        });

        if (exist) throw new ApiError(ApiCodes.CONFLICT, 'User already exists');

        return await User.create(userData);
    }

    login = async (email, password): Promise<User> => {
        const exist = await User.findOne({
            where: {
                email,
                deleted_at: null,
            },
        });

        const match = await exist.authenticate(password);
        assertTrue(match, new ApiError(ApiCodes.UNAUTHORIZED, 'Password is incorrect'));

        return exist;
    }
}
