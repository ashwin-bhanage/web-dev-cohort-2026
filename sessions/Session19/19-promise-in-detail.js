// Callbacks are the things we have in JavaScript to handle asynchronous operations.

// CallStack can be said as the single-threaded and the Outsource is the place where the operations are being handled to other party. (Chef hai ji) ---> (isko hum dev's language me resolver bolte hai.)

// The queue is place with the callback function that are waiting to be executed after the current call stack is empty.(Waiter hai ji)

// Event loop is the process that checks the call stack and handle what will go in the callStack(Manager hai ji)

// Promise contain the operations like:

// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Promise decalration:
// let promise = new Promise((res, rej) => {
//     res("Promise is resolved")
// });
// console.log(promise)


// use of setTimeout():
// let promiseWithSetTimeout = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Promise")
//         // rej("Promise is rejected after 2 seconds using Timeout")
//     }, 2000);
// });

// use .then() to handle the resolved value for the promise:
// promiseWithSetTimeout.then((value) => {
//     console.log(`This is with the value: ${value}`)
// })

// for error
// promiseWithSetTimeout
//     .then((value) => {
//         newData = value.toUpperCase();
//         return newData;
//     })
//     .then((data) => {
//         return data.split("-")
//     })
//     .then(console.log)
//     .catch((error) => {
//         console.log(`Error Message: ${error}`)
//     })


// without the value (lambda function):
// promiseWithSetTimeout.then(console.log)


// .fetch() is a method thaat returns a promise and handle the promises for the callstack.

// Note that the fetch() method is the API calling or the oursourcing person for the Nodejs for the callstack and teh event loop to handle the operations and the queue for the callback functions.

// NOTE : the fetch() is not part of JS, they are the API part for the browser and nodejs.

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(`Error Message: ${error}`))