// alert("JavaScript works!");

/*
SDI 1206
Week 3 Assignment
Joshua Head
The Studio in detail
*/


// Global variables Property and Methods

 // Britney Spears
var studioA = {
		name: "Briney Spears",
		getHours: function (time) {},
		hungry: true,
		runner: true,
		food: ["sushi", "wine", "subway"]			
	
};

var studioB = {
		name: "Gyote",
		getHours: function (time) {},
		hungry: false,
		runner: true,
		food: function () {console.log("I'm not Hungry")}
		
		};
		
var studioC = {
		name: "Mary J. Bliege",
		getHours: function (time) {},
		hungry: true,
		runner: false,
		food: [" Mexican Food"]

		};


for (var key in studioB) {
	console.log("key: " + key + ", value: " + studioB[key]);
	
}

studioA.getHours(5);
console.log(studioA.getHours);

// JSon Call and for loop

var Data = function (json) {
	for (var i=0; i < studio.facility.length; i++) {
		var facility = studio.facility[i];
		console.log( "The "  + facility.room + " is a " + facility.kind + " room and  the engineer is " + facility.engineer + "." );
	};
	
};

 Data(studio);

// 
var jsonstring = JSON.stringify()

