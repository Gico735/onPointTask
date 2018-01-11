$(document).ready(function(){

//прокрутка экрана
//инициализация свайпов
$(".wrapper").swipe( {
        swipeUp:upSwipe,
        swipeDown:downSwipe,
        threshold:75
});

//анимация прокрутки и пагинация
function upSwipe(event){
    let $window = $(window);
    let top = $window.scrollTop()+768;
    if (top == 768){
        $('.pagination-circle-active:eq(0)').fadeOut();
        $('.pagination-circle-active:eq(1)').fadeIn();
    }
    else {
        $('.pagination-circle-active:eq(1)').fadeOut();
        $('.pagination-circle-active:eq(2)').fadeIn();
    }
        $('body,html').animate({scrollTop: top}, 500);
        
}
function downSwipe(event){
    let $window = $(window);
    let top = $window.scrollTop()-768;
    if (top == 768){
        $('.pagination-circle-active:eq(2)').fadeOut();
        $('.pagination-circle-active:eq(1)').fadeIn();
    }
    else {
        $('.pagination-circle-active:eq(1)').fadeOut();
        $('.pagination-circle-active:eq(0)').fadeIn();
    }
        $('body,html').animate({scrollTop: top}, 500);
}



 $( "#slider" ).slider({
				value : 0,//Значение, которое будет выставлено слайдеру при загрузке
				min : -150,//Минимально возможное значение на ползунке
				max : 150,//Максимально возможное значение на ползунке
				step : 1,//Шаг, с которым будет двигаться ползунок
				create: function( event, ui ) {
					val = $( "#slider" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
					$( "#contentSlider" ).html( val );//Заполняем этим значением элемент с id contentSlider
				},
            slide: function( event, ui ) {
				$( "#contentSlider" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider
 
            }
        });

    
});