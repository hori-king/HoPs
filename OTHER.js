const list = document.querySelector('.list');
const hamburger = document.querySelector('.hamburger');
const gray = document.querySelector('.gray_display');
const target = document.querySelector('.OTHER');

//ハンバーガメニュー、リスト以外の場所を押したとき閉じる
gray.addEventListener('click',function(){
    this.classList.toggle('active'); //グレーのところ押したら
    hamburger.classList.toggle('active'); //ハンバーガーに戻る
    list.classList.toggle('active'); //リストを閉じる
});

//ハンバーガーメニュー
hamburger.addEventListener('click',function(){
    this.classList.toggle('active'); //バツ印になる
    list.classList.toggle('active'); //リストが出てくる
    gray.classList.toggle('active'); //背景の色を変える
});

//リスト内のOTHERを押したとき
document.querySelector('.other_list').addEventListener('click',function(){
    hamburger.classList.toggle('active'); //ハンバーガーに戻る
    list.classList.toggle('active'); //リストを閉じる

    target.scrollIntoView({block:'start'}); //OTHERとこまでスクロール

    if(window.matchMedia('(max-width: 650px)').matches){
        gray.classList.toggle('active'); //背景の色を変える
    }else{};
});

//フッターのOTHERを押したら移動する
document.querySelector('.other_list2').addEventListener('click',function(){
    target.scrollIntoView({block:'start'});
});
