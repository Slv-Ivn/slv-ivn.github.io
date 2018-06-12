/* All JS */

$(document).ready(function(){

    $(".chosen-select").chosen();

    $('.tipso').tipso({
        tooltipHover: true
    });
    $('.tip').tipr();


    //Каталог
    $('#items_regions, #firms_rubrics, #firms_regions').hide()
    $('.catalog .sort a').click(function(){
        var tab_id = $(this).attr('rel');

        $('.catalog .sort a').removeClass('active');
        $('.columns').hide();

        $(this).addClass('active');
        $("#"+tab_id).fadeTo(720,1).show();
    });

    //Табы товаров
    $('#box_files, #box_files, #box_features, #box_news, #box_producer, #box_contacts').hide()
    $('.tabs_links a').click(function(){
        var tab_id = $(this).attr('rel');

        $('.tabs_links a').removeClass('active');
        $('.box').hide();

        $(this).addClass('active');
        $("#"+tab_id).fadeTo(720,1).show();
    });

    $('.sub_links').hide()
    $('.sc_list').click(function(){
        $(this).toggleClass("show").toggleClass("hide").next().slideToggle(240)
    });


//Увеличение и слайдинг изображений в карточках

    $('#center, .big_map').on('mouseover', '.item_images .img_check i', function(){  
        index = $(this).index() * -280;
        $(this).closest('div.img_list').find('> div').css('left', index);
    });
        $('#center, .big_map').on('mouseleave', '.item_images', function(){  
            $(this).find('.img_list > div').css('left', '0');
        });

    $('.view_space').on('mouseover', '.mi_images .img_check i', function(){  
        index = $(this).index() * -240;
        $(this).closest('div.img_list').find('> div').css('left', index);
    });
        $('.view_space').on('mouseleave', '.mi_images', function(){  
            $(this).find('.img_list > div').css('left', '0');
        });


     $('.items .img_check, .map_card .img_check').each(function () {
        if ($(this).find('i').length < 2) {
            $(this).find('i').css('position', 'static');
        }
    });
    

    
    //Кнопка наверх
    $(window).scroll(function() {
 
        if($(this).scrollTop() != 0) {
         
        $('#to_top').fadeIn();
         
        } else {
         
        $('#to_top').fadeOut();
         
        }
 
    });
     
    $('#to_top').click(function() {
     
        $('body,html').animate({scrollTop:0},800);
     
    });

   filter_fly_offset = $('.filter').offset().top - 20;
     $(document).scroll(function(){
     offset = $('#sidebar').innerHeight();
     h = $('.filter').innerWidth();
     if((filter_fly_offset+h+offset) < $(this).scrollTop()){
     $('#fly-block').addClass('flying');
     $(".flying").stick_in_parent({ offset_top: 10, parent: '.place' });
     } else {
     $('#fly-block').removeClass('flying is_stuck');
     $("#fly-block").trigger("sticky_kit:detach");
     }
  });

});