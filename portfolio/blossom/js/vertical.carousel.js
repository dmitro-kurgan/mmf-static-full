function mycarousel_initCallback(a){a.clip.hover(function(){a.stopAuto()},function(){a.startAuto()})}$(document).ready(function(){$("#carousel").jcarousel({vertical:!0,scroll:1,wrap:"last",initCallback:mycarousel_initCallback}),$("div#slideshow-carousel a img").css({opacity:"1"}),$("div#slideshow-carousel a img:first").css({opacity:"1.0"}),$("div#slideshow-carousel li a:first").append('<span class="arrow"></span>'),$("div#slideshow-carousel li a").hover(function(){$(this).has("span").length||($("div#slideshow-carousel li a img").stop(!0,!0).css({opacity:"1"}),$(this).stop(!0,!0).children("img").css({opacity:"1.0"}))},function(){$("div#slideshow-carousel li a img").stop(!0,!0).css({opacity:"1"}),$("div#slideshow-carousel li a").each(function(){$(this).has("span").length&&$(this).children("img").css({opacity:"1.0"})})}).click(function(){return $("span.arrow").remove(),$(this).append('<span class="arrow"></span>'),$("div#slideshow-main li").removeClass("active"),$("div#slideshow-main li."+$(this).attr("rel")).addClass("active").fadeToggle("slow"),!1})});