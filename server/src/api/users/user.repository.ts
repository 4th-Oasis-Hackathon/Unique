import { Op } from 'sequelize';
import { User } from '../../models/user.model';

export default class UserRepository {
	 public findAll<User>(): Promise<{ rows; count }> {
        let where = {
                deleted_at: {
                    [Op.eq]: null,
                },
        };

        return User.findAndCountAll({
            where,
            distinct: true,
            order: [['_id', 'ASC']],
        });
    }

    public async findOne(id: string): Promise<User> {
        return await User.findOne({
            where: {
                _id: id,
                deleted_at: {
                    [Op.eq]: null,
                },
            },
        });

    }

    public async create(userData): Promise<User> {
        return await User.create(userData);
    }

}
