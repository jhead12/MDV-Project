// alert("JavaScript works!");

/*
SDI 1206
Week 3 Assignment
Joshua Head
The Studio in detail
*/


// Global variables Property and Methods
var studioA = studio.facility[0].room;
var studioB = studio.facility[1].room;
var studioC = studio.facility[2].room;

var allRooms = studioA && studioB && studioC;


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


var data = function (json) {
	console.log(json);	
		
};

data(studio);

// Studio C Needs a Runner!!

if (studioC.runner && studioC.hungry){ 
	console.log( studioC.name + " said: Go get some " + studioC.food)}



if (studioB.runner && studioB.hungry || studioA.runner && studioA.hungry ) {
	
	
	
	console.log("since there are no runners in this room and there is a runner available " + studioC.name + " said: go get the Runner from " +  studio.facility[1].room)
}

else

	{console.log( studioC.name + " said: We Need a Runner in Studio C! ")};
	
	
// The studio owener wanted to know how many hours were left in the recording session with Gyote.


	
	
	
// JSon Call and for loop - Who is working

for (var i=0; i < studio.facility.length; i++) {
	var facility = studio.facility[i];
	console.log(" All the studio's are booked and " + facility.engineer  + " is " +  facility.kind  +  " in " +  facility.room )

	

};




// 
var jsonstring = JSON.stringify()

