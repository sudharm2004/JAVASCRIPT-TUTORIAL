console.log('welcome to tut19.js');

//object literal for creating objects
let car = {
    name:'maruti suzuki',
    topspeed:200,
    color:'red',
    run:function () {
        console.log('car is running');
    },
    stop:function () {
        console.log('car is stopped');
    }
}

//CONSTRUCTORS ARE BLUE PRINTS FOR NEW OBJECTS
//create a constructors for car
function Car(name,topspeed,color) {
    this.name=name;
    this.topspeed=topspeed;
    this.color=color;
    this.run=function () {
        console.log('car is running');
    }
    this.stop=function () {
        console.log('car is stopped');
    }
    this.analyze = function () {
        console.log('name:'+this.name);
        console.log('topspeed:'+this.topspeed);
        console.log('color:'+this.color);
    }
}
let car1=new Car('maruti suzuki',200,'red');
let car2=new Car('bmw',300,'blue');
