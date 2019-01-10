// Test link is working correctly
console.log("Hello World");

// Global Variables
var currentHour = new Date().getHours();
var noon = 12;
var evening = 17;
var partyTime = 21;
var napTime = 14;
var lunchTime = 12;
var wakeupTime = 7;
var message;
var messageOfHour = document.getElementById('timeEvent');
var lolcatImage = document.getElementById('lolcat');
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

// Clock

var updateClock = function() {
	var showCurrentTime = function() {
		var clock = document.getElementById('clock')
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridian = "AM";

		if(hours >= noon) {
			meridian = "PM";
		}
		if(hours > noon) {
			hours = (hours - 12);
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

		clock.innerText = clockTime;
	};

	showCurrentTime();
}

// Message
if (currentHour == partyTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	var message = "Let's party!";
}
else if (currentHour == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	var message = "Time for a nap.";
}
else if (currentHour == lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	var message = "Time for lunch!";
}
else if (currentHour == wakeupTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	var message = "Good morning! Time to get up.";
}
else if (currentHour < noon) {
	var message = "Good morning!";
}
else if (currentHour > evening) {
	var message = "Good evening!";
}
else {
	var message = "Good afternoon!";
}

// Dynamically puts the message where the timeEvent ID lives
messageOfHour.innerText = message;
lolcatImage.src = image;

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);
