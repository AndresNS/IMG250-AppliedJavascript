"use strict";

/************ QUESTION 1 ************/
// 1. Given the following code snippet complete the function body so that the argument name is used in a greeting that is printed to the console using a console.log message. Please use template literals, and not standard strings.
console.log("Question 1:");

function greeting(name) {
    //Check the value of "name" before returning it
    console.log(`Value of 'name' before returning it: ${name}`);

    return `Hello, ${name}!`;
}

//So, to get the expected behavior, we pass a name to the function in order to print in console the return value of the greeting function.
console.log(greeting("Andres"));

//Also, I tried to use console.log to print the function without giving it an argument and see what happens.
console.log(greeting());
//We got the message "Hello, undefined", because the parameter "name" has no value in it.



/************ QUESTION 2 ************/
// 2. Write a function that accepts two numbers as arguments, multiplies them together and returns the product.
console.log("---\nQuestion 2:");

function multiply(num1, num2) {
    //Check the numbers entered before multiplying them.
    console.log(`Value of 'num1' before multiplication: ${num1}`);
    console.log(`Value of 'num2' before multiplication: ${num2}`);

    let result;
    result = num1 * num2;

    //Check the result before returning it
    console.log(`${num1} * ${num2} = ${result}`);

    return result;
}

// I wanted to know if we can put a function as a template literal, and it works!
console.log(`Result using the function: ${multiply(3, 4)}`);



/************ QUESTION 3 ************/
// 3. Write a function that accepts an array of numbers as an argument. The function should iterate through the array and find the smallest, or minimum value. BONUS: Ensure your function works with arrays containing both positive and negative numbers. (Do not use any Math functions, such as Math.min() in solving this problem).

// Some hints for iterating over an array: You can use a standard for loop to iterate over any array, as follows:
console.log("---\nQuestion 3:");

let numArray = [1, 2, 3, 4];
for (let i = 0; i < numArray.length; i++) {
    //do something here with the numArray
    //likely you will want to access individual numArray elements 
    //using subscripting, such as: numArray[0]
    //more likely you will want to access the current 
    //numArray element using i: numArray[i]
}




/************ QUESTION 4 ************/
// 4. Write a function that accepts two numeric arguments called start and end and returns an array containing all the numbers from start up to (and including) end. BONUS: Add a third argument called step that defines the increment for each array element. Meaning, if step = 3, each subsequent array element should go up by increments of 3; if step = 2, then each subsequent array element should go up by increments of 2; if step is not included array elements should be incremented by 1. Negative step numbers should populate the array in reverse (from end to start) by the given increment.
console.log("---\nQuestion 4:");
