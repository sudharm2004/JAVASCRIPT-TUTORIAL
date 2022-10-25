console.log('welcome to tut15.js');
let btn=document.getElementById('btn');
btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func3)
btn.addEventListener('mouseenter',func4)
// btn.addEventListener('mouseleave',func5)
// btn.addEventListener('mouseup',func6)
// btn.addEventListener('mousemove',func7)

function func1(e)
{
    console.log('thanks', e);
    e.preventDefault();
}
function func2(e)
{
    console.log('double click',e);
}
function func3(e)
{
    console.log('mouse down',e);
}
function func4(e)
{
    console.log('you entered button using mouse enter',e);
}
function func5(e)
{
    console.log('you exited button using mouse leave',e);
}
function func6(e)
{
    console.log('mouseup',e);
}
function func7(e)
{
    console.log('mouse-move',e);
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},154)`
}