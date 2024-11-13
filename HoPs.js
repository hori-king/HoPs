//リスト内のOTHERを押したとき
document.querySelector('.other_list').addEventListener('click',function(){
    document.querySelector('.gray_display').classList.toggle('active'); //背景の色を変える

    //横幅が650pxより大きいときOTHERを押すと
    if(window.matchMedia('(min-width: 650px)').matches){
        document.querySelector('.OTHER_list').classList.toggle('active'); //リストが出てくる
    }
});

// バツ印を押したとき
document.querySelector('.other_batu').addEventListener('click',function(){
    document.querySelector('.active').classList.toggle('active'); //リストを閉じる 
    document.querySelector('.gray_display').classList.toggle('active');
});

//ハンバーガメニュー、リスト以外の場所を押したとき閉じる
document.querySelector('.gray_display').addEventListener('click',function(){
    this.classList.toggle('active'); //グレーのところ押したら
    if(window.matchMedia('(min-width: 650px)').matches){
        document.querySelector('.OTHER_list').classList.toggle('active'); //リストが出てくる
    }else{
        document.querySelector('.active').classList.toggle('active'); //リストを閉じる
    }
});
