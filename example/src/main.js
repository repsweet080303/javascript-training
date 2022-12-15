class Animal {
  behavior() {
    return "Run an catch other animal";
  }
}

class lion extends Animal {
  behavior() {
    return super.behavior() + " or not it will die";
  }
}

const tiger = new lion();

console.log(tiger.behavior());

function Human(foot, color, tall) {
  this.foot = foot;
  this.color = color;
  this.tall = tall;
  this.run = function () {
    return "Running...";
  };
}

const myFriend = new Human(2, "brown", 174);
console.log(myFriend.run());
