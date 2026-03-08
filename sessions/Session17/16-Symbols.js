// Symbols are used to hide the internal properties of an object.
// Symbols are not visible to the user
// Symbols are unique and cannot be duplicated.




const aadharOfPiyush = Symbol("aadhar");
const aadharOfVedant = Symbol("aadhar");

console.log("Typeof aadharOfPiyush: ",typeof aadharOfPiyush);

console.log(aadharOfVedant === aadharOfPiyush);

console.log("ToString output: ", aadharOfPiyush.toString());
console.log("Description: ",  aadharOfPiyush.description);



// New example
const biometricHash = Symbol("biometricHash");
const bloodGroup = Symbol("bloodGroup");

const person1 = {
    name: "Piyush",
    // the Symbol can be used as key are not visible to the user
    [biometricHash]: "123456789",
    [bloodGroup]: "O+",

    introduce() {
        return `My name is ${this.name} and my biometric hash is ${this[biometricHash]} and my blood group is ${this[bloodGroup]}`
    }
}

console.log("Person Info: ", person1.introduce());

// to get the Symbol for the object(person1)
console.log(Object.getOwnPropertySymbols(person1));


const rtiQuery = {
    queries : ["Rights for person", "Ration Card", "Income tax"],
    // using iterator to iterate
    [Symbol.iterator]() {
        index = 0;
        const queries = this.queries;
        return {
            next() {
                if (index < queries.length) {
                    return {
                        value: queries[index++],
                        done: false
                    }
                }
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

// using simple For-Loop to iterate
for(let query of rtiQuery.queries) {
    console.log(`Filing RTI query: ${query}`);
}

// Symbol needs and this hint wla concept to do.

const govtSchema = {
    name: "PM Yojana",
    people: 35,
    [Symbol.toPrimitive](hint) {
        if (hint === "string") return `Coverting to string : ${this.name}`;
    }
};
