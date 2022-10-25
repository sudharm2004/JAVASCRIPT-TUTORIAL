console.log('tut11.js');
// SINGLE Element SELECTOR

let element = document.getElementById('first');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color='red';
// element.innerText='<b>sudharm is a very good boy<b>';
// element.innerHTML='<b>you will break the chain of money problems in your life</b>'
console.log(element);

let sel = document.querySelector('#first');
//YOU WILL GET THE FIRST ELEMENT THAT HAVE CHILD AS A CLASS NOT ALL CHILD CLASS ELEMENTS
sel = document.querySelector('.child');
//YOU WILL GET FIRST H1 HTML
// sel = document.querySelector('h1');
// sel.style.color='green';
console.log(sel);

//MULTI ELEMENT SELECTOR
let elems = document.getElementsByClassName('child');
// elems = document.getElementsByClassName('container');
// elems = document.getElementsByTagName('div');
console.log(elems);
console.log(elems[0].className);
// console.log(elems[0].getElementsByClassName('child'));