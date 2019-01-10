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
var isPartyTime = false;
var partyButton = document.getElementById('partyTimeButton');
var wakeupTimeSelector = document.getElementById('wakeUpTimeSelector');

// Clock

var updateClock = function() {
	var showCurrentTime = function() {
		var clock = document.getElementById('clock');
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
};

// Message and Images
if (currentHour == partyTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	message = "Let's party!";
}
else if (currentHour == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	message = "Time for a nap.";
}
else if (currentHour == lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	message = "Time for lunch!";
}
else if (currentHour == wakeupTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	message = "Good morning! Time to get up.";
}
else if (currentHour < noon) {
	message = "Good morning!";
}
else if (currentHour > evening) {
	message = "Good evening!";
}
else {
	message = "Good afternoon!";
}

// Dynamically puts the message where the timeEvent ID lives
messageOfHour.innerText = message;
lolcatImage.src = image;

// Party Time button
var partyEvent = function () {
	//Check isPartyTime
	if (isPartyTime === false) {
		isPartyTime = true;
		currentHour = partyTime;
		partyButton.style.backgroundColor = "#ff0";
		partyButton.style.color = "#000";
	}
	else {
		isPartyTime = false;
		currentHour = new Date().getHours();
		partyButton.style.backgroundColor = "#222";
		partyButton.style.color = "#fff";
	}
};

// Populates clock ID with current time and increments it in one second intervals.
updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);
// Activates button
partyButton.addEventListener('click', partyEvent);