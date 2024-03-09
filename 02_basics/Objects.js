"use strict";
// const User = {
//   name: "ali",
//   email: "ali@gmail.com",
//   isActive: true,
// };
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "syed", isPaid: true, email: "aa@g.com" };
createUser(newUser); // not giving error with email (bad behaviour)
// createUser({name : "syed", isPaid : true})
// returning an object
function createCourse() {
    return { name: "react", price: 299 };
}
var myUser = {
    _id: "1234",
    name: "a",
    email: "a@a.com",
    isActive: false
};
myUser.email = "a@aa.com";
