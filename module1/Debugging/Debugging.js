/* 
Use the JavaScript Console to Check the Value of a Variable:
Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.
You can find Developer tools in your Chrome's menu or Web Console in Firefox's menu. 
If you're using a different browser, or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.

console.log() is the more usefull tool to check the value of a variable.
*/
let a = 5;
let b = 1;
a++;

console.log(a) // used console.log() to find our the value of variable a

let sumAB = a + b;
console.log(sumAB);

// Understanding the Differences between the freeCodeCamp and Browser Console:
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear(); // it clea the console in your browser

// Use typeof to Check the Type of a Variable: We can use typeof to check the data structure, or type, of a variable. 
// Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});

// Catch Misspelled Variable and Function Names: There are two common types of bugs. One syntax-level issue that fast typers can commiserate with is the humble spelling error.
// Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. 
// JavaScript variable and function names are case-sensitive.

// Catch Unclosed Parentheses, Brackets, Braces and Quotes:
// Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair.
// One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, then move the cursor back between them and continue coding.

// Catch Mixed Usage of Single and Double Quotes:
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
//const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';

// The first two are correct, but the third is incorrect.

// Example: 
//Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.
//let innerHtml1 = "<p>Click here to <a href="#Home">return home</a></p>"; // it is not correct, we should use single qoute for href because of double qoute for the whole string
let innerHtml2 = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml2);

// Catch Use of Assignment Operator Instead of Equality Operator:
// the assignment operator (=) in JavaScript assigns a value to a variable name. And the == and === operators check for equality (the triple === tests for strict equality, meaning both value and type are the same).
let x = 1;
let y = 2;
if (x = y) {
    console.log('Equal')
} else {
    console.log('Not Equal')

}
// The code below assigns x to be 2, which evaluates as true. it will print the if statement block. returns Equal

// Catch Missing Open and Closing Parenthesis After a Function Call:
function myFunction() {
    return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
// Here varOne is the function myFunction, and varTwo is the string You rock!. Always remember () after function name.

// Catch Arguments Passed in the Wrong Order When Calling a Function:
// Example: The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly. Needs to be fixed
function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
// base is passed for exp and vice versa.

// Catch Off By One Errors When Using Indexing:
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
    console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
    console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
    console.log(alphabet[k]);
}
// The first example here loops one too many times, and the second loops one too few times (missing the first index, 0). The third example is correct.

/*
Use Caution When Reinitializing Variables Inside a Loop:
Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. 
A potential issue is when variables either should be reinitialized, and aren't, or vice versa. 
Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable.

Example: 

The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. 
Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. 
Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
*/

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray


        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
/*output: 
  [ [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ] ] */
// This error occurs due to the row[] array being declared as a global variable outside of the nested for loop.
// However, to fill the matrix correctly the row[] array must be reset after each iteration of the outer loop.

function zeroArray2(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    // let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        let row = [];

        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix2 = zeroArray2(3, 2);
console.log(matrix2); // output: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]

// Prevent Infinite Loops with a Valid Terminal Condition:
// Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants and there should be a termination
// condition to stop the excution of the loop.
//Example: Do not execute the following function
function loopy() {
    while (true) {
        console.log("Hello, world!");
    }
}
