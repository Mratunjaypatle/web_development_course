username = "viratkohli"
password = "virat@18"

const instagramDatabase =
{
    username: "viratkohli",
    password: "virat@17"
}

if (instagramDatabase.username === username && instagramDatabase.password === password) {
    console.log("user login successfully..");
}
else {
    console.log("user login unsuccessfully");
}

// conditional statement

// logical operators 
// AND OR NOT


let a = 10
let b = 20
let c = 30
if (c > a && c > b) {
    console.log("c is largest number");
} else {
    console.log("c is not largest number");
}

let aman = 100
let shyam = 200

if (aman > 300 || shyam > 300) {
    console.log("my work will done");
} else {
    console.log(" my work will not done..");
}

console.log(!false);


console.log("odd and even number program..");

let num = 110

if (num % 2 == 1) {
    console.log("odd number");
} else {
    console.log("even number");
}

// positive , negative number 

let number = +prompt("Enter the number")

if (number > 0) {
    console.log("positive number");
} else if (number < 0) {
    console.log("negative number");
} else {
    console.log("Zero");
}


