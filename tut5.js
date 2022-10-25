// STRING FUNCTIONS 
let html="hello buddy" + " " + "feeling good to see ya "
console.log(html);

html = html.concat("are you fine " , "i heard you SUFFERED a lot these days");
console.log(html);

// console.log(html.length)
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html[4]);
// console.log(html.indexOf("feeling"));
// console.log(html.indexOf("z"));
console.log(html.lastIndexOf("l"));
// console.log(html.charAt(3));
console.log(html.endsWith('days'));
console.log(html.includes('days'));
console.log(html.substring(0,5));
//in above 0th character is included but 5th character is not included
console.log('split',html.split('l'));
console.log(html.replace(' ',' fuck '));
//in above it replaces only first occurence not all occurences
const firstName = 'sudharm';
let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${firstName}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;
console.log(myHtml);
document.body.innerHTML = myHtml; 