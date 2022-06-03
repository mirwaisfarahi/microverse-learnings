/*
 Create a Module Script:
In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. 
This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. 
In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:
*/

<script type="module" src="filename.js"></script>

// Use export to Share a Code Block: To use a function in several places intead of re-writing the code. With the export keywork we can use many functions
// in other places wihtout re-writing the function.

export const add = (x, y) => {
    return x + y;
}
// or u can write the function the export it as follows 

const addition = (x, y) => {
    return x + y;
};
export { addition };

//we can export many functions at once as well
const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export { uppercaseString, lowercaseString }

// Reuse JavaScript Code Using import:
//import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. 
//Here's how you can import it to use in another file:
import { add } from './math_functions.js';

//we can also import multiple functions using single import keywork
import { add, substract } from './math_functions.js';

//Another example:
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

// Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax.

import * as myMathModule from "./math_functions.js";

//The myMathModule is an object which contains all the functions from the math_function.js file. functions could be accessed from myMathModule same way
// as accessing from any object.
const addNumbers = myMathModule.add(3, 5);
const substractNumbers = myMathModule.substract(10, 5);

// Create an Export Fallback with export default: 
// There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. 
// It is also used to create a fallback value for a file or module.

export default function add(x, y) {
    return x + y;
}
//or anonymous function
export default function (x, y) {
    return x + y;
}

// Import a Default Export:
// To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it:

import add from "./math_functions.js";

// The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. 
// We can use any name here when importing a default.

// ANother Example:
import subtract from "./filename.js";

substract(20, 10);

