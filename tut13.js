console.log("welcome to tut13.js");
let element=document.createElement('li');

element.className='childul';
element.id='ul';
element.setAttribute('title','mytitle');
// element.innerHTML='this is appended list item using appendChild';
//ANOTHER METHOD TO ADD TEXT IN THE ELEMENT
let text=document.createTextNode("this text node appended in the element");
element.appendChild(text);

let ul=document.querySelector('ul.this');
ul.appendChild(element);


let element2=document.createElement('h3');
element2.id='element2';
element2.className='element2';
let element2tn=document.createTextNode('this is replaced element');
element2.appendChild(element2tn);


let child3=document.querySelector('.container');
child3=child3.children[4];
child3.replaceWith(element2);


let element3=document.createElement('h3');
element3.id='element3';
element3.className='element3';
let element3tn=document.createTextNode('the child element fui has been replaced by element3');
element3.appendChild(element3tn);


let myul=document.getElementById('myul');
myul.replaceChild(element3, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));


//GET THE ATTRIBUTE OF AN ELEMENT
let pr=element.getAttribute('id');
pr=element.getAttribute('class');
pr=element.hasAttribute('fg');
element.removeAttribute('id');
console.log('element',element);
console.log('pr',pr);

//INSERTING AN ELEMENT USING INSERT BEFORE
let Before=document.createElement('div');
let Beforetext=document.createTextNode('This is the div inserted using insert before');
Before.appendChild(Beforetext);

let container=document.getElementsByClassName('container')[0];
console.log(container)
let first=document.getElementById('first');
container.insertBefore(Before,first);