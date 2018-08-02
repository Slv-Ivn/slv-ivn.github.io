

$(document).ready(function(){



//Подключение SVG-иконок

    $('#svg_box').load('img/all_svg.svg');

    $(window).scroll(function(){
        if($(this).scrollTop() >= 500){
        $('.header').addClass('fixed');}
        else { 
            $('.header').removeClass('fixed'); }
    });

    $('[data-fancybox="mod_win"]').fancybox({
        touch: false,
        arrows: false,
        infobar: false,
        keyboard: false,
    });


});



