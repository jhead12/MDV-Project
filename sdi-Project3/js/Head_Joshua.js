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

// How many hours are there left to record in studio A.

function hoursLeft (time) {
	var hours = studio.facility[0].hours;
	var hoursLeft = hours - time;
	
	console.log("We have " + hoursLeft + " to record ");
	
	
	
	if (hoursLeft <= 2) {
		
		console.log(" We have have a limited amount of time!");
	}	
	if (hoursLeft == 0){ console.log("We have No time!")}	
	;
	
	return hoursLeft;
};

hoursLeft(12);

console.log(studio.facility[0].hours)



// If there is a Sony Mic in studio A then the session with go 4 hours, faster than scheduled time.



var micA = studio.facility[0].Mic;
var micB = studio.facility[1].Mic;
var micC = studio.facility[2].Mic;

var allMics = [micA, micB, micC];

/*
  The proper mic was in studio A, therefore Britney will record here vocals with fewer takes cuting recording
 time to 4 hours*/


if (micA) {
	// TimeLeft after session

	
	console.log( "We are going to be done early tonight! Said: " + studioA.name )
	
if (studioA.hungry + studioA.runner){
	
	console.log("Go get some food and what I want to eat is " + studioA.food)
	
}

		
};

function timeLeft (time, studio) {
		var timeLeft = studio - time;
		
		return timeLeft;
};

studioA.getHours(5);
console.log(studioA)




// Is there food in studio C? If Not we have to get a runner?

if (studioC.runner && studioC.hungry){ 
	console.log( studioC.name + " said: Go get some " + studioC.food)}



if (studioB.runner && studioB.hungry || studioA.runner && studioA.hungry ) {
	
	
	
	console.log("since there are no runners in this room and there is a runner available " + studioC.name + " said: go get the Runner from " +  studio.facility[1].room)
}


else
// there wasnt a runner.
	{console.log( studioC.name + " said: We Need a Runner in Studio C! ")};
	


	
// The studio owener wanted to know how many hours were left in the recording session with Gyote.



if (studioB.getHours[5]< studio.facility[1].hours) {
	

	
	console.log(" There are only " + hoursLeft  + " in the Session ");
	
	
	
};


	
	
	




// 
var jsonstring = JSON.stringify()

