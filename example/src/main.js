let myArray = ["Sam", "Loan"];

const [name, subname] = myArray;

console.log(name, subname);

myArray = ["Sam", "Smitt"];

console.log(myArray);
console.log(name, subname);

const [firstName, lastName] = "Johnny Dang".split(" ");
console.log(firstName, lastName);

const myObject = {
  name: {
    firstName: "Tanjiro",
    lastName: "Komado",
  },
  skill: "Yellow storm",
  desc: "Little boy unlucky in training",
};

let {
  name: { firstName: firstNameCharacter, lastName: lastNameCharacter },
  skill: skillCharacter,
  desc: describeSkill,
} = myObject;

console.log(`name: ${firstNameCharacter} ${lastNameCharacter}
skill: ${skillCharacter}
desc: ${describeSkill}`);
