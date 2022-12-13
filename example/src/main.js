const precedence = 3 * 3 - (20 % 3) - 7 * 2 + 5 * 6;
const number = "This is string";

if (precedence === 18) {
  console.log(`precedence = ${precedence}`);
} else if (precedence > 18) {
  console.log("precedence lager 18");
} else {
  console.log("precedence smaller than 18");
}
