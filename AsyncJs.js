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

    

*/

function process(){
    console.log("Start");
    setTimeout(function exec(){
        console.log("Exectued some task");
    },3000);
    for(let i=0;i<10000000;i++){

    }
    console.log("End");
}

process();