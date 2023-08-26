<div class="grid">
	<div class="edu">
		<h1>우리 교육</h1>
		<h2>우리교육 내용 소개</h2>
		<h2>우리교육 내용 소개</h2>
		<h3>우리교육 세부내용 소개 3줄</h3>
		<h3>우리교육 세부내용 소개 3줄</h3>
		<h3>우리교육 세부내용 소개 3줄</h3>
		<grid />
	</div>

	<div>
		<img src="images/edu.png" alt="edu">
	</div>
</div>
	
	<style>
	.grid{
		display: grid;
		grid-template-columns: repeat(2,1fr);
		gap: 2em;
		padding: 2em 0;
	}
	.edu {
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
		margin-top: 0.8em;
		margin-bottom: 1em;
		font-size: 3em;
		text-align: center;
	}
	h3 {
		margin: 0;
		margin-top: 1em;
		text-align: center;
	}
	img {
		height: 600px;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>