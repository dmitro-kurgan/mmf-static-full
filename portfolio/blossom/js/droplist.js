$(function(){
	$('body').on('click', '.delivery_list', function(){
		$(this).parent().find(".cities_list").slideToggle('fast');
	});
    $('body').on('click', 'ul.cities_list li', function(){
		var tx = $(this).html();
		var tv = $(this).attr('alt');
		$(this).closest(".cities_list").slideUp('fast');
        $(this).parent().parent().find(".delivery_list span").html(tx);
        var selected = $(this).parent().parent().find(".delivery_list input");
        $(selected).attr('value', $(this).val());
        $(selected).attr('name', $(this).attr('name'));
	});

	$('.delivery_list_header').click(function(){
		$(".cities_list_header").slideToggle('fast');
	});
	$('ul.cities_list_header li').click(function(){
		var tx = $(this).html();
		var tv = $(this).attr('alt');
		$(".cities_list_header").slideUp('fast');
		$(".delivery_list_header span").html(tx);
		$(".delivery_text").html(tv);
	});



    /* сортировка в каталоге */
	$('.delivery_list_catalog').click(function(){
		$(".cities_list_catalog").slideToggle('fast');
	});
	$('ul.cities_list_catalog li').click(function(){
		var tx = $(this).html();
		$(".cities_list_catalog").slideUp('fast');
		$(".delivery_list_catalog span").html(tx);
        $(".delivery_list_catalog span").attr('data-value', $(this).attr('data-value'));
	});
    /* количество на страницу в каталоге */
	$('.delivery_list_number').click(function(){
		$(".cities_list_number").slideToggle('fast');
	});
	$('ul.cities_list_number li').click(function(){
		var tx = $(this).html();
		$(".cities_list_number").slideUp('fast');
		$(".delivery_list_number span").html(tx);
        $(".delivery_list_number span").attr('data-value', $(this).attr('data-value'));
	});
});

$(document).mouseup(function (e) {
    var container = $(".cities_list_catalog");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

$(document).mouseup(function (e) {
    var container = $(".cities_list");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

$(document).mouseup(function (e) {
    var container = $(".cities_list_second");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

$(document).mouseup(function (e) {
    var container = $(".cities_list_number");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

$(document).mouseup(function (e) {
    var container = $(".cities_list_header");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});