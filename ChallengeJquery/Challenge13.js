
var safeColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
	var randomColor = function() {
	    var r = safeColors[rand()];
	    var g = safeColors[rand()];
	    var b = safeColors[rand()];
	   
	    return "#"+r+g+b;
	 	

	};

function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}

$(document).ready(function() {


    $('#button').click(function() {
    	var myRanColor = randomColor();
    	var colorInverted = invertColor(myRanColor);
    	 

        $('div').each(function() {
            $(this).css('background-color', myRanColor);
        	$('p').css('color',colorInverted);   
        });
    });
});
