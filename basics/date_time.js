//dates
let date = new Date()
console.log(date);
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);
console.log(date.toString());

let newdate = new Date(2026,6,11);//month start from 0 in js so 6 is july
console.log(newdate.toDateString());

let timestamp = Date.now()
console.log(timestamp);
console.log(Math.floor(Date.now()/1000)) // in seconds 
let date1 = new Date()
date1.toLocaleDateString('default',{
    weekday:"long" 
})
console.log(Date);





