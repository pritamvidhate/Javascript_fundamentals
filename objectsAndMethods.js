var apple = {
    model_name : "Iphone 12",
    os : "ios 14",
    camera : "12MP Front",
    networkType : "5G",
    storage : "128 GB",
    videoRecording : "4k",
    appleList : [],
    buyApple : function(courseName){
        this.appleList.push(courseName);
    },
    getAppleCount : function () {
        return `${this.model_name} is remaining only ${this.appleList.length} in list`;
    },

};

var appleList = true;
console.log(apple.model_name);
console.log(apple.getAppleCount());
apple.buyApple("iphone 11 pro");
console.log(apple.getAppleCount());
