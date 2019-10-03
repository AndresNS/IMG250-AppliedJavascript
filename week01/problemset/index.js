/*1. The prompt function can be used to get a short amount of input from an end-user. You can store values recorded via prompt as follows:

let userInput = prompt("Please enter a numeric value")

Use prompt to collect a numeric value and write an if-else loop to alert: "positive", if the number is greater than 0; "negative", if the number is less than 0; or "zero" if the number is zero.
*/

//don't forget to comment the code from the other questions before running it.
let tryAgain = true;
while (tryAgain) {

    let userInput = prompt("Please enter a numeric value.");

    if (userInput > 0) {
        alert("positive");
    } else if (userInput < 0) {
        alert("negative");
    } else {
        alert("zero");
    }

    if (!confirm("Try with another number?")) {
        tryAgain = false;
    }
}

// 2. Copy the code from question 1 and modify it to put in a safety check so that the userInput isn't evaluated unless it is the correct type of input.

//don't forget to comment the code from the other questions before running it.
let tryAgain = true;
while (tryAgain) {

    let userInput = prompt("Please enter a numeric value.");

    if (isNaN(userInput)) { // I tried to use typeof to check is the value was a number, but for some reason when I typed a string it said it was zero, so I decided to use isNaN instead.
        alert("Only numeric values are accepted.");
    } else {
        if (userInput > 0) {
            alert("positive");
        } else if (userInput < 0) {
            alert("negative");
        } else {
            alert("zero");
        }
    }

    if (!confirm("Try with another number?")) {
        tryAgain = false;
    }
}

// 3. Write a for loop that outputs only even numbers between 0 and 100.

//don't forget to comment the code from the other questions before running it.
for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// 4. Write a for loop that outputs only prime numbers between 0 and 100.

//don't forget to comment the code from the other questions before running it.
let flag = true;
let prime = true;

for (let i = 3; i < 100; i++) {

    if (flag) {
        console.log(2);
        flag = false;
    }

    if (i % i == 0 && i % 2 != 0) {
        for (let j = 3; j < i; j++) {
            if (i % j == 0) {
                prime = false;
            }
        }
        if (prime) {
            console.log(i);
        }
        prime = true

    }
}