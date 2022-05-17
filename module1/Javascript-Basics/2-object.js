/*
Build JavaScript Objects:
Objects are similar to arrays, except that instead of using indexes to access and modify their data, 
you access the data in objects through what are called properties.

*/

let car = {
    model: 'BMW',
    price: [65343, 23645, 7567],
    coolor: 'black'
};

//OR
const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};

//OR
const anotherObject = {
    make: "Ford",
    5: "five", // However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
    "model": "focus"
};

// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
console.log(car.price);
//OR
console.log(car['price']);
// console.log(car[price]); //Error, price is not defined.

//The bracket notation ([]) is mostly used when there is a space in the name of an ibject property. But can be used when no space as well.
const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};
console.log(myObj["Space Name"]);

//Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
//This can be very useful for iterating through an object's properties or when accessing a lookup table.
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};
let dog = 'Hunter';
let myDog = dogs[dog];

//Another example
let person = {
    personName: 'Mirwais'
}

function personFunction(str) {
    let s = 'person';
    return s + str;
}
let name = personFunction('Name');
let myName = person[name];
console.log(myName);

//Updating Object Properties: since it is a variable, can be updated using objectName.Property = newValue OR objectName[''] = newValue
//Add New Properties to a JavaScript Object: it is performed the same way as an object is updated. Below example:
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.bark = "bow-wow";
console.log(ourDog); //it will print the new property bark as well in the object.

//Delete Properties from a JavaScript Object: using delete keyword, we can delete a property from an object.
delete ourDog.bark;
console.log(ourDog); //it will delete bark property from the object.

//Using Objects for Lookups: we can use object as a key:value pair instead of switch or if/else statenement when the number of conditions are limited and
//know. Example: Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

function swtichFunction(val) {
    let result = "";
    switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }
    return result;
}
//Changing above swtich statement in function to object

function objectFunction(val) {
    let result = '';

    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}
console.log(objectFunction('alpha'));

//Testing Objects for Properties: We can use the .hasOwnProperty(propname) method to check even an object has that particular property.
const myObj2 = {
    top: "hat",
    bottom: "pants"
};
console.log(myObj2.hasOwnProperty('top')); //return true

//in a function
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        //return obj.checkProp; // will not work, return undefined. use culy braces intead.
        return obj[checkProp];
    }
    else {
        return "Not Found";
    }
}
console.log(checkObj(myObj2, 'left')); //return Not Found
console.log(checkObj(myObj2, 'top')); //return hat


// Manipulating Complex Objects: A JavaScript object is one way to handle flexible data. 
//They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects. Below Example:
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Mirwais Farahi",
        "title": "Guitar Man",
        "release_year": 2021,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": false
    }
];

//Accessing Nested Objects: The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
const myObj3 = {
    'outer-1': {
        'inner-1': 'val-1'
    },
    'outer-2': {
        'inner-2': {
            'prop1': 'val-2',
            'prop2': 'val-3'
        },
        'inner-3': 'val-4'
    }
};
console.log(myObj3['outer-2']["inner-2"]); // return { 'property-1': 'val-2', 'property-2': 'val-3' }
console.log(myObj3['outer-2']["inner-2"]['prop1']); // return val-2
//OR
console.log(myObj3['outer-2']["inner-2"].prop2); // return val-3

//Another Example: Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. 
// Use dot notation for all properties where possible, otherwise use bracket notation.
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside['glove box'];

//Accessing Nested Arrays: Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.
const arrAnimals = [
    {
        'type': 'cat',
        'name': [
            'foo',
            'starling',
            'catty'
        ]
    },
    {
        'type': 'dog',
        'name': [
            'pofo',
            'fefo'
        ]
    }
];
console.log(arrAnimals[1].name[0]); //return pofo
