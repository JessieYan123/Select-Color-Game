// set numSquares to control easy/hard mode and reset button
var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1")
var resetButton = document.getElementById("reset");
var EasyBtn = document.getElementById("easymode");
var HardBtn = document.getElementById("hardmode");

// random select a color
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial color to square
	squares[i].style.background = colors[i];
	// add click listeners to square
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.background;
		// compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			// change all squares' colors and h1 background's color
			changeColor(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

// when click right color, change all squares' color
function changeColor(color) {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = color;
	}
}

// random select color
function pickColor() {
	// 选index
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// generate 3 or 6 sqaures' colors
function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// set reset button
resetButton.addEventListener("click", function() {
	this.textContent = "New Colors"
	// generate initial colors
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < colors.length; i++) {
		// add initial color to square
		squares[i].style.background = colors[i];
	}
	// reset h1 background
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
})

// set easy button
EasyBtn.addEventListener("click", function() {
	// set button color
	EasyBtn.classList.add("selected");
	HardBtn.classList.remove("selected");
	// set number of squares
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		// hide the second row's squares
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

// set hard button
HardBtn.addEventListener("click", function() {
	// set button color
	HardBtn.classList.add("selected");
	EasyBtn.classList.remove("selected");
	// set number of squares
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		// display all squares
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		}
	}
)
