let score = "33"
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
//"33" can be converted into number but when we have"hello123" it will give NaN value and NaN is a numbered datatype

let is_logged_in=1
let booledLoggeedIn = Boolean(is_logged_in)
console.log(booledLoggeedIn)

//1- true ; 0 false
//"" false
//"hello" true
//*********************Operations************************* 

let value =3
let neg = -value //make number negative 

let str ="hello"
let str1 = " user"
let str2 = str + str1

console.log("1"+2)
console.log("1"+2 +2)//122
console.log(1+2+"3")//33

console.log(null>0) // false
console.log(nul == 0) // false
console.log(null>=0) //true

//so here comparison operator work differently ,they convert null into number and treat it as 0 ,that is why >=0 give us true value
console.log(undefined == 0 ) // for undefined it is alwyas false with all comparison operator.

// strich check ===
console.log("2" === 2) //it check not onlu value but also check the datatype 

