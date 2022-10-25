console.log('tut31.js');
let reg=/sudharm/;

//CHARACTER SETS -->we use [] for character sets
 reg=/s[stuvw]dharm/;//it will match 2nd character for any one of the characters present in square brackets
 reg=/s[a-zA-Z0-9]dharm/;//it will match character a-z
reg=/s[^stuvw]dharm/;//it will match for characters other than s,t,u,v,w

//QUANTIFIERS --> we use {} for quantifiers
reg=/su{2}dharm/;//s can occur exactly two times
reg=/su{0,2}dharm/;//s can occur 0,1 or 2 times

//GROUPINGS --> we use () for groupings
reg=/(sud){2}harm/;
reg=/sudharm([0-9]){2}/;
const string='sudharm12';
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
