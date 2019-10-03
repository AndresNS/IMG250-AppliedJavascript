/****IMG 250 Week 2 Lab****/
/* To complete this lab write console messages of the type requested in the spaces provided. You will also need to include some if statements and some other data to complete this lab.*/


//A short program that produces a prompt for gathering user information, then stores it in various formats 

let fullName = prompt("Please enter your full name");
let firstIndex = fullName.indexOf(" ");
//Include console warning here to handle scenario where only a single name is entered
if (firstIndex == -1) {
  console.warn("Only a single name was entered.");
}

let secondIndex = fullName.indexOf(" ", firstIndex + 1);
//Include console warning here to handle scenario where only two names are entered
if (secondIndex == -1 && firstIndex != -1) {
  console.warn("Only two names were entered.");
}

// Extension: Use a series of if statements to correctly assign values to firstName etc. when the user does not conform to expectations (i.e. if the user enters only one name, note that it is always stored in 'lastName'. Assume for the purposes of this extension that if a single name is entered it is always a firstName, and if two names are entered they are always first and last names). 
let firstName;
let middleName;
let lastName;

if (firstIndex == -1 && secondIndex == -1) { //Only one name entered
  firstName = fullName;
  middleName = "Not entered";
  lastName = "Not entered";
} else if (firstIndex > 0 && secondIndex == -1) { //Two names entered
  firstName = fullName.substring(0, firstIndex);
  middleName = "Not entered";
  lastName = fullName.substring(firstIndex + 1);
} else { // three names entered
  firstName = fullName.substring(0, firstIndex);
  middleName = fullName.substring(firstIndex + 1, secondIndex);
  lastName = fullName.substring(secondIndex + 1);
}

let program = prompt("What program are you in?");
let gradYear = prompt("What year do you expect to graduate?");

//Include console error here to address scenario where a non-numeric value is entered for gradYear
if(isNaN(gradYear)){
console.error("Error: you must entered a numeric value for Graduation Year.");
}

let numCourses = prompt("How many courses are you currently taking?");
//Include console error here to address scenario where a non-numeric value is entered for numCourses
if(isNaN(gradYear)){
  console.error("Error: you must entered a numeric value for the number of courses.");
  }

let currentCourses = [];
for (let i = 0; i < numCourses; i++) {
  currentCourses.push(prompt("Enter the name of one of the courses you are currently taking"));
};

let student = {
  firstName: firstName,
  middleName: middleName,
  lastName: lastName,
  program: program,
  gradYear: gradYear,
  numCourses: numCourses,
  currentCourses: currentCourses,
};


//Include console table output here, including the student's last name, graduation year, and the number of courses the student is currently enrolled in.
console.table(student);

//Include console group output here, listing all courses the student is currently enrolled in
let label = "Current Courses";
console.group(label);
console.log(currentCourses[0]);
console.log(currentCourses[1]);
console.log(currentCourses[2]);
console.groupEnd(label);


//Include a custom style console message here. The console.log output should be something like "We're looking forward to seeing Ashley graduate in 2021!" Use template literals to define the string, and choose at least two CSS style changes to make, using the same approach as in the assigned reading.

console.log(`%c We're looking forward to seeing ${fullName} graduate in ${gradYear}!`, 'background: #0d7d91; color: #fff; padding: 15px 20px; font-family: arial; font-size: 2em;');
