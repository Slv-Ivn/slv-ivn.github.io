
$(document).ready(function(){


	//Подключение SVG-иконок
	$('#svg_icons').load('img/all_icons.svg');


	//Стилизация селектов
	$('select').bselect();

	//Фансибокс-оболочка
	$('[data-fancybox').fancybox({
		touch: false
	});

	//Кнопка вернуться наверх
	$(window).scroll(function(){
        if($(this).scrollTop() >= 500){
        $('.to_top').addClass('fixed'); }
        else { 
            $('.to_top').removeClass('fixed'); }
    });
	$('.to_top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
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




	/* Последовательная анимация

	    $(function() {
	      $('.').each(function(i) {
	      $(this).delay((i++) * 500).fadeTo(1000, 1); })
	    });
	*/


});