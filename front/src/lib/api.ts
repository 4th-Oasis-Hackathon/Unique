export async function getAllPosts(region: string, board: string) {
	const url = `http://localhost:5500/posts?region=${region}&board=${board}`;
	const res = await fetch(url);
	const data = await res.json();
	return data.result;
}
