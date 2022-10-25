console.log('this is tut23.js');
//CALLBACK FUNCTIONS ARE FUNCTIONS THAT ARE CALLED WITHIN A FUNCTION
//CALL BACK FUNCTIONS CAN BE SYNCHRONOUS OR ASYNCHRONOUS
//FOR EXAMPLE SETTIMEOUT IS ANSYNCHRONOUS 
//FOREACH IS SYNCHRONOUS


//ASSUME WE ARE GETTING THIS DATA FROM THE SERVER   
const students=[
    {
        name:"sudharm",
        subject:"javascript"
    }
]

//FUNCTION TO ENROLL A STUDENT i.e. STORE INTO STUDENTS
function enrollStudent(student,callback)
{
    // setTimeout(() => {
        callback();
        students.push(student);
        console.log('student has been enrolled');
    // }, 8000);
}

//FUNCTION TO GET DATA FROM SERVER i.e FROM STUDENTS
function getstudents()
{
    console.log('enrolle students called')
    // setTimeout(() => {
    //     let str=""
    //     students.forEach(function (students) {
    //         str+=`<li>${students.name}</li>`
    //     })
    //     document.getElementById('list').innerHTML=str;
    // }, 2000);
}

let anmol={
    name:"anmol1",
        subject:"python"
}
enrollStudent(anmol,getstudents);
// getstudents();