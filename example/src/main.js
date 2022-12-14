const cars = ["Ferrari", "Lamborghini", "Porsche"];

const addCard = (car) => {
  cars.push(car);
};

const removeCard = (car) => {
  if (cars.indexOf(car) !== -1) {
    cars.splice(cars.indexOf(car), 1);
  } else {
    console.log("not found the car");
  }
};

console.log(cars);

addCard("Mercedes");
console.log(cars);

removeCard("Lamborghini");
console.log(cars);
removeCard("Lamborghini");
removeCard("Lamborghini");
