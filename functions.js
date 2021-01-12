function host(name){
    console.log("hello there, pritam");
    console.log(`hello there, ${name}`);
}

host("pritamvidh");

function hub(){
    return "hey wassup";
}

var greet = hub();
console.log(greet);
console.log(hub());

(function(){
    console.log("hey, there");
})();
