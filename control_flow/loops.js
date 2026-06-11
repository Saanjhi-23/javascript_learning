//for of
//["","",""]
//[{},{},{}]
const array =[1,2,4,6,8,4,6]
for (const num of array){
    console.log(num);
}

//map
const map = new Map()
map.set("IN","India")
map.set("FR","France") // only carry unique values
for (const key of map){
    console.log(key); 
}
for (const [key,value] of map){
    console.log(key,":",value); 
}
//for in for object , array
const myobj={
    'game1':"gta",
    'game2':"bgmi"
}
for (const key in myobj){
    console.log(`${key} is shortcut for ${myobj[key]}`);
    
}

//for each loop
//high order array 
const lang = ["a","b","c","d"]
array.forEach(element => {

});


//