<script lang="ts">
	export let data;

	let {posts} = data;

</script>

<div class="info">
	<h1>우리 정보</h1>
	<h2>우리정보 탭 내용 소개 2줄</h2>
	<h2>우리정보 탭 내용 소개 2줄</h2>
</div>

<div class="container">
	<div class="grid">
	{#each posts as post}
		<div>
			<img src="images/logo.png" alt="{post.title}">
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
		font-size: 1em;
		text-align: center;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
		padding: 2em 0;
	}
	img {
		height: 200px;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
	p{
		text-align: center;
		font-size: 1.5em;
		color: white;
	}
    h2 {
		margin: 0;
		margin-top: 0.8em;
		font-size: 3em;
		text-align: center;
	}
</style>