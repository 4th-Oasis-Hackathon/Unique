<script>
	import { _, locale, isLoading, locales } from 'svelte-i18n';
	import { page } from '$app/stores';

	const homeUrl = "/";
	$: navs = [
		{
			title: $_('title.news'),
			href: '/info'
		},

		{
			title: $_('title.communication'),
			href: '/community'
		},

		{
			title: $_('title.traning'),
			href: '/meeting'
		}
	];
	$: routeId = $page.route.id;

</script>

<nav>
	<div class="container">
		<a href={homeUrl} class="logo">
			<img src="/images/logo.png" alt="logo" class="logoimg"/>
		</a>
		<div>
            {#if $isLoading}
                Please wait...
            {:else}
				<ul>
					{#each navs as { title, href }}
						<li>
							<a {href} class:active={routeId == href} {title}>{title}</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
		{#if $page.data.user}
		<div class="box">
			<ul class="login">
				<li>
					<img src="/images/alarm.png" alt="알람">
				</li>

				<li>
					<img src="/images/message.png" alt="메세지">
				</li>

				<li>
					<img src="/images/profile.png" alt="사용자 정보">
				</li>
			</ul>
		</div>
		{:else}
		<div class="box">
			<ul class="login">
				<li>
					<a href="/auth/login">로그인</a>
				</li>
			</ul>
		</div>
		{/if}
        <div>
            <select bind:value={$locale}>
                {#each $locales as locale}
                  <option value={locale}>{locale}</option>
                {/each}
            </select>
        </div>
	</div>
</nav>

<style>
	.logoimg {
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
		color: gray;
		text-decoration: none;
	}
	.active {
		color: white;
	}
	img {
		width: 35px;
		object-fit: cover;
		object-position: center;
	}
	.box {
		margin-left: 500px;
	}

    select {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    width: 200px;
  }

  option {
    padding: 8px;
    font-size: 16px;
  }
</style>
