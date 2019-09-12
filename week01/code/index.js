"use strict";

//"use strict" makes the compiler more strict and helps us to debug more easily. With "use strict" enabled we can't declare accidental global variables.
//IMPORTANT: "use strict" must be the first thing in your js file, nothing else can precede it, or it won't work.
//Caveat (Advertencia): "use strict" can be used inside single functions or class bodies, but again, it must be the first thing in the body.

// npm init -f  initialize npm with default values. (Create package.json)
// npm install eslint --save-dev   (create node_modules and package-lock.json)
// .\node_modules\.bin\eslint --init   (create configuration file)

//python -m http.server


var a = 10;
var b = 100;

console.log(a + b);