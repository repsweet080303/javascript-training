function Figure(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;

  this.feature = () => {
    console.log(this.name + " is my toy");

    function child() {
      console.log(this);
    }
    child();

    childTwo = () => {
      console.log(this);
    };
    childTwo();
  };
}

const robot = new Figure("King", "red", 202);

robot.feature();
