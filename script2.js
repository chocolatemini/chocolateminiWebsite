// --- ① ページが開かれた時の処理（セーブデータを読み込む） ---

// ブラウザの保存場所から「myColor」という名前のデータを引っ張り出す
const savedColor = localStorage.getItem("myColor");

// もし保存されたデータ（色）があれば、それを背景色に設定する
if (savedColor !== null) {
    document.body.style.backgroundColor = savedColor;
}


// --- ② ボタンが押された時の処理（色を変えて、セーブする） ---

const myButton2 = document.getElementById("color-btn2");

// ※この if文 は、ボタンが存在しないページでエラーが起きるのを防ぐおまじないです
if (myButton2 !== null) {
    myButton2.addEventListener("click", function() {
        
        const newColor = null; // 変更したい色（オレンジ色）

        // 1. 画面の色を変える
        document.body.style.backgroundColor = newColor;
        
        // 2. 変わった色を「myColor」という名前でブラウザにセーブ（保存）する！
        localStorage.setItem("myColor", newColor);
        
        alert("色を変更して、ブラウザに保存しました！");
    });
}