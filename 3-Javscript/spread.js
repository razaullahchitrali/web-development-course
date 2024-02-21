// 1. copy one array into another
// let arr1 = [1,2,3,4,5];

// let arr2 = [...arr1,6,7,8,9,10];

// console.log(arr2)


// 2. convert string into array
// let names = "Raza";
// console.log([...names])

// 3. how to use in function call

// const numbers = [1, 3, 5, 7];

// console.log(...numbers);

// function addNumbers(a, b, c, d) {
//   return a + b + c + d;
// }

// console.log(addNumbers(...numbers));

// // The invocation above will return:


// let name = "raza ullah";
// let course = "language";

// var obj = {
//     name,
//     course,
// };
// console.log(obj);

let n = "name";
let obj = {
    [n]: "yahoo baba",
    course:"oxford",

};
console.log(obj);
