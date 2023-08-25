import { Op } from "sequelize";
import PostState from "../../common/post.state";
import { Post } from "../../models/posts.model";

export default class MessageService {
	send = async (data: any) => {
		return await Post.create(data);
	}

	getByUserId = async (userId: number) => {
		return await Post.findAll({
			where: {
				[Op.or]: [
					{ author_id: userId },
					{ receiver_id: userId },
				],
				type: PostState.MESSAGE,
				deleted_at: null,
			},
			order: [['_id', 'DESC']],
		});
	}
}
