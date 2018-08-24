$(document).ready(function(){
	$('.services__right button').hover(function() {
		$('.add-background-right').css("width", "100%");
		$('.add-background-left').css({"width": "100%", "left": "0%"});
		$('.button-inner-right').css("color", "#1d232e");
		$('.button-inner-left').css("color", "#ffffff");
		},function() {
		$('.add-background-right').css("width", "0%");
		$('.add-background-left').css({"width": "0%", "left": "100%"});
		$('.button-inner-right').css("color", "#ffffff");
		$('.button-inner-left').css("color", "#1d232e");
		}
	);
	$('.services__left button').hover(function() {
		$('.add-background-right').css("width", "100%");
		$('.add-background-left').css({"width": "100%", "left": "0%"});
		$('.button-inner-left').css("color", "#ffffff");
		$('.button-inner-right').css("color", "#1d232e");
		},function() {
		$('.add-background-right').css("width", "0%");
		$('.add-background-left').css({"width": "0%", "left": "100%"});
		$('.button-inner-right').css("color", "#ffffff");
		$('.button-inner-left').css("color", "#1d232e");
		}
	);
});
// -------------VACANCY TABS------------------
$(document).ready(function() {
	$('#first-tab').click(function(){
		$('.triangle-1').css("opacity", "1");
		$('.triangle-2').css("opacity", "0");
		$('.triangle-3').css("opacity", "0");
	});
	$('#second-tab').click(function(){
		$('.triangle-2').css("opacity", "1");
		$('.triangle-1').css("opacity", "0");
		$('.triangle-3').css("opacity", "0");
	});
	$('#thirth-tab').click(function(){
		$('.triangle-3').css("opacity", "1");
		$('.triangle-1').css("opacity", "0");
		$('.triangle-2').css("opacity", "0");
	});
});
$(document).ready(function() {
	// window.onload = function(){
  	var b1 = document.getElementById("first-tab");//блок перед которым ставим
    var b2 = document.getElementById("second-tab");//блок который передвигаем
    var b3 = document.getElementById("thirth-tab");//блок который передвигаем

// $.fn.animateAppendTo = function(sel, speed) {
//     var $this = this,
//         newEle = $this.clone(true).appendTo(sel),
//         newPos = newEle.position();
//     newEle.hide();
//     $this.css('position', 'relative').animate(newPos, speed, function() {
//         newEle.show();
//         $this.remove();
//     });
//     return newEle;
// };
	$(b1).click(function() {
    	// $(this).animateAppendTo('.vacancy-tabs', 1000);
    	$(this).slideUp(500, function () {
        	$(this).appendTo($('.vacancy-tabs'));
        	$(this).slideDown(500);
	    });
	});
	$(b2).click(function() {
    	$(this).slideUp(500, function () {
        	$(this).appendTo($('.vacancy-tabs'));
        	$(this).slideDown(500);
	    });
	});
	$(b3).click(function() {
    	$(this).slideUp(500, function () {
        	$(this).appendTo($('.vacancy-tabs'));
        	$(this).slideDown(500);
	    });
	});	 
});
// --------------PLACEHOLDER---------------
$('#name').focus(function() {
    $('#hint').hide();
});
$('#name').blur(function() {
    if ($(this).val().trim() === '') {
        $('#hint').show();
    }
});
$('#tel').focus(function() {
    $('#hint-2').hide();
});

$('#tel').blur(function() {
    if ($(this).val().trim() === '') {
        $('#hint-2').show();
    }
});
$('#email').focus(function() {
    $('#hint-3').hide();
});

$('#email').blur(function() {
    if ($(this).val().trim() === '') {
        $('#hint-3').show();
    }
});
// ---------------------MAP----------------------
// AIzaSyDe9ETwoz8bLgqdRniseIzzVB5rvIpJuq4


// ------------PARALLAX--------------------
$(function(){
    var layer1 = $('#layer1');
    var obj = $('#obj');
        $('#container').scroll(function(){             
           var distance = layer1.outerHeight() + obj.outerHeight() + 20;            
           var pos = this.scrollTop/$(this).innerHeight() * distance;
           obj.css('top', pos);
    });
});