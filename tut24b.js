console.log('this is tut24b.js');
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
function enrollStudent(student)
{
    return new Promise(
        function (resolve,reject) {
            setTimeout(() => {
                students.push(student);
                console.log('student has been enrolled');
                error=false;
                if (!error) {
                    resolve();
                } else {
                    reject();
                }
            }, 1000);
        }
    )
    
}

//FUNCTION TO GET DATA FROM SERVER i.e FROM STUDENTS
function getstudents()
{
    setTimeout(() => {
        let str=""
        students.forEach(function (students) {
            str+=`<li>Name:-${students.name} Subject:-${students.subject}</li>`
        })
        document.getElementById('list').innerHTML=str;
        console.log('students have been fetched');
    }, 5000);
}

let anmol={
    name:"anmol",
        subject:"python"
}
enrollStudent(anmol).then(getstudents()).catch(
    function (params) {
        console.log('error occurred');
    }
);
// getstudents();
//Function inside then is resolve()
//function inside catch is reject