import { getAllPosts } from '$lib/api';

export const load = async () => {
	return await getAllPosts('suncheon', '중고장터');
};
