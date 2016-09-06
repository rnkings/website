/**
 * Retrieves a random number between min and max that isn't the current.
 * Used to generate a brand new number to fade in.
 */
function getRandomInt(min, max, current) {
    var newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    if (newIndex === current) {
    	return getRandomInt(min, max, current);
    }

    return newIndex;
}

//On document ready
$(document).ready(function () {
	//Our currently showing element (in position 0)
	var currentShowingElement = 0;
	//Our array of elements that we want to fade in and out
	var elements = $('.elementToFadeInAndOut');
	//The length of our array of elements
	var length = elements.length;

	//Create an interval that runs every three seconds
	setInterval(function () {
		//First, fade out our currently showing element
		$(elements[currentShowingElement]).fadeOut(400, function () {
			//When finished, set a new random element as our shown element
			currentShowingElement = getRandomInt(0, length - 1, currentShowingElement);
			//Then we show that element.
			$(elements[currentShowingElement]).fadeIn();
		});
	}, 3500);
});







