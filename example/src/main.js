const div = document.querySelector("div");
const listDiv = document.querySelectorAll("div");

div.className = "warning";
div.classList.add("hidden");
div.classList.toggle("hidden");
listDiv[1].classList.add("hidden");
listDiv[1].classList.replace("hidden", "active");
listDiv[1].setAttribute("style", "color: #737373; font-weight: bold");

console.log(div);
