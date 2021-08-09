
$(document).ready(function(){


	//Подключение SVG-иконок
	$('#svg_icons').load('img/all_icons.svg');


	//Стилизация селектов
	$('select').bselect();

	$('.imgs_slider').lightSlider({
	    gallery: true,
	    item: 1,
	    // loop: true,
	    slideMargin: 0,
	    thumbMargin: 10,
	    thumbItem: 5,
	    enableTouch: true
	});

	//Фансибокс-оболочка
	$('[data-fancybox').fancybox({
		touch: false
	});

	//Топ-бар — поиск и меню

    $('.header .rfi_srch, .header .rfi_menu').click(function(){
        $(this).toggleClass('active');
    });

    $('.header .rfi_srch').on('click', function(){
        $('.search_block').toggleClass('active');
        setTimeout(function() { $('.search_block.active .input').focus() }, 420);
    });

    $('.header .rfi_menu').click(function(){
        $('body').toggleClass('ovh');
        $('.nav_menu').toggleClass('active');
    });


	//Кнопка вернуться наверх
	$(window).scroll(function(){
        if($(this).scrollTop() >= 400){
        $('.to_top').addClass('fixed'); }
        else { 
            $('.to_top').removeClass('fixed'); }
    });
	$('.to_top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });

    //Плавающий поиск
	$(window).scroll(function(){
        if($(this).scrollTop() >= 400){
        $('.search_block').addClass('fixed'); }
        else { 
            $('.search_block').removeClass('fixed'); }
    });

	//Показать обрезанное содержимое блоков
	$('.btn.show_content').click(function(){
		$(this).hide();
		$(this).parent().addClass('show_full');
	});

	//Показ скрытых ссылок в каталоге на главной
	$('.main_catalog .show_links').click(function(){
        $(this).toggleClass("active").next().slideToggle(240)
	});

	//Выподающее меню каталога
	$('.nav_menu .nav_links .link_title.clh_firms').mouseover(function(){
        $('.nav_menu .catalog_list.firms').addClass('active');
    });
    $('.nav_menu .nav_links .link_title.clh_firms').mouseout(function(){
    	$('.nav_menu .catalog_list.firms').removeClass('active');
    });

    $('.nav_menu .nav_links .link_title.clh_products').mouseover(function(){
        $('.nav_menu .catalog_list.products').addClass('active');
    });
    $('.nav_menu .nav_links .link_title.clh_products').mouseout(function(){
    	$('.nav_menu .catalog_list.products').removeClass('active');
    });


	//Добавить в закладки (также убрать из закладок)
	$('.to_favorites').click(function(){
		$(this).toggleClass('added');
	});

	//Добавить в закладки (также убрать из закладок)
	$('.to_favorites.added.delete').click(function(){
		$(this).parents('.card_item').hide(300, function(){ $(this).remove();
		});
	});

	//Показать карту в каталогах
	$('.content .central .sort .sort_mark.show_map').click(function(){
		$(this).toggleClass('active');
		$('.content .central .catalog_map').toggleClass('active');
	});

	//Показать фильтр в каталоге на мобильной версии
	$('.central .sort .filter_call').click(function(){
        $('.content .sidebar .sb_block.filter').toggleClass('active')
    });

    $('.content .sidebar .sb_block.filter .uni_close').click(function(){
        $(this).parents('.sb_block.filter').toggleClass('active')
    });

    //Показать выбор рубрики в новостях на мобильной версии
	$('.central .rubrics_list_call').click(function(){
        $('.content .sidebar .sb_block.sb_news_rubric').toggleClass('active')
    });

    $('.content .sidebar .sb_block.sb_news_rubric .uni_close').click(function(){
        $(this).parents('.sb_block.sb_news_rubric').toggleClass('active')
    });

     //Показать меню в личном кабинете на мобильной версии
	$('.central .call_cabinet_menu').click(function(){
        $('.content .sidebar .sb_block.cabinet_links').toggleClass('active')
    });

    $('.content .sidebar .sb_block.cabinet_links .uni_close').click(function(){
        $(this).parents('.sb_block.cabinet_links').toggleClass('active')
    });

    //Модальное окно входа/регистрации
    $('.modwin.mw_sign_in .title span').click(function(){
    	$('.modwin.mw_sign_in .title span.active').removeClass('active');
    	$(this).addClass('active');
    	$('.modwin.mw_sign_in form').toggleClass('active');
    });


	$(function(){ //Слайдер в блоке «Приглагаем дилеров»

		var $first = $('.sb_block.offers .sbb_offer_item:first'),
			$last = $('.sb_block.offers .sbb_offer_item:last');

		$('.sb_block.offers .slide.next').click(function(){
			var $next,
				$selected = $('.sbb_offer_item.active');

			$next = $selected.next('.sbb_offer_item').length ? $selected.next('.sbb_offer_item') : $first;
			$selected.removeClass("active").hide();
			$next.addClass('active').show();
		});

		$('.sb_block.offers .slide.prev').click(function(){
			var $prev,
				$selected = $('.sbb_offer_item.active');

			$prev = $selected.prev('.sbb_offer_item').length ? $selected.prev('.sbb_offer_item') : $last;
			$selected.removeClass("active").hide();
			$prev.addClass('active').show();
		});
	});

	//Добавить в закладки (также убрать из закладок)
	$('.item_view .iv_conditions .iv_block_body .link').click(function(){
		$(this).text($(this).text() == 'Ознакомиться с условиями' ? 'Скрыть условия' : 'Ознакомиться с условиями');
		$(this).parents().next('.hide_text').slideToggle(80);
	});

	$('.iv_bottom .iv_about .tabs_header').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active')
      .closest('.iv_bottom .iv_about').find('.tab_content').removeClass('active').eq($(this).index()).addClass('active');
  	});

	//Модальное окно подключение платных услуг
    $('.modwin.mw_services_list .help_link').click(function(){
    	if($(this).text() == 'Показать описание'){ $(this).text('Скрыть описание');}
    	else{ $(this).text('Показать описание'); }
    	$(this).next('.help_text').toggleClass('active');
    });


	/* Последовательная анимация

	    $(function() {
	      $('.').each(function(i) {
	      $(this).delay((i++) * 500).fadeTo(1000, 1); })
	    });
	*/


});