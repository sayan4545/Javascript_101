//Closures//
//-------------//
/*
 setTimeOut() & setInterval()
 these two functions are not by default given to us by JS, but we can use this setTimeout() and SetInterval() 
 functions.

 setTimeout() --> This function helps us to execute some task once after certain timer.
 setInterval() --> It is a function that helps us to exceute some tasks again and again after a givern interval.

 ***Callbacks:
 ---------------
 A callback function is  a function passed into another function as an argument. Which is then invoked inside the outer
 function to complete some kind of routine or action.

 f(g(x))--> g(x) is the callback

 call stack : 
    





*/

// function fun(x,fn){//consuming the call back
//     /*
//     x--> number
//     fn --> callback 
//     */

//     for(let i=0;i<x;i++){
//         console.log(i);
//     }
//     fn();//calling the call back
// }

// fun(10,function log(){//This is the call back function
//     console.log("Custom logger");
// })

/*
    Whenever you call a function , in the memory spacxe you have cal stack.
    Whenever you call the function fun(10,function..)--> There will be an entry of fun in the stack, with the arguments
    x =10, and fn = log.The function log is nkt called.

    It goes to the execution of the fun(), the for loop , and prints 1--9.
    In the next line the log function is called. So it will get an entry in the stack above the fun().. It prints Custom logger.
    Once the function is done the frame will be removed and it comes to the previous function.
*/

// let arr = [1,2,3,4];
// let x = arr.map(function process(v,i){
//     //for all the elements of the given array it passes the elements as anargument to the callback
//     console.log(v,i);
//     return v*v;
// })
// console.log(x);
// console.log(arr);

// function mapper(arr,fn){
//     let result = [];
//     for(let i=0;i<arr.length;i++){
//         let res = fn(arr[i],i);
//         result.push(res);
//     }
//     return result;
// }

// let arr = [1,2,3,4];
// let x = mapper(arr,function cuber(v,i){
//     console.log(v,v*v*v,i);
//     return v*v*v;
// })
// console.log(x);
// function fun(x,fn){
//     for(let i =0;i<x;i++){
//         console.log(i+" ");
//     }
//     fn();

// }
// function gun(){
//     console.log("Inside gun");
// }

// fun(3,gun);

//setTimeout(taskCallback,timeinMilliseconds)//The setTimeOut function expects a call back and time in milliseconds

// let x = setTimeout(()=>console.log("Hello"),6000);

// let y = setInterval(()=>console.log("Hey"),1000) ;
// setInterval(()=>{
//     for(let i =0;i<10;i++){
//         console.log("Chandrika");
//     }
// },2000);

// setTimeout(() => {console.log("Hey!");
    
// }, 56);

// let id1 = setTimeout(()=>
// console.log("Task completed 1"),10000);
// let id2 = setTimeout(()=>console.log("Task completed 2"),5000,clearTimeout(id1));
// let id1 = setInterval(() => {
//     console.log("Task completed")
// }, 3000);

// let id2 = setTimeout(()=>{
//     clearInterval(id1)
// },10000);

/*Closure
    At the time instance when the function fun will be called that is a call back function, the todo function is already over
    if fun() is called after the completion of todo and todo has ended, how fun() is able to access task variable?
    This happens due to closures.
    Closure is when a function remembers its lexical scope even when the function is exceuted outside that of the 
    lexical scope.
*/

function todo(task){
    setTimeout(function fun(){
        console.log("Completed",task);
    },2000)
}

console.log("Starting");
todo("assignment"); // calling todo
console.log("Ending");



