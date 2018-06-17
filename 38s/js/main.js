

$(document).ready(function(){



//Подключение SVG-иконок

    $('#svg_box').load('img/all_svg.svg');

    $(window).scroll(function(){
        if($(this).scrollTop() >= 500){
        $('.header').addClass('fixed');}
        else { 
            $('.header').removeClass('fixed'); }
    });


//Заказать звонок

    $('.call').click(function(){
        $('.modal_windows, .mod_window.call_back').removeClass('active');
        $('.modal_windows, .mod_window.call_back').addClass('active');
    });

//Бронирование    

    $('.booking').click(function(){
        $('.modal_windows, .mod_window.fast_booking').removeClass('active');
        $('.modal_windows, .mod_window.fast_booking').addClass('active');
    });

    $('.calc_booking').click(function(){
        $('.modal_windows, .mod_window.order_booking').removeClass('active');
        $('.modal_windows, .mod_window.order_booking').addClass('active');
    });

//
    $('.menu .menu_show').click(function(){
        $(this).toggleClass('active');
        $('.menu, .menu li').toggleClass('visible');
    });


//Окна сообщений

    $('.fun .btn:nth-of-type(1)').click(function(){
        $('.modal_windows, .mod_window.uni_msg.good').removeClass('active');
        $('.modal_windows, .mod_window.uni_msg.good').addClass('active');
    });

    $('.fun .btn:nth-of-type(2)').click(function(){
        $('.modal_windows, .mod_window.uni_msg.error').removeClass('active');
        $('.modal_windows, .mod_window.uni_msg.error').addClass('active');
    });


//Закрытие модальных окон

    $('.mod_window .close').click(function(){
        $('.mod_window').removeClass('active');
        setTimeout(function() { $('.modal_windows').removeClass('active'); }, 250);
    });


/*    function scroll_action(target, add_class){
        var targetPos = $(target).offset().top;
        var winHeight = $(window).height();
        var scrollToElem = targetPos - winHeight;
        $(window).scroll(function(){
            var winScrollTop = $(this).scrollTop();
            if(winScrollTop > scrollToElem){
                $(target).addClass(add_class);
            }
        }); 
    }
    
    scroll_action('', '');
    scroll_action('.section.why_we', 'adding_class');*/


});



