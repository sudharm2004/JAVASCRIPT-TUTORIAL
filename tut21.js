console.log('welcome to tut21.js');

const proto = {
    slogan:'this company is the best',
    changeName:function (name) {
        this.name=name;
    }
}

//THIS CREATES AN OBJECT WITH PROTOTYPE
const harry = Object.create(proto);
harry.name='harry';
harry.age=23;
harry.changeName('rohan');
// console.log(harry);

//THIS ALSO CREATES AN OBJECT WITH PROTOTYPE
const rohan=Object.create(proto,{
    name: {value:'rohan',writable:true},
    age: {value:27},

});
rohan.changeName('harry');
// console.log(rohan);

function employee(name,salary,experience) {
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

employee.prototype.slogan = function () {
    return `this company is the best regards ${this.name}`;
}

let emp=new employee('rohan',23,2);
console.log('emp :>> ', emp);
function Programmer(name,salary,experience,language) {
    employee.call(this,name,salary,experience);
    this.language=language;
}

Programmer.prototype=Object.create(employee.prototype);
// Programmer.prototype=new employee();

Programmer.prototype.constructor=Programmer;
    
let prog=new Programmer('rohan',23,2,'javascript');
let prog2=new Programmer('rohan',23,2,'python');
console.log(prog);
// console.log(prog2);


//EXERCISE ON INHERITANCE

function flour(water,wheat_powder,salt)
{
    this.water=water;
    this.wheat_powder=wheat_powder;
    this.salt=salt;
}

flour.prototype.mix=function()
{
    return 'mixing is done and flour is ready';
}

function cake(water,salt,wheat_powder,oven,bakingpowder)
{
    flour.call(this,water,salt,wheat_powder);
    this.oven=oven;
    this.bakingpowder=bakingpowder;
}

cake.prototype=Object.create(flour.prototype);
cake.prototype.constructor=cake;

let cake1=new cake(100,200,'ashirwad','oven1','bakingpowder1');
console.log(cake1);