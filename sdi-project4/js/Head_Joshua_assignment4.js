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
		var url
		
	
		// Return Values
		return {
			"checkNumeric": checkNumeric,
			"checkEMAIL": checkEMAIL,
			"checkPhone": checkPhone
			
		};
		
	
};
  var newLib = new jLibrary();

console.log(newLib.checkNumeric(4));
console.log(newLib.checkEMAIL("jhead12@live.com"));
console.log(newLib.checkPhone("323.230.3349"))
 