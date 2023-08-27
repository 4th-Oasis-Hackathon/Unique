export const load = async () => {
	const getAllPosts = async (region: string) => {
		const url = `http://localhost:5500/posts?region=${region}`;
		const res = await fetch(url);
		const data = await res.json();
		return data.result;
	};
	return await getAllPosts('suncheon');
};
