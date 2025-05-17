let age = "10abc"

console.log(typeof age);
console.log(typeof(age));

let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "10" => 10
// "10abc" => NaN
// true => 1; 
// false => 0;

let isLoggedIn = "AVI"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "AVI" => true

let someNumber = 10
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);