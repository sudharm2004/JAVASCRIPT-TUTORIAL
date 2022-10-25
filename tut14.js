console.log('welcome to tut14.js');
function clicked(e) {
    //HERE e IS EVENT THAT IS HAPPENED e CONTAINS TARGET ELEMENT AND VARIOUS OTHER INFORMATION ABOUT EVENT
    console.log('you clicked on heading');
    console.log(e);
    let variable=e.target;
    // variable=e.target.className;
    // variable=e.target.id;
    // variable=e.target.classList;
    // variable=e.offsetX;
    // variable=e.offsetY;
    // variable=e.clientX;
    // variable=e.clientY;
    console.log(variable);
}
var fuck=new Array(22);
// document.getElementById('heading').addEventListener('click',function () {
//     console.log("you clicked on heading");
// })
// document.getElementById('heading').addEventListener('click',clicked)
document.getElementById('heading').addEventListener('mouseover',clicked)

//function to get child element with id