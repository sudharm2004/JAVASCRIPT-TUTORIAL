console.log('tut37.js');

let sym=Symbol();

let k1=Symbol();
let k2=Symbol();

let obj={};
obj[k1]='rohan';
obj[k2]='sudharm';
obj['name']='shreya';
console.log(obj);
console.log(obj[k1]);
console.log(obj[k2]);

for (const key in obj) {
    console.log(key,obj[key]);
}
