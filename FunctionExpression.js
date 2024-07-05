// function fun(){// function definition

// }

// let gun = function(){// function expression


// }
// (function fun2(){
//     //function expression
// })
// {
//     function f(){
//         //function definition
//     }
// }

// let fact = function(n){
//     if(n==0) return 1;
//     return n* fact(n-1);
// }
// console.log(fact(5));

/*
    The biggest problem that exist in js codebase is anonymous function.

    function<name> (args){
    //implementation
    }

   **The above is function definitioin

    var f = function (args) {
     //implementation
     }
     **The above is function expression

     In JS , we can pass function as an argument to another function.
     function expressions are of two types : 
     1--> Anonymous
     2--> Named

     Anonymous functions are hard to debug.
     Recursion is also tricky
     Scope of a function expression

     function fun(){
     
     }

     var x = function gun(){
     //scope of function gun inside the scope of x.x is global. cant access gun in the global scope.
     }









*/


// function fun(){
//     console.log("fun called");
// }

// function gun(fn){
//     console.log("gun called");
//     fn();
//     console.log("leaving gun");
//     console.trace();
// }

// // gun(function (){
// //     console.log("Inside the function passed");
// // })
// //This above is a function expression

// //gun(fun);

// var x = function(){
//     //implementation

// }
// gun(function(){
//     //implementation
// });

// All these are anonymous functions.

var x = function gun(){
    console.log("gun");
}

x();
gun();


