const github_api="https://api.github.com/users/sudharm2004"

const users=fetch(github_api);
console.log(users)
users.then((data)=>{
    return data.json();
}).then((info)=>{
    console.log('info',info)
})

// let url='https://api.github.com/users'
//     console.log(fetch(url))
//     fetch(url).then((Response)=>{
//         console.log('first then')
//         console.log(Response);
//         return Response.json();
//     }).then((data)=>{
//         console.log('second then')
//         console.log(data)
//     })