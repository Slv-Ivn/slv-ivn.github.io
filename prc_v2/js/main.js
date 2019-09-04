

$(document).ready(function(){



//Подключение SVG-иконок

    $('#svg_icons').load('img/all_icons.svg');


$('.show_links').click(function(){
        $(this).toggleClass("active").next().slideToggle(240)
    });


/* Последовательная анимация

    $(function() {
      $('.').each(function(i) {
      $(this).delay((i++) * 500).fadeTo(1000, 1); })
    });
*/


});



