this.firstName = "Dan";
this.lastName = "Thao";

const myObject = {
  firstName: "Cam",
  lastName: "Thao",
  getFullName: () => {
    firstName = "Hung";
    lastName = "Van";
    console.log(` ${this.firstName} ${this.lastName}`);
  },
};

myObject.getFullName(); // Hung Van

const myFunction = myObject.getFullName.bind(this);

myFunction(); //Hung Van

// When bind(this) in arrow function
// this references value in block

// =============================================

// this.firstName = "Dan";
// this.lastName = "Thao";

// const myObject = {
//   firstName: "Cam",
//   lastName: "Thao",
//   getFullName: () => {
//     // firstName = "Hung";
//     // lastName = "Van";
//     console.log(` ${this.firstName} ${this.lastName}`);
//   },
// };

// myObject.getFullName(); // Dan Thao

// const myFunction = myObject.getFullName.bind(this);

// myFunction(); //Dan Thao

// When bind(this) in arrow function
// this references global object

// =============================================




