

$(document).ready(function(){



//Подключение SVG-иконок

    $('#svg_box').load('img/all_svg.svg');

    $(window).scroll(function(){
        if($(this).scrollTop() >= 500){
        $('.header').addClass('fixed');
        $('.to_top').addClass('fixed'); }
        else { 
            $('.header').removeClass('fixed');
            $('.to_top').removeClass('fixed'); }
    });


    $('.to_top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });


    $('.gallery').on('mobile_gallery', function(){
        $('.gallery .g_space.scrollyeah .image_link').unwrap('.image_box');
    });

    $(window).on('load resize', function(){
        var win = $(this);
        if (win.width() < 842) { $('.gallery .g_space').addClass('scrollyeah'); }
        // else { $('.gallery .g_space').removeClass('scrollyeah'); }
        $('.gallery').trigger('mobile_gallery');
        $('.scrollyeah').scrollyeah(); 
    });

    $('.menu .menu_icon').click(function(){
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('visible');
    });


    $('[data-fancybox="mod_win"]').fancybox({
        touch: false,
        arrows: false,
        infobar: false,
        keyboard: false,
    });


});



