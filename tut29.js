console.log('tutorial29.js');

let reg=/sudharm/ //this is regular expression literal
// reg=/sudharm/g  //g is global flag
// reg=/sudharm/i //i is for case insensitivity
console.log(reg);
console.log(reg.source);

let string='never ever give up sudharm and sudharm never let your will let down';
//FUNCTION TO MATCH EXPRESSIONS

//1.EXEC function-->returns an array with information like index,input,etc
// let result=reg.exec(string);
// // result=reg.exec(string); //this are useful for global flag
// // result=reg.exec(string)
// console.log(result);
// console.log(result.input);
// console.log(result.index);

//2.TEST function-->return true  if regular expression is present or else returns false if regular expression is not present
// let result=reg.test(string);
// console.log(result);

//3.MATCH function-->return results of array or returns null
//useful when global flag is used
// let result=reg.match(string); //-->wrong!!!
// let result=string.match(reg); //-->right
// console.log(result);

//4.SEARCH -->return index of first match or -1
// let result=reg.search(string); //-->wrong!!!
// let result=string.search(reg); //-->right
// result=string.search(reg);
// console.log(result);

//5.REPLACE -->returns new string with all new replacements
//if no flag is given first match will be replace 
//in order to replace or matches use global flag
// let result=string.replace(reg,'harry');
// console.log(result);

