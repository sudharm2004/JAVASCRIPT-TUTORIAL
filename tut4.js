//TYPE CONVERSION
console.log('tut4.js');
let myVar=String(24);
console.log(myVar,typeof(myVar));

let booleanvar=String(true);
console.log(booleanvar,typeof(booleanvar));

let date=String(new Date);
console.log(date,typeof(date));

let array=String([1,2,3,4,5])
console.log(array,typeof(array),array.length);

let i=8;
console.log(i.toString())

let stri=Number("3434");
console.log(stri,typeof(stri));

let bol=Number(true);
console.log(bol,typeof(bol));

//TYPE COERCION
let a="5984";
let b=12;
console.log(b+a);
