/*Coercion
-----------------------------------------------------------------------------------------------------
   Coercion stands for type interconversion. type interconversion exists in other languages also.Can be 
   implicit and explicit. Implicit means language automatically do the interconversion. Explicit means
   manually the user does that.

   For C,C++,Java types exists for the bucket. int x =10;, String a = "Sayan", double b = 10.90
   In language like JS , type exists for values. let x =10; x = "str";

   "Everything in JS is an object",This statement is absolutely false.
   There are some primitive types in JS, apart from these, all other are objects.

   How JS handles Coercion?
   ** Abstract Operations :  These operations are not the part of ECMA Script language.They are 
                             defined here to solely to aid the semantics of the language.
                             For example , The JS automatically performs the 1) Type conversion.
      The ECMA script language implicitly performs the type conversion as needed.
      First abstract operation we need to learn:
      1) ToPrimitive

      The ToPrimitive abstract operation , takes an input argument and an optional preferred type argument.
      This operation converts  the input to a non object type value.If an argument is capable of getting converted to more 
      than one primitiuve type then the function uses preferred type argument to resolve this.
      As we said , this is also an abstract operation that means it is conceptual. We cannot invoke it but JS can 
      * The ToPrimitive function prefers String and Numbers.   

      Whenever in an numeric operation we dont have a number , ToNumber() func is called. For example substraction operation.

      
      


    
 
*/
// console.log(1+"1");
// console.log("1"+"1");
// console.log(1-"1");

// console.log(56+'45');
// console.log(8+'1');
// console.log(1+1);
// console.log(typeof(1+"1"+1));
// console.log(typeof(1-"1"));
// console.log(2-6);

// console.log(1+1);
// console.log(123 + null);
// console.log(typeof(NaN));
// console.log(1-"abcd");
// console.log(typeof(undefined+undefined));

// console.log(4*NaN);
// console.log(4/0);
// console.log(Infinity/4);
// console.log(true-1);
// console.log([null]-1);
// console.log([1,2,3]-[5,7,8]);
// console.log(10-{"name":"Sayan",valueOf() {return 2;}});
// console.log(10-{"a":"Sayan","b":"Chandrika",valueOf() {return 10;}})
// console.log(10-{"a":"Sayan", valueOf() {return {"a":"Str"};}, toString() {return "9"}});
console.log(223-{"a":"Sayan","b":"Chandrika",valueOf() {return {"a":"b"};},toString() {return "123"}});

