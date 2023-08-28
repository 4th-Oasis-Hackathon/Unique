import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');

	if (!session) {
		return await resolve(event);
	}

	const userInfo = JSON.parse(session);

	if (userInfo) {
		event.locals.user = {
			id: userInfo.id,
			name: userInfo.name,
			email: userInfo.email,
			role: userInfo.role,
			region: userInfo.region
		};
	}

	return await resolve(event);
};
