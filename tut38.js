console.log('tut38.js');

let a,b,c,d;
[a,b]=[4,7];
// console.log(a,b);
[a,b,c,...d]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//ARRAY DESTRUCTURING
let fruits=['apple','mango','banana','kiwi'];
[a,b,c,d]=fruits;
console.log(a,b,c,d);

let info={name:'sudharm',
age:24,
height:"5'7",
mother:'ragini',
father:'sunil',
address:'bhosari',
start: ()=> {console.log('started');}
}

const {name,age,height,mother,father,address,start}=info;
console.log(name);
console.log(age);
console.log(height);
console.log(mother);
console.log(father);
console.log(address);
console.log(start);

