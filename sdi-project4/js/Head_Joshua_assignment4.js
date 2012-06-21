// alert("JavaScript works!");

/*
	Assignment 4
	Joshua Head
	SDI 1206
	
*/

/*
String	

    Does a string follow a 123-456-7890 pattern like a phone number?
    Does a string follow an aaa@bbb.ccc pattern like an email address?
    Is the string a URL? (Does it start with http: or https:?)
    Title-case a string (split into words, then uppercase the first letter of each word)
    Given a string that is a list of things separated by a given string, 
	as well as another string separator, 
	return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

Number	

    Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
    Fuzzy-match a number: is the number above or below a number within a certain percent?
    Find the number of hours or days difference between two dates.
    Given a string version of a number such as "42", return the value as an actual Number, such as 42.

Arrary	

    Find the smallest value in an array that is greater than a given number
    Find the total value of just the numbers in an array, even if some of the items are not numbers.
    Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
*/

var jLibrary = function () {
		
		// CHECK NUMERIC FUNCTION
		var checkNumeric = function (val) {
			if (isNaN(val)) {
				return false;
				
			} else{
				return true;
				
			};
		};
	
		
		// CHECK EMAIL FUNCTION
		var checkEMAIL = function (val) {
			var web = [".com", ".net" ,".me"]
			// Email Format using the RegExp
			var emailStyle = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;			
			if (web, emailStyle) {
				return true;
					
			} else{
				return false;
				
			};
		}
		
		
		// CHECK PHONE NUMBER FUNCTION
		var checkPhone = function (val){
			var phoneNumber = /^\(?(\d{3})\)?[- . ]?(\d{3})[-  . ]?(\d{4})$/;
			if (phoneNumber) {
				return true;
				
			} else{
				
				return false;
			};
			
			
		};
		
		// CHECK URL FUNCTION	
		function checkURL (str) {
			
			var end = ".com"
			var bgn = "http://"
			var lstr = str.lenth
			var lw= str.indexOf(str)
			if (str.indexOf(w)==-1){
				return false
			}
			
			if ((str.indexOf(end)==-1 || str.indexOf(end)==0) || str.indexOf(end)==lstr){
				return false
			}
			if (str.indexOf(bgn)==0) {
				return true
				
			}
			
		}
			
		
		}
		// Title Case
		String.prototype.toTitleCase =function (){
			var smallWords = /^\(a|an|and|as|at|but|function by(en|for|if|in|of|or|the|to|vs?\.?|vis|is)$/i;
			
			
			 {
				
			}
		
			
			
			
		};
		
		// String Separator 
		var strinSplit = function (thing){
			if (thing.split) {
				
				
			} else{
				
				false (console.log("This String could not be separated."))
			};
			
		}
		
		
		// Decimal Place Fuction
		var decimalPlace = function(val){
			val.toFixed(1)
			
		}
		
			return decimalPlace
			
			
		// Fuzzy Match Number
		// FIND DATE AND TIME DIFFERENCES
		// SUM OF NUMBERS
		// FIND THE SMALLEST NUMBER IN ARRARY
		var smallestValue = function(){
			
			Arrary.prototype.minGreatThan = function(a){
				var t = this, r = Number.POSITIVE_INFINITY,i; //this is the positive infinity property.
						for (var i=0; i < t.length; i++) {	
							if (a< t{i} && t[i] < r) r = t[i]
						};
						
			return r
			}
			
			var number = [ 234, 24, 347, 33, 12, 90, 5, 12], givenNumber =24;
			
			
		}
		
		// FIND THE AMOUNT OF NUMBERS IN THE ARRARY
		var stringConversion = function(){
			console.log(parseInt("42")); //Used the parseInt function to convert it to an actual number
			
		}
		
		
	
		// Returns of the objects
		return {
			"checkNumeric": checkNumeric,
			"checkEMAIL": checkEMAIL,
			"checkPhone": checkPhone,
			"smallestValue": smallestValue,
			"stringConversion": stringConversion,
			"stringSplit": stringSplit
			
		};
		
	
};
  var newLib = new jLibrary();

console.log(newLib.checkNumeric(4));
console.log(newLib.checkEMAIL("jhead12@live.com"));
console.log(newLib.checkPhone("323.230.3349"));
console.log(smallestValue());
 