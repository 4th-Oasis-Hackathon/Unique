<script lang="ts">
	import Footer from '../main/footer.svelte';
    import Header from './header.svelte'
	import Nav from './posts.svelte';
    import Posts from './community.svelte';

    export let data;

    
</script>

<Header />
<Nav />
<Posts {data}/>
<Footer />