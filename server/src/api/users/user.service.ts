import { User } from '../../models/user.model';
import { Post } from '../../models/posts.model';
import PostState from '../../common/post.state';
import MessageService from '../messages/message.service';

export default class UserService {
    get = async (id: string): Promise<User> => {
        const query = {
            where: {
                _id: id,
                deleted_at: null,
            },
            attributes: ['_id', 'name', 'email', 'role', 'region', 'notice', 'created_at'],
            include: [{
                model: Post,
                required: false,
                as: 'posts',
                where: {
                    author_id: id,
                    type: PostState.POST,
                    deleted_at: null,
                },
            }, {
                model: Post,
                required: false,
                as: 'comments',
                where: {
                    author_id: id,
                    type: PostState.COMMENT,
                    deleted_at: null,
                },
            }]
        };

        return await User.findOne(query);
    }

    update = async (id: number, userData): Promise<[affectedCount: number]> => {
        return await User.update(userData, {
            where: {
                _id: id
            }
        });
    }

    delete = async (id: number): Promise<[affectedCount: number]> => {
        return await User.update({
            deleted_at: new Date()
        }, {
            where: {
                _id: id
            }
        });
    }

    messageList = async (userId: number): Promise<any> => {
        const messageList = await new MessageService().getByUserId(userId);
        const messageMap: Map<number, any[]> = new Map();

        messageList?.forEach((message) => {
            const another = message.author_id === userId ? message.receiver_id : message.author_id;

            if (!messageMap.has(another)) {
                messageMap.set(another, []);
            }
            messageMap.get(another)?.push(message);
        });

        return Array.from(messageMap.values());
    }

    sendMessage = async (userId: number, message: any): Promise<Post> => {
        const sender = await User.findOne({
            where: {
                _id: userId,
                deleted_at: null,
            },
        });

        const data = {
            ...message,
            author_id: sender._id,
            author: sender.name,
        };

        return await new MessageService().send(data);
    }
}
