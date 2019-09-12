let four = 4;
let fifty = 50;

var array = [four, fifty];

var sumIsPositive = true;

function range(start, end, step) {
	var newArray = [];
	step = step != null ? step : 1;
	let i = start;
	newArray.push(i);
	while (i !== end) {
		i += step;
		newArray.push(i);
	}
	return newArray;
}

function sum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i--) {
		sum += arr[i];

	}
	return sum;
}

var finalStatement = 'The sum is: ';

console.log(finalStatement + sum);
console.log(`And it is ${sumIsPositive} that sum is positive.`);
