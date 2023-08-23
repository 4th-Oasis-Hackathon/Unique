import { Op } from 'sequelize';
import { User } from '../../models/user.model';

export default class UserRepository {
	/**
     주어진 조건에 맞는 Record 모두 검색
     */
	 public findAll<User>(): Promise<{ rows; count }> {
        let where = {
                deleted_at: {
                    [Op.eq]: null,
                },
        };

        return User.findAndCountAll({
            include: UserModelIncludes,
            where,
            distinct: true,
            order: [['_id', 'ASC']],
        });
    }
}
