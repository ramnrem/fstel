$('.numbering__num').on('click', function() {
	if(!$(this).hasClass('numbering__num_current')) {
		let i = $('.numbering__num_current');
		console.log($(document).find(this))
		$(this).parent().find('.numbering__num_current').toggleClass('numbering__num_current')
		$(this).toggleClass('numbering__num_current')
	}
})