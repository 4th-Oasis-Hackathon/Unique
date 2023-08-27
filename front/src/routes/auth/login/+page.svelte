<script lang="ts">
	import Button from "$lib/button.svelte";


</script>

<div class="container">
    <form method="post">
        <div class="grid">
            <img src="/images/auth.png" alt="사진">
            <div class="right">
                <h1>로그인</h1>
                <div class="form-group">
                    <input type="email" name="eamil" id="email" placeholder="이메일을 입력하세요.">
                </div>
                
                <div class="form-group">
                    <input type="password" name="password" id="password" placeholder="비밀번호를 입력하세요.">
                </div>
                
                <div class="form-group">
                    <Button type='login'>로그인</Button>
                </div>
                
                <div class="help">
                    <a href="#">
                        <p>비밀번호를 잊으셨나요?</p>
                    </a>
                    
                    <a href="/auth/signup">
                        <p>계정이 없으신가요? <span>회원가입</span></p> 
                    </a>
                </div>
                
                <p class="sns">
                    SNS 계정으로 로그인
                </p>

                <img src="/images/loginsns.png" alt="sns" class="snsimage">
            </div>
        </div>
    </div>
    
    <style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        max-width: 2200px;
        background-color: rgba(39,39,39,1);
    }
    .grid{
        display: grid;
		grid-template-columns: repeat(2,1fr);
		gap: 15em;
        max-width: 100%;
        margin-top: 200px;
        height: 900px;
    }
    h1 {
        color: white;
        font-size: 3em;
    }
    img {
        width: 900px;
        height: 605px;
		object-fit: cover;
		object-position: center;
	}
    .right {
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    div {
        width: 100%;
    }
    .form-group {
        margin: 1em 0;
    }
    input {
        width: 100%;
        height: 3em;
        border: none;
        border-radius: 0.5em;
        padding: 0.5em;
        font-size: 1.2em;
        color: black;
        background-color: #F7FFE0;
        box-sizing: border-box;
    }
    input[type="email"]::placeholder, input[type="password"]::placeholder {
    color: #98C029;
}
    form {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .help {
        width: 100%;
        margin-bottom: 25px;
    }
    a {
        text-decoration: none;
        color: #B0B0B0;
        text-align: end;
    }
    .sns {
        color: #B5B5B5;
        text-align: center;
        font-size: 1.2em;
    }
    .snsimage {
        width: 13%;
        object-fit: cover;
		object-position: center;
        align-self: center;
    }
    span {
        font-weight: bold;
    }
</style>