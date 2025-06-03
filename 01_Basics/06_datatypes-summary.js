// Primitive(07)- String, Number, Boolean, Null, undefined, Symbol(unique banane ke liye), BigInt(Scientific value jo bde no me ho)

const age = 10
const ageGap =1.3

const isPlayingIn = true
const Temp = null
let play;

//Symbol declared(alg rhega agr value bhi same rahegi toh)
const id = Symbol('123')
const anotherId = Symbol('123') 




// Non Primitive(refrence)- Array, Objects, Functions 

const hero = ["Steve", "Tony", "Natasha"];

let myObj = {
    name: "Thor",
    age: 19090, 
}

const myFunction = function(){
    console.log("Hello World");
}

// To Find Datatype of any value-

console.log(typeof age);




// Memory- Stack(Primitive)(copy miltya hai ), Heap(Non-Primitive)(refrence milta hai )

let Tony = "IRONMAN" 

let tony = Tony
tony = "DrDoom"

console.log(Tony);
console.log(tony);

let userOne = {
    email: "abc@gmail.com",
    upi: "abc@123"
}

let userTwo = userOne
userTwo.email = "riya@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


