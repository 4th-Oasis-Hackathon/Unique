<script lang="ts">
    export let size = "medium";
</script>

<button 
    class:small={size == "small"}
    class:medium={size == "medium"}
    {...$$restProps}
>
    <slot />
    
</button>

<style>
    button {
        width: 100%;
        border: none;
        border-radius: 0.5em;
        background-color: #B7E23F;
        color: white;
        padding: 0.5em;
        font-size: 1.2em;
        cursor: pointer;
        height: 3em;
    }
    .medium {
        padding: 0.5em;
    }
    .small {
        padding: 0.25em;
    }
</style>