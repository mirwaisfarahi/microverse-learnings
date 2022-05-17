// Use an Array to Store a Collection of Data:
// 1. One-dimentional array
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);

// 2. A more complex implementation of an array can be seen below. 
//This is known as a multi-dimensional array, or an array that contains other arrays. Notice that this array also contains JavaScript objects.
let complexArray = [
    [
        {
            one: 1,
            two: 2
        },
        {
            three: 3,
            four: 4
        }
    ],
    [
        {
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ]
];

// Access an Array's Contents Using Bracket Notation:
let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];
ourArray[1] = "not b anymore";

// Add Items to an Array with push() and unshift(): arrays are mutable and we can modify them using unshift() and push() methods.
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX'); // add at beginning
romanNumerals.push(twentyThree); // add at end of the array

// Remove Items from an Array with pop() and shift():
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop(); // remove from the end
greetings.shift(); // remove from the begining

let popped = greetings.pop(); // the removed element from array is stored in popped variable.

// Remove Items Using splice(): To remove any number of consecutive elements from anywhere in an array.
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
// Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

// Copy Array Items Using slice(): slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. 
// slice() takes only 2 parameters: start index and end index (excluded from new array)
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3); // return ['snow', 'sleet']

// Copy an Array with the Spread Operator: It copies everything from the array to a new array.
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

// Example: We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. 
// The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. 
// Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

// Check For The Presence of an Element With indexOf(): It allows us to quickly and easily check for the presence of an element on an array
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates'); // return -1
fruits.indexOf('oranges'); // return 2

// Iterate Through All an Array's Items Using For Loops: Various methods are there to iterate over array such as every(), forEach(), map(), etc.) but,
// most most flexible and offers us the greatest amount of control is a simple for loop.

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

// Example: We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. 
// elem represents an element that may or may not be present on one or more of the arrays nested within arr. 
// Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Create complex multi-dimensional arrays:
let nestedArray = [
    ['deep'],
    [
        ['deeper'], ['deeper']
    ],
    [
        [
            ['deepest'], ['deepest']
        ],
        [
            [
                ['deepest-est?']
            ]
        ]
    ]
];
// The deep array is nested 2 levels deep. The deeper arrays are 3 levels deep. The deepest arrays are 4 levels, and the deepest-est? is 5.

console.log(nestedArray[2][1][0][0][0]); // This logs the string deepest-est?
// And now that we know where that piece of data is, we can reset it if we need to:
nestedArray[2][1][0][0][0] = 'deeper still';
