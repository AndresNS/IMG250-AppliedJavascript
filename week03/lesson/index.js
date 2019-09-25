"use strict";

/* Week 2 In class code */

/* Console messages */
//Which console messages are the most important?
/*Console log and info are really the same thing - used for simple debugging helps determine program flow, or the current value
of a specific variable. We tend to use console.log a lot, I want you all to consider reducing your use of console.log in favour
of other more context appropriate console messages.
Examples: using console.log to determine if your if-statement is working correctly; or to print the value of a specific variable that 
is changing dynamically (at runtime).
Arguments - the yaccept basically anything.
*/
console.log();
console.info();

/*
/* console.warn is used when your program might fail, but will still likely run. Example: If there is user input in your program, and you get 
unexpected but still usable data. This may have unintended results - but not typically a crash.
Typically console.warn will be used in combination with an if-statement. E.g. if it fails in the way you expect it to fail, the the surface
the console.warn message.
Typically accepts as an argument a message explaining the error.
*/

//FIX END OF DESCRIPTION
console.warn();

/* console.error is used when your program is going to fail. Example: If there is user input in your program, and the user gives you bad data.
Typically console.error will be used in combination with an if-statement. E.g. if it fails in the way you expect it to fail, the the surface
the console.error message.
Typically accepts as an argument a message explaining the error.
*/
console.error();

/* Both table and group perform a similar function: They allow the developer to display data in a format that is potentially more appropiate
for the type of data it is.
Example: It's much more convenient to arrange multiple object data in a table (with just the properties/data necessary) so that the objects can 
be compared line by line, instead of having to scroll up and down through the console, matching property to property.
Difference - Table puts data into a table, while group puts associated into a expanding/collapsable box.
*/
//Examples of both
let objArray = [];
for (let i = 0; i < 10; i++) {
	//Adding objet properties individually
	let obj = {};
	obj["first"] = i;
	obj["second"] = i * 10;
	obj["third"] = i / 3.14;

	//Object literal definition
	// let obj = {
	//     "first": i,
	//     "second": i*10,
	//     "third": i/3.14,
	// }
	objArray.push(obj);
}

//We can pass any array to table()
console.table(objArray);
//We can also be more specific in what we want in table()
console.table([{
	"First column": objArray[3].first,
	"Second column": objArray[3].third,
}, {
	"First column": objArray[5].first,
	"Second column": objArray[5].third,
}
]);

//For group() we need a label
let label = "Our objects";
console.group(label);
console.log(objArray[3]);
console.log(objArray[7]);
console.log(objArray[9]);
console.groupEnd(label);

/* Some useful JS functions */
/* ...And also, template literals */

//We talked last week about typeof:
console.log(typeof (objArray));
console.log(typeof objArray);
//typeof is used to identify the type of a variable.
//typeof (and other useful function we'll look at in minute) can be used in if-statement as safety checks, or to preface console messages, etc.
if (typeof (objArray) == "object") {
	//A console message with a template literal (we need to use backticks)
	console.log(`It's an ${typeof objArray}`);
} else {
	console.log("Not an object");
}

let input = 22;
if (typeof (input) == "number") {
	//A console message with a template literal:
	console.log(`input is a ${typeof input} and its value is ${input}`);
} else {
	console.log("input is not a number");
}

//The advantage of both double and single quotes:
let quotedString = "This string 'contains a quote'.";
//the other option is to use escape characters:
let secondQuoteString = "This string also \"has a quote\"";
//To add a variable or aditional content to a regulr string, we hate to use concatenation:
let concatString = "This string contins the variable: " + input + " and here is the rest of the string.";
//this is solved by template literals - see above.

//isNaN is also a very useful function, used to determine if a name binding is not a number
console.log(isNaN(input)); //false because input is a number
console.log(isNaN(objArray)); //true because objArray is an object
let arrOfNumbers = [1, 2, 3, 4]
console.log(isNaN(arrOfNumbers)); //true because the engine recognizes we have an array of numbers.
let arrOfMostlyNumbers = [1, 2, 3, "four"];
console.log(isNaN(arrOfNumbers));
let notANumber = ["four"];
console.log(isNaN(notANumber));

//Where is this useful? We have user input that is storing data in a variable that we have previously defined as a number.
// [Incorrect] We know from last week that typeof will not work to recognize that the value in this variable is not a number, bevause the engine
// will always refer to it as a number type, even if we change the value to smoething else.
let aNumber = 42;
console.log(typeof aNumber); //number
console.log(isNaN(aNumber)); //false
aNumber = "forty two";
console.log(typeof aNumber); //string
console.log(isNaN(aNumber)); //true - this is where isNan is useful

/* FUNCTIONS */

/* HOISTED: lifted up*/

// Basic function declaration - how to write a function that checks if a value is greater
// than particular target value
function isGreaterThan(value, target) {
	if (value > target) {
		// return `${value} is greater than ${target}`;
		// return value - target;
		// return `${value} is greater than ${target} by ${value - target}`;
		return true;
	}
	return false;
}

function isGreaterThan10(value) {
	if (value > 10) {
		return true;
	}
	return false;
}

// Javascript ignores etra arguments
isGreaterThan(100, 1000, 3, -4);

//Function expression
//Also called anonymous functions - these are functions officially without a name, most often used 
// as callbacks, but are also the original form of function statement in JS.
let sum = function (valueA, valueB) {
	return valueA + valueB;
};

// We use it exactly the same way:
sum(4, 6); //Returns 10

//we'll use this fom - the function expression - less than the function declaration, but it still has its uses - most often
// in callbacks, promises, high-order functions (functional programming). Or, more often we'll use it in another form the
// arrow function:

// let add = (valueA, valueB) => valueA + valueB

