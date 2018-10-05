$(window).on('load', function () {
	if($(this).width() < 992) {
		$('.basket').appendTo('.midline-elements');
		$('.callback').appendTo('.midline-elements');
	}
})

$(window).on('resize', function () {
	let i = $('.midline-elements').find('.basket').length;
	if($(this).width() < 992 && i != 1) {
		console.log('appendooo')
		$('.basket').appendTo('.midline-elements');
		$('.callback').appendTo('.midline-elements');
	} else if($(this).width() >= 992 && i == 1) {
		console.log('disappendooo')
		$('.basket').appendTo('.middle-line__container');
		$('.callback').appendTo('.middle-line__container');
	}
})