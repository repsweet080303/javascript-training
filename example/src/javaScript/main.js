function logger() {
  Array.prototype.forEach.call(arguments, (item) => console.log(item));
}

logger([1, 2, 3, 4]);
