let button = document.getElementById("changeBackground");

button.addEventListener("click", function () {
  document.body.style.backgroundColor = "silver";
  button.style.backgroundColor = "yellow";
  button.style.color = "red";
});
