//JS jab bhi copy operation perform krta hai vo SHALLOW COPY (same refrence copy share krega)bnata hai rather than DEEP COPY(ye refrence copy share nhi krne dega)

//declaration of array
const array = [1,2,3] //resizable
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

