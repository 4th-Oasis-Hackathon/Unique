<script lang="ts">
	import Community from './main/community.svelte';
	import Footer from './main/footer.svelte';
	import Info from './main/info.svelte';
	import Intro from './main/intro.svelte';
	import Meeting from './main/meeting.svelte';
	export let data;
	
</script>

<Intro />
<Info {data}/>
<Community {data}/>
<Meeting />
<Footer />


