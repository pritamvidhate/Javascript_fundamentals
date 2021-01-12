function getUserRoll(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin will all access`;
        

            case "subAdmin":
            return `${name} is subAdmin with access to create and delete files`;
        

            case "testPrep":
            return `${name} is testPrep with access to create and delete files`;
        
        default:
            return `${name} is a trial user`;
        
    }
};

// console.log(getUserRoll("preevidh", "admin"));

var getRoll = getUserRoll("preevidh", "subAdmin");
 console.log(getRoll);