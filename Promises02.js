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

// How can we write a function to download some data from url and not use call backs?
/*
    1. To create a promise call the promise constructor.
    2. The promise constructor takes a call back as an argumnent
    3. The call back passed inside the constructor , expects 2 arguments resolve and reject.
    4. Then inside the callback write your logic.
    5. If you want to return something on success, then call resolve function with whatever value you want to return.

*/

function fetch(url){
    return new Promise(function(resolve,reject){
        console.log("Starting fetching from the url",url);
        setTimeout(function process(){
            let data = "dummy data";
            console.log("Completed fetching data");
            resolve(data);// return some data on success

        },4000)

    })
}
// 1:04
