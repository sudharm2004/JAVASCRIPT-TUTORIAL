//https://www.w3schools.com/JS/js_object_constructors.asp
console.log('welcome to tut20');

//object literal:object prototype
let obj = {
    name:'harry',
    channel:'youtube',
    address:'pune',
};

// We cannot change prototype of object literal
// obj.prototype.getName=function () {
//     return this.name;
// }

//object constructor
function obj2(givenname) {
    this.name=givenname;
    this.channel='youtube';
}
//We can change prototype of constructor function
// obj2.prototype.getName=function () {
//     return this.name;
// }


let obj3 = new obj2('sudharm');
console.log(obj3);