import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const session = event.cookies.get('session');
		if (!session) {
			console.log('로그인이 안되어있음');
		} else {
			const userInfo = JSON.parse(session);
			const formData = await event.request.formData();
			const req = new FormData();

			const title = formData.get('title');
			const content = formData.get('content');
			const category = formData.get('category');
			const images = formData.getAll('image');

			req.append('title', title);
			req.append('content', content);
			req.append('board', category);
			req.append('author', userInfo.name);
			req.append('author_id', userInfo.id);
			req.append('role', '2');

			images.forEach((image, index) => {
				req.append('images', image, `image_${index}`);
			});

			console.log(req);

			const url = `http://localhost:5500/posts?region=suncheon`;
			const options = {
				method: 'POST',
				body: req
			};
			const res = await fetch(url, options);
			const api = await res.json();

			if (api.code === 2000) {
				throw redirect(302, '/community');
			}
		}
	}
};
