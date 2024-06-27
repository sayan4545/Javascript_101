/*
Every language has some mechanism for type interconversion. In java , System.out.println("Hello"+22), it wikll
print Hello22. 22 is converted to string here. 
Type interconversion exists in two types, implict and explicit. Implicit is when the language automatically converts types. 
Explicit is when we manually command to convert types. 
Similarly this concept is available with js also.

There are 4 pillars of JS
1.Coercion
2.OOPS
3.Asynchronous nature of JS
4. Scopes

Coercion - Type interconversion
Abstract Operations -- These are operations/functions that  are not availabkle fir end users to do. But JS internally
uses it and these are mentioned in the official docs.

1. ToString
2.ToNumber
3.ToBoolean
4.ToPrimitive

We cannot directly call them. But few js operations like sub,addition, etc internally calls them.
so we can mimic them.

1. ToNumber

we can use (-) operation to mimic ToNumber.
a-b-> a = lval, b = rval.
lnum = ToNumber(a)
rnum = ToNumber(b);
return lnum-rnum;
Substraction converts both the operands to a number.

ToNumber table 
Arg type    Result
Undefined   NaN
Null        +0
Boolean     if True->1,else 0
Number      return argument
String      See Conversion algo
Symbol      TypeError exception
Object      let primValue be ? ToPrimitive(argument hint,Number)
            Return ? ToNumber(primValue).

If by iterating over the strings if you get valid digits. its converts to number. If other characters like .,_is present
js wont be able to convert to.

""->0
"0"->0
"009"->9
"$"->NaN
"0xaf"->175
true ->1
false->0
null->0
[""->0
["-0"]->0
["undefined"]->0

ToString-->
We can use + operator to mimic the ToString 

get the left operand, get the right operand. Apply ToPrimitive on both the values.
Once done with this step, if either of the two values is String, then convert both of them to string and  apply
string concatenation 

a+b->
a = lval,b = rval
lprim =ToPrimitive(lval)
rprim = ToPrimitive(rval)
if(lprim is a String or rprim is a String) 
    we do String concatenation
otherwise lnum = ToNumber(lprim)
rnum = ToNumber(rprim)

ans = lnum+rnum

ToString

Undefined = "undefined"
Null = "null"
Boolean = if true = "true"
            if false = "false"
Number = return NumberToString(argument)
String  = return argument
Symbo, = throw typeof erreor
Object = ??



<--ToPrimitive-->
This function takes an input argument and tries to convert it into non object (primitive) type. If it cant convert,
it will throw error. It takes one more optional parameter called as preffered type. If we have 2 or more 
than 2 values , this optional parameter helps.

It will first cxheck if the input is valid ECMAscript language value or not
If the input is not an object, it will return the input directly.
If the preferred type is not given, a new variable hint is initialised, and make it String default.
hint = "default"
else if the preferred type is String, then hint ="String",
if the preferred type is number, hint = "Number"
if hint is "default", then hint = "Number"

It internally calls OrdinaryToPrimituve

If the hint is String - toString()->valueOf()
if the hint is number -> valueOf()->toString()

hint is String -> toString() ->1. result is non object -> return result
2) result is object ->call valueOf() ->1. result is non object -> return result
else throw error.
valueOf() and toString() are not abstract. They are callable. By default toString() on an object returns 
'[object object]'

By default valueOf() on an object returns same object.

for array -> valueOf()-> same array
toString() -> print the array without bracklets



*/
// console.log("11"-1);
// console.log("1"+23);
// console.log(12-4);
// console.log(undefined-3);//Nan
// console.log(true-1);//0
// console.log(23-"1bc");
// console.log("123"-1);
// //console.log(Symbol("112")-12); This gives type error.



// console.log("0xf"-1);//"0xf" gets converted to a valid hexadecimal number
// console.log("1.34"-1);
// console.log("---------------");
// console.log(10-[undefined]);
// console.log(typeof[]);

// console.log("-------------")
// console.log("Sanket"+" "+" Singh");
// console.log(undefined+"Node");
// console.log(123+"90");
// console.log("abd"+"abd");
// console.log("true"+true);
// console.log("false"+false);

// console.log([1,2,3]+ "abc");


// console.log("null");
// console.log([]+[]);

let a = {
    "eng": 89,
    "math":100
};
console.log(typeof(a.toString()));
console.log(a.valueOf());

let x = [1,2,3];
console.log(x.valueOf());
console.log(x.toString());

console.log("Sayan"+{"a":89});
// "Sayan " is already an primitive. The right parameter is not an primitive
// so we call ToPrimitive without an hint.means hint ->number So we call valueOf() of this object and it returns same Object.
//The result is again an object, we call toString(), it return an String of object object. Since it is an String and an primitive
// So now "Sayan" + "[Object Object]" 

console.log(10-{"a":10});
console.log(123-{"a":"Sayan",valueOf(){return 100}});







