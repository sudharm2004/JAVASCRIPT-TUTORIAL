console.log('welcome tut12.js');
let cont=document.querySelector('.container');
console.log(cont);
// console.log(cont.childNodes);
// console.log(cont.children);
let nName=cont.childNodes[5].nodeName;
let nType=cont.childNodes[5].nodeType;
console.log('nName',nName);
console.log('nType',nType);
/*
NODE TYPES
1. ELEMENTS
2. ATTRIBUTES
3. TEXT NODES
8. COMMENT
9. DOCUMENT
10. DOCTYPE
 */
let container=document.querySelector('div.container');
// console.log(container.children[2].children[0].children);
console.log('container.childnodes',container.childNodes);
// console.log('container.firstchild',container.firstChild);
// console.log('container.firstelementchild',container.firstElementChild);
// console.log('container.lastchild',container.lastChild);
// console.log('container.lastelementchild',container.lastElementChild);

// console.log(container.childElementCount);//count of child elements

// console.log('container.firstElementChild.nextSibling',container.firstElementChild.nextSibling);
// console.log('container.firstElementChild.nextElementSibling',container.firstElementChild.nextElementSibling);