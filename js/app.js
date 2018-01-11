//$(document).ready(function(){
//инициализация свайпов
$(".wrapper").swipe( {
        swipeUp:upSwipe,
        swipeDown:downSwipe,
        threshold:75
});

//анимация прокрутки
function upSwipe(event){
    let $window = $(window);
    let top = $window.scrollTop()+768;
        $('body,html').animate({scrollTop: top}, 500);
    
}
function downSwipe(event){
    let $window = $(window);
    let top = $window.scrollTop()-768;
        $('body,html').animate({scrollTop: top}, 500);
}


//});