//リスト内のOTHERを押したとき
document.querySelector('.other_list').addEventListener('click',function(){
    document.querySelector('.gray_display').classList.toggle('active'); //背景の色を変える

    //横幅が650pxより大きいときOTHERを押すと
    if(window.matchMedia('(min-width: 650px)').matches){
        document.querySelector('.OTHER_list').classList.toggle('active'); //リストが出てくる
    }else{};  
});

// バツ印を押したとき
document.querySelector('.other_batu').addEventListener('click',function(){
    document.querySelector('.active').classList.toggle('active'); //リストを閉じる 
    document.querySelector('.gray_display').classList.toggle('active');
});

//ハンバーガメニュー、リスト以外の場所を押したとき閉じる
document.querySelector('.gray_display').addEventListener('click',function(){
    this.classList.toggle('active'); //グレーのところ押したら
    document.querySelector('.OTHER_list').classList.toggle('active'); //リストが出てくる
});

//ABOUT.htmlのときにリスト内のABOUTを押したとき
document.querySelector('.about_list').addEventListener('click',function(){
    hamburger.classList.toggle('active'); //ハンバーガーに戻る
    list.classList.toggle('active'); //リストを閉じる

    if(window.matchMedia('(max-width: 650px)').matches){
        gray.classList.toggle('active'); //背景の色を変える
    }else{};
});

//NEWS.htmlのときにリスト内のNEWSを押したとき
document.querySelector('.news_list').addEventListener('click',function(){
    hamburger.classList.toggle('active'); //ハンバーガーに戻る
    list.classList.toggle('active'); //リストを閉じる

    if(window.matchMedia('(max-width: 650px)').matches){
        gray.classList.toggle('active'); //背景の色を変える
    }else{};
});
