// arguments object - no longer bound with arrow functions

const add = function (a,b) {
    console.log(arguments); //prints 1 and3.. if you pass extra arg in console.log it will also get print no matter you captureed in your function or not. but if we use arrow function, wewill get an error here saying that arguments are not defined.  
    return a+b;
};

console.log(add(1,3, 7));


//this keyboard  - no longer bound by let and const
//must read ths const
const user = {
    name: 'Roshni',
    cities: ['Victoria','Vancouver', 'Toronto'],
    printPlacesLived:  function(){
        //console.log(this.name);
        console.log(this.cities);
        //const that = this; 
        //this.cities.forEach(function(city) {
        //    console.log(this.name + ' has lived in ' + city); // here you will get an error because this.name becomes undefined. to resolve: declare const that as shown abv and use in place of this. However if we use arrow function you will not get error for this and no need to create that variable
        //} );
       // this.cities.forEach((city) => {
        //    console.log(this.name + ' has lived in ' + city); // here you will get an error because this.name becomes undefined. to resolve: declare const that as shown abv and use in place of this. However if we use arrow function you will not get error for this and no need to create that variable
        //} );

        // we can use map instead of forEach.
        const citiMessage = this.cities.map((city) => this.name + ' has lived in ' + city
        );
         return citiMessage;
    }
};
//user.printPlacesLived();
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2,3,4,5],
    multiplyBy: 3,
    multiply: function (){
        const newNUmbers = this.numbers.map((num)=> num*this.multiplyBy
    );
    return newNUmbers;
    }
    
};
console.log(multiplier.multiply());
