import { literal } from 'sequelize';
import { Post } from '../../models/posts.model';

export default class CommentService {
    create = async (postData): Promise<Post> => {
        return Post.create(postData);
    }

    delete = async (id: number): Promise<number> => {
        return Post.destroy({
            where: {
                _id: id
            }
        });
    }

    like = async (id: number): Promise<[affectedCount: number]> => {
        return Post.update({
            likes: literal('likes + 1')
        }, {
            where: {
                _id: id
            }
        });
    }

    unlike = async (id: number): Promise<[affectedCount: number]> => {
        return Post.update({
            likes: literal('likes - 1')
        }, {
            where: {
                _id: id
            }
        });
    }
}
