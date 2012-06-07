alert("JavaScript works!");

var workDone = true;

/*
	Project 2 
	Joshua Head
	
*/


var OwnerName = "Joshua";
var OwnerFullName = "Joshua E. Head";
var engineerName = ["Brad","Jason","Dave", "Brian"];
var engineerCount = engineerName.lenth;	
var artistName = ["Britney Spears", "Jason D", "Janet Jackson", "Lyrica"];
var artistCount = artistName.lenth;
var mixHours = 2, 4, 6, 8, 12, 16, 18, 24;
var clientAvail = true;

/*
	There are 4 Engineers in the studio. 
*/

//Initial output
console.log("Welcome, ", engineerName[0]);
console.log("Our Studio owner is ",OwnerName) ;
console.log("His full name is" , OwnerFullName);
console.log("He has ", engineerCount, " Engineer\'s and ", artistCount, " Artist ");
console.log("Are there any artist in the studio? ", clientAvail); 


/*
	TODO I have to create a loop, arguement, and return fuction for the 4 new variables
*/

if (engineerCount > artistCount) {
       console.log("We are able to record the artist; Let\'s Go!"); }
   
    else {
        var engineerLeft = engineerCount - artistCount
        console.log("We need ", engineerLeft, " We do not have any space available.") ;}
if
     (engineerName ="Joshua") {
        console.log( engineerName, "is the best engineer in the studio."); }
    else {
        var Taunt = engineerengineerName + " is not as good " + OwnerFullName + "!";
        console.log(Taunt); }

