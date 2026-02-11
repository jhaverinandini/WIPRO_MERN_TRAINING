document.writeln("JavaScript Variables");

let age =40;  // Number
const myName = "Niti" // String
var isTrue = true ; // boolean

console.log(typeof(age));
console.log(typeof(myName));
console.log(typeof(isTrue));

// Conversion -- Internal conversion is preferable

let score = "787";
let toIntScore = Number(score); 

let average = toIntScore/5;
console.log("Average is : " + average);

// suppose you are creating a user registration form for a website, the form should
//capture the username , age and isSubscribed or not and you need to check whether
//the provided data matches the expected types 
