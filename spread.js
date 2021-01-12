var returnedValue = Math.max(2,4,6,10,7,1);
console.log(returnedValue);


function add(a, b){
    return a+b;
}

var myApp = [3, 4];
console.log(add(...myApp));  // Spread operator

function sumTwo(...args){
    let sum = 0;
    for(const arg of args){
        sum += arg;
    }
    return sum;
};

console.log(sumTwo(2,3,5,1));