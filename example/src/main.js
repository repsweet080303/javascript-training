const button = document.querySelector("button");
const btnImg = document.getElementById("img-river");
const image = document.querySelector("img");
const paragraph = document.querySelector("p");

function changeText() {
  paragraph.innerText = "Text was changed";
  paragraph.style.color = "#737373";
}

function alert() {
  alert("Please try event listeners, it best");
}

button.onclick = function () {
  button.style.color = "red";
  changeText();
};

btnImg.addEventListener("click", () => (image.style.display = "block"));
