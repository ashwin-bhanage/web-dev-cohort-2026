// call and apply ---> basic kitchen
function cookDish(ing, dishes) {

}
// binds gives output as function, and apply gives output as value.

// to implement call and apply we need bind

// bind is used to create a copy of a function

// call and apply are used to invoke a function

// note that if you have array with data ---> use the apply() method.

// Assignment for the spread operator in apply method


function reportDelivery(location, status) {
    return `Delivery to ${location} is ${status}.`
}

const deliveryBoy = {name:"Ranveer"}

console.log("Call: ", reportDelivery.call(deliveryBoy, "Pune", "Shipped"));
console.log("Apply: ", reportDelivery.apply(deliveryBoy, ["Mahad", "Pick up"]));
console.log("Bind: ", reportDelivery.bind(deliveryBoy, "DelhiByBind", "Pick up"));

const bindReport = reportDelivery.bind(deliveryBoy);
console.log(bindReport("Mumbai", "Delivered"));

