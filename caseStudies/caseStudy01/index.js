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

The problem here is that we assigned a value to the variable 'message' outside the function and then we declare the same variable inside the function AFTER the console.log statement, so when we try to print it, there is no value stored in it yet. Nonetheless, we have already declared the variable outside the function at the beginning of the code. So, Why wasn't that value being printed? The reason is because when we declare a variable using 'var', that variable will have a function scope (which means, it can only be accessible within that function), therefore, the variable 'message' with the value 'foo' declared at the top, is beign "overwritten" *(read note) by the variable 'message' inside the function printIt(), but it does not have a value stored in it yet. We can demonstrate this by removing de var 'message' inside the function.

*Note: Is not really being overwritten, what happens is that javascript will look for the name of the variable in the current scope and if it doesn't find it, it will look for it in the next outer scope. So, in this case, Javascript found the variable name inside the function and ignored the variable with the same name that is outside the function.

*/

var message2 = 'new message outside the function'; 
function printIt2() {
    console.log(message2); //prints the message
};
printIt2();

function printIt3() {
    console.log(message2); //prints undefined, because it recognize the variable, but it doesn't have a value yet.
    var message2 = 'new message inside the function'; 
};
printIt3();

/*

If, while inside the function printIt(), we had declared the variable and THEN tried to print it with console.log, it would have worked. Also, if we create another block inside the same function (like an if statement or a for loop), we would be able to use the variable too, because we are inside the function where we declared that variable.

Additionally, there are 2 key concepts that helped me understand this oddity: the difference between let and var, and Hoisting. First, is important to know that let uses a block scope, while var uses a function scope (Brad Schiff, 2018. https://youtu.be/WPcW83BMT3Y?t=846), which means that when we declare a variable using let, it will be accessible within the entire block (not necessarily a function), and knowing that made me understand why we don’t get an error when we try to declare a variable with the same name inside the function (unlike other programming languages). Second, "hoisting" is what allow us to 'use' a variable declared with "var" before declaring it (there is no hoisting if we declare a variable with "let") (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting), and that's why declaring the variable 'message' after trying to print it, is not entirely wrong and don't triggers an error.

I also want to include the code below, because it took me a long time to get what was happening, but when I finally realized, I had a moment of enlightenment and could understand the entire behavior of function scope for var declarations.
*/

var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
    // and store them in funcs
    funcs[i] = function () {
        // each should log its value.
        console.log("My value: " + i);
    };
}
for (var j = 0; j < 3; j++) {
    funcs[j](); //In console we get "My value: 3" printed three times, because the variable "i" is the same for each function
}

// code taken from https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example


/**** MY EXAMPLE ****/
console.log("---\n%c MY EXAMPLE: ", "background: #ddd;padding: 3px 10px;");

//In this example I try to show how var and let behave when declared in different scopes. Also, here we can see how Hoisting works.

let flag = true; 

function myFunction1() {
    if (flag) {
        console.log(`num1 declared with var inside the function, but outside this block: ${num1}`); //we dont get an error because of hoisting, but the variable doesn't have a value yet.
        
        //Now, if we create another variable and assign a value to it, and THEN use it, it works as expected.
        var num2 = 1;
        num1 = 2; //Also, now we can reassign a new value to the variable outside this block (if statement), but still inside the function.

        console.log(`num1 + num2: ${num1} + ${num2} = ${num1 + num2 }`); //This works because both variables have been declared before using it and both of them have a value stored.
    }
    var num1 = 1;

    var num3 = num1 + num2;
    return num3;
}

myFunction1();

//if we try to use num1 outside the function we get a ReferenceError: num3 is not defined. 
console.log(`Trying to access num3 from outside the function: ${num3}`);


//Another example to show how "let" variables behave.
function myFunction2() {
    if (flag) {
            console.log(`num1 declared with let: ${num1}`); // we get an error, because we used "let" when declaring the variable before declaring it.
            //This error cannot be seen in console, because the previous error stopped the execution.
        let num1 = 1;
    }
    let num2 = 3;
    console.log(`num1 + num2: ${num1} + ${num2} = ${num1 + num2 }`); //We get an error because num1 is out of this scope.
}
myFunction2();





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
