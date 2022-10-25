console.log('tut33.js');

function* numbersGen()
{
    let i=0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while(true)
    {
        yield i++;
    }
}

 const number=numbersGen();
 console.log(number.next().value);
 console.log(number.next().value);
 console.log(number.next().value);
 console.log(number.next().value);
 console.log(number.next().value);
 console.log(number.next().value);
 console.log(number.next().value);
 console.log(number.next().value);
 
