/*
    Status
    Value
    OnFulfillment []
    OnReject []
*/

function fun(){
    return new Promise(function f(resolve,reject){
        setTimeout(function process(){
            console.log("resolved");
            resolve("Chandrika");
        },5000)
    })
}

let x = fun();
x.then(function exec(value){
    console.log("value is :", value);
    return "Sayan"
})
.then(function exec2(value){
    console.log("Value is :", value);
})