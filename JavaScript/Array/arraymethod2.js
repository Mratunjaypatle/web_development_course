// concat -> add two arrays and returns new array

let color1 = ["blue" , "red" , "green"];
let color2 = ["black" , "white" , "purple"];

let newColor = color1.concat(color2) 
console.log(newColor);


// reverse -> it is used to reverse an array and it does not return new array

let carName = ["BMW" , "TATA" , "MARUTI"];

console.log(carName.reverse());

// slice -> It copies a portion of an array.

let marks = [90 , 98 , 78, 89, 95];
console.log(marks.slice(0,4));


// splice -> It is used to perform
//  multiple tasks (removes , replace , add elements)

// array.splice(startIndex, deleteCount, item1, item2, ...itemN)   

let cities = ["mumbai" , "kolkata" , "indore" , "vizag" , "Delhi"]

cities.splice(3,1)
console.log(cities);
cities.splice(0,0,"mumbai", "Delhi")

// sort -> it is used to apply a sorting on array.

let sortArray = [8,9,6,7,3,1,2];
sortArray.sort();
console.log(sortArray);