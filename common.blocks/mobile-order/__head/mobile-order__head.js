$('.mobile-order__head').on('click', function() {
	$(this).parent().find('.mobile-order__slide').slideToggle()
	$(this).toggleClass('active')

	if($(this).hasClass('active'))
		$(this).find('.mobile-order__title').text('Скрыть')
	else $(this).find('.mobile-order__title').text('Подробнее')
})