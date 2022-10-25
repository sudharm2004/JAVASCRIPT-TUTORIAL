//Maps are used for transformation
//filter is used filter array for particular value
//reduce used to reduce array to a single value
function double(x){
    return x*x;
}

function odd(x){
    return x%2!==0;
}

arr=[1,2,3,4,5,6,7,8,9];
let output=arr.map(double);
console.log(output);
output=arr.filter(odd)
console.log(output);

//reduce takes two arguments a callback function which run over each element of the array and the intial value of accumalator of callback function
//the callback function takes two parameters accumalator and current value being iterated in the array
output=arr.reduce(function(acc,curr){
    if(acc<curr)
    {
        acc=curr;
    }
    return acc;
},0)
console.log(output);

const user=[
    {firstName:'sudharm',lastName:'jadhav',age:19},
    {firstName:'rohan',lastName:'kedari',age:29},
    {firstName:'mitali',lastName:'kamble',age:39},
    {firstName:'shreya',lastName:'jadhav',age:39},
    {firstName:'sharad',lastName:'pharande',age:49}
]

//create an object like {age:number of people having the age}
output=user.reduce(function (acc,curr){
    if (acc[curr.age]) {
        acc[curr.age]=acc[curr.age]+1;
    } else {
        acc[curr.age]=1;
    }
    return acc;
},{})
console.log(output);


//get the first name of users having age greater than 20
output=user.filter((element)=>{return element.age>20}).map((element)=>{return element.firstName})
console.log(output);

//get the first name of users having age greater than 20 using reduce
output=user.filter((element)=>{return element.age>20}).reduce(function(acc,curr){
    acc.push(curr.firstName);
    return acc;
},[])
console.log(output);