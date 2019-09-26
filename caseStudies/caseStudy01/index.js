// Case Study 1

//Im the code below we declare the variable message and assign the value 'foo' to it.
var message = 'foo';

//Then we declare the function printIt() where: first, we print in console the variable message, and then we declare a variable message and assign the value 'bar' to it.
function printIt() {
  console.log(message);
  var message = 'bar';
};

//Finally, we call the function printIt().
printIt();


/*
Following the flow of the code, I was expecting to see 'foo' printed in console as a result, because we are declaring the variable 'message', assigning the value 'foo' to it, and then printing it in the console. However, when we call the function it prints 'undefined', even though we have already defined the variable 'message'.

The first problem here is that we assigned a value to the variable 'message' after using it, so when we try to print it, there is no value stored in it. Nonetheless, this is not the only problem, because we have already declared the variable outside the function at the beginning of the code. So, Why wasn't that value being printed? The reason is because when we declare a variable using 'var', that variable will have a function scope (which means, it can only be accessible within that function), therefore, the variable 'message' with the value 'foo' declared at the top, doesn't exists anymore when we are inside the function printIt().

If, while inside the function printIt(), we had declared the variable and THEN tried to print it with console.log, it would have worked. Also, if we create another block inside the same function (like an if statement or a for loop), we would be able to use the variable too, because we are inside the function where we declared that variable.

Additionally, there are 2 key concepts that helped me understand this oddity: the difference between let and var, and Hoisting. First, is important to know that let uses a block scope, while var uses a function scope (Brad Schiff, 2018. https://youtu.be/WPcW83BMT3Y?t=846), which means that when we declare a variable using let, it will be accessible within the entire block (not necessarily a function), and knowing that made me understand why we don’t get an error when we try to declare a variable with the same name inside the function (unlike other programming languages). Second, "hoisting" is what allow us to 'use' a variable before declaring it (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting), and that's why declaring the variable 'message' after trying to print it, is not entirely wrong and don't triggers an error.

I also want to include the code below, because it took me a long time to get what was happening, but when I finally realized, I had a moment of enlightenment and could understand the entire behavior of function scope.
*/

var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
    // and store them in funcs
    funcs[i] = function() {
        // each should log its value.
        console.log("My value: " + i);
    };
}
for (var j = 0; j < 3; j++) {
    // and now let's run each one to see
    funcs[j]();
}

// code taken from https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var



/* 
REFERENCES

Brad Schiff, November 6th, 2018. "The 10 Days of JavaScript: Day 8 (Variable Scope & Context / this keyword)". https://www.youtube.com/watch?v=WPcW83BMT3Y

w3chools.com, "Javascript Scope". https://www.w3schools.com/js/js_scope.asp

thinkingstiff (Matt Walton), September 14th, 2019 (last edition). "What's the difference between using “let” and “var”?". https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var

Aurelio De Rosa, April 6th, 2018. "ES6 in Action: let and const". https://www.sitepoint.com/es6-let-const/

Ivaylo Gerchev, December 2nd, 2014. "Demystifying JavaScript Variable Scope and Hoisting". https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/

MDN Web Docs, "var". https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

MDN Web Docs, "let". https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

Sergio Xalambrí, July 30th, 2014. "Definiendo conceptos: Closure y Scope en JavaScript". https://medium.com/@sergiodxa/definiendo-conceptos-closure-y-scope-en-javascript-9081f1e113e6

*/
