 $(document).on('ready', function() {
	$(".multiple-items").slick({
      infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	 	responsive: [
	    	{
		    breakpoint: 767,
		    	settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
	    	}
	  	]
    });

});
$(document).on('ready', function() {
	$('.single-item').slick();
});