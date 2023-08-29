<script lang="ts">
	import Community from './community/community.svelte';
	import Footer from './main/footer.svelte';
	import Info from './info/info.svelte';
	import Intro from './main/intro.svelte';
	import Meeting from './meeting/meeting.svelte';
	export let data;
	
</script>

<Intro />
<Info {data}/>
<Community {data}/>
<Meeting />
<Footer />


