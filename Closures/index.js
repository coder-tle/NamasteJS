function z(){
    var b = 200;
    function x(){
        var a = 20;
        function y(){
            console.log(a, b);
        }
        y();
    }
    x();
    return x;
}


var z1 = z();
console.log(z1);
