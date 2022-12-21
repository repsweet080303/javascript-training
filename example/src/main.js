function createCounter() {
  let counter = 0;

  function increaseCounter() {
    return ++counter;
  }

  return increaseCounter;
}

const counter = createCounter();

console.log(counter());
console.log(counter());

// ==========================================

function debug(namespace) {
  function logger(message) {
    console.log(`${namespace} ${message}`);
  }

  return logger;
}

const loggerInfo = debug("Info");

loggerInfo("Starting login");
loggerInfo("Accuracy account");
loggerInfo("Completed accuracy account");

const loggerError = debug("Error");

loggerError("Starting login");
loggerError("Accuracy account failed");
loggerError("Log out");

function createCar() {
  let cars = [];

  return {
    getCar(car) {
      cars.push(car);
    },
    showCar() {
      console.log(cars);
    },
  };
}
const myCar = createCar();
myCar.showCar();
myCar.getCar("BMW");
myCar.getCar("Mercedes");
myCar.showCar();
