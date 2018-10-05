$('.numbering__arr').on('click', function() {
	if($(this).hasClass('numbering__arr_next') && $('.numbering__num_current').next().length > 0) {
		let i = $('.numbering__num_current');
		$(i).next().toggleClass('numbering__num_current')
		$(i).toggleClass('numbering__num_current')
	} else if($(this).hasClass('numbering__arr_prev') && $('.numbering__num_current').prev().length > 0){
		let i = $('.numbering__num_current');
		$(i).prev().toggleClass('numbering__num_current')
		$(i).toggleClass('numbering__num_current')
	}
})