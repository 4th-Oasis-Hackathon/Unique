<script lang="ts">
    import { page } from '$app/stores';
    import Header from './header.svelte'

    const navs = [
        {
            title: '전체',
            href: '/info'
        },

        {
            title: '중고장터',
            href: '/edu'
        },

        {
            title: '생활정보',
            href: '/community'
        },
    ];
    $: routeId = $page.route.id;

</script>

<Header />
<nav>
    <div class="container">
        <div>

            <ul>
                {#each navs as { title, href }}
                <li>
                    <a {href} class:active={routeId == href} {title}>{title}</a>
                </li>
                {/each}
            </ul>
            
        </div>   
    </div>
</nav>
    

<style>
	nav {
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
	.active {
		color: white;
	}
</style>
