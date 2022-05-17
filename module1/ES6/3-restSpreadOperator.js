
//rest and spread operator
// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
/*
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
*/
const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(10, 20));

// Use the Spread Operator to Evaluate Arrays In-Place:
// Below use apply() to compute the max value 
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // // return 89

//But we use the spread operator whicb looks much better than above code. Spread operator will unpack or spread the array and return the maximum value.

//argument to a function
var spreadMax = Math.max(...arr);
console.log(spreadMax); // return 89

function sumFunction(x, y, z) {
    console.log(x + y + z);
}

var sumArray = [1, 2, 3, 4];
sumFunction(...sumArray); // returns 6

//spread operator only work in-place like an argument to a function or in an array literal. The following code will not work
//var spreadArray = ...arr;

//spread operator in an array literal
var arr1 = [10, 20, 30];
var arr2 = [...arr1];
var arr3 = [5, ...arr1];
var arr4 = [arr1, arr2, arr3, 40, 50, 60];
console.log(arr4);


