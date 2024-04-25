/*

it is a multi purpose and multi paradigm programming language.

>console.log()--> in JS--> console is a  js object that has log function.

>System.out.println()--> in Java

>if you want to show user any message just write console.log(" any message");

>semi colon is not mandatory in js. It increases the readabilty of the code.

> console.log("Hello world"); --> shows Hello world to the user.

> Different data types are required to create applications.

>Types of values in JS--> 1)Undefined 2)NUll 3)Boolean 4)String 5)Number 6)Symbol  and Object--These except Object are primitive types. They are atomic 
in nature. They don depend on other data types.

>Strings represents texts. If we define anything in a bunch of doubkle quotes, It will be a string.
When we print Hello JS , we are printing strings . Can be defined by single quotes and back tick also.

>We dontb have a character data type in String. 'a' and "a" are both string in js.

> boolean --> true or false 
>In objects we store key value pairs.

>Symbol --> console.log(Symbol("Hello")); Immutable data type.
> In JS we have both 0 and -0. Both are different .console.log(0) -->0 and console.log(-0) --> -0.

> OPERATORS IN JS -- 1)typeof -->  It will show the type of the corresponding value. 
console.log(typeof <value>) --> The answer we get is in the form of a string.
console.log(typeof 12);--> Number
console.log(typeof "Sayan")--> String

> typeof undefined = undefined
typeof null --> Object

>Difference between program and process 

--If we write a code in a file that is a program. While program in a running state is called a process.
or program under executionj is process.

--When a program gets transformed into process , a lot of thing happens. We load all the pieces of code into the RAM 
Once the process is running, inside our ram we get the memory allocated for our process.We need a mechanism to store the values.
we do it using the variables. Variuables are the buckets in the memory , whicvh store the values. The bucket will have a name or 
a label. It will store some value. The overall bucket is called variable.

> How do you initialise variables in JS?
-- There are 3 ways to be precise 

1) let--> let <variable name> = value;

2)var --> var <variable name> = value;

3) const --> const <variable name> = value;
the values initaialized by const cant be updated.

keywords are special words that holds speciual meaning to the language. They are already reserved.

> Operators
--1) Arithmatic operators -(+,-,*,/,%)


*/

console.log("Hello JS");
console.log("Hello World!");
console.log("Hello Node");
//Numbers
console.log(12);
console.log(3.45);
console.log(-23);

//Strings 
console.log("Sayan Chatterjee");
console.log('Sayan Chatterjee');


//Boolean 
console.log(true);
console.log(false);

//undefined, null
console.log(undefined);
console.log(null);


//Object
console.log({"Sayan":12});

//Symbol
console.log(Symbol("Hello"));

//typeof operator

console.log(typeof 12);
console.log(typeof "Sayan Chatterjee");
let a = console.log(typeof 12);
console.log(typeof a);
console.log(typeof Symbol("Hello"));
console.log(typeof NaN);
console.log("a","b",12,56);

//To print in the same line

process.stdout.write("Hello "); //This will only with node.
process.stdout.write("World"); //This will not work with the browser
console.log();
console.log("-----------------------")
let x  =10;
var y =20;
const z = "sa";
console.log(x,y,z);

console.log(typeof (typeof (12)));// The output is string 

//Operators
console.log(5+2);
console.log(4*2);
console.log(7-2);
console.log(4/2);
console.log(4%3);