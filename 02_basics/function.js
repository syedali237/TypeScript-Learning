"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function name (input : type) : returnType {}
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; // giving default value
var myvalue = addTwo(5);
getUpper("ali");
signUpUser("ali", "ali@dev.com", false);
loginUser("a", "a@a.com");
// function getValue(myVal : number) : boolean{
//     if (myVal > 5){
//         return true
//     }
//     return "200 OK" // will give error here
// }
var getHello = function (s) {
    return "";
};
// const heros = ["thor" , "spiderman", "ironman"]
var heros = [2, 1, 3];
heros.map(function (hero) {
    // TS judges the input automatically
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handeError(errmsg) {
    throw new Error(errmsg);
}
