function a() {
    var x=2;
    function b() {
        let p=1;
        console.log(p);
    }
    b();
    return b;
}
var z=a();
console.log(z);
z();
z();
z();
z();
z();
z();
