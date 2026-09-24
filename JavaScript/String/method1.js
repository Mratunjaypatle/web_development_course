let str = "Hello World"
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let word = '   JavaScript  '
console.log(word.trim());

let password = "      hello123"
let storedPassword = "hello123";

if (password.trim() === storedPassword) {
  console.log("user login successfully..");
} else {
  console.log("user login unsuccessfully..");
}

// String with arguements
// indexOf -> it returns the first number of starting the arguement
let text = "ilovejs"
      //    0123456
 
console.log(text.indexOf("s"));

// method chaining -> we can perform multiple methods with a single string..

let methodChaining = "   This is JS class   ";

console.log(methodChaining.trim());


// slice() -> Returns a part of the original string as a new string using indexes 

let myString = "I love India";
//              12345678910
let newString = myString.slice(7,12) 

console.log(newString);


let myWord = "India is adorable country";

let newWord = myWord.slice(9,17)

console.log(newWord);

// Replace -> searches a value in the string then returns a new string with the replaced value
let ReplacedWord = myWord.replace("adorable" , "inventing")
console.log(ReplacedWord);

let repeatWord = "Mango "
console.log(repeatWord.repeat(3));


// split -> It splits all words from a sentence in an array

let sentence = "I do coding everyday"
console.log(sentence.split(" "));


/* Methods that can be performed on an object 
  format -> string.method()

  String is immutable 
  It is defined as when we initialise a string then we can not change string , we have to declare new string..
  */