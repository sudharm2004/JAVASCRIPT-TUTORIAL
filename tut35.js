console.log('tut35.js');

const myMap=new Map();

const key1='mystr',key2={},key3=function () {};

myMap.set(key1,'this is a string')
myMap.set(key2,'this is an empty object')
myMap.set(key3,'this is an empty function')
console.log(myMap);

let value1=myMap.get(key1);
// console.log('value1',value1);

// console.log('Iterating throught myMap and getting the keys and values');
// for (const [keys,values] of myMap) {
//     console.log(keys,values);
// }

// //ITERATING THROUGH KEYS
// for (const keys of myMap.keys()) {
//     console.log('keys is ',keys);
// }

// //ITERATING THROUGH VALUES
// for (const values of myMap.values()) {
//     console.log('value is ',values);
// }

// ITERATING USING FOR EACH LOOP
// myMap.forEach((values,key) => {
//     console.log('key is ',key);
//     console.log('values is ',values);
// });

// CONVERTING MAP TO ARRAY
let myArray=Array.from(myMap);
console.log(myArray);
//CONVERTING MAP KEY TO ARRAY
let myKeys=Array.from(myMap.keys());
console.log(myKeys);
//CONVERTING MAP VALUES TO ARRAY
let myValues=Array.from(myMap.values());
console.log(myValues);