//Function and Parameter
function yourname() {
    console.log("M");
    console.log("I");
    console.log("T");
    console.log("S");
    console.log("U");
    console.log("H");
    console.log("A");
}

yourname()


//adding
//M1
function addTwoNum(num1, num2){
    console.log(num1+ num2);
}

addTwoNum(5, 5)
addTwoNum(5, null)
addTwoNum(5, "5")

//fun ko jb define krate hai uske andar ki jo value hoti usko bolte hai parameter 
//or jb call karate hai toh argument



//M2
function addTwoNum(num1, num2){
    let result = num1 + num2
    return result
}
const result = addTwoNum(5,5)
console.log("Result: ",result);



//M3
function addTwoNum(num1, num2){
    return num1 + num2 
}
const resul = addTwoNum(5,5)
console.log("Result: ",result);





//Parameter