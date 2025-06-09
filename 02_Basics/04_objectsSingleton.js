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

