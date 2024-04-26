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
These o[perators dont directly operate on numbers but instead operate on binary representaion of number.
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







*/

console.log(4>3);
console.log(4>=3);
console.log(4==4);
console.log(4===4);

console.log("Sayan "+"Chatterjee");
console.log(5&3);
console.log(5|4);
console.log(2<<1);
console.log(0-(-0));

console.log((2>1)?("Sayan"):("Chatterjee"));