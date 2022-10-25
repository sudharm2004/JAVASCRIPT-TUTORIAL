console.log('tut28.js');

let a='sudharm';
if(a!=undefined)
{
    console.log(a);
}
else{
    throw new Error('The variable is undefined')
}

try {
    // sudharm();
    // null.console
    console.log('hello world');
} catch (error) {
    console.log(error);
    console.log('error.name',error.name);
    console.log('error.message',error.message);
    
}
finally{
    console.log('finally we will run this')
}
console.log('hello world');
