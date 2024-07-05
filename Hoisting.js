/* 
    Phase 1:
         Line 1: Since not a formal declaration, wont be considered
         Line 2: Assign gun() a global scope

    Phase 2:
        Line 1: Do you know a varibale gun()? Yes it knows and tries to run it:

        ***This phenomenon of actually able to execute a function before even declaring it is called Hoisting in JS.
        Hoisting is direct consequence of lexical scoping that happens in js, due to which we are able to access some function
        and variables before decalring them , which gives us a notion that they are  moved up in the file.

        Parsing is different from hoisting.

        


*/





// gun();
// function gun(){
//     console.log("Be a JS pro");
// }

// function fun(x,y){
//     //Args will be given function scope.
// }

// var x =100;
// console.log(x);

console.log(x);// Undefined.
var x = 100;

console.log(y);
let y = 788;// This will throw error because all these things of hoisting
// donot apply to block scopes. 

/*
Block scope says wherever you have declared a variable in the block scope, it will be avaiulable
only below it.
*/
