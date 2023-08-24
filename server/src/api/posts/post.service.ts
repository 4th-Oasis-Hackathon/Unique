import { Post } from '../../models/posts.model';
import { literal, col } from 'sequelize';
import { User } from '../../models/user.model';
import PostState from '../../common/post.state';

export default class PostService {
    list = async (attr: any): Promise<{ rows; count }> => {
        const  where = {
            ...attr,
            deleted_at: null,
        };

        return await Post.findAndCountAll({
            where,
            distinct: true,
            order: [['_id', 'DESC']],
        });
    };

    get = async (id: number): Promise<Post> => {
        const query = {
            where: {
                _id: id,
                deleted_at: null,
            },
            include: [{
                model: Post,
                as: 'comments',
                where: {
                    parent_id: id,
                    deleted_at: null,
                },
                include: [{
                    model: Post,
                    as: 'reply_comments',
                    where: {
                        parent_id: col('comments._id'),
                        deleted_at: null,
                    },
                }],
            }],
        };

        return await Post.findOne(query);
    }

    create = async (postData): Promise<Post> => {
        return await Post.create(postData);
    }

    delete = async (id: number): Promise<number> => {
        return await Post.destroy({
            where: {
                _id: id
            }
        });
    }

    like = async (id: number): Promise<[affectedCount: number]> => {
        return await Post.update({
            likes: literal('likes + 1')
        }, {
            where: {
                _id: id
            }
        });
    }

    unlike = async (id: number): Promise<[affectedCount: number]> => {
        return await Post.update({
            likes: literal('likes - 1')
        }, {
            where: {
                _id: id
            }
        });
    }

    report = async (postId: string, userId: number, content: string) => {
        const reporter = await User.findOne({
            where: {
                _id: userId,
                deleted_at: null,
            },
        });

        const reportedPost = await Post.findOne({
            where: {
                _id: postId,
                deleted_at: null,
            },
        });

        const reportData = {
            author_id: reporter._id,
            author: reporter.name,
            receiver_id: 0,
            type: PostState.MESSAGE,
            title: '게시글이 신고되었습니다.',
            content: `신고자: ${reporter.name}(${reporter.email})\n신고내용: ${content}\n신고게시글: ${reportedPost.title}\n신고게시글 내용: ${reportedPost.content}`,
        }

        await Post.create(reportData);

        await reportedPost.update({
            reported: true,
        });
    }
}
