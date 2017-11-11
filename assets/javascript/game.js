//Letter Array for computer choices//

var computerChoices = ["a", "b", "c", "d", "e", "f",
						"g", "h", "i", "j", "k", "l",
						"m", "n", "o", "p", "q", "r", 
						"s", "t", "u", "v", "w", "x",
						"y", "z",]

var userChoices = [];			

//just declaring some variables//
var countDown = 10;
var counter = 0;
var start = computerChoices;
var targetNum = 0;
var winGame = 5;


//this function is run whenever the user presses a key//
document.onkeyup = function(event) {

	//determines which key the user pressed//
	var userGuess = event.key;
	
	

	console.log(userGuess)

	//computer randomly chooses a letter from the array//
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices)]

	//user guess conditions//
	if (userGuess === computerGuess) {
		counter +=1;
		document.getElementById("wins").innerHTML = counter;
		

	
	} else (userGuess != computerGuess) 
		document.getElementById("letters").innerHTML = userGuess;
		countDown -=1;
		document.getElementById("left").innerHTML = countDown;

	}
	if (countDown === targetNum) {
		alert("Game Over");
	}

	//ive worked on this one and hangman for about 20 hours
	//... cant get it to work.. sorry


