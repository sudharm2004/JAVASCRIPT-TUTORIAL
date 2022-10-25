// PRIMITIVE DATA TYPES

//STRING
let name="harry";
console.log("My string is " + name);
console.log("data type is " + typeof(name));

// number
let number=45;
console.log("My number is " + number);
console.log("data type is " + typeof(number));

// boolean
let isdriver=true;
console.log("data type is "+typeof(isdriver))

// null
let nullVar = null;
console.log("data type is "+typeof(nullVar))

// undefined
let undef=undefined;
console.log("data type is "+typeof(undef))

//refrences data types
let myArr = [1,2,3,4,"string"];
console.log("data types is " + (typeof myArr));

//object literals
let stMarks=
{
    harry: 89,
    shubam:39,
    rohan:34,
    20: 'harry',
    total:function () {
        console.log(stMarks.harry);
    }
}
console.log(typeof stMarks);
stMarks.total();
console.log(stMarks[20])
function findname()
{

}
console.log(typeof findname);