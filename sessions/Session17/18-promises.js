function prepareOrderCB(dish, cb) {
    setTimeout(() => cb({ dish, status: "Prepared" }), 1000);
}

prepareOrderCB("chai", console.log);


// function pickUpOrderCB(order, cb) {
//     setTimeout(() => cb(...order), 1000);
// }

// function deliverOrderCB(order, cb) {
//     setTimeout(() => cb(...order), 1000);
// }

// // // Promise callBack Loops
// // prepareOrderCB("Pizza", (dish) => {
// //     pickUpOrderCB(dish, (order) => {
// //         deliverOrderCB(order, (order) => {
// //             console.log(order);
// //         });
// //     });
// // });


// // Using Promise
// function prepareOrder(dish) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!dish) reject("Dish not found");
//             console.log("Dish is ready ...")
//             resolve({ dish, status: "Prepared" });
//         }, 1000);
//     });
// }

// prepareOrder("Chai")
//     .then((dish) => pickUpOrder(dish))
//     .then((order) => deliverOrder(order))
//     .catch((error) => console.log(error));

