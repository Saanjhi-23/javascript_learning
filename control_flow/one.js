//if statement
if(conditon){

}

//truthy and falsy
/*falsy
1. False
2. Zero
3. -0
4. Bigint 0n
5. ""
6. null
7. undefined
8. NaN */

/* Truthy  
"0"
"false"
" "
[]
{}
function(){}
*/

/*for checking array array.length === 0 then array is empty
for object */
emptyObj={}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}

//nullish coallescing operator (??)
let var1;
var1=5??10
var1=null??10
var1=undefined??10
var1=null??10??15 //output 10
//null/undefined aayega toh kese handle krna hai
 
//terniary operator
//condition true:false
const iceteaprice=100
iceteaprice>=80 ? console.log("sahi hai lele") : console.log("mehengi hai mt le");
