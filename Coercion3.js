/*

ToBoolean --> This abstract operation converts the given type to a boolean value. ToBoolean works a bit 
differently when compared to ToString or ToNumber.
It maintains a list of values , which when recieved as argument returns false, and everything apart from the value return true


Undefined --> False
Null --> false
Boolean -->return argument
Number --> +0,-0,NaN - False , else true
String --> If empty String--> Fale, else True
Symbol--> true
Object --> returns True

List of falsy values

Null, Undefined, +0,-0, NaN, empty String, false

How can we test the ToBoolean Operation?

We can use logical not operator(!)
!a -> 0ldValue = ToBoolean(a)
if(oldValue ==true)--> it return false
else returns true


??  Difference between == and === operator?

The abstract equality operator checks the type, if the type is same,it 
calls the strict equality operator. On the other hand the Strict equality operator , if finds the types to be different
directly throws false result.

Abstract equality does coercion if types are not same. Strict equality doesnt do coercion.

Strict equality-->
 1 . if type(left operand) is Number then 
    a) if leftOperand is NaN , returns false
    b) if Right Opearand  is NaN, returns false
    c) if Right operand is same number value as left operand , return true
    d) if right operand is +0 and left operand is -0, return true
    e) if Right operand is -0 and left operand is +0 , return true
    f) return false
*/

// console.log(!0);
// console.log(!3);
// console.log(!{});
// console.log(!console.log(0));
// console.log(console.log(0));

// console.log(NaN===NaN);
// a = "Sayan";
// console.log(a===a);
// console.log(10===10);
// console.log(+0===-0);
// console.log(-0===+0);

console.log(1===null);
console.log(null ===null);
console.log(undefined===undefined)
console.log({"a":67}=={"a":67});
let x = {"a":90};
console.log(x===x); 

console.log(NaN===34);




