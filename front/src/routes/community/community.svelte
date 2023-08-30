<script lang="ts">
	import {getAllPosts} from '$lib/api'
	import {selectedCategory} from '$lib/store'
	import { onMount } from 'svelte';

	let posts: any[] = [];

	const fetchPosts = async (category: string) => {
		const data = await getAllPosts(category);
		posts = Array.isArray(data.posts) ? data.posts : [];
		console.log("Fetched posts: ", posts[0]._id);
	};

	onMount(() => {
		fetchPosts($selectedCategory);
	});

	$: {
		fetchPosts($selectedCategory);
	}
	
</script>


<div class="container">
	<div class="gridOut">
	{#each posts as post}
		<div class='gridIn'>
			<div>
				<a href={`/post/${post._id}`}>
				<img src="/images/커뮤니티1.png" alt="{post.title}">
				</a>
			</div>
			<div>
				<a href={`/post/${post._id}`}>
				<h1 class="title">
            {#if post.title.length > 25}
                {post.title.slice(0, 25) + '...'}
            {:else}
                {post.title}
            {/if}
				</h1>
			<p>{post.content}</p>
		</a>
			</div>
		</div>
	{/each}
	</div>
</div>
	
	<style>
	.title{
		color: white;
		text-align:left;
		font-size: 1.5em;
		line-height: 100%;
	}
	.gridIn{
		display: grid;
		grid-template-columns: repeat(2,1fr);
		gap: 2em;
		padding: 2em 0;
	}

	.gridOut{
		display: grid;
		grid-template-columns: repeat(2,1fr);
		gap: 4em;
		padding: 2em 0;
	}
	h1 {
		margin: 0;
		margin-top: auto;
		font-size: 1em;
		text-align: center;
	}
	img {
		height: 300px;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
	p{
		text-align: left;
		color: white;
	}
	a {
		text-decoration: none;
	}
</style>