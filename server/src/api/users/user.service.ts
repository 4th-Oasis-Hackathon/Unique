import UserRepository from './user.repository';
import { User } from '../../models/user.model';

export default class UserService {
    list = async (): Promise<{ rows; count }> => {
        return new UserRepository().findAll();
    };

    get = async (id: string): Promise<User> => {
        return await new UserRepository().findOne(id);
    }

    create = async (userData): Promise<User> => {
        return new UserRepository().create(userData);
    }
}
