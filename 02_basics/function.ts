// function name (input : type) : returnType {}
function addTwo(num: number) : number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, 
    isPaid: boolean) {}

let loginUser = (name : string, email : string, 
    isPaid : boolean = false) => {} // giving default value

let myvalue = addTwo(5);
getUpper("ali");

signUpUser("ali" , "ali@dev.com" , false);
loginUser("a" , "a@a.com");

// function getValue(myVal : number) : boolean{
//     if (myVal > 5){
//         return true
//     }
//     return "200 OK" // will give error here
// }

const getHello = (s : string) : string => {
    return ""
}

// const heros = ["thor" , "spiderman", "ironman"]
const heros = [2 , 1, 3]

heros.map((hero) : string => { 
    // TS judges the input automatically
    return `hero is ${hero}`
})

function consoleError(errmsg : string) : void{
    console.log(errmsg);
}

function handeError(errmsg : string) : never{
    throw new Error(errmsg);
}

export {};