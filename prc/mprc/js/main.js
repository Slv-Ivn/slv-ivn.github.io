

$(document).ready(function(){



//Подключение SVG-иконок

    $('#svg_icons').load('img/all_icons.svg');


//Топ-бар — поиск и меню

    $('.header .srch, .header .menu, .sidebar .title').click(function(){
        $(this).toggleClass('active');
    });

    $('.header .srch').on('click', function(){
        $('.search_block').toggleClass('active');
        setTimeout(function() { $('.search_block.active .input.search').focus() }, 420);
    });

    $('.header .menu').click(function(){
        $('body').toggleClass('ovh');
        $('.sidebar, #overlay').toggleClass('active');
    });


//Анонс

	$('.annonce .uni_close').on('click', function(){
        $('.annonce').animate({left: '-=500px', opacity: 'hide'}, 300);
    });


//Удаление картинок, видео, файлов

    $('.img_box .del').on('click', function(){
        $(this).parent('.img_box').animate({left: '-=500px', opacity: 'hide'}, 300);
    });

    $('.files_list .del').on('click', function(){
        $(this).parent('.row').animate({left: '-=500px', opacity: 'hide'}, 300);
    });



//Показ дополнительного контента в блоках

    $('.mini_item .uni_show, .item .uni_show, .item_view .uni_show').click(function(){
        $(this).toggleClass('active');
        $(this).parent('.extra').toggleClass('active');
    });

    $('.card .uni_show').click(function(){
        $(this).toggleClass('active');
        $(this).prev('.card_content').toggleClass('active');
        $(this).next('.hide_menu').toggleClass('active');
        $('.msg:last-child').show(0);
    });

    $('.show_stand_i').click(function(){
        $(this).toggleClass('active');
        $('.stand_i').toggleClass('none');
    });


//Каталог

    $('#goods_rubrics, #goods_regions, #firms_regions').hide(0)
    $('.tabs .right .link').click(function(){
        var tab_id = $(this).attr('rel');
        $('.tabs .right .link').removeClass('active');
        $(this).addClass('active');
        $('.items.categories').hide(0);
        $("#"+tab_id).show(0);
    });

    $('.tabs .left .link').click(function(){
        $('.tabs .left .link').removeClass('active');
        $(this).addClass('active');
    });

    $('.tabs .ch_firms').click(function(){
        $('.tabs .ch_category').attr('rel','firms_rubrics').trigger('click');
        $('.tabs .ch_regions').attr('rel','firms_regions');
    });

    $('.tabs .ch_goods').click(function(){
        $('.tabs .ch_category').attr('rel','goods_rubrics').trigger('click');
        $('.tabs .ch_regions').attr('rel','goods_regions');
    });


//Модальные окна

    $('.launch').click(function(){ //Блокировка прокрутки
        $('body').addClass('ovh');
        $('.modal_space, #overlay').addClass('active');
    });

    $('.launch.write_msg').click(function(){ //Написать комментарий
        $('.mod_box.add_msg').show(0);
        $('.msg .uni_show, .msg .hide_menu').removeClass('active');
    });

    $('.launch.news_rubrics').click(function(){ //Выбор рубрики
        $('.mod_box.news_rubrics').show(0);
    });

    $('.launch.items_filter').click(function(){ //Фильтр
        $('.mod_box.items_filter').show(0);
    });

    $('.launch.map_filter').click(function(){ //Фильтр карты
        $('.mod_box.map_filter').show(0);
    });

    $('.launch.items_service').click(function(){ //Платные услуги
        $('.mod_box.items_service').show(0);
    });

    $('.launch.item_rating').click(function(){ //Рейтинг
        $('.mod_box.item_rating').show(0);
    });

    $('.launch.order_item').click(function(){ //Заказ продукции
        $('.mod_box.order_item').show(0);
    });

    $('.launch.add_cash').click(function(){ //Пополнение баланса
        $('.mod_box.add_cash').show(0);
    });


    $('.modal_space .uni_close').click(function(){ //Закрытие
        $('#overlay, .modal_space').removeClass('active');
        $('body').removeClass('ovh');
        $('.mod_box').delay(400).hide(0);
    });



/* Последовательная анимация

    $(function() {
      $('.').each(function(i) {
      $(this).delay((i++) * 500).fadeTo(1000, 1); })
    });
*/


});



