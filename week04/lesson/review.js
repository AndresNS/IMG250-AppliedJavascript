//review functions from week 2

//declare a function

function greet(firstName, lastName) {
    let greeting = "Hello!";
    return greeting + " " + firstName + " " + lastName;
}

console.log(greet("Andres", "Navarro"));

/* Scope, functions and block 

var can have function scope - which means it is local to any function it is declared in.

more often vars are globally scoped because they do not respect most curly braces.

Global scope means that a variable, etc, is visible everywhere.

In contrast, let & const are scoped by curly braces.

In general, we can think of scope as a series of nested blocks, with the global scope at top, and all other scopes contained inside it.
In general, scopes can always see what is in their parent.

*/

// expression  something = something
//function expression (needs a semi colon)
let greet2 = function(firstName, lastName){

};

//Note that function expressions are still called the same way as normal functions.
greet2("andres","navarro");