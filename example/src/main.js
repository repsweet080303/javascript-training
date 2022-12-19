function one() {
  console.log("one");
}
function two() {
  setTimeout(() => console.log("two"), 0);
}
function three() {
  console.log("three");
}

// one();
// two();
// three();

function first() {
  console.log(1)
}

function second() {
  setTimeout(() => {
    console.log(2)
  }, 0)
}

function third() {
  console.log(3)
}

first()
second()
third()

const promise = new  Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("foo");
  }, 3000);
});

console.log("bar");

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i + " times");
  }, i * 1000);
}

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i + " second(s) elapsed");
  }, i * 1000);
}
