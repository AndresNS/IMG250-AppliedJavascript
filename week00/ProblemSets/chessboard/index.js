//The following code produces a 'chessboard' made of # symbols in the console
const SIZE = 16;
let newStr = "";
for (let i=0; i<SIZE; i++) {
	for (let j=0; j<SIZE; j++) {
		newStr += (i+j)%2==0 ? " " : "#";
	}
	newStr += "\n";
}
console.log(newStr);