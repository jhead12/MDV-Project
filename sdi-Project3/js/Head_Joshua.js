// alert("JavaScript works!");

/*
SDI 1206
Week 3 Assignment
Joshua Head
The Studio in detail
*/



// Global variables Property and Methods
var studioA = studio.facility[0]; 	//accessor Method
var studioB = studio.facility[1];	//accessor Method
var studioC = studio.facility[2];	//accessor Method


// Local Variables

var studioA  = {
		name: "Briney Spears",
		getHours: function (time) {},
		hungry: true,
		runner: true,
		food: ["sushi", "wine", "subway"],
		facility: studio.facility[0]		
	
};

var studioB = {
		name: "Gyote",
		getHours: function (time) {},
		hungry: false,
		runner: true,
		food: function () {console.log("I'm not Hungry")},
		facility: studio.facility[1]
		
		};
		
var studioC = {
		name: "Mary J. Bliege",
		getHours: function (time) {},
		hungry: true,
		runner: false,
		food: " Mexican Food",
		facility: studio.facility[2]

		};


var currentSessions = [studioA, studioB, studioC];	//function Method

console.log(currentSessions);


	
	
		





// JSon Call and for loop - Who is working

for (var i=0; i < studio.facility.length; i++) {
	var facility = studio.facility[i];
	console.log(" All the studio's are booked and " + facility.engineer  + " is " +  facility.kind  +  " in " +  facility.room )

	

};





// Studio C Needs a Runner!!

if (studioC.runner && studioC.hungry){ 
	console.log( studioC.name + " said: Go get some " + studioC.food)}



if (studioB.runner && studioB.hungry || studioA.runner && studioA.hungry ) {
	
	
	
	console.log("since there are no runners in this room and there is a runner available " + studioC.name + " said: go get the Runner from " +  studio.facility[1].room)
}


else

	{console.log( studioC.name + " said: We Need a Runner in Studio C! ")};
	


	
// The studio owener wanted to know how many hours were left in the recording session with Gyote.



if (studioB.getHours[5]< studio.facility[1].hours) {
	

	
	console.log(" There are only " + hoursLeft  + " in the Session ");
	
	
	
};


	
	
	




// 
var jsonstring = JSON.stringify()

