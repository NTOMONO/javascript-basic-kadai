const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    // 2秒後に非同期処理を実行する
setTimeout(() => {
    text.textContent="ボタンをクリックしました";
  }, 2000);   
});