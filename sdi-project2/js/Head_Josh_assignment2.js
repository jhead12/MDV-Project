


/*
	Project 2 
	Joshua Head
	
*/


var OwnerName = "Joshua";
var OwnerFullName = "Joshua E. Head";
var engineerName = ["Brad","Jason","Dave", "Brian"];
var engineerCount = engineerName.lenth;	
var artistName = ["Britney Spears", "Jason D", "Janet Jackson", "Lyrica", null];
var artistCount = artistName.lenth;
var scheduledHours = [2, 4, 6, 8, 12, 16, 18, 24];
var clientAvail = true;
var studioType =  ["recording", "mix"];
var workDone = [1, 4, 5 ,7 , 9];



/*
	TThe Studio has 4 engineers, and they have been working an assortment of hours
	for each artist that they have been recording. Brad has been working on a Britney Spears 
	record for 4hours. And There are 8hours before the artist Jason D arrives to the studio. 
	However, the Artist Lyrica wants to record for a couple hours before Jason D arrives. Brad
	Tells Lyrica that she will have to arrive at least 3 hours after he gets to the studio. She
	gets to the studio within 2 hours. 
*/

//The amount of time that Brad has completed and is Scheduled working.

var bradTime = function (scheduledHours, workDone, requestedHours, artistName) {
	
	var timeLeft = scheduledHours - workDone;
	
	if (workDone - scheduledHours || timeLeft >= requestedHours) {
		
		console.log("Brad will have enough time to " + studioType[0] + artistName )
	} else{console.log( "brad will not have time to schedule " + artistName ) };


}

bradTime( 12, workDone[1], 3, artistName[3] );


var workingOn = function (scheduledHours, workDone) {

		var timeLeft = scheduledHours - workDone;
		
		
		console.log( timeLeft );
		return timeLeft;
	};



if (engineerCount > artistCount) {
       console.log("We are able to record the artist; Let\'s Go!"); }
   
    else {
        var engineerLeft = engineerCount - artistCount
        console.log("We need ", engineerLeft, " We do not have any space available.") ;}
if
     (engineerName[2]) {
        console.log( engineerName[2], "is the best engineer in the studio."); }
    else {
        var Taunt = engineerengineerName + " is not as good " + OwnerFullName + "!";
        console.log(Taunt); }

