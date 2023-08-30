<script lang="ts">
    import {selectedCategory} from '$lib/store'

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
            category: '의료정보',
        },

        {
            category: '국적취득',
        },
    ];

    function handleNavClick(category: string) {
    selectedCategory.set(category);
  }

</script>

<nav>
    <div class="container">
        <div>
            <ul>
                {#each navs as { category }}
                <li>
                    <button class:active={$selectedCategory === category} on:click={() => handleNavClick(category)}>{category}</button>
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
</style>
