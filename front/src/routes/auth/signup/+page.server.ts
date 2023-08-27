export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const name = formData.get('name');
		const email = formData.get('email');
		const password = formData.get('password');
		const selectedRegion = formData.get('selectedRegion');
		const role = 2;

		const userData = {
			name: name,
			email: email,
			password: password,
			region: selectedRegion,
			role: role
		};

		const url = `http://localhost:5500/auth/signup`;
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		};

		await fetch(url, options);
	}
};
