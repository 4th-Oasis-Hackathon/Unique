import { User } from '../../models/user.model';
import { Post } from '../../models/posts.model';
import PostState from '../../common/post.state';
import MessageService from '../messages/message.service';
import { Op } from 'sequelize';

export default class UserService {
    get = async (id: string): Promise<User> => {
        const query = {
            where: {
                _id: id,
                deleted_at: null,
            },
            include: [{
                model: Post,
                as: 'posts',
                where: {
                    author_id: id,
                    type: PostState.POST,
                    deleted_at: null,
                },
            }, {
                model: Post,
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

    messageList = async (userId: number): Promise<User> => {
        const user: any = await User.findOne({
            where: {
                _id: userId,
                deleted_at: null,
            },
            include: [{
                model: Post,
                as: 'messages',
                where: {
                    [Op.or]: [{
                        author_id: userId,
                    }, {
                        receiver_id: userId,
                    }],
                    type: PostState.MESSAGE,
                    deleted_at: null,
                },
                order: [['_id', 'DESC']],
            }],
        });

        const messages = user?.messages || [];

        // 메시지를 사용자 별로 구분하는 작업 수행
        const userMessageMap = new Map<number, Array<Post>>();

        messages.forEach(message => {
            const otherUserId = message.author_id === userId ? message.receiver_id : message.author_id;
            if (!userMessageMap.has(otherUserId)) {
                userMessageMap.set(otherUserId, []);
            }
            userMessageMap.get(otherUserId)?.push(message);
        });

        user.messages = Array.from(userMessageMap.values());
        return user;
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
