function Bird(name, color) {
  this.name = name;
  this.color = color;
}

function Pet() {
  Bird.apply(this, arguments);
  this.fly = () => {
    console.log("Flying");
  };
}

const myPet = new Pet("parrot", "green");
console.log(myPet);
myPet.fly();
