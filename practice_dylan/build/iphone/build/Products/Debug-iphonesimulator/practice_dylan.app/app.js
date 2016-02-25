var win = Ti.UI.createWindow({
	backgroundColor: "white",
});
var label = Ti.UI.createLabel({
	text: "click here",
	color: "white"
});
var button = Ti.UI.createView({
	top: 300,
	left: 20,
	Right: 20,
	height: 50,
	backgroundColor: "black"
});
button.add(label);
win.add(button);
win.open();
