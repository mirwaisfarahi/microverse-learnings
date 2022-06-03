//Create Strings using Template Literals: To create complex multi-line string. Use backstick operator and variebles can be added using ${} operator.
const person = {
    name: 'Mirwais',
    age: 29,
    designation: 'Software Developer'
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old and I work as a ${person.designation}.`;

console.log(greeting);

/*
Example: Use template literal syntax with backticks to create an array of list element (li) strings. 
Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. 
The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];

    for (let i = 0; i < 3; i++) {
        const str = `<li class="text-warning">${arr[i]}</li>`
        failureItems.push(str);
    }

    return failureItems;
}
const failuresList = makeList(result.failure);

//Write Concise Object Literal Declarations Using Object Property Shorthand: ES6 adds some nice support for easily defining object literals.
// Consider the following code
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

/*
getMousePosition is a simple function that returns an object containing two properties. 
ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. 
*/

//Here is the same function from above rewritten to use this new syntax:
const getMousePosition1 = (x, y) => ({ x, y });

//Example: Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson1 = (name, age, gender) => {
    // Only change code below this line
    return {
        name: name,
        age: age,
        gender: gender
    };
    // Only change code above this line
};

// To use object property shorthand with object literals.
const createPerson2 = (name, age, gender) => ({ name, age, gender });