// Write Concise Declarative Functions with ES6:
const person1 = {
    name: 'Mirwais Farahi',
    display: function () {
        return `My name is ${this.name}`
    }
};
console.log(person1.display())

//we can remove function keyword and colon in ES6 as follows
const person2 = {
    name: 'Mirwais Farahi',
    display() {
        return `My name is ${this.name}`
    }
};
console.log(person2.display());

//Another Example:
const bicycle1 = {
    gear: 2,
    setGear: function (newGear) {
        this.gear = newGear;
    }
};
bicycle1.setGear(3);
console.log(bicycle1.gear);

//Use the concise way of setGear function
const bicycle2 = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle2.setGear(3);
console.log(bicycle2.gear);

//Use class Syntax to Define a Constructor Function: ES6 provides a new syntax to create objects, using the class keyword.

//In ES5, we usually define a constructor function and use the new keyword to instantiate an object.
let planetClass1 = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}
const objectPlanet = new planetClass1('Jupyter Planet');
console.log(objectPlanet);

//The class syntax simply replaces the constructor function creation:
class PlanetClass2 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const objectPlanet2 = new PlanetClass2('jupyter');
console.log(objectPlanet2);

//Example: Use the class keyword and write a constructor to create the Vegetable class.
//The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

class Vegetable {
    constructor(name) {
        this.name = name
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// Use getters and setters to Control Access to an Object:
//Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
//Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

//Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.

class Book {
    constructor(author) {
        this._author = author;
    }
    get writer() {
        return this._author;
    }
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

const objectBook = new Book('Mirwais');
console.log(objectBook.writer); // return Mirwais
objectBook.writer = 'Mirwais Farahi';
console.log(objectBook.writer); // return Mirwais Farahi

/*
Example:
Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.
Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
In other words, you are abstracting implementation details from the user.
*/
class Thermostat {
    constructor(temperatur) {
        this.temperatur = temperatur;
    }
    get temperature() {
        this.temperatur = 5 / 9 * (this.temperatur - 32);
        return this.temperatur;
    }
    set temperature(celsiusTemperatur) {
        this.temperatur = celsiusTemperatur * 9.0 / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
