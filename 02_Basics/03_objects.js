//OBJECT - can be declare (literals) (constructor[Singleton])   
//Jb constructor se object declare krenge singleton bnega vice versa literals




//object literals

const Sym = Symbol("key")

const User = {
    name: "Avi",
    age: 17,
    [Sym]: "mykey",
    day: "Monday",
    isLoggedIn: false,
   
    


}

console.log(User.name)
console.log(User["name"])
console.log(User[Sym]) // [ ] type 

User.age = 20// to change
// Object.freeze(User)// phir koi changes na ho to isse freeze krdenge (Lock krna)
// console.log(User);


// To declrare a function

User.Benten = function(){
    console.log("Its hero time");
}

User.Gwen = function(){
    console.log('Magic Power, ${this.age}'); //jb same object ko refrence krna ho  (check this line of code NP)

} 


console.log(User.Benten());
console.log(User.Gwen());
