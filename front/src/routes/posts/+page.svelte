<script>
	import { page } from '$lib/stores'
	import { getPost } from '$lib/api'
	import { onMount } from 'svelte'

	let posts = []
	let currentPage = 1
	let totalPages = 1

	onMount(async () => {
		const { posts, currentPage, totalPages } = await getPost()
		$page.set({ currentPage, totalPages })
		$posts.set(posts)
	})
</script>
