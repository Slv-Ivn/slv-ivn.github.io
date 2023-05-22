
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

    //Меню в шапке
	$(window).scroll(function(){
        if($(this).scrollTop() >= 640 && $(this)) {
        $('.header .top_line').addClass('touch'); }
        else { 
            $('.header .top_line').removeClass('touch'); }
    });

    //Кнопка подбора номера в меню
    $(window).scroll(function(){
        if($(this).scrollTop() >= 640) {
        $('.header .top_line .to_search').addClass('active'); }
        else { 
            $('.header .top_line .to_search').removeClass('active'); }
    });


    //Выбор даты в калькуляторе
    $.fn.datepicker.setDefaults({
        language: 'ru-RU',
        format: 'dd.mm.YYYY',
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        weekStart: 1,
        offset: '4',
    });

    $('form.as_form').ready(function(){
        $('input[name="arrival_d"]').datepicker({
            autoHide: true,
            startDate: '<?=date("d.m.Y")?>',
            trigger: $('input[name="arrival_d"]').parent()
        }).on('pick.datepicker', function(e){
            $('input[name="leave_d"]').datepicker('setStartDate', e.date)
            if($('input[name="leave_d"]').datepicker('getDate') < e.date || $('input[name="leave_d"]').val().length < 5 || $('input[name="leave_d"]').val().length > 10){
                $('input[name="leave_d"]').datepicker('setDate', e.date);
            }
        });

        $('input[name="leave_d"]').datepicker({
        	autoHide: true,
        	startDate: '<?=date("d.m.Y")?>',
        	trigger: $('input[name="leave_d"]').parent()
        });

     });

    //Показать скрытое содержимое в блоке об Усадьбе
    $('.fp_content .about_38s .text .link.show_all').click(function(){
        $(this).hide();
        $(this).parent().find('p.hidden').removeClass('hidden');
    });

	//Показать обрезанное содержимое блоков отзывов
	$('.visitor_review .vr_area .link.show_all').click(function(){
		$(this).hide();
		$(this).parent().addClass('show_full');
	});

	//Показать-спрятать меню навигации
	$('.header .top_line .sh_menu').click(function(){
		$(this).toggleClass('active');
		$(this).parent().find('.m_links').toggleClass('active');
	});

	//Показать скрытый текст в номерах
	$('.aparts_result .ar_item .link.show_hide').click(function(){
	    $(this).text( $(this).text() == 'Показать описание номера •••' ? 'Свернуть описание •••' : 'Показать описание номера •••' );
        $(this).prev('.visibility_block').toggleClass('hidden');
	});

    //Форма бронирования
    $('.mod_win._order_apart .stage1 .btn.green').click(function(){
        $('.mod_win._order_apart').find('.loader').addClass('active');
        setTimeout(function() { 
                $('.mod_win._order_apart').find('.loader').removeClass('active');
            }, 2500);
        $('.mod_win._order_apart').find('.stage1').addClass('hidden');
        $('.mod_win._order_apart').find('.stage2').removeClass('hidden');
    });

    //Показать или скрыть ответ на вопрос в FAQ
    $('.faq .faq_box .faq_items .faq_item').click(function(){
        $(this).toggleClass('full');
    });

   /* //Оплата картой
    $('.card_number').payment('formatCardNumber');
    $('.card_expires').payment('formatCardExpiry');
    $('.card_code').payment('formatCardCVC');

    $('.mod_win._payment_transfer .form_switcher .fs_item').click(function(){
        $('.mod_win._payment_transfer .form_switcher .fs_item').toggleClass('active');
        $('.mod_win._payment_transfer form').toggleClass('active');
    });

	/* Последовательная анимация

	    $(function() {
	      $('.').each(function(i) {
	      $(this).delay((i++) * 500).fadeTo(1000, 1); })
	    });
	*/


});