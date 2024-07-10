/*
    How JS handles Async operations?
        Javascript is a single threaded language .
        It doesnt support multithreading. Also JS by-default only supports synchronous code execution.
*/
// console.log("Start");
// for(let i=0;i<10000000000;i++){
//     //task done
// }
// console.log("Task done");
// console.log("End");
/*
    The above example shows the synchronous nature of js. 
    The above property of synchroous code execution only works for operations natively
    known to js.
*/

// console.log("Start");
// setTimeout(()=>{
//     console.log("Chandrika")
// },3000);
// console.log("End");
/*
    The above piece of code donot follow the property, since settimeout() is not an native property of js.
    So, How is it is going executed?
    If it is not property of js, how it is running?/

    js runtime. Initially js was made to run inside browser only, browser gave a lot of facilities 
    to js to run. js needs execution env, the exec env  has js engine. The browser acts as a runtime.
    js alone is very weak. It cant even run without a runtime. The browser gives some browser based features, ex : DOM apis
    document.getElementById() This function is not known to js. 

    Node: In the year 2009, Ryan Dahl, he tried to run outside the browser in some other runtime. That runtime is called
    node. Instead of browser based runtime , we can write js in our local terminal. We got some other functions as well .
    The engine that node uses is the same that the browser uses.

    Now we know runtime also provides functionalities that can be leveraged by JS.
    But how JS handles them??

    For the below snippet of code-->

    1) We can usually do task that take a lot of time to complete without blocking the code flow. How?
        Whenever we run a jS program , we get a call stack , heap memory. Apart from the call stack we get two more 
        things , known as event queue and event loop.

        In kine number three, the setTimeIOyt() is the browser/node based feature.JS will take this call to the run time.
        Hey run time , i have a function that is known to you, please execute . And immediaytely move ahead.

        JS will now be at lone number 6. At the same time the timer will be started. The timer is for 3 seconds.
        Its a for loop . for loop is a known feature of js, it will keep on executing it. Lets say the whole for loop takes 
        8 secs to execute. The timer is done for only 3 secs. 
        for 5 secs , js will keep on executing its own native code. The runtime will pass the call back exec to the EVENT QUEUE
        The call back is going to wait inside the event queue.

        When will it will be executed?
        We have an event loop for that, it is like an infinite loop. It again and again checks for an condition. 
        the minet it finds the condition true, it pops up the call back or the event.

        The condition to start executing task from the event queue is that the call stack should be empty. 
        That is no function in the calls stack is left to be excuted.
        The second condition is that the global code is also done.

        HW-->
            What happens with console.log()?




    

*/

// function process(){
//     console.log("Start");
//     setTimeout(function exec(){
//         console.log("Exectued some task");
//     },3000);
//     setTimeout(function exec2(){
//         console.log("Executed some task 2");
//     },2000);
//     for(let i=0;i<10000000;i++){

//     }
//     console.log("End");
// }

// process();

// for(var i=0;i<4;i++){
//     setTimeout(function (){
//         console.log("*",i);
//     },i*1000);
// }

function a(){
    for(let i =0;i<4;i++){
        setTimeout(function exec(){
            console.log("Hi",i);
        },i*1000);
        console.log("Inside first setTimeout");
    }
}
a();
console.log("Hey Chandrika");
setTimeout(()=>{
    console.log("Hey Sayan!");
},3000);
