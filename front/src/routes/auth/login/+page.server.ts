import { json, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		const userData = {
			email: email,
			password: password
		};

		const url = `http://localhost:5500/auth/login`;
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		};
		const res = await fetch(url, options);
		const api = await res.json();
		console.log(api.result);

		if (api.code === 2000) {
			cookies.set('session', api.result.user, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				maxAge: 60 * 60 * 24 * 7
			});
			throw redirect(302, '/');
		}
	}
};
