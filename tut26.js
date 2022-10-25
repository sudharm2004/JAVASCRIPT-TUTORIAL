console.log('welcome to tut26');
// https://www.geeksforgeeks.org/javascript-promise-resolve-method/?ref=lbp
// https://www.javatpoint.com/what-is-a-promise-in-javascript
// https://javascript.info/fetch
let myBtn=document.getElementById('myBtn');

let content=document.getElementById('content');

// function getData()
// {
//     console.log('getData started');
//     let url='harry.txt'
//     fetch(url).then((Response)=>{
//         console.log('first then')
//         return Response.text();
//     }).then((data)=>{
//         console.log('second then')
//         console.log(data)
//     })
// }

// console.log('before running getData');
// getData();
// console.log('after running getData');

function getData()
{
    console.log('getData started');
    let url='https://api.github.com/users'
    console.log(fetch(url))
    fetch(url).then((Response)=>{
        console.log('first then')
        console.log(Response);
        return Response.json();
    }).then((data)=>{
        console.log('second then')
        console.log(data)
    })
}
getData();

function postData()
{
    let url='http://dummy.restapiexample.com/api/v1/create'
    let data={
        //name should be different everytime
        name:'sudharm1',
        goal:'to be able to help others and himself'
    };
    let params={
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(url, params).then(Response=> Response.json()).
    then(data=>console.log(data))
}
// postData();
