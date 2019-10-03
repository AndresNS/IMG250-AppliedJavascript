"use strict";

let animal = {
	hungry: false,
	sound: "Silence...",
};

const dog = Object.create(animal);
dog.name = "Rover";
dog.sound = "Woof!";

let snake = Object.create(animal);
snake.name = "Rumplesnakeskin";
snake.hungry = true;

call(snake);


function feed(animal) {
	let food = prompt("What type of food do you have?");
	alert(`Feeding the ${animal.name} some ${food}...`);
	animal.hungry = false;
}

function call(animal) {
	alert(`Here, ${animal.name}!`);
	alert(animal.sound);
	if (animal.hungry) {
		feed(animal);
	}
}




//This part is difficult, and there may not be any satisfying answers, but dig around a little to see what you can find.
//Warning: Don't spend more than is reasonable on this - remember this is an ungraded lab, and is primarily for practice. But I will stress again *there may not be a good solution to this 'problem'*
/* Instuctions:
	1. Run the code as is, check the value of 'snake' in the console after the page loads
	2. Try directly removing snake by using 'snake = null' in various places (inside and outisde of the function)
	3. Use console messages to see if you can piece together what might be happening
*/

function remove(animal) {
	animal.isNull = true;
	
}

remove(snake);	
