// const User = {
//   name: "ali",
//   email: "ali@gmail.com",
//   isActive: true,
// };

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "syed", isPaid: true, email: "aa@g.com" };

createUser(newUser); // not giving error with email (bad behaviour)
// createUser({name : "syed", isPaid : true})

// returning an object
function createCourse(): { name: string; price: number } {
  return { name: "react", price: 299 };
}

// <--------------------------------------------------> 

//TYPE ALIASES

// type User = {
//     name : string;
//     email : string;
//     isActive : boolean;
// }

// function createUserr(user : User) : User {
//     return {name : "" , email : "", isActive : true}
// }

// createUserr({name : "" , email : "", isActive : true})

// <------------------------------------------------->

type User = {
    readonly _id : string // readonly as the name suggests
    name : string
    email : string
    isActive : boolean
    credCardDetails?: number // ? optional
}

let myUser: User = {
    _id : "1234",
    name : "a",
    email : "a@a.com",
    isActive: false
}

myUser.email = "a@aa.com"
// myUser._id = "12" cant change it


type cardNumber = {
    cardNo : string
}

type cardDate = {
    carddate : string
}

//combination of previous types
type cardDetailes = cardNumber & cardDate & {
    cvv : number
}

export {};