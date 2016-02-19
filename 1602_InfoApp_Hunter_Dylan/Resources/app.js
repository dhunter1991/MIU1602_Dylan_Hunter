
// variables for the the images used inside of the application to be asscesed when needed

var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
// JSON object for all of the information needed for the app 

var availableDogs = [
		{title: "Caviler King Charles", 
		description: "Breed information: The Cavalier King Charles belongs to the Spaniel family and is classified as a toy dog. This breed originated in the United Kingdom and is one of most popular breeds. This breed is also well known to be great with children and other animals. With that they are very friendly breeds and acquire a lot of human interaction.\n\n\nObedience: The Caviler King Charles has a moderate obedience training level. They do not require too much attention, however it may take them longer than other breeds. Expect the results of obedience to be gradual; do not think the results of certain things to be instant.\n\n\nProper Diet Information: This breed is prone to obesity so maintain a proper diet for them is ideal. If using a dry food be sure to keep the amount within their weight constraints and do not over feed them.For the weight of this breed the normal serving size for a day for this breed is roughly 1 cup a day. This can also be split into to equal parts throughout the day for two full meals.",
		image:"cavalier-king-charles-spaniel-06.jpg",
		Breed:"Breed: Caviler King Charles", 
		Weight:"Weight: 13 - 18 lbs",
		LifeSpan:"Life Span: 9 - 14 years",
		temperament:"Temperment: playful, adaptable, fearless, patient, and sociable." ,
		colors:"Colors: Blenheim, Tri-­‐color, ruby, and black and tan",
		activityLevel: "Activity Level: Moderate",
		height:"Height: 12 - 13 in.",
		hypoallergenic:"Hypoallergenic: no"}, 
		{title:"Puggle", 
		description: "Breed information: The Puggle is a cross between the Beagle and Pug breeds. They have become popular due to their loving personality and ability to get along with kids and other animals. However be aware that with this breed they enjoy barking.\n\n\nObedience: The Puggle has a very quick mind when picking up on words like “sit” and “stay”. They pick up on these actions words very quickly which makes them very easy to train and obedient. They do however have a tendency to chew and dig, but studies have shown that maintaining healthy stimulation such as chew toys will curve this appetite.\n\n\nProper Diet Information: Just like other dogs in the small class proper diet is needed to maintain a healthy weight and activity level for this breed. A Puggle can get up to 30 lbs. so if feeding your Puggle a dry diet is it healthy to feed them roughly 2 cups of food a day. This also should be split into equal parts to feed them two times a day.",
		image:"Charlie_the_Puggle.jpg",
		Breed:"Breed: Puggle",
		Weight:"Weight: 15- 30 lbs",
		LifeSpan:"Life Span: 10 - 15 years",
		temperament:"Temperament: Lively, Playful, Spirited, Gentle, Loyal, and Eatchful",
		colors:"Colors: Fawn, Red, Tan, Lemon, or Black",
		activityLevel:"Activity Level: Moderate",
		height:"Height: 8 - 15 in.",
		hypoallergenic:"Hypoallergenic: no"}, 
		{title:"Shih Tzu", 
		description: "Breed information: The Shih Tzu is one of the most popular toy breeds because of their long silky hair and their outgoing personality. They also are popular because they do not shed their fur, which also makes them hypoallergenic. They are very loyal dogs and their exact origins are unknown.\n\n\nObedience: Training and proper socializing must start at a young age because they often become stubborn, as they get older. Given that they are a playful breed they often get along great with other animals. However everything is in the timing with Shih Tzu’s because they can also become needy and cry if not corrected at the right age.\n\n\nProper Diet Information: The Shih Tzu has a tendency to have a picky stomach and cannot handle regular dry food that well. It is recommended to give them canned or frozen food. When feeding your",
		image:"653882-small-shih-tzu.jpg",
		Breed:"Shih Tzu",
		Weight:"Weight: 9 - 16 lbs",
		LifeSpan:"Life Span: 10 - 16 years",
		temperament:"Temperament: Lively, Outgoing, Playful, Gentle, and Loyal",
		colors:"Colors: Black, Brown, White, Light brown, Blue, Black and white",
		activityLevel:"Activity Level: Moderate",
		height:"Height: 12 - 14 in.",
		hypoallergenic:"Hypoallergenic: yes",},
		{title:"Siberian Husky",
		image:"husky.jpg",
		description: "Breed information: The Siberian Husky is most known for their intelligence and their close relation to the wolf. They are beautiful dogs that have a very dense coat. They are very active and energetic so they require a lot of attention and time to play. They originate for the northeast with extremely cold weather, which is why they have such a thick coat.\n\n\nObedience: Siberian husky’s are a very intelligent breed and have excellent qualities with strength and endurance, but obedience is not one of those qualities. This breed needs to run and be outside to stay healthy and agile but when of the leash they will go anywhere without you and continue no matter how loud you call for them. So when training this dog keep in mind their spirit of being outside and wanting to be free.\n\n\nProper Diet Information: The Siberian Husky is quite a bigger breed of dog, but they do not require that much food. Given their roots a little food can last them a long way. It is stated that if your husky puts on to much weight is hard for them to loose it. So be carful when feeding your husky. A normal estimated diet for a husky is 2 cups a day, split into 1 cup two times a day.",
		Breed:"Breed: Siberian Husky",
		Weight:"Weight: 35 - 60 lbs",
		LifeSpan:"Life Span: 12 - 14 years",
		temperament:"Temperament: Outgoing, Alert, Gentle, Friendly, and intellegent",
		colors:"Colors: Black, Red, Grey, Black and tan",
		activityLevel:"Activity Level: High",
		height:"Height: 20 - 22 in.",
		hypoallergenic:"Hypoallergenic: no",	
		},
		{title: "Yorkshire Terrier",
		image: "terrier.jpg",
		description:"Breed information: The Yorkshire terrier is a small toy breed dog developed in the 19th century in the county of Yorkshire, England. Yorkshire terrier’s have a long silky coat and do not shed making them hypoallergenic. They also are very high in energy and require a lot of grooming.\n\n\nObedience: The Yorkshire terrier being that it is very active and overprotective has a tendency to not be good with small children. However; they are a very easy breed to train, as long as they have a lot of both physical and mental stimulation. They also have a name for being loud and yappy, but if given proper attention and stimulation they are a very quite and content dog.\n\n\nProper Diet Information: The Yorkshire Terrier Is a very small dog so when feeding them you have to be aware of obesity. It is recommended to feed them no more than half a cup of food to 1 cup of food a day. It is also recommended to split this into 2 servings throughout the day.",
		Breed:"Breed: Yorkshire Terrier",
		Weight:"Weight: 7 - 14 lbs",
		LifeSpan:"Life Span: 13 - 16 years",
		temperament:"Temperament",
		colors:"Colors: Blue and Tan, Black and Gold, Black and tan",
		activityLevel:"Activity Level: Moderate",
		height:"Height: 6- 7 in.",
		hypoallergenic:"Hypoallergenic: yes",	
		},
	];
// main window that opens navigation window and shows up as table view  

var dataWindow = Ti.UI.createWindow({
		title: "Available Dogs",
		backgroundColor: "#fff",
	});
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: dataWindow
	});
var dataBorder = Ti.UI.createView({
		backgroundColor: "dbdbdb",
		height: 1,
	});
var dogs = Ti.UI.createTableView({
		top: dataBorder.top + dataBorder.height,
	});
var dogSection = Ti.UI.createTableViewSection({
		headerTitle: "New Dogs",
		footerTitle: "",
});
// load file that opens data file 
var loadFile = require("data");
var allSections = [dogSection];
	dogs.setData(allSections);
	dataWindow.add(dataBorder, dogs, dogSection);
	navWindow.open();



