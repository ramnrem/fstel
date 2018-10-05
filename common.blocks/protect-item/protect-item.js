$(window).on('load', function () {
	if($(this).width() < 622) {
		$.each( $('.protect-item'), function( i, val ) {
			$(val).find('.availability').appendTo($(val).find('.mobile-order__middle')[0])
			$(val).find('.protect-item__cost').appendTo($(val).find('.mobile-order__middle')[0])
			$(val).find('.protect-item__bttn').appendTo($(val).find('.mobile-order__bottom')[0])
		})
	}
})

$(window).on('resize', function () {
	let i = $('.mobile-order__middle').find('.availability').length;
	if($(this).width() < 622 && i != 1) {
		$.each( $('.protect-item'), function( i, val ) {
			$(val).find('.availability').appendTo($(val).find('.mobile-order__middle')[0])
			$(val).find('.protect-item__cost').appendTo($(val).find('.mobile-order__middle')[0])
			$(val).find('.protect-item__bttn').appendTo($(val).find('.mobile-order__bottom')[0])
		})
	} else if($(this).width() >= 622 && i > 0 ) {
		$.each( $('.mobile-order'), function( i, val ) {
			$(val).find('.availability').appendTo($(val).parent().find('.protect-item__order')[0])
			$(val).find('.protect-item__cost').appendTo($(val).parent().find('.protect-item__order')[0])
			$(val).find('.protect-item__bttn').appendTo($(val).parent().find('.protect-item__order')[0])
		})
	}
})