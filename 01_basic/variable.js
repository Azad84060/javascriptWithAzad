const id = 12345;
let name = "Azad";
var city = "Bhopal";
address = "moti masjid";
let profession; // when we don't give value it gives undefined value

//id= 23467; //can't change the value of const
console.log(id);
name ="sohail";
city ="indoor";
address = "big city";
/*
don't use var because it gives problen in block scope or functional scope
*/

console.table([name,city,address,profession]);