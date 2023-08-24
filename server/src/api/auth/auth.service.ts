import ApiCodes from '../../common/api.codes';
import ApiError from '../../common/api.error';
import { assertTrue } from '../../lib/utils';
import { User } from '../../models/user.model';

export default class AuthService {
    signup = async (userData): Promise<User> => {
        const exist = await User.findOne({
            where: {
                email: userData.email,
            },
        });

        if (exist) throw new ApiError(ApiCodes.CONFLICT, 'User already exists');

        return await User.create(userData);
    }

    login = async (email, password)=> {
        const exist = await User.findOne({
            where: {
                email
            },
        });

        const match = await exist.authenticate(password);
        assertTrue(match, new ApiError(ApiCodes.UNAUTHORIZED, 'Password is incorrect'));
    }
}
