let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let Date = new Date(2026, 6, 17)
console.log(Date.toDateString());

let newdate = new Date(2026, 6, 17, 7, 3)
console.log(newdate.toLocaleString());

let date = new Date("06-17-2026")
console.log(newdate.toLocaleString());

let TimeStamp = Date.now()
console.log(TimeStamp);//exact time dega
console.log(date.getTime());//
console.log(Math.floor(Date.now()/1000)); //milisec ko sec me cnvrt dega

let aDate = new Date()
console.log(aDate);
console.log(aDate.getMonth() + 1);
console.log(aDate.getDay());

aDate.toLocaleString('default' , {
    weekday: "long",                         //For eXtra cUstOmize

}) 