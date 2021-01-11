// function x(){
    
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }
// x();
// console.log("Namaste JS");

    

// function x(){
//     for(let i = 1; i<=5; i++)
//     {
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Namaste JS");
// }
// x();

function x(){
    for(var i = 1; i<=5; i++)
    {
        function close(x)
        {
            setTimeout(function(){
                console.log(x);
            }, 1000);
        }
        close(i);
    }
}

x();