console.log('welcome to tut36.js');

//SET STORE UNIQUE VALUES
const mySet=new Set();
console.log('The set look like this ',mySet);
mySet.add('hello');
mySet.add('world');
mySet.add('jai hind');
mySet.add(9);
mySet.add(true);
mySet.add(false);
console.log('The set look like this now ',mySet);

// const mySet1=new Set(['bharat mata ki jai',120,{name:'sudharm',age:14},()=>{}])
// console.log('The new set is ',mySet1);

// console.log(mySet.size);
console.log(mySet.has(true));

//REMOVING THE VALUE
console.log('Before removal ',mySet.has(9));
mySet.delete(9);
console.log('After removal ',mySet.has(9));

//iterating a set

for (const value of mySet) {
    console.log('value is: ',value);
}

mySet.forEach(element => {
    console.log('element is: ',element);
});

let mySetArray=Array.from(mySet);
console.log(mySetArray);

let array=['sudharm','sunil','jadhav','sudharm','shreya','shruti','jagtap']
const mySetArray1=new Set(array);
console.log('mySetArray1:-',mySetArray1);