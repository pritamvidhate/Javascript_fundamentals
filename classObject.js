const User = require("./00Class.js");

const preevidh = new User("preevidh", "pritvidh@gmail.com");

console.log(preevidh.getInfo());
preevidh.enrollCourse("Reactjs Bootcamp");
preevidh.enrollCourse("Javascript Bootcamp");

console.log(preevidh.getCourseList());

let courses = preevidh.getCourseList();
courses.forEach((c) => console.log(c));


const rock = new User("Rock", "rock@dev.com");
console.log(rock.getInfo());
