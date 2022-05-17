//Generate Random Fractions with JavaScript : 

//Random numbers are useful for creating random behavior.
// Math.random() function generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.
console.log(Math.random()); //return a number 

//Generate Random Whole Numbers with JavaScript: 
/*
    Use Math.random() to generate a random decimal.
    Multiply that random decimal by 20.
    Use another function, Math.floor() to round the number down to its nearest whole number.
*/

console.log(Math.floor(Math.random() * 20));
//Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. 
//This technique will give us a whole number between 0 and 19.


//Generate Random Whole Numbers within a Range: 
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }

console.log(randomRange(1,9));

//Use the parseInt Function: 
//The parseInt() function parses a string and returns an integer. 
//if the first character in the string can't be converted into a number, then it returns NaN.

function convertToInteger(str) {
    return parseInt(str);
  }

console.log(convertToInteger("056")); // return 56
console.log(convertToInteger("A056")); // return NaN

//Use the parseInt Function with a Radix: parseInt(string, Radix) function parses a string and return an integer can have a radix parameter as well.
// The radix can be an integer between 2 and 36 that says about the base of string conversion to integer.
const a = parseInt("11", 2); // The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

