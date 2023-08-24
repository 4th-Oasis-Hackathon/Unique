import { Post } from "../../models/posts.model";

export default class NoticeService {
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
