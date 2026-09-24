/*
Nested if - nested itself defines a thing inside same in its present , we can perform multiple if inside a if..
*/

// marks > 33 -> Pass 
// marks > 50 -> Grade A 
// marks < 33 -> fail 

let marks = 20

if (marks > 33) {
    console.log("Pass");
    if (marks > 50) {
        console.log("grade A");
    }
}
else {
    console.log("fail");
}

let age = 10
let isRegister = false

if (age >= 18) {
    if (isRegister) // true 
    {
        console.log("you are eligible to vote");
    }
    else {
        console.log("you are old enough ,but registration is mandatory..");
    }
}
else {
    console.log("you must be at least 18 year old..");
}


// create a trafiic light system , which shows what to do based on light..

// red , green and yellow

let color =  prompt("Enter the color...")


if (color == "red") {
    console.log("stop");
} else if (color == "green") {
    console.log("go");
} else if (color == "yellow") {
    console.log("wait , slow down");
} else {
    console.log("invalid color..");
}

// prompt - > prompt is used to take input from the user.. , it always takes data as text string , for numbers we use number()

// let word = prompt("Enter the word")
// console.log(word);
 
