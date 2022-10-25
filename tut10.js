console.log('welcome to tut10');
let f = document;

f = document.all;
// f = document.forms;
// f = document.body;
// Array.from(f).forEach(function(elements) {
//     console.log(elements);
// })
f = document.links[0];
f=document.scripts;
f=document.images;
Array.from(f).forEach(function(elements) {
    console.log(elements);
})
console.log(f);