function addTwo(num: number) {
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

export {};