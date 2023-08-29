<script>
    async function handleFileChange(event) {
      const file = event.target.files[0];
      
      // 파일 업로드를 위한 작업 수행
      // API 호출 등의 로직을 추가하면 됩니다.
    }
  </script>
  
  <input type="file" accept="image/*" on:change={handleFileChange} />