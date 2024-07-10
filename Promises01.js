/*
    Runtime can give synchronous features as well.
    Whenever we do console.log() in NodeJs , internally ot does process.stdout.write
    Is console.log() synchronous or asynchronous? --> depends on the environment. 
    In event queue we recieve call backs.
    Call backs are function passed to other functions. 
    There are some disadvantages of call backs
        Call back hell: Code readability gets hampered. 
        1) The biggest disadvantage of call back is Inversion of control.
            If there is some part of code whose control , we are passing to someone else, and we dont know how that part will
            be executed. This problem is called IOC.

    ** Promises::
            Promises are special JS objects that are also considered readability enhancers. They get immediately
            returned from a function setup to return a promise.
            They act as place holders for the data we hope to get back from some future task.
            We also attach the functionality we want to defer untill the future task is done.
            And promise object automatically handles exceution of this functionality.
            So promises do two things -->
                 Inside JS 
                 Outside JS

                 1) It signs up the process required to run in the run time and gives a place holder i.e JS which has a value 
                 property.

        How to create a promise??
        How to consume a promise??



*/

// function fun(inputString, fn){
//     let output = inputString.split(',');
//     for(let i=0;i<output.length;i++){
//         fn(output[i]);
//     }
// }

// fun("name:sayan,sub:CSE",function process(ip){
//     let arr = ip.split(":");
//     console.log("{",arr[0], " => ", arr[1], "}");
// })
function fetchCustom(url,fn){
    // download content of the url
    // this downloading can taks=e some time
    console.log("Starting download");
    setTimeout(function process(){
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
        console.log("Ending the function");
    },3000);
}

function writeFile(data,fn){
    console.log("Started writing data");
    setTimeout(function process(){
        console.log("writing completed");
        let fileName = "output.txt";
        fn(fileName);
        console.log("Writing ended");
    },4000);
}

function uploadFile(file,newurl,fn){
    console.log("Upload started");
    setTimeout(function process(){
        console.log("File uploaded success on",newurl,"File",file);
        let uploadResponse = "Success";
        fn(uploadResponse);
        console.log("Upload ended");
    },2000);
}
//tasks
// Write a function to download data from url 
// Write a function to save that downloaded data in  a file. 
// Write a function to upload the data to a new url.
fetchCustom("www.google.com", function downloadCallBack(response){
    console.log("Downloaded response is ", response);
    writeFile(response,function writeCallback(fileName){
        console.log("new file written is", fileName);
        uploadFile(fileName,"www.google.com",function uploadCallback(uploadResponse){
            console.log("Succesfully uploadded",uploadResponse);
        })
    })
});

// function fetchCustomUsingCallBack(url,fn){
//     // download the content from url
//     // give the result to the call back
//     console.log("Starting download");
//     setTimeout(function process(){
//         console.log("Download completed");
//         let response = "Dummy data";
//     },3000);
// }
