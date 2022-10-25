console.log('tut32.js');

function iterator(arr) {
    let index = 0;
    return {
        next: function(){
            if(index <arr.length) {
        return {
            value: arr[index++],
            done: false
        }
    } else {
        return {
            done: true
        }
    }
}
   }
}

const myarray=['apple','papaya','mango','tomato'];

//USING THE ITERATORS
const fruits=iterator(myarray);
console.log(fruits);

console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);




