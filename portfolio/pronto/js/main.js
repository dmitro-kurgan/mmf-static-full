// -------------------HOW-TO-DEAL-ANIMATE---------------------
$(document).ready(function(){
	$(".how-to-deal ul li:nth-child(2)").mouseenter(function(){
		$('.border-hover').css("right", "-100%");
	})
	$(".how-to-deal ul li:nth-child(2)").mouseleave(function(){
		$('.border-hover').css("right", "0px");
	})
	$(".how-to-deal ul li:nth-child(3)").mouseenter(function(){
		$('.border-hover').css("right", "-200%");
	})
	$(".how-to-deal ul li:nth-child(3)").mouseleave(function(){
		$('.border-hover').css("right", "0px");
	})
	$(".how-to-deal ul li:nth-child(4)").mouseenter(function(){
		$('.border-hover').css("right", "-300%");
	})
	$(".how-to-deal ul li:nth-child(4)").mouseleave(function(){
		$('.border-hover').css("right", "0px");
	})
});
// ---------------------NAVIGATION----------------------------
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});