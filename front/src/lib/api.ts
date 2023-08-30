export async function getAllPosts(board: string) {
	const url = `http://localhost:5500/posts?region=suncheon&board=${board}`;
	const res = await fetch(url);
	const data = await res.json();
	return data.result;
}
