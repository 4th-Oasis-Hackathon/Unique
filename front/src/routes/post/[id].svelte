<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { fetchGetById } from '$lib/api';

    let id:string;
    let post: any = null; 
  
    onMount(async () => { 
      id = $page.params.id;
      post = await fetchGetById(id); 
      console.log(post)
    });
  </script>
  
  {#if post}
    <h1>{post.title}</h1>
    <img src="/images/커뮤니티1.png" alt="{post.title}">
    <p>{post.content}</p>
  {/if}
  