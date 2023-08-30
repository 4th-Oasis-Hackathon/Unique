<script lang="ts">
	import {getAllPosts} from '$lib/api'
	import {selectedCategory} from '$lib/store'

	async function boardByposts() {
		const data = await getAllPosts($selectedCategory);
		return data.posts
	}
	let posts: any[] = [];

    (async () => {
        posts = await boardByposts();
    })();

	
</script>


<div class="container">
	<div class="gridOut">
	{#each posts as post}
		<div class='gridIn'>
			<div>
				<img src="images/logo.png" alt="{post.title}">
			</div>
			<div>
				<h1 class="title">
            {#if post.title.length > 25}
                {post.title.slice(0, 25) + '...'}
            {:else}
                {post.title}
            {/if}
				</h1>
			<p>{post.content}</p>
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
</style>