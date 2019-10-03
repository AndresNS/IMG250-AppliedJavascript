"use strict";

let proceed = true;
let animals = [];
while (proceed) {
	let animal = {};
	animal.type = prompt("Enter a type of animal");
	animal.name = prompt("Enter the name of the animal");
	animal.food = prompt("Enter the animal's favourite food");
	animal.tired = prompt("Is the animal tired?");

	animals.push(animal);

	if (animal.type == "" && animal.name == "" && animal.food == "") {
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
			for (i;i<toWalk.length-1;i++) {
				message += "the " + toWalk[i].type + " named " + toWalk[i].name + ", ";
			}
			message += "and the ";
		}
		message += toWalk[toWalk.length].type + " named " + toWalk[toWalk.length].name +  " for a walk.";
	} else {
		if (!animals[0].tired) {
			message += "You take the " + animals[0].type + " named " + animals[0].nome + " for a walk.";
		}
	}
	if (message !== "") {
		alert(message);
	} else {
		alert("The animals are tired.");
	}
}