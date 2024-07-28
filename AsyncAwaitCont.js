/*
    Status
    Value
    OnFulfillment []
    OnReject []
*/
// function fun(){
//     return new Promise(function f(resolve,reject){
//         setTimeout(function process(){
//             console.log("resolved");
//             resolve("Chandrika");
//         },5000)
//     })
// }
// let x = fun();
// x.then(function exec(value){
//     console.log("value is :", value);
//     return "Sayan"
// })
// .then(function exec2(value){
//     console.log("Value is :", value);
//     return "Shiuli";
// }).then(function exec3(value){
//     console.log("Value is :", value);
//     return "Rina";
// })

// x.then(function exec4(value){
//     console.log("Value is : ", value);
// });
// function process(){
//     return new Promise(function f(resolve, reject){    
//         setTimeout(function s(){
//             console.log("1");
//             resolve("2");
//         },2000);
//     })
// }
// let y = process();
// y.then((function exec1(value){
//     console.log(value);
//     return "3";
// }))
// .then(function exec2(value){
//     console.log(value);
//     return "4";
// }).then(function exec3(value){
//     console.log(value);
//     return "5";
// }).then(function exec4(value){
//     setTimeout(()=>{
//         console.log("6");
//         console.log(value);
//         return "6";
//     },3000);
// });

// y.then(function exec6(value){
//     console.log(value);
// });
// async function p1(){
//     let value1 = await process();
//     console.log(value1);
//     let value2 = await process().then(function exec(value){console.log(value);});
//     console.log(value2);
// }
// p1();

/*
    async function fun(){
    .
    .
    .
    await ---- // can await non promises also. If the value is not a promise, it converts the value to a 
    resolved promise.
    }
*/
// async function fun(){
//     console.log("Enterred");
//     let x = await 20;
//     console.log("Exiting");
//     return x;
// }

// let val = fun();
// val.then(function f(value){
//     console.log("value is: ", value);
// })

// console.log("End");

/*
    In order to get rid of async await hell we have some promise functions:
    1. Promise.all()-->
        This method takes an iterable of promises as input and returns a single Promise. Tjis returned promise
        fulfills when all the inputs promises fulfill with an array of fulfillment values.It rejects when any of the input
        s promises rejects wth this first rejection reason.
*/

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
let downloadPromise = fetchData("www.google.com");
let writePromise = writeFile("Dummy data");
let uploadPromise = uploadData("test.txt","drive.google.com");
console.log("Start");
Promise.all([downloadPromise,uploadPromise,writePromise]).then(function process(value){
    console.log(value);
})