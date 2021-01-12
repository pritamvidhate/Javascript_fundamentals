// let vals = [2,4,2,8];
// let sum = 0;
// for(let val of vals){
//     sum +=val;
// }
// console.log(sum);

// let vals = [2,4,5,6];
// let result = vals.reduce((acc, val) => acc + val, 10);
// console.log(result);


// let vals = [2,4,5,6];
// function findMax(acc, val){
//     if(val > acc){
//         acc = val;
//     }
//     return acc;
// }
// let biggest = vals.reduce(findMax);
// console.log(biggest);


let vals = [2,3,4,6,];
let biggest = vals.reduce((a,b) => b > a ? b : a);
console.log(biggest);

let sum = vals.reduce((acc, val) => acc + val);
console.log(sum);

