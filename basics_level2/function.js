function sayname(){
    console.log("hello");
    
}

sayname()

function calcartprice(...para){
    return para
}
console.log(calcartprice(200,236,254,213,289));
// here when ... used in functio n definationthen it is named as rest parameter

//we can pass objectand array to the function 
const user = {
    name:"saanjhi",
    price:990,
    welcomemessage: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
        
    }
}
user.welcomemessage()
user.name="sam"
user.welcomemessage()
console.log(this); //{} output because in node js , there is no global context write now, but in browser 

//arrow function 
function chai(){
    let username="saanjhi"
    console.log(this.username);  //cannot use under function give undefined only workin case of object
}
chai()

const chain = () => {
    let username="saanjhi"
    console.log(this.username);  //again it give undefined
}
chain()

const add1 = (num1, num2) => {  //{} isme agar wrap kiya toh return use krna padega 
    return num1+num2
}
console.log(add1(3,4))
const add5 = (num1, num2) => num1+num2 //we can write in this way also without using return(implicite return)
console.log(add5(4,5))
const add3 = (num1, num2) => ({username:"saanjhi"}) // return the object 
console.log(add3(8,2));

//Immediately invoked function expression (IIFE)
//to avoid thing from global scope
//in IIFE we have to make sure that line above it should end with semicolon otherwise JavaScript can get confused and try to pass the IIFE as an argument to the previous line.
(function chaimm(){  //named iffe
    console.log("hello");
})();

//as arrow function

( () => {
    console.log("from iife arrow function");
})();

( (name) => {
    console.log(`from iife arrow function,${name}`);
})("hitesh"); /// giving paramemter to iife function