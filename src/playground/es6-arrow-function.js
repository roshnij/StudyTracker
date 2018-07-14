//very very imp

const sq =  function (x) {
    return x*x;
};
// u can right the abv function as but not arrow function
/*function sq(x) {
    return x*x;
}*/

console.log(sq(8)); //16

const sqArrow = (x) => {
return x*x;
};

// if you have 1 statement in arrow fnction body like abv
//then you cn write it as

// const sqArrow = (x) => x*x;

console.log(sqArrow(9)); //81

const name  = "Roshni Jain";

const fname = (n) => {
    return name.split(' ')[0];
};

console.log(fname(name));

const fname1 = (n1) => name.split(' ')[0];

console.log(fname1(name));

