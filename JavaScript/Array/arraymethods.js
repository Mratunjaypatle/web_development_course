let arr = [10, 20, 30]
// push -> add elements in the end of array

arr.push(40)
console.log(arr);

let fruits = ["apple", "banana", "mango"]

// fruits.push("pineapple")


// pop -> deletes elements from end of the array and return the value
fruits.pop();
console.log(fruits);


// unshift -> adds elements on the start of the array
let arr2 = [2, 3, 4, 5];
arr2.unshift(1)
console.log(arr2);

// shift -> deletes elements from start of the array and return the value

// 1 2 3 4 5 
arr2.shift();
console.log(arr2);


let months = ["january" , "february" , "march" , "april"]
// let months = ["may" , "june" , "july" , "august"]

// first way to solve it 
// without methods
// months[0] = "may"
// months[1] = "june"
// months[2] = "july"
// months[3] = "august"

// use of methods 
console.log("original months are ");
console.log(months);
months.push("may")
months.push("june")
months.push("july")
months.push("august")

months.shift()
months.shift()
months.shift()
months.shift()

console.log("changes months are ");
console.log(months);
