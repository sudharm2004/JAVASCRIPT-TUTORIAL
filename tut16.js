console.log('welcome to tut16.js');
let impArray=['bhendi','gawar','kakdi']

//adds a new key value pair in local storage
localStorage.setItem('name','rohan');
localStorage.setItem('name2','rohit');
localStorage.setItem('sabzi',JSON.stringify(impArray))

//clears the entire local storage
// localStorage.clear();

//remove a particular item in local storage
localStorage.removeItem('name');
console.log(JSON.parse(localStorage.getItem('sabzi')))
//gets an item value from local storage
let name=localStorage.getItem('name');
console.log(name);