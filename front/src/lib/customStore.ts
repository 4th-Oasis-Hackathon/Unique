// $lib/customStore.ts
import { writable } from 'svelte/store';
import { fetchGetById } from '$lib/api';

function customPostStore() {
	const { subscribe, set, update } = writable(null);

	return {
		subscribe,
		load: async (id) => {
			try {
				const postData = await fetchGetById(id);
				set(postData);
			} catch (error) {
				console.error(error);
			}
		}
		// ...other custom methods
	};
}

export const post = customPostStore();
