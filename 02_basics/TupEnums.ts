// tuples : a specialized array with restrictions

// const user : (string | number)[] = ['gx' ,1]
let user : [string,number,boolean]
// tuple make sure ORDER remains same
user = ["hc" , 121, true]

let rgb : [number, number, number] = [255,123,231]

type User = [number, string]

const newUser: User = [112,"e@ad.com"]

newUser[1] = "hc@sad.com"
// newUser.push(true)