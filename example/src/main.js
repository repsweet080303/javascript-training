function handOut(callback) {
  console.log("handOut");
  callback();
}

function handIn(cb) {
  setTimeout(() => {
    console.log("handIn");
    cb();
  }, 2000);
}

function handOn(callback) {
  console.log("handOn");
}

handOut(handOn);
handIn(handOn);
handOn(handOut);

const promise = new Promise((resolve, reject) => {
  resolve("Value of promise");
});

promise
  .then((value) => {
    console.log(value);
    return value + "is chain";
  })
  .then((value) => {
    console.log(value);
  });

function getData(response) {
  return new Promise((resolve, reject) => {
    if (response) {
      resolve([
        {
          name: "Hung",
          age: 22,
        },
        {
          name: "Loan",
          age: 21,
        },
        {
          name: "Doan",
          age: 23,
        },
      ]);
    } else reject("Failed to resolve");
  });
}

getData(0)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

fetch("https://api.github.com/users/octocat")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
