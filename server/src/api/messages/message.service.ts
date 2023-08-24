import { Post } from "../../models/posts.model";

export default class MessageService {
	send = async (data: any) => {
		return await Post.create(data);
	}
}
