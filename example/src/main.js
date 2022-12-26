const myForm = document.getElementById("MyForm");
const radius = document.getElementById("radius");

myForm.addEventListener("submit", () => {
  event.preventDefault();
  let volume = document.getElementById("volume");
  volume.value = ((4 / 3) * (Math.PI * radius.value ** 3)).toFixed(2);
});
