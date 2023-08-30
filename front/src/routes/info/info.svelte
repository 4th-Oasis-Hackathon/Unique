<script lang="ts">
	import {getAllPosts} from '$lib/api'
	async function boardByposts() {
		const data = await getAllPosts('국적취득정보');
		return data.posts
	}
	let posts: any[] = [];

    (async () => {
        posts = await boardByposts();
    })();

	console.log(posts)
	
</script>

<div class="info">
	<h1>💬 우리 정보</h1>
	<h2 class="bold">한국 생활을 위한 정보</h2>
	<h2>필요한 정보를 찾아보세요</h2>
</div>

<div class="container">
	<div class="grid">
	{#each posts as post}
		<div>
			<img src="images/국적취득정보.png" alt="{post.title}">
			<p>{post.title}</p>
		</div>
	{/each}
	</div>
</div>


<style>
    .info {
		padding: 5em 0;
		color: white;
		align-items: center;
	}
    h1 {
		margin: 0;
		margin-top: auto;
		font-size: 2em;
		text-align: center;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
		padding: 2em 0;
	}
	img {
		height: 700px;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
	p{
		text-align: center;
		font-size: 3em;
		color: white;
	}
    .bold {
		margin: 0;
		margin-top: 0.8em;
		font-size: 3em;
		text-align: center;
		font-weight: bold;
	}
	h2 {
		margin: 0;
		margin-top: 0.8em;
		font-size: 3em;
		text-align: center;
		font-weight: 400;
	}
</style>