class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  desc() {
    console.log(`My car is ${this.name} and color ${this.color}`);
  }
}

const myCar = new Car("Sirious", "silver and blue");
myCar.desc();

function Moto(name, color) {
  this.name = name;
  this.color = color;
  this.desc = function () {
    return `My moto is ${this.name} and color ${this.color}`;
  };
}

const myMoto = new Moto("Dream", "brown");
console.log(myMoto.desc());

class Author {
  static article = "Magazing";
}

console.log(Author.article);
