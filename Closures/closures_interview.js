// function a(){
//     var x = 10;
//     function b(){
//         var y = 20;
//         function c(){
//             var z = 30;
//             console.log(x, y, z);
//         }
//         c();

//     }
//     b();

//     return a;
// }
// console.log("Namaste Closures");


// var a1 = a();

// a()()();


// two tier function
// function outer(b){
//     function inner(){
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
// }


// var close = outer("Hello world");
// close();


// function outest(b){
//     var c = 20;
//         function outer(){
//             function inner(){
//                 console.log(a, b, c);
//             }
//             var a = 10;
//             inner();
//     }
//     return outer;
//     //return inner;
// }

// var close = outest("hello world");
// close();


// Data privacy / hiding using closures

// function counter(){
//     var count  = 0;
//     function incrementCount(){
//         count++;
//         console.log(count);
//     }
//     return incrementCount;
// }


// var counter1 = counter();
// counter1();counter1();counter1();counter1();


// var counter2 = counter();
// counter2();counter2();counter2();counter2();counter2();

// where these two variable are stored ? / locaated


// function Counter(){
//     var count = 0;
//     this.incrementCounter = function (){
//         count++;
//         console.log(count);
//     }

//     this.decrementCounter = function(){
//         count--;
//         console.log(count);
//     }

// }


// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();


// what does this.incrementCounter means ?? Is that creates a variable in the context of function Counter
// but this seems like class & objects how it is related in that ways


function outer(){
    var a = 10, z = 20;
    a = 2*a + z;
    function inner(){
        console.log(a);
    }
}