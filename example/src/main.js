const a = ["this", "is"];
const b = ["my", "cat"];
const c = [...a, ...b];

const myMatrix = [
  [2, 3, 6],
  [3, 1, 9],
  [7, 7, 7],
  [5, 2, 8],
];

const indexArray = myMatrix[1][2];

const myArray = Array(7).fill("array", 2);
myArray.push(77, 78);
myArray.unshift(22, 0);
myMatrix[1].push(2);

console.log(myArray.shift());
console.log(myMatrix);
console.log(indexArray);
console.log(c.includes("this", 1));
console.log(c.findIndex((element) => element === "cat"));
