<script lang="ts">
    import Button from "$lib/button.svelte";

    let selectedRegion: string = '';

    function handleSelect(event: Event) {
        const target = event.target as HTMLSelectElement;
        selectedRegion = target.value;
}
</script>

<div class="container">
    <form method="post">
        <div class="grid">
            <img src="/images/auth.png" alt="사진" class="pe">
            <div class="right">
                <h1>회원가입</h1>
                <div class="form-group">
                    <select>
                        <option value="">언어를 선택하세요.</option>
                        <option value="Korean">한국어</option>
                        <option value="English">영어</option>
                    </select>
                </div>

                <div class="form-group">
                    <select on:change={handleSelect}>
                        <option value="">지역을 선택하세요.</option>
                        <option value="suncheon">순천</option>
                        <option value="seoul">서울</option>
                    </select>
                </div>

                <div class="form-group">
                    <input type="name" name="name" id="name" placeholder="이름을 입력하세요.">
                </div>

                <div class="form-group">
                    <input type="email" name="email" id="email" placeholder="이메일을 입력하세요.">
                </div>
                
                <div class="form-group">
                    <input type="password" name="password" id="password" placeholder="비밀번호를 입력하세요.">
                </div>

                <div class="form-group">
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="비밀번호를 확인하세요." >
                </div>
                
                <div class="form-group">
                    <Button type='submit'>회원가입하기</Button>
                </div>
                
                <div class="help">
                    <a href="/auth/login">
                        <p>이미 아이디가 있으신가요? <span>로그인</span></p>
                    </a>
                </div>

                <input type="hidden" name="selectedRegion" value={selectedRegion}>
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
    .pe {
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
        margin: 1em;
    }
    input,select {
        width: 100%;
        height: 2.5em;
        border: none;
        border-radius: 0.5em;
        padding: 0.5em;
        font-size: 1.2em;
        color: black;
        background-color: #F7FFE0;
        box-sizing: border-box;
    }
    input[type="email"]::placeholder, input[type="password"]::placeholder, input[type="name"]::placeholder, select{
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
    span {
        font-weight: bold;
    }

</style>