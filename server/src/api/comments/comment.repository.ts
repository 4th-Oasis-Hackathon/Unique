import { Op } from 'sequelize';
import { Post } from '../../models/posts.model';

export default class PostRepository {
	 public findAll<Post>(): Promise<{ rows; count }> {
        let where = {
                deleted_at: {
                    [Op.eq]: null,
                },
        };

        return Post.findAndCountAll({
            where,
            distinct: true,
            order: [['_id', 'ASC']],
        });
    }

    public async findOne(id: string): Promise<Post> {
        return await Post.findOne({
            where: {
                _id: id,
                deleted_at: {
                    [Op.eq]: null,
                },
            },
        });

    }

    public async create(postData): Promise<Post> {
        return await Post.create(postData);
    }

}
