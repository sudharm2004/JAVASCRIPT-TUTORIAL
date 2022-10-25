console.log('welcome to tut24.js');

function func1()
{
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            const error=true;
            if (!error) {
                console.log('function 1 resolve');
                resolve();
            } else {
                console.log('function 1 reject');
                reject();
            }
        }, 2000);
    })
}

func1().then(function () {
    console.log('resolve called');
}).catch(function () {
    console.log('reject called');
})