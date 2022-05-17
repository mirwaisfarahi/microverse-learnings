
// Lopp Statements in JS:

// A. While Loop: 
const ourArray = [];
let i = 0;

while (i < 5) {
    ourArray.push(i);
    i++;
}

// B. For Loop
const ourArray = [];

for (let i = 0; i < 5; i++) {
    ourArray.push(i);
}

// Example 1: Iterate Odd Numbers With a For Loop
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
// Example: Count Backwards With a For Loop
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

//Example 3: Iterate Through an Array with a For Loop
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Nesting For Loops:
const arr = [
    [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

// C. Iterate with JavaScript Do...While Loops
const ourArray = [];
let i = 0;

do {
    ourArray.push(i);
    i++;
} while (i < 5);
