let a1=2251;
console.log(a1);
function a() {
    var x=1;
    b();
    function b() {
        console.log(x);
    }
}
a();