"use strict";

let proceed = true;
let animals = [];
var animalCount = 0;
while (proceed) {
	let animal = {};
    
	try {
		animal.type = prompt("Enter a type of animal");
		if (animal.type === "") {
			throw(new Error("Empty string!"));
		}
	}
	catch(error) {
		console.error(error);
	}
	animal.name = prompt("Enter the name of the animal");
	animal.food = prompt("Enter the animal's favourite food");
	animal.tired = prompt("Is the animal tired?");
    
	animals[animalCount] = animal;
	animalCount += 1;

	if (animal.type == "" && animal.name == "" && animal.food == "" && animal.tired == "") { 
		proceed = false; 
	}
}


walk(animals);


function walk(animals) {
	var message = "";
	if (animals.length > 1) {
		var toWalk = [];
		for (var i=0;i<animals.length;i++) {
			if (animals[i].tired) {
				toWalk.push(animals[i]);
				animals[i].tired = true;
			}
		}
		message += "You take ";
		if (toWalk.length > 1) {
			for (let i=0;i<toWalk.length-1;i++) {
				message += "the " + toWalk[i].type + " named " + toWalk[i].name + ", ";
			}
			message += "and the ";
		}
		message += toWalk[toWalk.length-1].type + " named " + toWalk[toWalk.length-1].name +  " for a walk.";
	} else {
		if (!animals[0].exercised) {
			message += "You take the " + animals[0].type + " named " + animals[0].name + " for a walk.";
		}
	}
	if (message !== "") {
		alert(message);
	} else {
		alert("The animals are tired.");
	}
}