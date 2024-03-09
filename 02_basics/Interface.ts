interface User {
  readonly dbID: number;
  email: string;
  userID: number;
  googleID?: string;
  //   startTrail: () => string; OR
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

// can write the same again
// reopening of interface same name
interface User {
  gitHubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

// interface Admin extends User , ANOTHER INTERFACE {
//     role: "admin" | "ta" | "learner";
//   }

const ali: Admin = {
  //Admin since extends User
  dbID: 22,
  email: "as@da.com",
  userID: 221,
  role: "admin",
  gitHubToken: "gitHub",
  startTrail: () => {
    return "trial started";
  },
  getCoupon: (name: "ali", off: 10) => {
    // name and couponName not same
    return 10;
  },
};

ali.email = "a@a.com";
