// GENERICS : makes components reusable

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

// almost like any; but Type once given return type becomes same
function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(3)

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

// identityFour<Bootle>({brand : "ali" , type :3})

// Generic indication <>
function getSearchProducts<T>(products: T[]): T {
  // do some databse operations
  const myIndex = 3;
  return products[myIndex];
}

// <T,> or <T> => same thing
const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// U extend to another type assigned
// anotherFunction("3", {})
// anotherFunction(3, 4)

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}