//JS jab bhi copy operation perform krta hai vo SHALLOW COPY (same refrence copy share krega)bnata hai rather than DEEP COPY(ye refrence copy share nhi krne dega)

//declaration of array
const array = [0,1,2,3] //resizable
const hero = ["Iron man", "Tony", "Steve"]
const Arr = new Array(1, 2, 3, 4)
console.log(Arr[2]);
console.log(hero[1]);


//Array Methods
array.push(4)
array.push(5)
array.push(6)
array.pop()
console.log(array);


array.unshift(6) // array ke strting me aa jyega pr sbki positon change ho jyegi
array.shift() // ye remove kr dega
console.log(array);
console.log(array.includes(9)); //ye check krega ki value hai ki nhi
console.log(array.indexOf(20));  //same check krega agar nhi hoga toh default me (-1) dega 


// array ke element ko add kr dega or string me cnvrt kr dega
const arr = array.join()
console.log(array);
console.log(arr);






//slice and splice method
console.log("A ", array);
const a1 = array.slice(2,5)  //last ke range include nhi hogi
console.log(a1);

console.log("B ", array);
const a2 = array.splice(2,5) // ye portion remove kr dega
console.log("C ", array);
console.log(a2);

