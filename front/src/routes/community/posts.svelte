<script lang="ts">
	// import { getAllPosts } from '$lib/api';

    // export let data;

	// let {posts} = data;

    let selectedCategory = '중고장터';

    const navs = [
        {
            category: '생활정보',
        },

        {
            category: '행사정보',
        },

        {
            category: '중고장터',
        },

        {
            category: '의료장터',
        },

        {
            category: '국적취득',
        },
    ];

    // async function loadPosts() {
    //     posts = await getAllPosts('suncheon', selectedCategory);
    // }

    function handleFloatingButtonClick() {
    // 여기에 플로팅 버튼을 눌렀을 때 이동할 링크를 설정합니다.
    const link = '/edit'; // 예시로 '/글쓰기'라는 경로를 사용하였습니다.
    window.location.href = link;
  }

    function handleNavClick(category: string) {
    selectedCategory = category;
    // loadPosts();
  }

</script>

<nav>
    <div class="container">
        <div>
            <ul>
                {#each navs as { category }}
                <li>
                    <button class:active={selectedCategory === category} on:click={() => handleNavClick(category)}>{category}</button>
                </li>
                {/each}
            </ul>
        </div>
        <div>
            <ul>
                <li>
                    <input type="text" placeholder="원하는 내용을 검색 해보세요">
                </li>
            </ul>
        </div>
    </div>   
</nav>


<button class="floating-button" on:click={handleFloatingButtonClick}>글쓰기</button>

<!-- <div class="container">
    <div class="grid">
        {#each posts as post}
		<div>
			<img src="images/logo.png" alt="{post.title}">
			<p>{post.title}</p>
		</div>
	{/each}
    </div>
</div> -->


    

<style>
	nav {
        margin-top: 5%;
		/* padding: 1em; */
		color: rgba(255, 255, 255, 1);
	}
	.container {
		display: flex;
		align-items: center;
        justify-content: space-between;
	}
	ul {
		display: flex;
		list-style: none;
		margin: 0;
		margin-left: -1em;
		font-size: 3em;
        
	}
    button {
        display: flex;
        background-color: black;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 0.5em;
        padding: 0.8em;
    }
	.active {
		color: #D9EDA0;
	}
    input{
        margin: auto;
        display: flex;
        width: 200%;
        height: 1vw;
        border: none;
        border-radius: 10px;
        padding: 0.8em;
        font-size: 0.5em;
        box-sizing: border-box;
        background-color:  #B6B6B6;
        color: #7F7F7F;
    }

    .floating-button {
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 100px;
    right: 100px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
  }
  .floating-button:hover {
    background-color: #0056b3; /* 마우스 호버 시 배경색 변경 */
  }

  /* .grid {
    margin-top: 50px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
		padding: 2em 0;
	} */
</style>
