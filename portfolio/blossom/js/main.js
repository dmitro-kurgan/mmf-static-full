$(document).ready(function(){

    $('.scroll-class').jScrollPane({showArrows: true});

    if (typeof window.revapi1 != 'undefined') {
        revapi1.bind("revolution.slide.onchange",function (e,data) {

            if (data.slideIndex == 2)
            {
                setTimeout(function() {
                    revapi1.revnext();
                }, 5000);
            }
        });
    }

    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 70) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });



    $('ul.accordion').accordion({
    	autoheight: false,
        header: ".opener",
        active: '.selected',
        selectedClass: 'active',
        alwaysOpen: false,
        event: "click"
    });

    $('#rotate').click(function(){
        $(this).toggleClass('rotated');
    });


    $('.show-seo').click(function(){
        $(this).toggleClass('rotated');
    });



    $('#rotate').show();
    $('.seo p:not(:first-child)').animate({ opacity: 'hide' }, "slow");

    $('#rotate').click(function(event) {
        event.preventDefault();
        $('.seo p:not(:first-child)').slideToggle('slow');
    });



    $('.gallery__photo').imagezoomsl({
        zoomrange: [2, 2],
        zoomstart: 2,
        innerzoom: true,
        magnifierborder: "none"
    });



    $('.button-search').show();
    $('.search__form').animate({ opacity: 'hide' }, "slow");

    $('.button-search').click(function(event) {
        event.preventDefault();
        $('.search__form').fadeToggle('slow');
        $('.search__form input[name=\'search\']').focus();
        return false;
    });

    $('.search__form input[name=\'search\']').on('keydown', function(e) {
        if (e.keyCode == 13) {
            url = $('base').attr('href') + 'index.php?route=product/search';

            var value = $('header input[name=\'search\']').val();

            if (value) {
                url += '&search=' + encodeURIComponent(value);
            }

            location = url;
        }
    });


    $('.option .image input[type=radio]').change(function() {
        var color = $(this).next().attr('alt');
        $(this).parents('.option').find('.product-color').text(color);
    });

    $('#wishlist_products_list').load('index.php?route=account/wishlist .products_list');

});