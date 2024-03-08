// let varName : type = value;
let greetings: string = "Hello Syed"; 
greetings.toLowerCase()
console.log(greetings);

//number

// let userID : number = 3344
let userID = 3344  // TS automatically detects number
userID.toFixed();

// boolean 
let loggedIN : boolean = false

// any 

let hero : string;

function getHero(){
    return "thor"
}

hero = getHero();

export {} // remove the block scoped error temporarily