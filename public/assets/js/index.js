
function getRandomInt(min, max, current) {
    var newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    if (newIndex === current) {
    	return getRandomInt(min, max, current);
    }

    return newIndex;
}

$(document).ready(function () {
	var myAttr = ["a renaissance woman","a developer","an artist","a UW-Whitewater Graduate","a technical writer","an adventurer","creative","an author"];
	
	var myColors = ["#5457bd","#ff741b","#1cbbb4","#8560a8","#3cb878","#ffff00","#ec008c","#ff0000"];
	var el = $('#elementToFadeInAndOut');
	var i = 0; // index of curr attr

	$(el).html(myAttr[i]);
	$(el).css("color", myColors[i]);
	i++;

	setInterval(function () {
		$(el).fadeOut(400, function () {
			$(this).html(myAttr[i]).css("color", myColors[i]).fadeIn();
			i = (i>=myAttr.length-1 ? 0 : i+1); // TODO test this
		});
	}, 2000);
});






