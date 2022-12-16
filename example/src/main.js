const promise = new Promise(function (resolve, reject) {
  resolve();
});

promise
  .then(function () {
    return 1;
  })
  .then(function (data) {
    console.log(data);
    return ++data;
  })
  .then(function (data) {
    setTimeout(function () {
      console.log(data);
      return data++;
    }, 3000);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function () {
    console.log("failure");
  })
  .finally(function () {
    console.log("done");
  });

function waiting(milisec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, milisec);
  });
}

waiting(2000)
  .then(function () {
    console.log("done");
    return new Promise((resolve, reject) => {
      setTimeout(reject("Kabku"), 2000);
    });
  })
  .then(function () {
    console.log("donne");
  })
  .catch(function (err) {
    console.log(err);
  });

const myArray = [1, 2, 3, 4, 5];

myArray.forEach(function (item) {
  setTimeout(function () {
    for (let i = 0; i <= 77; i++) {
      console.log(i);
    }
  }, 5000);
  console.log(item);
});
