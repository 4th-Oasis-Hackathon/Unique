<script>
	import { page } from '$app/stores';

	const navs = [
		{
			title: '우리정보',
			href: '/info'
		},

		{
			title: '우리교육',
			href: '/edu'
		},

		{
			title: '커뮤니티',
			href: '/community'
		},

		{
			title: '온라인 미팅',
			href: '/meeting'
		}
	];
	$: routeId = $page.route.id;
</script>

<nav>
	<div class="container">
		<a href="/" class="logo">Woorie</a>
		<div class="navList">
			<ul>
				{#each navs as { title, href }}
					<li>
						<a {href} class:active={routeId == href} {title}>{title}</a>
					</li>
				{/each}
			</ul>
		</div>
		<ul class="login">
			<input />
			<li>
				<a href="/login">로그인</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	.logo {
		color: white;
		font-size: 2em;
	}
	nav {
		background-color: black;
		padding: 1em;
		color: rgba(255, 255, 255, 1);
	}
	.container {
		display: flex;
		align-items: center;
	}
	ul {
		display: flex;
		list-style: none;
		margin: 0;
		margin-left: auto;
		font-size: 1.8em;
	}
	li {
		margin-right: 20px;
	}
	a {
		color: #aaa;
		text-decoration: none;
	}
	input {
		background-color: rgba(217, 217, 217, 0.30000001192092896);
		margin-right: 2em;
		border: none;
	}
	.active {
		color: white;
	}
</style>
