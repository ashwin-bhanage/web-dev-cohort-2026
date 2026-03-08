// console.log("This is simple Console 1")
// Promise.resolve("Resolved Promise 1").then(console.log);
// console.log("This is simple Console 2")
// setTimeout(() => console.log("This is setTimeout 1"), 0);
// console.log("This is simple Console 3")
// Promise.reject("Rejected Promise 1").catch(console.log);


function boilWater(ms) {
    return new Promise((res, rej) => {
        console.log("Krte hai jin boil ...")
        if(typeof ms !== "number" || ms < 0) {
            rej("ms ki value to sahi jiye !!!")
        }
        setTimeout(() => {
            res("Pani Ubal gaya ji !!!")
        }, ms);
    })
}

// to resolution [phase 1]
// boilWater(2000).then(console.log).catch(console.log)

// to rejection [phase 2]
boilWater(-1000).then(console.log).catch(console.log)