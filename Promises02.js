/*
        How promises work behind the scene?
        The promise object we create have 4 major properties
            1. Status
            2. Value
            3. Onfulfillment
            4. Onreject

        Status??
             Status shows current promise status.  Appending state, fulfilled state or a rejected state.
             Pending suggests that some process is going on.
             Fulfilled state gives you a notion of success
             Rejected state will give you a sense of error.

        Value??
             When status of the promise is pending , this value property is undefined .The moment , promise is resolved
             the value property is updated from undefined to the new value. new value is returned value or the value we are expecting
             So the value property acts like a place holder in the time promise functions.

        OnFulfillment??
             This is an array. This contains functions that we attach to our promise object.
             To a promise object we can attach some function using the .then() method. When the value property
             is updated from undefined to the new value,
             js gives chance to these attached functions one by i]one with the value property as their arguiment
             If there is no piece of code in the call stack or the global code log



*/

// // How can we write a function to download some data from url and not use call backs?
// /*
//     1. To create a promise call the promise constructor.
//     2. The promise constructor takes a call back as an argumnent
//     3. The call back passed inside the constructor , expects 2 arguments resolve and reject.
//     4. Then inside the callback write your logic.
//     5. If you want to return something on success, then call resolve function with whatever value you want to return.

// */

// // function fetch(url){
// //     return new Promise(function(resolve,reject){
// //         console.log("Starting fetching from the url",url);
// //         setTimeout(function process(){
// //             let data = "dummy data";
// //             console.log("Completed fetching data");
// //             resolve(data);// return some data on success

// //         },4000)

// //     })
// // }
// // // 1:04
// // function fetch1(url){
// //     return new Promise(function(resolve,reject){
// //         console.log("Starting to download");
// //         for(let i=0;i<1000000000;i++){
// //             // some logic
// //         }
// //         console.log("Completed download");
// //         resolve("data");
// //     })
// // }

// // fetch1("www.google.com");
// // console.log(Promise);

// // function demo1(){
// //     return new Promise(function (resolve,reject){
// //         console.log("Hi");
// //         setTimeout(function(){
// //             console.log("Task done");
// //             resolve("Students are the best");

// //         },5000);
// //         console.log("Bye");
// //     })
// // }
// // let y = demo1();
// // y;

// /*
// When do we consider a promise is fulfilled??
//      If we call resolve function we consider it fulfilled.
//      We consider it rejected if we call reject().
// */

// function demo2(val){
//     return new Promise((resolve, reject) => {
//         console.log("Start");
//         setTimeout(() => {
//             console.log("Completed timer");
//             if(val%2==0){
//                 // even number
//                 resolve("Even");
//             }
//             else{
//                 reject("Odd");
//             }
//         }, 3000);

//         console.log("Somewhere");
//     })
// }

// //let x = demo2(24);
// function demo2(val){
//     return new Promise(function(resolve,reject){
//         console.log("Starting..");
//         setTimeout(()=>{
//             for (let index = 0; index < 1000000; index++) {
//                // 
//               //   
//             }
//             console.log("After for loop..");
//         },7000)
//         if(val%2==0){
//             resolve("EVEN");
//         }else{
//             reject("ODD");
//         }

//     })
//     console.log("Where it goes..");
// }

// function uploadFile(file,url){
//     return new Promise(function(resolve,reject){
//         console.log("Starting to upload");
//         setTimeout(()=>{
//             console.log("File upload sucess",file,url,"file");
//             resolve("SUCCESS");

//         },10000);
//         console.log("Somewhere in between..");
//     })
// }
// uploadFile("dataFile","www.google.com");

// function fetch(url){
//     return new Promise(function(resolve,reject){
//         console.log("Starting download");
//         setTimeout(() => {
//             let data = "Dummy downloaded data";
//             console.log("Download completed");
//             resolve(data);
//         }, 3000);
//         console.log("Mimicking a downloader..");

//     })
// }

// console.log("Starting the program");
// console.log("We are expecting to mimic a downloader");
// x = fetch("www.google.com");
// console.log("New promise object created successfully but downloading still going on");

/*
    *****It is important to either resolve or reject a promise. If not resolved or rejected, the promise is not going to be settled.
    Starting the program gets printed
    We are expecting to mimic a downloader gets printed
    Next line has x = fetch(), so we are going to call the function fetch() and x is going to be global variable.
    fetch() says retuirn new Promise. Creation of  apromise object is synchronous.
    A new function is called, and its in the call stack.
    First line is Starting download. it gets printed.
    Next line is setTimeOut(). It will get to runtime.
    Then Mimicking a downloqder is printed.
    After this fetch() returns the promise objkect to x .
    A new promise object is created , state will be undefined.
    New promise object creatred downloading going on is printed. 
    Once the tiomer completes, the setTimeOut function will be called.
    data = "Dummy data"
    prints download comp;leted.
    After resolve, the undefined state changes to succesfull.
    *****
    THIS IS HOW A PROMISE IS CREATED.
*/

// function fetchUserName(url){
//     return new Promise(function f(resolve,reject){
//         console.log("Starting to fetch");
//         setTimeout(function process(){
//             console.log("Fetch started");
//             uname = "sayan1234";
//             console.log("Completed fetching");
//             resolve(uname);
//         },5000);
//         console.log("Taking some time to fetch, Please wait!!");
//     })

// }
// console.log("Starting the program");
// console.log("Mimicking a fetching program");
// let x = fetchUserName("www.facebook.com");
// console.log("Fetching , taking some time to complete");
// console.log(x);


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
// let data = fetchData("www.google.com");
// let filename = writeFile(data);
// let response = uploadData(filename,"www.datadrive.com");
// let downloadPromise = fetchData("www.google.com");
// downloadPromise.then(function processDownloader(value){
//     console.log("Download promise fulfilled");
//     //console.log(value);
//     let writePromise = writeFile(value);
//     writePromise.then(function processWritingFile(value){
//         console.log("Writing of file completed");
//         //console.log(value);
//         let uploadPromise = uploadData(value,"www.data.com");
//         uploadPromise.then(function processUpload(value){
//             console.log("Uploading file completed");
//             console.log(value);
//         })
//     })
// })
// fetchData("www.google.com");
// writeFile("result.txt");
// uploadData("result.txt","www.xxx.com");
/*
    The promise consumption is the main thing. Using this we will avoid IOC. Whenever we call a function 
    returning a promise, We will get a promise object that is like any js object that we can store in a variable.
    Now , will JS wait here?(line no 231)
    If there is any async piece of code,will js wait here?
    If creation of promise involves synchronous piece of code, it will wait, otherwise not.

    The call back have  a long synchronous piece of code, so jS will have to wait for promise object creation
    And just after the loop, we also resolve the processs so we get a resolved promise.Promise object will get created e
    easily as there is no blocking piece of code. but initially it will be pending as the fulfillment happensafter a 
    timer of 7 seconds.
    Now technically when the promises gets resolved we have to execute some functions.

    from 231 to 233

    We can use .then() on the promise object , to bind the function we want to execute once we fulfill a promise. The 
    .then() takes function as an argument that we want to execute after promise fulfills and the argument function takes value
    property as parameter.
    .then() is for fulfillment only.



*/

let downloadpromise = fetchData("www.google.com");
downloadpromise
.then(function processDownload(value){
    console.log("Downloading is done with the following value",value);
    return "Sayan";
})

/*
    If you do download promise = fetchData()
    and downloadPromise.then(function f(){
    console.log(value)});
    return "Sayan"

    The .then() returns a new promise. 
*/


