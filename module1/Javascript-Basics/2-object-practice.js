/*
Challenge 1:
You are given an object literal representing a part of your musical album collection. 
Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop 
(like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

1. Your function must always return the entire record collection object.

2. If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.

3. If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.

4. If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.

5. If value is an empty string, delete the given prop property from the album.

*/

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};


function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== '') {
        records[id][prop] = value;
    }
    else if (prop === 'tracks' && !records[id].hasOwnProperty('tracks')) {
        records[id][prop] = [value];
    }
    else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') && value !== '') {
        records[id][prop].push(value);
    }
    else {
        if (value === '') {
            delete records[id][prop];
        }
    }
    return records;
}

updateRecords(recordCollection, 5439, 'tracks', '2005');

//console.log(recordCollection['5439']);


/*
Challenge 2: Profile Lookup

We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

1. If both are true, then return the "value" of that property.

2. If name does not correspond to any contacts then return the string No such contact.

3. If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

*/
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile1(name, prop) {
    let result = '';

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
            result = contacts[i][prop];
            break;
        }
        else {
            if (contacts[i].firstName !== name) {
                result = 'No such contact';
            }
            else {
                result = 'No such property';
                break;
            }
        }
    }
    return result;
}

//Or Another Solution

function lookUpProfile2(name, prop) {
    let result = '';
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                result = contacts[i][prop];
            }
            else {
                result = 'No such property';
            }
        }
    }
    if (result === '') {
        result = 'No such contact';
    }
    return result;
}

//console.log(lookUpProfile1("Kristian", "address"));
