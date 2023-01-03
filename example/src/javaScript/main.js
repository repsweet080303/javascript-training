this.firstName = "Dan";
this.lastName = "Thao";

const myObject = {
  firstName: "Cam",
  lastName: "Thao",
  getFullName() {
    firstName = "Hung";
    lastName = "Van";
    console.log(` ${this.firstName} ${this.lastName}`);
  },
};

myObject.getFullName(); // Cam Thao

const myFunction = myObject.getFullName.bind(this);

myFunction(); // Hung Van
// When not bind(this) => reference object dot it
// When bind(this) => reference value in scope nearest
