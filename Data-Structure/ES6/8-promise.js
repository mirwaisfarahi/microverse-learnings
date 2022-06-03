/* Create a JavaScript Promise:
A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. 
When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. 
It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. 
*/

//Syntax
const myPromise = new Promise((resolve, reject) => {

});

/* Complete a Promise with resolve and reject:
A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. 
The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. 

These are methods that take an argument, as seen below.
*/
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve('We got the data')
    } else {
        reject('Data not received')
    }
});

/*
Handle a Fulfilled Promise with then:
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. 
When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. 
This can be achieved by using the then method. 
The then method is executed immediately after your promise is fulfilled with resolve.

Handle a Rejected Promise with catch:
catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. 
Here’s the syntax:

myPromise.catch(error => {
  
});

*/

// Add the then method to your promise. Use result as the parameter of its callback function and log result to the console. Also use catch for rejecttion.
makeServerRequest.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
})
//or
//makeServerRequest.then(result => {
  //  console.log(result);
 // });

 // or
/* makeServerRequest.then((result) => {
    console.log(result);
});

makeServerRequest.catch((result) => {
    console.log(result);
}); */