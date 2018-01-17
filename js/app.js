

$(document).ready(function(){

    $(".bottom").scrollLeft(2048);
   

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
//   $(document).on('input', '#slider', function() {
//        console.log($("#slider").val());
//        let sliderValue = $("#slider").val();
//        if (sliderValue > 75){
//            $(".bottom").animate({scrollLeft: '+=2048'}, 500);
//            $("#slider").val(100);
//        }
//    });
    
   $('input').change(function() {
    console.log('Change: ' + $(this).val())
       alert('asdasd');
  });
    
    
});