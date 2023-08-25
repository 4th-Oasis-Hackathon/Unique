import PostState from "../../common/post.state";
import { Post } from "../../models/posts.model";

export default class NoticeService {
	list = async () => {
		return await Post.findAll({
			where: {
				type: PostState.NOTICE,
				deleted_at: null
			}
		});
	}

	create = async (data: any) => {
		return await Post.create(data);
	}

	delete = async (id: number) => {
		return await Post.update({
			deleted_at: new Date()
		}, {
			where: {
				_id: id
			}
		});
	}

}
