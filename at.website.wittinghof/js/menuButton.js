$('.menu-button').click(function() {
	if ($('.collapse-menu').is(':visible')) {
		$('.collapse-menu').slideToggle();
	} else {
		var width = $('.container').css('width').replace("px", "")
		$('.collapse-menu').css("width", width-20);
		$('.collapse-menu').slideToggle();
	}
});

