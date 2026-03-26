// const user1 = {
//     name: "John",
//     age: 30,
//     increment() {
//         this.age++
//     }
// }

// const user2 = Object.create(user1);

// console.log(user1);
// console.log(user2);
// console.log(user1.increment())

function User(name, age) {
    this.name = name
    this.age = age
}

User.prototype.increment = function () {
    this.age++
}


let user1 = new User('Suraj', 30)
let user2 = new User('Vedant', 20)

first = (user1.__proto__ === User.prototype);
console.log(first)

// use if instanceof the object is an instance of a class



let result_user1 = user1 instanceof User
let result_user2 = user2 instanceof User
console.log(result_user1)
console.log(result_user2)