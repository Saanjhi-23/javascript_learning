const name="saanjhi"
const age=21
console.log(`hello my name is ${name} and i am ${age} old`);

const gname = new String('hello')
console.log(gname.__proto__);

console.log(gname.length);
console.log(gname.toUpperCase());
console.log(gname.charAt(4));
console.log(gname.indexOf("l"));
const newstr = gname.substring(0,4)
const strr = gname.slice(-3,4)
console.log(strr);


const pass = "   saanjhi   "
console.log(pass.trim());

const url = "httphitesh%20hello"
console.log(url.replace('%20','-'));

console.log(gname.split('-'));
