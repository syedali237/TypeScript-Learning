// Union | to use when you are not sure of data 

let score: number | string = 33

score = 44
score = "55"

type User = {
    name : string;
    id : number
}

type Admin = {
    username : string;
    id : number
}

let hitesh: User | Admin = {name : "hitesh" , id :334}
// redifining
hitesh = {username : "ha" , id : 334}

// function getDbId(id : number | string){
//     console.log(`DB ID is ${id}`);
// }

getDbId(3)
getDbId("3") // both are accepted

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } 
}

// Arrays

const data : number[] = [1,2,3,4]
const data2 : string[] = ["1","2","3","4"]
// either stirng or number
const data4 : string[] | number[] = ["1","2","3","4"] 
// can be string or number
const data3 : (string |number)[] = ["1","2","3",4]

// fixes the value literal type
let pi: 3.14 = 3.14 
// can be any 3 types
let seatAllotment: "aisle" | "middle" | "window" 