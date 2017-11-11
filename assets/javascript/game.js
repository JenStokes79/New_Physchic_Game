//Letter Array for computer choices//

var computerChoices = ["a", "b", "c", "d", "e", "f",
						"g", "h", "i", "j", "k", "l",
						"m", "n", "o", "p", "q", "r", 
						"s", "t", "u", "v", "w", "x",
						"y", "z",]

//just declaring some variables//
var countDown = 10;
var counter = 0;
var start = computerChoices;

//this function is run whenever the user presses a key//
document.onkeyup = function(event) {

	//determines which key the user pressed//
	var userGuess = event.key;

	console.log(userGuess)
}