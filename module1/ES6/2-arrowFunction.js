/*
Use Arrow Functions to Write Concise Anonymous Functions:
In JavaScript, we often don't need to name our functions, 
especially when passing a function as an argument to another function. Instead, we create inline functions.
syntax:
const myFunc = function() {
  const myVar = "value";
  return myVar;
}

we can use arrow function to write anynomous functions which makes it more attractive and less code.
arrow function syntax:
const myFunc = () => {
    const myVar = "value";
    return myVar;
}

Even we can ommit the return and function body and braces using arrow function
const myFunc = () => 'value';

Example:
var magic = function() {
  return new Date();
};
change it to arrow function
*/
const magic = () => new Date();

//Write Arrow Functions with Parameters:
const double = (item) => item * 2;
console.log(double(3));

//if there is single paramter, we can omit the paranthesis
const double1 = item => item * 2;
console.log(double1(4));

const multiplier = (item, multi) => item * multi;
console.log(multiplier(4, 2));


//Set Default Parameters for Your Functions: 
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

// Use the Rest Parameter with Function Parameters:
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

const arrWithRest = (...arr) => arr;
console.log(arrWithRest(null, [1, 2, 3], 'mir'));


