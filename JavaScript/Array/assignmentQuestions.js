//  WAP to get last n element of an array 
let arr = [1, 2, 3, 6, 12, 31, 45];
let n = 5

console.log(arr.slice(arr.length - n)); // 2

// WAP to check wheter a string is blank or not
let str = "";
let newStr = str.trim();

if (newStr == "") {
    console.log("string is blank");
} else {
    console.log("String is not blank");
}

let myName = "hello";
let newStrName = myName.toLowerCase(); // hello

if (myName === newStrName) {
    console.log("String is in lower case");
} else {
    console.log("String is not in lower case");
}

// WAP to check if an element exists in an array on not

let myArr = [10, 300, "Rohan", "Sumit"];
let findElement = "Rohan";

if (myArr.indexOf(findElement) == -1) {
        console.log(`${findElement} does not exit in my array..`);
}else{
    console.log(`${findElement} exits in my array..`);
}

 
