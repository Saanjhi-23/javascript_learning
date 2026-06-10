const myarr = [0,1,2,3,4,5]
const aarrray = new Array(1,2,7,8,3,)

//array method 
//push
//unshift method , add element at first place but its complexity is O(n)

//when we ask of index of element which is not present in array then it will give -1
//slice simple slicing via index and splice ,firstly it include the last element and also remove that spliced part from the original array 
console.log("a" , myarr);

const n1= myarr.slice(1,3)
console.log("b", myarr);
console.log(n1);

const n2 = myarr.splice(1,3)
console.log("c", myarr);
console.log(n2);

const heros = ["a" , "b" , "c" , "d"]
const heroines = ["a" , "b" , "c" , "d"]

heros.push(heroines)// this will push whole heronine array into heros as a single element

//concat only assign to new= array not to existing

//spead(...) it spread all element of array as individual elements and also have to store in new array 

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"})); //interesting as it return [] if not specified because js is confused between ehich to turn into array key or pair
const s1 = "a"
const s2 = "b"
const s3 = "c"
console.log(Array.of(s1,s2,s3));







