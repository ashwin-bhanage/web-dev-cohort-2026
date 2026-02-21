function TataMotors(chassisNumber, modelName) {
    this.chassisNumber = chassisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
}

TataMotors.prototype.displayInfo = function () {
    return `Chassis Number: ${this.chassisNumber}, Model Name: ${this.modelName}, Fuel Level: ${this.fuelLevel}`;
}

let car1 = new TataMotors(123, "Tata Nexon");
let car2 = new TataMotors(456, "Tata Harrier");

console.log(car1.displayInfo());
console.log(car2.displayInfo());





//  This below is not same as the above
// .
// .
// .

// in below the function gets its own copy of objects/references.
function createRoute(id, route) {
    return {
        id,
        route,
        routePath() {
            return `Auto ${this.id} is running on route ${this.route}`
        }
    }
}

let auto1 = createRoute(1, "Delhi to Mumbai");
let auto2 = createRoute(2, "Mumbai to Delhi");

console.log(auto1.routePath());
console.log(auto2.routePath());