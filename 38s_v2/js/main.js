
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
        if($(this).scrollTop() >= 40 && $(this).innerWidth() > 1020) {
        $('.header .top_line').addClass('touch'); }
        else { 
            $('.header .top_line').removeClass('touch'); }
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

	//Показать обрезанное содержимое блоков
	$('.btn.show_content').click(function(){
		$(this).hide();
		$(this).parent().addClass('show_full');
	});

	//Показать-спрятать меню навигации
	$('.header .top_line .sh_menu').click(function(){
		$(this).toggleClass('active');
		$(this).parent().find('.m_links').toggleClass('active');
	});

	//Показать скрытый текст в номерах
	$('.aparts_result .ar_item .link.show_all').click(function(){
	    $(this).parent().next('.ari_info').toggle(100);
	    $(this).text( $(this).text() == 'Показать описание...' ? 'Свернуть описание...' : 'Показать описание...' );
	});

	/* Последовательная анимация

	    $(function() {
	      $('.').each(function(i) {
	      $(this).delay((i++) * 500).fadeTo(1000, 1); })
	    });
	*/


});