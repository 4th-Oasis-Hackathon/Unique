<script>
    function handleFloatingButtonClick() {
    const link = '/edit'; 
    window.location.href = link;
  }
</script>


<button class="floating-button" on:click={handleFloatingButtonClick}>글쓰기</button>

<style>
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
</style>