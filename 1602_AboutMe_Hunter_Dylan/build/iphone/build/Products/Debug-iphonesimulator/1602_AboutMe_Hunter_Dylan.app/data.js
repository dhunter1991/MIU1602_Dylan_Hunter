// this is the data window that will load after being clicked and will have options to choose from the json object
var data = function(){
	var dataWindow = Ti.UI.createWindow({
		title: "About Me",
		backgroundColor: "#9b05c1",
	});
	var dataBorder = Ti.UI.createView({
		backgroundColor: "dbdbdb",
		height: 1,
	});
	var info = Ti.UI.createTableView({
		top: dataBorder.top + dataBorder.height,
	});
	var detailsSection = Ti.UI.createTableViewSection({
		headerTitle: "information about me",
		footerTitle: "detailed information"
	});
	var infoSection = [detailsSection];
	info.setData(infoSection);
	dataWindow.add(dataBorder, info, detailsSection);
	navWindow.openWindow(dataWindow);
	// information from the json object and will bring up new page with information of what has been clicked 
	var getDetail = function(dataSource){
		var detailWin = Ti.UI.createWindow({
			title: dataSource.title,
			backgroundColor: "#000"
		});
	
		var detailBorder = Ti.UI.createView({
			backgroundColor: "dbdbdb",
			height: 1,
			top:0
		});
	
		var detailsText = Ti.UI.createLabel({
			text: dataSource.desc,
			color: "#fff",
			font: {fontsize: 20, fontFamily: "arial", fontWeight: "regular"},
			top: detailBorder.height + detailBorder.top + 300,
			left: 10,
			right: 10
		});
		detailWin.add(detailBorder, detailsText);
		navWindow.openWindow(detailWin);
};
// for loop that goes through the json object and gives the information when needed
	for(var i=0, j = details.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: details[i].title,
		desc: details[i].details
	});
	detailsSection.add(theRow);
	};
// this is the event propigation that when clicked 	
info.addEventListener("click", function(event){
getDetail(event.source);
});
};
// event listener that listens for the click on the first page 
clickButton.addEventListener("click", data);