let params = [
	{
		min: 0,
		max: 120
	}
]
$('.slider').each((i)=>{
	noUiSlider.create($('.slider')[i], {
		start: [ 30, 90 ],
		connect: true,
		range: {
			'min': params[i].min,
			'max': params[i].max 
		}
	});
	$('.slider')[i].noUiSlider.on('update', function( values, handle ) {

		let value = values[handle];

		if ( handle ) {
			$('#to').val(Math.round(value));
		} else {
			$('#from').val(Math.round(value));
		}
	});
});

$('#from').change(function(){
	$('.slider')[0].noUiSlider.set([this.value, null]);
});

$('#to').change(function(){
	$('.slider')[0].noUiSlider.set([null, this.value]);
});