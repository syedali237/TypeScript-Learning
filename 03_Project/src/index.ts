// tsc init for tsconfig.json
// tsc -w watch mode
// lite-server -- npm start

// class User {
//   public email: string;
//   private name: string;  // private in TS = # in JS
//   // not accesible outside class
//   private readonly city: string = "aligarh"; 
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city
//   }
// }

// better way
class User {
  // protected -- availbale within class and extended classes
  protected _courseCount = 1;

  readonly city: string = "aligarh";
  constructor(
    public email: string,
    public name: string
   // private UserID : string
   )
  {}

  private deleteTokern(){
    console.log("token deleted");
  }

  // GETTER inside class
  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // SETTER  -- no return type
  set courseCount(courseNum) {
    if (courseNum <= 1){
      throw new Error("Course count should be more than 1")
    }
    this._courseCount = courseNum
  }
}

class SubUser extends User {
  isFamily : boolean = true
  changeCourseCount(){
    this._courseCount = 4
  }
}

const ali = new User("as@a.com","ali")
// ali.city