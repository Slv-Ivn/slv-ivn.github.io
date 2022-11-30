
$(document).ready(function(){


	//Фансибокс-оболочка
	Fancybox.bind("[data-fancybox]", {
		autoFocus: false,
	});


	//Кнопка вернуться наверх
	$(window).scroll(function(){
        if($(this).scrollTop() >= 480){
        $('.to_top').addClass('fixed'); }
        else { 
            $('.to_top').removeClass('fixed'); }
    });
	$('.to_top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });

    //Плавающая шапка
	$(window).scroll(function(){
        if($(this).scrollTop() >= 480 && $(this).innerWidth() > 1020) {
        $('.header').addClass('fixed');
        $('body').css({'paddingTop' : '216px'}); }
        else { 
            $('.header').removeClass('fixed');
            $('body').css({'paddingTop' : '0'}); }
    });


	//Показать обрезанное содержимое блоков
	$('.btn.show_content').click(function(){
		$(this).hide();
		$(this).parent().addClass('show_full');
	});

	//Показать-спрятать меню навигации
	$('.header .sh_menu').click(function(){
		$(this).toggleClass('active');
		$(this).parent().find('.header_navigation').toggleClass('active');
	});


	/* Последовательная анимация

	    $(function() {
	      $('.').each(function(i) {
	      $(this).delay((i++) * 500).fadeTo(1000, 1); })
	    });
	*/


});