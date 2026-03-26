class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    login() {
        console.log("Logged In")
    }
}


class Admin extends User {
    constructor(name, age, isAdmin) {
        super(name, age)
        this.isAdmin = isAdmin
    }

    deleteUser() {
        console.log("Deleted User")
    }
}

const admin = new Admin("Suraj", 30, true)

console.log(admin.name)
console.log(admin.age)
console.log(admin.isAdmin)