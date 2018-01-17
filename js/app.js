let sliderValTop = 1;
let sliderValMiddle = 0;
let sliderValBottom = 0;

$(document).ready(function(){
    

    $(".bottom").scrollLeft(1024);
   

//прокрутка экрана
//инициализация свайпов
$(".wrapper").swipe( {
        swipeUp:upSwipe,
        swipeDown:downSwipe,
        threshold:50
});

//анимация прокрутки и пагинация
function upSwipe(event){
    let $window = $(window);
    let top = $window.scrollTop()+768;
    if (top == 768){
        $('.pagination-circle-active:eq(0)').fadeOut();
        $('.pagination-circle-active:eq(1)').fadeIn();
        $('.next').hide();
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
        $('.next').show();
    }
        $('body,html').animate({scrollTop: top}, 500);
}

    
//    работа с ползунком
   $(document).on('input', '#slider', function() {
        let sliderVal = $("#slider").val();
        if ((sliderVal > 74) && (sliderValTop == 0)) {
            $(".bottom").animate({scrollLeft: '2060'}, 400);
            console.log('на 3 экран');
            sliderValTop = 1;
            sliderValMiddle = 0;
        } 
       else if ((sliderVal > 25) && (sliderVal < 75) && (sliderValMiddle == 0)) {
            $(".bottom").animate({scrollLeft: '1032'}, 400);
            console.log('на 2 экран');
            sliderValMiddle = 1;
            sliderValTop = 0;
            sliderValBottom = 0;
        } else if ((sliderVal < 25) && (sliderValBottom == 0)) {
            $(".bottom").animate({scrollLeft: '0'}, 400);
            console.log('на 1 экран');
            sliderValMiddle = 0;
            sliderValBottom = 1;
        }
    });
    
    
//    оно не работает x_X 
//   $('input').change(function() {
//    console.log('Change: ' + $(this).val())
//  });
    
    
});