// Test link is working correctly
console.log("Hello World");

// Variables
var currentTime = new Date().getHours();
var noon = 12;
var evening = 17;
var partyTime = 21;
var napTime = 14;
var lunchTime = 12;
var wakeupTime = 7;
var message;
var messageOfHour = document.getElementById("timeEvent");

// Message
if (currentTime == partyTime) {
	var message = "Let's party!";
}
else if (currentTime == napTime) {
	var message = "Time for a nap.";
}
else if (currentTime == lunchTime) {
	var message = "Time for lunch!";
}
else if (currentTime == wakeupTime) {
	var message = "Good morning! Time to get up.";
}
else if (currentTime < noon) {
	var message = "Good morning!";
}
else if (currentTime > evening) {
	var message = "Good evening!";
}
else {
	var message = "Good afternoon!";
} 

// Dynamically puts the message where the timeEvent ID lives
messageOfHour.innerText = message;