/*
 Scopes?
    In simple words , scope is simply where to look for things. In programming contexts, we asre looking for 
    variables and functions. 
    For example, we are looking to use a variable, is that varibale already defined? 

    There are three type of scopes in js.
    1> Global 
    2> Function
    3> Block

    1>Global Scope: 
         If a variable is present in the global scope, it is accesible everywhere in the JS file. But how do we define 
         variable in Global scope?

         Declare or define varible outside any function or a block.

    2> Function Scope-->
        In a func scope, the visibility of a variable /function is just inside the outer function.
        function fun(){
            var x =10;
        }
        The variable x is just accesible inside the func fun(), it is local to fun().

    3> Block scopes--> 
        In Js we can use a pair of curly braces to declare a block. If a varuable.function is only accesible or visible inside a block, then it will
        have a block scope.

 ?? Difference between let,var and const-->
var -->

 Whenever you use a var anywhere inside a function, the variable gets function scope. If we use it
 outside a  function, no matter if its is enclosed in a block or not, it will give it a global scope.

 let -->

 Whenever we initialise a variable with let, it always get the scope of the enclosing block.
 It wont be accesible outside the block.
 had it been function scoped, it would have been accesible through out the function. But since it is block
 scoped, it will be only accesible after the varibale is declared inside the function.
 Doesnt allow re declarations.
 If we declare let outside any block, it doesnt get complete global scope.

 const--> const are block scoped, much like the variable declared with let.The value of const cant be changed.
 doesnt allow re assignment.


 Lexical scoping:
    

 How JS parses the code?

 Js is not interpreted, it is definitely a hybrid. i.e = compiled+interpreted. 
 Whenever we try to execute e js code, it pareses the whole code firstly.In this parsing phase it assigns scopes to variables,
 functions. Once done, then it reads the code and executes it.
 Every variable in your code will be used in one of the following ways:
    1) Either it will be getting a value assigned. That is it is used as a target. x = 10;
    2) It will be used to retrieve a value. y = 10 +x;
What JS does is? it will start the parsing phase. Outside every thing it maintains global scope, the moment it goes inside a 
function, it starts maintaining scopes of that function.



*/


// let name = "Sayan";
// function fun(){
//     console.log("Greet" +" "+ name);
//     var x =10;

//     function test(){
//         console.log("test"+" "+ x);
//     }
//     test();
//     console.log(x);
// }
// function greet(){
//     console.log("Hey"+" "+ name);
// }

// fun();
// greet();
// //test(); --> This will throw  erreor , since function test () is defined inside the scoipe of the 
// // function fun().

// /*
//     The variable bame is declared outside the scope of the functions. 


// */

// if(true){
//     let x  =18;
//     console.log(x);
// }

// {
//     var nam = "Sayan";
// }
// console.log(nam);

// function fun(){
//     console.log(x); // undefined ? Lexical scoping.
//     var x = 10;
//     console.log(x);
// }
// //console.log(x); => Will throw an error.
// fun();

// if(true){
//     var z =10;
// }
// if(false){
//     var a =100;
// }

// console.log(z);
// console.log(a);

// {
//     let a =10;
// }

// if(true){
//     let x =10;
// }
// if(false){
//     let y =100;
// }
// console.log(x);
// console.log(y);
// function fun(){
//     console.log(x);
//     let x  = 1;
//     console.log(x);
// }
// fun();

// const x = 100;
// //x = 90;
// console.log(x);

//var teacher = "Sayan";
// function fun(){
//     var teacher = "Chandrika";
//     teachingAssistant = "Vaibhav";
//     console.log(teacher);
//     console.log(teachingAssistant);
// }
// fun();
// console.log(teacher);
// console.log(teachingAssistant);
var teacher = "Sayan";
function fun(){
    console.log(subject);
    var subject = "Javascript";
    var teacher = "Chandrika";
    teachingAssistant = "Vaibhav";//not a formal declaration
    console.log(teacher);
    console.log(teachingAssistant);
}
fun();
console.log(teacher);
console.log(teachingAssistant);




/*
Phase 1: Parsing -> Scope resolution
Whenever we declare a variable using var, let or const, or initialising a function, it is a formal declaration
In the parsing phase , JS looks for only formal declaration.
lets assign the teacher variable a global scope. In this parsing phase, we only allocate scope
not any value.
Since fun() is not inside any function or bloclk, allocate global scope to fun().
The monet we go inside a function, we maintain a new scope callled function scope.
Inside the scope of fun(), allocate scope of fun() to teacher variable.
We dont have a formal declaration in the next line.
Outside the function, there is not any formal declaration. 

Phase -2--> Execution

line 1--> We have a variable teacher in global scope, assign value "Sayan" to the variable.
line 2--> There is a function fun(), since we are not calling it, there will be no execution.
We go to line 7-->
fun()--> A source value , since some variable fun() is used. 
In the global scope there is a function fun().  We go inside the function fun()
line 3--> There is a variable teacher having the scope of fun() , assign value "Chandrika" to the variable.
line 4--> There is a source value , so we print Chandrika, since inside the scope of fun().
line 6 --> There is a variable teacher used as source having global scope. So Sayan will be printed.

Once inside a scope , we dont know about the scope of a variable , we check the outer scopes, one by one.
So we will check for teachingAssistant in the outer scope of fun(), i.e the global scope.
Since it was not formally declared, there can be two cases:
    1> It was not declared outside
    2> it was declared outside.

    Autoglobals: In js , if we keep on searching the scope of the varibales in outer scopes and  no where find it
    we automatically consider it in the global scope. This happens during execution phase.

    What happens if fun() is called after the line console.log(teachingAssistant)??
        Autoglobals only works with target reference and not source. Targert ref means we are allocating a value to
        a variable. A source ref means we are extracting or fetching a value. So, when we put the line console.log(teachingAssistant)
        in front or before fun(), it will throw an error, since auitoglobals acts only in execution.

So teachingAssistant will get a global scope.


*/










