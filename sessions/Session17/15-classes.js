class Cricketer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.startedPlaying = false;
    }

    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}


class Debutant {
    constructor(name) {
        this.name = name;
        this.walkout = () => {
            console.log(`${this.name} is walking out.`);
        }
    }
}

player1 = new Cricketer("Virat Kohli", 33);

let debutant1 = new Debutant("Rohit Sharma");
let debutant2 = new Debutant("Shikhar Dhawan");

console.log(debutant1.walkout === debutant2.walkout) // false

const someOneIsWalkingOut = debutant1.walkout;
console.log(someOneIsWalkingOut());



