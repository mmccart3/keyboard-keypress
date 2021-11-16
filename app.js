
// const log = document.getElementById('keyCodeDisplay');
// const log2 = document.getElementById('keyEventDisplay');
// const log3 = document.getElementById('keyLocationDisplay');
// const log4 = document.getElementById('keyKeyDisplay');

document.addEventListener('keydown', KeyCode);
document.addEventListener('keydown', KeyLocation);
document.addEventListener('keydown', KeyEvent);
document.addEventListener('keydown', Key);
// document.addEventListener('keypress', Hex);

function Key(e) {
    keyKeyDisplay.textContent = `Key Depressed was ${e.key}`;
  };


function KeyCode(e) {
  keyCodeDisplay.textContent = `Its ASCII code is ${e.keyCode}`;
};

function KeyLocation(e) {
    keyLocationDisplay.textContent = `Key location is ${e.location}`;
  };

function KeyEvent(e) {
keyEventDisplay.textContent = `Its Key Code is ${e.code}`;
};
// function Key(e) {
//     keyKeyDisplay.textContent = `Key Depressed was ${e.key}`;
//     keyCodeDisplay.textContent = `Its ASCII code is ${e.keyCode}`;
//     keyLocationDisplay.textContent = `Key location is ${e.location}`;
//     keyEventDisplay.textContent = `Its Key Code is ${e.code}`;
//   };


// function KeyCode(e) {
//   keyCodeDisplay.textContent = `Its ASCII code is ${e.keyCode}`;
// };

// function KeyLocation(e) {
//     keyLocationDisplay.textContent = `Key location is ${e.location}`;
//   };

// function KeyEvent(e) {
// keyEventDisplay.textContent = `Its Key Code is ${e.code}`;
// };

function ascii2hex(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }