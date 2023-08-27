export const actions = {
	default: async ({ request }) => {
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
			body: JSON.stringify(userData)
		};
		const res = await fetch(url, options);
	}
};
