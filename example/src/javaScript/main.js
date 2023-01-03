function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function MyFriend(name, gender, age) {
  Person.call(this, name, gender);
  this.age = age;
}

const Hoang = new MyFriend("Hoang", "male", 22);

console.log(Hoang);
