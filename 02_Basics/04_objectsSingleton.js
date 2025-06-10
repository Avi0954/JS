//SINGLETON

//const Breaking Bad = new Object()  // Singleton
const BreakingBad = {} // Non-Singleton

BreakingBad.name = "Walter White"
BreakingBad.partnername = "Jessi Pinkman"
BreakingBad.isLoggedIn= false
console.log(BreakingBad);


const App = {
    email: "netflix@123.com",
    name: {
        fullname:{
            firstname: "AVI",
            lastname: "koko"
        }
    }
}

console.log(App.name.fullname.firstname.lastname);

const obj1 = {1: "BB", 2:"DARK"}
const obj2 = {3: "ST", 4:"FROM"}
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
        series: 1,
        email: "DARK"
    },
    {
        series: 1,
        email: "DARK"
    },
    {
        series: 1,
        email: "DARK"
    },
    {
        series: 1,
        email: "DARK"
    },
]

user[1].email
console.log(BreakingBad);
console.log(Object.keys(BreakingBad));  //****** 
console.log(Object.values(BreakingBad));  
console.log(Object.entries(BreakingBad));    