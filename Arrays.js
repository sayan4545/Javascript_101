/*
    Arrays are ordered collection of items.
*/

// let arr_01 = ["mangoes",56,null,undefined,NaN];
// console.log(arr_01);
// console.log(arr_01[0]);

// arr_01[2] = 90;
// console.log(arr_01);
// console.log(typeof(arr_01));
// //to check if it is array or not?

// console.log(Array.isArray(arr_01)); // Returns a boolean value. 

// // To add element to the array 
// // push method

// arr_01.push("Chandrika");
// //This changes the original array

// // Re,oving element from an array
// console.log(arr_01.pop());// removes the last element and returns it.
// console.log(arr_01);

// // To add element at the beginning

// arr_01.unshift("Sayan");
// console.log(arr_01);

// // To remove elements from the start

// arr_01.shift();
// console.log(arr_01);

// let array1 = [1,2,3,4];
// let array2 = [].concat(array1);
// console.log(array2);
// console.log(array1===array2);

// //  Cloning array using the spread operator
// array3 = [...array1,6,7,8];
// console.log(array3);

// let nums = ["one","two","three","four"];
// let nums2 =[];
// for(let i=0;i<nums.length;i++){
//     nums2.push(nums[i].toUpperCase());
// }
// console.log(nums2);

//loops in array
let fruits = ["mango","banana","grapes","apple"];
for(let fruit of fruits){
    console.log(fruit);
}
let i =0;
while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}
