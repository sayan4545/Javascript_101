/*
--3) Comparison operators

-- Greater than (>)
-- Greater than equal to (>=)
-- leass than (<)
-- less than equal to (<=)
-- Below operators depend on the coercion.
-- not equal to (!=)
-- abstract equals to (==)
--  strict equality(===)
-- stricty not (!==)

--4) String based operators 

--  + -> Concatenate two strings and return only one. "abc"+"Sayan" -> abcSayan

--5) Bitwise operators 

    These operators dont directly operate on numbers but instead operate on binary representaion of number.
    -- Bitwise and ->        &
    --Bitwise Or ->          |
    --Bitwise Xor ->            ^
    --Bitwise Not ->           ~
    --Left Shift operator ->   <<
    --Right Shift operator ->  >>

    ? How these operators work?

     Suppose you want to apply bit wise and operator on 5 ,3 5&3 , What it will do is
     , it will convert the % into its binary value , 3 to its binary value. Then will apply the 
     and operator. So binary value of 5 and 3 is 101 and 011 . So the binary value after the 
     operation comes out as 001. The decimal value of this binary value is 1.

     5|4 ?
     binary value of 5 is 101
     binary value of 4 is 100
     101 || 100 ->101 
     So the final outpuit comes out as 5.

     2<<1 ?
     convert the left operand to its binary version . =10
     add no of zeroes to the right of the binary value same as the left operand.
     so the binary value of the result becomes  100
     final result is  4.

     1<<1 ->2
     2<<1 ->4

     5>>1 -> The last bit will be lost

     >--4) Ternary Operator

     --(condition)?(expression 1):(expression 2)
     idf the condition is true, the expression 1 is evaluated and if the condition is false , 
     the expression 2 is evaluated.

--- >> Statements and expression

let a = 10; One complete executable piece of code is a statement.
b = 1 +(x+2);
The whole is a statement , but the x+2 inside the bracket is a expression.
In a Statement there can be multiple expressions.

>> Conditionals

condition --> either decision 1 or decision 2.

if, else , if- else

if(condition){
    
}else{


}
The space inside the curly braces is called block. If the condition holds true, the code inside the 
block gets executed.

If the condition is true the else block is completely avoided. If the condition is false, the if block is completely avoided.

--- for multiple decision

if(condition1){

}else if(condition2){

}else if(condition3){

}else{

}

any comparison operator can be used in the conditions.

>> Loops
let i =0;
while(i<10){
    console.log(i);
    i = i+1;
}

for(let i=0;i<10;i++){
    console.log(i);
}

>> break keyword  --> whenever we hit the break, we come out of the nearest loop
>> continue keyword --> when we hit continue, we again move to the nearest loop for
                        execution.

*/
/*
// console.log(4>3);
// console.log(4>=3);
// console.log(4==4);
// console.log(4===4);

// console.log("Sayan "+"Chatterjee");
// console.log(5&3);
// console.log(5|4);
// console.log(2<<1);
// console.log(0-(-0));

// console.log((2>1)?("Sayan"):("Chatterjee"));


// Conditionals
// if(10>2){
//     console.log("Hey");
// }else{
//     console.log("Hi");
// }

// if (2>3){
//     console.log("2 is greater than 3");
// }else if(3<2){
//     console.log("3 is less than 2");
// }else{
//     console.log("Hey ")
// }

//while loop

let name = "Sayan";
// let i =0;
// while(i<5){
//     console.log(name);
//     i = i+1;//updation 
// }

// for(let i=0;i<5;i++){
//     console.log(name);
// }

// for(let i=1;i<10;i++){
//     if(i%7===0){
//         console.log("breaking now");
//         break;
//     }
//     console.log(i);
// }

// console.log();
// for(let i=0;i<5;i++){
//     let str = "";
//     for(let j=0; true;j++){
//         str = str +"*";
//         if(j==i){
//             break;
//         }
//     }
//     console.log(str);
// }
*/

// console.log()

// for(let i=0;i<5;i++){
//     let str = "";
//     for(let j=0;true;j++){
//         str = str +"* ";
//         if(j==4-i){
//             break;
//         }
//     }
//     console.log(str);
// }

// console.log();


// for(let i=0;i<5;i++){
//     let str = "";
//     for(let j=0;j<5;j++){
//         str = str+"* ";
//     }
//     console.log(str);
// }

//half pyramid pattern

// let n = 5;
// for(let row =0;row <n;row++){
//     let str = "";
//     for(let col=0;col<n-row;col++){
//         str = str +" ";
//     }
//     console.log(str);
//     for(let col=0;col<row+1;col++){
//         str = str +"* ";
//     }
//     console.log(str);
// }
function printHollowRectangle(rows, columns) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < columns; j++) {
            if (i === 0 || i === rows - 1 || j === 0 || j === columns - 1) {
                row += '*'; // Print '*' for border
            } else {
                row += ' '; // Print space for inside of rectangle
            }
        }
        console.log(row);
    }
}

for(let row =0;row<8;row++){
    let str = "";
    for(let col =0;col<8;col++){
        if(row==0||row ==7||col==0||col==7){
            str = str +"*";
        }else{
            str = str +" ";
        }
    }
    console.log(str);
}

// Example usage:
printHollowRectangle(5, 10); // Change the parameters to adjust the size of the rectangle
//continue
for(let i=0;i<10;i++){
    if(i%3===0){
        continue;
    }
    console.log(i);
}

//switch case
let exp ="-";
let a = 10;
let b =3;
switch(exp){
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;
    default:
        console.log("Invalid input");
        break;
}

let val =10;
switch(val){
    case 10:
        console.log("yes");
        break;
    default:
        console.log("no");
        break;
}
// When there are lot of conditions , use switch case than if-else.

/*
functions

To use a reusable piece of code

function <name> (args){


    return value;// not mandatory. if we dont write return , it will automatically return undefined.
//
//
}

return keyword returns an output out of the function and immediately stops executing.

function expression ? fat arrow function

*/
function fun(x){
    console.log(x+10);
    return x*10;
}

let x = fun(10);
console.log(x);
fun(10);

function print(x){
    x = x+10;
    return x;
}
let y = print(10);
console.log(y);
console.log(typeof (console.log(10)));// typeof console.log is undefined

let z =10;
let c = x++;
let m = x++;
console.log(z,c,m);

