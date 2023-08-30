import { redirect } from '@sveltejs/kit';

// export const load = async (e) => {
// 	let image = e.target.files[0];
// 	let reader = new FileReader();
// 	reader.readAsDataURL(image);
// 	reader.onload = (e) => {
// 		avatar = e.target.result;
// 	};
// };

export const actions = {
	default: async (event) => {
		const session = event.cookies.get('session');
		if (!session) {
			console.log('로그인이 안되어있음');
		} else {
			const userInfo = JSON.parse(session);
			const formData = await event.request.formData();

			const title = formData.get('title');
			const content = formData.get('content');
			const category = formData.get('category');
			const imgae = formData.get('image');

			console.log(formData);
			console.log(imgae);

			const data = {
				title: title,
				content: content,
				board: category,
				author: userInfo.name,
				author_id: userInfo.id,
				imgaes: imgae,
				role: 1
			};
			console.log(data);
			const url = `http://localhost:5500/posts?region=suncheon`;
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
				},
				body: JSON.stringify(data)
			};
			const res = await fetch(url, options);
			const api = await res.json();

			if (api.code === 2000) {
				redirect(302, '/community');
			}
		}
	}
};
