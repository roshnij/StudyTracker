var name = 'Roshni';
var name = 'Rosh'; // you can redeclare with var but not with let and const. var,let and const variable is local to the function
console.log('name', name) //output: name Rosh

let nameLet = 'Roshni';
nameLet = 'Rosh';
console.log('nameLet', nameLet) //output: name Rosh 

let nameConst = 'Roshni';//with const we cant redeclare or reassign
nameConst = 'Rosh';
console.log('nameConst', nameConst) //output: name Roshni 

//Block scoping
var fullname = "Roshni Jain";

if(fullname){
    var fname = fullname.split(' ')[0];
    console.log(fname);
}

console.log(fname); // will print normally. But if we use const or let, it will give an error saying that fname is not defined 