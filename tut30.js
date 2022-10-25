console.log('tut30.js');
let reg=/sudharm/;
//LET'S LOOK INTO METACHARACTER SYMBOLS NOW
reg=/^n/; //^ this symbols means "start with" i.e. whether the string starts with n in this case(yes it starts as it begins with never)
reg=/arm$/;//$ matches if the string ends with arm
reg=/s.dharm/;//. means any character can come at the place of . and the regular expression will match and . starts for exactly one character
reg=/s*dharm/;//* this will match for any number characters 
// reg=/su?dharmi?/;//? this represents that u and i are optional even if they are not present in string reg will match
reg=/s\*dharm/;//\ represents that u are not using * as meta character rather than as a normal character
let string='s*dharm';

let result=reg.exec(string);
console.log('result from reg.exec',result);

if(string.match(reg))
{
    console.log('the given regular expression matches the string')
}
else
{
    console.log('the regular expression does not matches the string');
}
