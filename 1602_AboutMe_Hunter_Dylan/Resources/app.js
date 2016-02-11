// Json data used on the detals page of the app
var details = [
{title: "username",
details: "dhunter1@fullsail.edu. and the host is full sail.",
},
{title: "Time Zone",
details: "I live in Virginia so my time zone is eastern",
},
{title: "Why I choose Mobile",
details: "I choose to go into mobile development because I have also been interested in new technology and I have always wanted to know how it all worked. My other pasion with this program is getting my masters in mobile gaming and I want to start making my own mobile games.",	
},
{title: "skills with javascript",
details: "I have a strong understanding of javascript and Titanium after taking VFW. I have been able to make some pretty interesting application in VFW and I have been able to know the rules with in javascript and titaniums declerations. So I feel that my comfort level with these two are very strong, however I always want to get better and I can always learn and curve my abilities.",	
},
{title: "Pets",
details: "I have both a cat and a dog. They both run around the house after each other all the time.",
},
{title: "Work",
details: "I currentley work in a truss factorty. I am in charge of running all of the heavy machines the cut all of the lumber for the shop.",	
},
{title: "Favorite food",
details: " My faviorte food has to pizza. I can almost eat pizza everyday of the week.",	
},
{title: "Family",
details: " I have one daughter and she is 4 years old. She is very hyper and she is also a very quick leaner.",	
},
{title: "Favorite sport",
details: "My favorite sport is the one that I am currentley still active in doing and that is skateboarding.",
},

];

// main window that will load first
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#000",
	title: "About Me",
	textAllign: "center"
});
// starts the navigation window so you will not get stuck 
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});
//click button on the bottom of the app
var clickButton = Ti.UI.createView({
	bottom: 30,
	height: 50,
	left: 100,
	right: 100,
	backgroundColor: "#0fb213"
});
var nameText = Ti.UI.createLabel({
	text: "Hello My name is Dylan Hunter",
	textAllign: "center",
	color: "#fff",
	font: {fontSize: 20, fontFamily: "Cochin", fontWeight: "regular", fontStyle: "bold", }
});
var moreText = Ti.UI.createLabel({
	text: "click below to learn more about me",
	top: 320,
	color: "#fff",
	font: {fontSize: 20, fontFamily: "Cochin", fontWeight: "regular", fontStyle: "bold", }
});
var clickText = Ti.UI.createLabel({
	text: "click here",
	textAllign: "center",
	color: "#fff"
});
// this is the require file that will require the information from the other js file
var loadFile = require("data");
// this is the information needed to open the first page and the naviagtion window
clickButton.add(clickText);
mainWindow.add(nameText, moreText, clickButton);
navWindow.open();

