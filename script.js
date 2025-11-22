// ボタン要素を取得
const button = document.querySelector('.btn');

// ボタンが見つかったら、クリックイベントを設定
if(button){
    button.addEventListener('click',function(){
        alert('ボタンがクリックされました!');
    });
}

//テキストを書き換える処理
const description = 
document.getElementById('description');

if(button && description){
    button.addEventListener('click',function(){
        description.textContent = 'ボタンがクリックされて、説明文が変更されました!'
    });
}

// ページ読み込み後にフェードイン
window.addEventListener('load',function(){
    const main = document.querySelector('main');
    if(main){
        main.classList.add('show');
    }
});

// ナビのリンクをスムーズスクロールさせる
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault(); // ガクッと飛ぶ動作を無効化
        const targetId = this.getAttribute('href'); // "#profile" など
        const targetElement = document.querySelector(targetId);

        if(targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
