const name = "Tony"
const lives = 2
console.log(`Dr doom is ${name} and he his lives is ${lives}`);

//Declaration
const myname = new String('DrDoom')

console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.charAt(2));
console.log(myname.indexOf('r'));

const yourname = myname.substring(0,5)
console.log(yourname);

const newname = myname.slice(-4,2)
console.log(newname);

const go = "  Avi  "
console.log(go);
console.log(go.trim());  //ye strting or last ke space ko remove kr deta hai

const url ="https://tony.com/tony%20stark"
console.log(url.replace('%20','-'))
