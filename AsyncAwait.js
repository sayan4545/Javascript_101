/*
    Promise.resolve()??
     To mimic a promise that has been resolved.This method resolves a given value to a promise.If the 
     value is  a promise, that promise ios returned, if the value is thennable, Promise.resolve()
     will call the then() function with two callbacks it prepared,otherwise the returned promise will be fulfilled with the 
     value.
*/

// let x = Promise.resolve("Saayn");
// x.then(function f1(value){
//     console.log("value from f1 : ",value);
//     return value;
// })
// .then(function f2(value){
//     console.log("Value from f2: ",value);
// });

// console.log("Start of the file");//1
// setTimeout(function timer1(){
//     console.log("Timer 1 done");//3
// },0);
// for(let i=0;i<10000000;i++){

// }
// let x = Promise.resolve("Sayan is a promise");
// x.then(function processPromise(value){
//     console.log("Whose Promise?",value);//2
// });
// setTimeout(function timer2(){
//     console.log("Timer 2 done");//4
// },0);
// console.log("End of the file");

/*
    Explainimg the above code snippet
        We get a call stack , event queue and event loop. Apart from all these we get a micrtask queue.
        In case of promises, the call backs are sent to microtask queues. Unlike the setTimeout()
        Line 18--> Console.log("Start of file")--> Prints Start of file.
        line 19--> setTimeout() --> This is not known to js, it will transfer this to the runtime.JS wont wait here
        It will go to line 22.
        line 22--> Almost by this time the timer of the setTimeOut() is done, the runtime will send the call back to the
        event queue. The for loop executes some time.
        line 25--> A variable x is created in global scope. The value of x is resolved promise 
        the value is Sayan is a promise.
        line 26--> x.then() --> Inside the promise object we have OnFullFillMent array. The processPromise call back goes to 
        the OnFullFillment array. The callback goes inside the microtask.
        Line 29--> Another setTimeout() initiates.
        line 32--> It goes to console.log()--> prints "End of file.

        Now There is no piece of code in callback and global scope.
        We can start executing task from the event queue and the microtask queue.
        Whenever we have tasks waiting in microtask queue and event queue. Tasks in microtask queue are given higher priority.
         So processPromise() goes to call stack.  So whose promise gets executed.
         After that timer1() and tiner2() gets executed ine buy one.

         promise callbacks goes to microtask queue
         normal callbacks goes to event queue
         

        
        "



*/

// console.log("1");
// setTimeout(() => {
//     console.log("5");
// }, 0);
// for(let i =0;i<100000000000000;i++){
//     //
// };
// let x = Promise.resolve("3");
// x.then(function f (value){
//     console.log(value);
// })
// setTimeout(()=>{
//     console.log("6");
// },0);
// for (let index = 0; index < 1000000; index++) {
//     //
// };
// let y = Promise.resolve("4");
// y.then(function f2(value){
//     console.log(value);
// })
// console.log("2");

// console.log("1");
// setTimeout(() => {
//     console.log("2");
//     let y = Promise.resolve("3");
//     y.then(function f(value){
//         console.log(value);
//     })
// }, 0);
// for(let i=0;i<1000000;i++){
//     //
// }
// let x = Promise.resolve("5");
// x.then((value)=>{
//     console.log(value);
// });

// setTimeout(()=>{
//     console.log("6");
// },0);
// console.log("7");

// function dummyPromise(){
//     return new Promise(function(resolve,reject) {
//         setTimeout(()=>{
//             console.log("promise 1");
//             resolve("SAYAN");
//         },10000);
//     })
// }

// console.log("1");
// setTimeout(()=>{
//     console.log("Timer 1");
//     let x = dummyPromise();
//     x.then(function f(value){
//         console.log(value);
//     })
    
// },0);
// setTimeout(()=>{
//     console.log("Timer 2");
// },0);
// let y = Promise.resolve("CHANDRIKA");
// y.then(function f2(value){
//     console.log(value);
// })
// console.log("2");

/*
    Async and Await??
        We can declare a function async.
        If a function is declared async it does the following:
             It allows the use of await keyword.
             If you declare a function async , it allows consumption of promise using await.
             an async function always converts your return value to a promise.
*/

function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("started downloading from url",url);
        setTimeout(function processDownloading(){
            let data = "DUMMY DATA";
            console.log("Completed download");
            resolve(data);
        },5000)
    })
}

function writeFile(data){
    return new Promise(function(resolve,reject){
        console.log("Started writing",data," in a file");
        setTimeout(function processWriting(){
            let filename = "result.txt";
            console.log("File written succesfully");
            resolve(filename);
        },3000)
    })
}

function uploadData(file,url){
    return new Promise(function(resolve,reject){
        console.log("Starting upload on irl: ",url,"filename is : ",file);
        setTimeout(function processUploading(){
            let result = "SUCCESS";
            console.log("Succesfully uploaded");
            resolve(result);
        },5000)
    })
}
async function processing(){
    let downloadeddata = await fetchData("www.ggogle.com");
    console.log("Downloading completed: ",downloadeddata);
    let writtendata = await writeFile(downloadeddata);
    console.log("Writing completed: ",writtendata);
    let uploadeddata = await uploadData(writtendata,"www.dada.com");
    console.log("Completed process with response: ",uploadData);
    return true;


}
processing();




