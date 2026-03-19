const parent = document.getElementById("parent");

const child = document.getElementById("child");

const body = document.body;

// body.addEventListener(
//     "click",
//     function () {
//         console.log("Body Clicked !!");
//     },
//     true
// );

child.addEventListener(
    "click",
    function () {
        console.log("Child Clicked !!");
    },
    true
);

parent.addEventListener(
    "click",
    function () {
        console.log("Parent Clicked !!");
    },
    false,
);

// body.addEventListener(
//     "click",
//     function () {
//         console.log("Body Clicked !!");
//     },
//     false
// );


// Event dilgation
const list = document.querySelector("#items-list");

list.addEventListener(
    "click", (e) => {
        if (e.target.tagName === "UL") {
            console.log(e.target.textContent);
        }
    }
)