//cannot change the value of const variable
const accountId = 1456

//always use let for variable declaration
let accountEmail = "vikas123@gmail.com"

//var causes block scope issues 
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

//accountId = 1234
//console.log(accountId);

accountEmail="amey123gmail.com"
accountPassword = "789"
accountCity="Bengaluru"

console.table([accountId ,accountEmail ,accountPassword,accountCity, accountState])