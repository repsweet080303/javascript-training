const myMotobike = {
  name: "Sirious",
  color: "Silver and blue",
  heavy: 105,
  description: function (param) {
    for (var i = 0; i < param.length; i++) {
      console.log(
        `My motobike name ${this.name} and it have color ${this.color}, ${param[i]}`
      );
    }
  },
};

myMotobike.description([
  "I love this moto so much",
  "This i my present of my mom",
]);
