// Use Destructuring Assignment to Extract Values from Objects: A syntax introduced by ES6 to assign values directly from objects. 

const user = { name: MIrwais, age: 29 };
const name = user.name;
const age = user.age;

//the above code using destructing syntax it looks much better as follows.
const { name, age } = user;

// Use Destructuring Assignment to Assign Variables from Objects: Destructuring allows us to assign a new variable name when extracting values from an object.

//To use the above example, we'll assign the value of name to userName and age to userAge.
const { name: userName, age: userAge } = user;

//Use Destructuring Assignment to Assign Variables from Nested Objects: we can use the above two methods for nested objects as well.
const user = {
    MirwaisFarahi: {
        age: 29,
        birth_place: 'Farah',
    }
};

const { MirwaisFarahi: { age, birth_place } } = user;

//Also, we can assign new names for the variebles.
const { MirwaisFarahi: { age: MirwaisAge, birth_place: MirwaisBirth_place } } = user;
//console.log(MirwaisAge); // return 29

//Another example:
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

//Replace the two assignments with an equivalent destructuring assignment. 
//It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

//Use Destructuring Assignment to Assign Variables from Arrays: 
//One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. 
//Consequently, you cannot pick or choose which elements you want to assign to variables.

//Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // a = 1, b = 2, c = 5

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements: The result is similar to Array.prototype.slice(), as shown below:
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7]; // a = 1, b = 2, arr = [3,4,5,7]
console.log(arr); // returns [3,4,5,7]

//Use Destructuring Assignment to Pass an Object as a Function's Parameters: In some cases, you can destructure the object in a function argument itself.
const profileData = (profile) => {
    const { name, age, address } = profile;
}
//Also we can pass the arguments in-place
const profileData1 = ({ name, age, address }) => {
    //we can use the values of name, age and address here
}

//Example:
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const statsFunction1 = (stats) => (stats.max + stats.min) / 2.0;
console.log(statsFunction1(stats)); // returns 20.015

// Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const statsFunction2 = ({ max, min }) => (max + min) / 2.0;
console.log(statsFunction2(stats));