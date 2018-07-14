class Person{
    //define constructor in this manner
    
    constructor(name='test') {
        this.name = name;
    }
    //good way of creating a string with variablein it
    getGreeting(){
        return `Hi. I am ${this.name}`;
    }
}

class Student extends Person{
    constructor(name,major){
        super();
        this.major =  major;

    }
    getGreeting(){
        let desc = super.getGreeting();
        return desc;
    }
}

const me  = new Student("Roshni Jain",'Computer Science');
console.log(me.getGreeting());