"use strict";

//"use strict" makes the compiler more strict and helps us to debug more easily. With "use strict" enabled we can't declare accidental global variables.
//IMPORTANT: "use strict" must be the first thing in your js file, nothing else can precede it, or it won't work.
//Caveat (Advertencia): "use strict" can be used inside single functions or class bodies, but again, it must be the first thing in the body.

// npm init -f  initialize npm with default values. (Create package.json)
// npm install eslint --save-dev   (create node_modules and package-lock.json)
// .\node_modules\.bin\eslint --init   (create configuration file)

//python -m http.server

//This is fine with "use strict"
var a = 10;
//But this is not allowed and will cause a ReferenceError. In order to solve this we must *declare* b with either var, let or const.
//b = 100;


/*     Types in JS     */

//Strings
var str = "I'm a string";
//Numbers
let num = 10;
//Arrays
let arrOfNumbers = [1,2,3,4];
const arrOfString = ["one", "two", "three"];
//Booleans
var flag = true;
//Objects     //Objects doesn't care about the order, arrays do.
const obj = {
	name: "Andres",
	occupation: "Student",
	home: "Courtenay",
	age: 30,
	favouriteFoods: ["bagel", "cereal", "bananas"],
	awake: true,
};

//What if we have a name binding that we're not sure what it is, base on the name? How can we determine its type?
console.log("str is a type of: " + typeof(str));
console.log("flag is a type of: " + typeof(flag));
console.log("num is a type of: " + typeof(num));

//The other oddity about JS types is that they're not static - they're dynamic.
//JavaScript doesn't particularly care what type you store in each name binding and is happy for you to change it.

flag = "now I'm a string!";
console.log("flag is a type of: " + typeof(flag));

//we can also change the type of let declared variables.
num = false;
console.log("num is a type of: " + typeof(num));

//Const are a little different. We can't outright change the type of const:
//arrOfString = 100; //This creates a TypeError, because a const cannot be reassigned to a new Type...
//...However, 'const' doesn't mean that the value stored in a const can't be changed... Const is *not* inmutable!
console.log(arrOfString);
arrOfString.push("four");
console.log(arrOfString);

//We can also change const objects
console.log(obj);
obj.favouriteLanguage = "JavaScript";
console.log(obj);

//QUESTION: Can we change a const number or string?

const newString = "I'm a string too";

//newString = newString + "!!!";  //This doesn't work because we can't reassign the const.

const newerString = newString.concat("!!!!");
console.log("newString: " + newString + "\nnewerString: " + newerString);
//ANSWER - We can't change string and number literals stored in const

/*** Literals vs expressions ***/
//This is a literal definition:
let aLiteralString = "I'm a string!"; //because there is a 'literal' string on the right hand side of the expression. The same is true for arrays, number, objects, booleans, etc.

//This is an expression:
let dynamicNumber = num + 5; //The right hand side here is an expression, so it's not a literal as above.

/*** The difference between var and let (and const) ***/
//var is historical method for declaring variables, but it's unsafe, because anything declared with var is global scope.
//let is a new addition since ES5, which allows us to define block scoped variables - in other words, variables that only exist within the blocks that they'vs be defined in.

//What is a block? Simply a set of curly braces, but these are used in function, in classes, in for loops, etc. We can also just create a block anywhere using a set of curly braces.

//Globals
var aGlobalVar = 100;
let aGlobalLet = 99;

//Block
{
	console.log("Inside the block:");
	console.log(aGlobalVar);
	console.log(aGlobalLet);
	//These are both defined inside the block..
	var aScoopedVar = "one hundred";
	let aScoopedLet = "nintey-nine";
	//... so they should be accesible in the block
	console.log(aScoopedVar);
	console.log(aScoopedLet);
}

console.log("Outside the block:");
console.log(aScoopedVar);
//console.log(aScoopedLet);		//ReferenceError - this is a let scoped variable

//The same is true of const - it's also block-scoped just like let. The difference between the two is in the discussion above (Type mutability).
//We should use let and const most of the time.


/*** If statements and for loops ***/

//if statement
if (num < 100){
	console.log("num is less than 100");
}

//if else statement
if (num > 100){
	console.log("greater than 100");
} else {
	console.log("less than 100");
}

//if elseif statement
if (num === 0){
	console.log("is zero");
} else if ( num < 0) {
	console.log("is negative");
} else {
	console.log("is positive");

}

//for loop
for (let i = 0; i < arrOfNumbers.length; i++){
	console.log(arrOfNumbers[i]);
}
