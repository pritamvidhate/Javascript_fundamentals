function doAddtion(x){
    return function(y){
        return x + y;
    };
};

console.log(doAddtion(3)(5));