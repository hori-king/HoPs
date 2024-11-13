//ABOUT.htmlのときにリスト内のABOUTを押したとき
document.querySelector('.about_list').addEventListener('click',function(){
    document.querySelector('.hamburger').classList.toggle('active'); //ハンバーガーに戻る
    document.querySelector('.list').classList.toggle('active'); //リストを閉じる

    if(window.matchMedia('(max-width: 650px)').matches){
        document.querySelector('.gray_display').classList.toggle('active'); //背景の色を変える
    }else{};
});
