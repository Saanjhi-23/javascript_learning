const accountId = 1234 
let accountEmail = "varshney@gmail.com"
var accountPass = "hello" //do use var as it do not understand the scope.
accountCity="aligarh" // not recommended but it is possible withoudt declaring
let accountState;

//accountId = 2 not allowed for const
accountEmail="saanjhi@gmail.com"
accountPass= "bye"
accountCity= "delhi"
console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity,accountState])