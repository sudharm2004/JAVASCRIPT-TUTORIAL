let marks = [95,99,98,97];
console.log('marks',marks);
let fruits = ["mango","papaya","apple"];
console.log('fruits',fruits);
let mixed=[95,99,98,97,"mango","papaya","apple"]
console.log('mixed',mixed);

// console.log(marks.length);
// console.log(fruits.length);
console.log(Array.isArray(marks));

//you can also change array
fruits[1]="watermelon";
console.log('changed fruits',fruits);

 let index = marks.indexOf(99);
 console.log("index of 99 in marks is "+index);

 //mutating or modifying arrays
 //it changes real array to

 //it adds a element at the last of array
 marks.push(85);
console.log("After pushing "+marks);

//it adds element at the start of array
marks.unshift(100);
console.log("After unshifting "+marks);

//it remove the first element of the array
marks.shift();
console.log("After shifting "+marks);

//it remove the last element of the array
marks.pop();
console.log("After poping "+marks);

marks.splice(0,2);
console.log("After splicing "+marks);
//in above splice 1st argument takes index and second takes number of elements we want to remove

//it reverses the array
marks.reverse();
console.log("After reversing "+marks);

let marks2=[1,2,3,4,5];
marks = marks.concat(marks2);
console.log("After concatinating "+marks);

let  myobj={
    'first name':"sudharm",
    marks:[95,99,98,97,96],
    class:"first year",
}
console.log(myobj.marks);
console.log(myobj.class);



