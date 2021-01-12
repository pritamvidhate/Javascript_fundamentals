// problem:- sum(5)(10)(7)(3);

// function sum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                     console.log(a+b+c+d);
//             }
//         }
//     }
// }
// sum(5)(10)(7)(3);


// Using Arrow function

const sum = (a) => (b) => (c) => (d) => (e) => a+b+c+d+e
const add = sum(5)(10)(7)(3)(5);
console.log(add);