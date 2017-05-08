$(document).ready(function() {
    $("#content-slider-1").lightSlider({
        slideMargin: 0,
        pager: false,
        loop: true,
        keyPress: true
    });
    $("#content-slider-3").lightSlider({
        slideMargin: 0,
        pager: false,
        loop: true,
        keyPress: true
    });
    $('.nav').find('.menu-item-has-children').each(function(index, item) {
        $(item).addClass('dropdown');
        element_a = $(item).find('a').first();
        element_a.html(element_a.html() + "<span class='caret navbar-toggle sub-arrow'></span>");
    });
    // $('.has-submenu').each(function(index, item) {
    //     $(item).html($(item).html() + "<span class='caret navbar-toggle sub-arrow'></span>");
    // });
    // $('.dropdown').each(function(index, item) {
    //     extend = $(item).find('a').first();
    //     alert(extend.html())

    //     $(item).html($(item).html() + "<span class='caret navbar-toggle sub-arrow'></span>");
    // });

    // $(".content").find(".slideshow").find(".hot-view").find("ul").find("li").each(function(index, item) {
    //     link = $(item).find("a");
    //     data = link.html();
    //     order = link.data('order');
    //     if (order == 1 || order == 3 || order == 5) {
    //         link.html(data.substr(0, 40) + "...");
    //     }

    // });
});