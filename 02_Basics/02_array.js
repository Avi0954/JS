const MCU = ["Iron Man", "Natasha", "Logan"]
const cinema = ["F***t *l*b", "Seven", "Breaking Bad"]
MCU.push(cinema)
console.log(MCU); // ye excisting array pe he push krta hai or array ke andar array dega

const cinephile = MCU.concat(cinema)
console.log(cinephile); // ye new array return dega

const cine = [...MCU, ...cinema]
console.log(cine); //spread operator same above

const series = ["BB", ["BCS", "TD"], "DARk", ["Stranger things", ["LOST", "FROM"], "FURY"] ]
const allseries = series.flat(Infinity)
console.log(allseries); // ye sabko ek he array me dega


console.log(Array.isArray("Avi"))
console.log(Array.from("Avi")) // array me cnvrt kr dega
console.log(Array.from({name: "avi"})) //*** 



let T1 = 10
let T2 = 40
let T3 = 50
console.log(Array.of(T1,T2,T3));