<script lang="ts">
    const year = new Date().getFullYear();
</script>

<footer>
    <div class="container">
        <div>
            <p>© {year} Woori. All rights reserved.</p>
            <img src="images/sns.png" alt="icon">
        </div>
    </div>
</footer>

<style>
    footer{
        padding: 3em 0;
        color: white;
    }

    img{
        margin-left: auto;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>