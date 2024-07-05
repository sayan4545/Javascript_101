/*
    Value being undefined vs value being undeclared.
    line 1 : assign global scope to teacher.
    line 2: assign global scope to fun().
    line 3: assign teacher variable to the scope of fun().
    Line 4: Not a formal declaration
    Line 5: Not a declaration
    Line 6: Not a declaration
    Line 7: Assign global scope to gun()
    Line 8: Not a assignment
    line 9: Assign subject a scope of gun()
    line 10: Not a declaration
    line 11,12,13 : Not a declaration

    Second phase: Execution
    Line 1: Assign value Sayan to techer in global scope

    **undefined is a variable state when the scopes already know about it , but in the execution phase we have not 
    allocated it a value.

    **undeclared is a variable state when we never formnally declare a variable andbefore assigning it a value  so that it
    has chance to become autoglobal, we try to use it

    
*/
// var teacher = "Sayan";
// function fun(){
//     var tecaher = "Chandrika";
//     teachingAssistant = "Vaibhab";//Eligible to become autoglobal.
//     console.log(tecaher);
//     console.log(teachingAssistant);
// }
// function gun(){
//     console.log(subject);
//     var subject = "Java";
//     console.log(teacher);
// }
// console.log(teacher);
// fun();
// gun();

// function fun(){
//     teachingAssistant = "Sayan";
//     console.log(teachingAssistant);
//     var teachingAssistant = "Javascript";
// }
// // fun();

var fun = 18;
function gun(){
    console.log("Hello World");
}
gun();
//fun(); --> Type Error

