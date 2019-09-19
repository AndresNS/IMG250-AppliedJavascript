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
for (let i=0; i<10; i++){
    //Adding objet properties individually
    let obj = {};
    obj["first"] = i;
    obj["second"] = i*10;
    obj["third"] = i/3.14;

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
},{
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