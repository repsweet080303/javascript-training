const img = document.querySelector("img");
const title = document.querySelector("title");

console.log(title);
title.innerText = "Learn the DOM";

console.log(img);
console.log(img.hasAttribute("src"));
console.log(img.getAttribute("src"));

img.removeAttribute("src");
img.setAttribute("src", "/kokurikozaka003.36ec5b0a.jpg");
img.setAttribute("alt", "ghibli");
