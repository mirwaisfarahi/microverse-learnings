// Add Key-Value Pairs to JavaScript Objects: At their most basic, objects are just collections of key-value pairs. 
// In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys).

const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};

// to add an additional property, such as "origin"
tekkenCharacter.origin = 'South Korea';

// or
tekkenCharacter['hair color'] = 'dyed orange';

// or
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';

// Modify an Object Nested Within an Object:
let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13,
            busy: 8
        }
    }
};

//to modify busy property
nestedObject.data.onlineStatus.busy = 10;

// Access Property Names with Bracket Notation:
// Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.

// Example: We've defined a function, checkInventory, which receives a scanned item as an argument. 
// Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem]
    // Only change code above this line
}

console.log(checkInventory("apples")); // return 25

// Use the delete Keyword to Remove Object Properties:
// In earlier challenges, we have both added to and modified an object's key-value pairs. Here we will see how we can remove a key-value pair from an object.
// Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using the delete keyword like this:

delete foods.apples;

// Check if an Object has a Property: One uses the hasOwnProperty() method and the other uses the in keyword. 
//If we have an object users with a property of Alan, we could check for its presence in either of the following ways:
const users1 = {
    Alen: {
        age: 30,
        address: 'Afghanistan'
    }
};
console.log(users1.hasOwnProperty('Alen')); // return true
//or
const checkUser = 'Alen' in users1;
console.log(checkUser); // return true

// Example: Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

let users2 = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    if (userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEveryoneHere(users2)); // return true

// Iterate Through the Keys of an Object with a for...in Statement: We use for...in statement to iterate over an object properties. 
for (let user in users2) {
    //console.log(user); // it iterate over all properties of the users2 object
}

const users3 = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

//Example: We've defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. 
//An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.

const users4 = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    // Only change code below this line
    let counter = 0;
    for (let user in usersObj) {
        if (usersObj[user]['online'] === true) {
            counter += 1;
        }
    }
    return counter;
    // Only change code above this line
}
console.log(countOnline(users4)); // return 1

// Generate an Array of All Object Keys with Object.keys(): Use Object.keys() to return object properties or keys and Object.values() to return the 
// the values of object's properties.

// Example: Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.
let users5 = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users5)); // return [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

// Modify an Array Stored in an Object:
// The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. 
// We've started writing a function addFriend. 
// Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.

let user6 = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;

    //or it can be written as follows
    //userObj['data']['friends'].push(friend)
}

console.log(addFriend(user6, 'Pete')); // return [ 'Sam', 'Kira', 'Tomo', 'Pete' ]
