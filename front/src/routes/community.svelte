<script lang="ts">
    const getPosts = async (region: string) => {
  	const url = `http://localhost:5500/posts?region=${region}`; 
  	const res = await fetch(url);
  	const data = await res.json();
  	return data.result.posts;
	}
</script>

<div class="community">
	<h1>커뮤니티</h1>
	<h2>커뮤니티 탭 내용 소개</h2>
	<h2>커뮤니티 탭 내용 소개</h2>
</div>

<div class="container">
	{#await getPosts('suncheon')}
		<p>Loading...</p>
	{:then posts}
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
	{/await}
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
	.community {
		padding: 5em 0;
		color: white;
		align-items: center;
	}
	h1 {
		margin: 0;
		margin-top: auto;
		font-size: 1em;
		text-align: center;
	}
	h2 {
		margin: 0;
		margin-top: 0.5em;
		font-size: 3em;
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