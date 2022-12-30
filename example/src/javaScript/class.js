class Person {
  constructor(firstName, lastName, age, gender) {
    Person.firstName = firstName;
    Person.lastName = lastName;
    Person.age = age;
    Person.gender = gender;
  }

  getName() {
    return `${Person.firstName} ${Person.lastName}`;
  }
}

const myFriend = new Person("Hoang", "An", 23, "male");
const myBrother = new Person("Vinh", "Pham", 24, "female");
console.log(myFriend.getName());

function Pet(name, color, gender) {
  this.name = name;
  this.color = color;
  this.gender = gender;
  this.behavior = function () {
    console.log("Run.....");
  };
  this.desc = function () {
    return "my pet is " + this.name + "," + "it have color " + this.color;
  };
}

const myPet = new Pet("Moon", "gray", "male");
myPet.behavior();
console.log(myPet.desc());
