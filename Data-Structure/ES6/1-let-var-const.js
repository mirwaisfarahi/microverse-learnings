
// Compare Scopes of the var and let Keywords: let is only accessed inside the block statement that is declared.

//var:
var numArray = [];
//var i;
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i); //return 3


var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo());
// prints 3. This is because the value assigned to i was updated and the printNumTwo() returns the global i 
//and not the value i had when the function was created in the for loop. 

//let:
let printNumberTwo;
for (let j = 0; j < 3; j++) {
  if (j === 2) {
    printNumberTwo = function () {
      return j;
    };
  }
}
console.log(printNumberTwo()); // return 2
// console.log(j); //Error j is not defined
// j is not defined because it was not declared in the global scope. It is only declared within the for loop statement

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i); // return Block scope i is:  block scope
  }
  console.log('Function scope i is: ', i); // return Function scope i is:  function scope
  return i; // return function scope
}
console.log(checkScope());

//const:
const arr = [10, 20, 30];
// arr = [1,2,3]; // Assignment to constant variable it is not possoble for reassignment
arr[2] = 45; //still mutation is possible with array, object and function while declared with const keyword.
console.log(arr);
// Some developers prefer to assign all their variables using const by default, 
//unless they know they will need to reassign the value. Only in that case, they use let.

//Prevent Object Mutation: use Object.freeze(objectName) to freeze object from mutation so that no one can change its value.
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // not possible to mute once freezed
obj.newProp = "Test"; // not possible to mute once freezed
