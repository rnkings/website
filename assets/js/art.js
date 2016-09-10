
// looks inside carousel for each item and pull the html out of the class image and put it inside the id carousel
$(document).ready(function(){
	console.log('doc ready');
	$('.carousel_data .carousel_item').each(function(){
		$('#carousel').append( $(this).find('.image').html());
	});
	createCarousel();
});

// create the carousel

function createCarousel(){
	console.log('Create carousel');
	$('div#carousel').roundabout({
		responsive:true,
		childSelector:'img', 
		tilt:-4.5,
		minOpacity:1,
		//how small images get it back
		minScale:.45,
		//how long it takes image to appear once clicked
		duration:1200,
		clickToFocusCallback: showCaption
	});
	createCustomButtons();
	showCaption();
}

function createCustomButtons(){
	console.log('Create custom buttons');
	$('.prevItem').click(function(){
		$('div#carousel').roundabout('animateToNextChild', showCaption);
	});
	$('.nextItem').click(function(){
		$('div#carousel').roundabout('animateToPreviousChild', showCaption);
	});
}

function showCaption(){
	console.log('Show caption');
	var childInFocus = $('div#carousel').data('roundabout').childInFocus;
	var setCaption = $('.carousel_data .carousel_item .caption:eq('+childInFocus+')').html();
	$('#captions').html(setCaption);
}