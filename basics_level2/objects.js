//objects can be declared by two methods , as literal or as constructor
//singleton bnta hai jb constructor ki trah declare krte hai 

//object literal 

const sym = Symbol("keys1")
const obj1={
    name:"saanjhi",
    age:18,
    [sym]:"key234"   // only way to inialize the symbol 
}
//accessing object
console.log(obj1.name);
console.log(obj1["age"]);
console.log(obj1[sym]); // cannot done using "."

obj1.greeting=function(){
    console.log(`hello welcome,${this.name}`);
}
console.log(obj1.greeting());


//........................object2

//Declaration

const obj2 = new Object() //singleton object
const obj3 ={} ////non-singleton object

obj3.id="123inc"
obj3.email="hello@gmail.com"

//nested object
const obj4 = {
    fullname:{
        firstname:"saanjhi",
        lastname:"varshney",
        class_user:{
            a:"baddie"
        }
    }
}

console.log(obj4.fullname?.class_user.a); // ? use when there is a chance that might user havent given that key value

// same like array if we use obj5={obj1 , obj2} here it treat them as single-single element
// so use assign

const obj5= Object.assign({}, obj1,obj2,obj3)
// here we use empty array because it ensure that it treated as target and baaki objects ko source ki trah use krega otherwise if not given then all will take obj1 as target and uske under chli jayengi saare objects
// here we can also use spread 


const user =[
    {
        id:2,
        name:"hello"
    }
]

console.log(user[0].id);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(obj1.hasOwnProperty('isLoggedIn'));

const course = {
    name:"saanjhi",
    subject:"development"
}
//course.subject this can be done in better way 

const {name : n}=course
console.log(n);
//**********api****/

// {
//     name:"saanjhi"
//     coursename:"js"

// } //it is a json syntax as there is no name 

