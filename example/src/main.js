function Girl(name, tall, heavy, gender) {
  this.name = name;
  this.tall = tall;
  this.heavy = heavy;
  this.gender = "female";
}

const myGirl = new Girl("Linh", 154, 47);

console.log(myGirl);

const myFriend = {
  name: "Xuho",
  age: 23,
  character: "Kind",
  body: "Tiny",
};

console.log(myFriend);

const otherFriend = myFriend;
otherFriend.name = "Ha";
otherFriend.age = 22;

console.log(otherFriend);
