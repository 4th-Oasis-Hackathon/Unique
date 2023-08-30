<script>
	import { enhance } from "$app/forms";

    let input;
    let container;
    let image;
    let placeholder;
	let showImage = false;



  function onChange() {
    const file = input.files[0];
		
    if (file) {
			showImage = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        image.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(file);
			
			return;
    } 
		showImage = false; 
  }
</script>

<div class="container">
    <form method="post" use:enhance enctype="multipart/form-data">
        <div class="inner">
            <select name="category", id="category">
                <option value="">분류를 선택해주세요</option>
                <option value="생활정보",>생활정보</option>
                <option value="행사정보">행사정보</option>
                <option value="중고장터">중고장터</option>
                <option value="의료정보">의료정보</option>
                <option value="국적취득">국적취득</option>
            </select>
            
            <div class="inputBox">
                <textarea class="title" name="title" id="title" placeholder="제목을 입력해주세요"></textarea>
            </div>
            <div class="inputBox" bind:this={container}>
                <textarea class="content" name="content" id="content"   placeholder="내용을 입력해주세요"></textarea>
            </div>

            
            <div class='bottom'>
                <div class="form">
                    <button class="exit">
                        나가기
                    </button>
                    <div class="right-buttons">
                        <button class="load">
                            임시저장
                        </button>
                        <button type="submit" class="save">
                            작성완료
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <input bind:this={input}
	on:change={onChange}
  type="file" id="image" name="image" class="floating-button"/>
    </form>
</div>

<style>
    .container{
        display: flex;
        margin-top: 5%;
        border: 10px;
        background-color: #141414;
        height: 130vh;
        width: 180vw;
        justify-content: center;
    }
    select {
        height: 3.5vh;
        width: 20vw;
        background-color: #141414;
        border-color: #B6B6B6;
        color : #B6B6B6;
        border-radius: 0.5em;
        font-size: 1.3em;
        padding: 0.4em;
        margin-left: 4.8em;
    }

    .inner {
        height: 100%;
        margin-top: 130px;
    }
    .inputBox {
        display: flex;
        margin-top: 40px;
        justify-content: center;
    }
    .title {
        background-color: #141414;
        border: none;
        border-bottom: 2px solid #7F7F7F;
        width: 48vw;
        font-size: 2.7em;
        padding: 0.3em;
        color: #FFFFFF;
    }

    .content {
        background-color: #141414;
        border: none;
        width: 48vw;
        height: 90vh;
        font-size: 1.6em;
        padding: 0.3em;
        color: #FFFFFF;
    }
    .title::placeholder,
    .content::placeholder {
        color: #FFFFFF; /* 원하는 색상으로 변경 */
    }
    .bottom {
        width: 57.3vw;
        background-color: #5A5A5A;
        justify-content: center;
        height: 8.8vh;
        margin: 1em;
    }
    .exit {
        font-size: 2em;
        border: none;
        background-color: #5A5A5A;
        color: white;  
        margin-top: 23px;
        margin-left: 10px;     
        cursor: pointer;
    }
    .load {
        font-size: 2em;
        margin-right: 30px;
        background-color: #5A5A5A;
        border: none;
        color: #B7E23F;
        margin-top: 23px;
        cursor: pointer;
    }
    .save {
        font-size: 2em;
        justify-self: end;
        background-color: #B7E23F;
        border-radius: 10%;
        margin-top: 23px;
        margin-right: 20px;
        padding: 0.3em;
        cursor: pointer;
    }
    .form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.right-buttons {
    display: flex;
    gap: 20px;
}

.floating-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #B7E23F;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
    opacity: 0;
    z-index: 1000;
}

.floating-button::before {
    content: "+";
    font-size: 24px;
    color: white;
}

    
</style>