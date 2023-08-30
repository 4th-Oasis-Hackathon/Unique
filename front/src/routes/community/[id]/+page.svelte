<script>
    import { onMount } from "svelte";
    import { fetchGetById } from "$lib/api";
    import { page } from "$app/stores";

    let id;
    let data;

    onMount(async () => {
        id = $page.params.id;
        data = await fetchGetById(id);
        console.log(data);
    });
</script>
    <div class="container">
        <a href="/community">
            <img src="/images/out.png" alt="exit" class="out">
        </a>
        <div class="inner">
            <h1>{data?.title || 'Loading...'}</h1>
            <p class="author">작성자: {data?.author || 'Loading...'}, {data?.created_at || 'Loading...'}</p>
            <div class="content">
                <p>{data?.content || 'Loading...'}</p>
                <img src={data?.files?.[0] || '/images/default.png'} alt="Content image" class="content-image">
            </div>
            <div class="bottom">
                <div class="bottom">
                    <img class="like-text" src="/images/like.png" alt="좋아요">
                </div>
                
                <div class="bottom">
                    <img class="like" src="/images/report.png" alt="신고">
                </div>
            </div>
            <div class="comment">
                <img class="com" src="/images/comment.png" alt="댓글">
            </div>
        </div>
    </div>
    

<style>
     .author {
        border-bottom: 1px solid white;
        padding-bottom: 10px;
        margin-bottom: 10px;
        width: 100%;
    }
    .inner {
        width: 80%;
        margin: 3em 10em;
    }
    .out {
        top: 1em; /* 이 부분 추가 */
        left: 1em;
        width: 3em;
        height: 3em;
        margin-top: 1em;
        margin-left: 1em;
        background-color: white;
        position: absolute;
    }
    .container {
        position: relative;
        border: 1em solid black;
        margin-top: 3em;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        color: white;
        font-size: 3em;
    }
    p {
        color: white;
        font-size: 1em;
    }
    .content-image {
        height: auto;
        margin-top: 10px;
    }
    .like {

        height: 24px; /* 이미지 높이 */
        width: auto; /* 비율 유지 */
        background-color: white;
    }
    .bottom {
        display: inline-flex;
        border: 0.3em solid white;
        border-radius: 0.5em;
        background-color: white;
    }
    .like-text {
        line-height: 24px; /* 텍스트 높이를 이미지 높이와 같게 설정 */
        color: black;
    }
    .com {
        background-color:white;
    }
    /* .content {
        height: 20vh;
        
    } */

</style>
