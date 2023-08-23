import PostRepository from './post.repository';
import { Post } from '../../models/posts.model';

export default class PostService {
    list = async (): Promise<{ rows; count }> => {
        return new PostRepository().findAll();
    };

    get = async (id: string): Promise<Post> => {
        return await new PostRepository().findOne(id);
    }

    create = async (postData): Promise<Post> => {
        return new PostRepository().create(postData);
    }
}
