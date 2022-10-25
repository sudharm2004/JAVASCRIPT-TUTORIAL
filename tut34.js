console.log('welcome to tut34.js');
let obj={
    name:'sudharm',
    age:23,
    work:'brogrammer'
}

//TO ITERATE OVER PROPERTIES
let properties=Object.keys(obj);
console.log('properties',properties);
// properties.forEach(element => {
//     console.log('property',element);
// });

//TO ITERATE OVER values
let values=Object.values(obj);
console.log('values',values);
// values.forEach(element => {
//     console.log('value',element);
// });

//TO ITERATE OVER entries
let entries=Object.entries(obj);
console.log('entries',entries);
// entries.forEach(element => {
//     console.log('entry',element);
// });

// console.log(Object.keys(obj));
// iterating object using traditional for loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     console.log(obj[Object.keys(obj)[index]])
// }

// iterating object using for in loop
// for (const key in obj) {
//     console.log(obj[key]);
// }

let myString="hello brother";

//iterating through string using traditonal for loop
// for (let index = 0; index < myString.length; index++) {
//     const element = myString[index];
//     console.log('element :>> ', element);
// }

//iterating using forin loop
// for (const char in myString) {
//     console.log(myString[char],char);
// }

let people=['sudharm','rohan','harry','shreya','sunil','suraj'];
console.log('***iterating through for in loop***');
for (const index in people) {
    console.log(index);
}
console.log('***iterating through for of loop***');
for (const index of people) {
    console.log(index);
}