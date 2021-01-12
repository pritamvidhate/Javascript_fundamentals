const myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "tres");
myMap.set(4, "cautro");
myMap.set(5, "cinco");

console.log(myMap);

// for(let [key, value] of myMap){
//     console.log(`key is : ${key} and value is ${value}`);
// }

myMap.forEach((v, k) => console.log(`value is ${v} and key is ${k}`));

myMap.delete(5);
console.log(myMap);