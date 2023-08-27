<script>
	import { page } from '$app/stores';

	const homeUrl = "/";
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
		<a href={homeUrl} class="logo">
			<img src="/images/logo.png" alt="logo" />	
		</a>
		<div>
			<ul>
				{#each navs as { title, href }}
					<li>
						<a {href} class:active={routeId == href} {title}>{title}</a>
					</li>
				{/each}
			</ul>
		</div>
		<ul class="login">
			<li>
				<a href="/auth/login">로그인</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	img {
		height: 70px;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
	nav {
		border: black 1px solid;
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
		color: white;
		text-decoration: none;
	}
	.active {
		color: white;
	}
</style>
