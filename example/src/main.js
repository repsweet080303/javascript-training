const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const ul = document.getElementsByTagName("ul")[0];
const tiger = ul.children[1];

ul.style.listStyle = "none";

for (let i = 0; i < ul.children.length; i++) {
  ul.children[i].style.backgroundColor = "#737373";
}

for (const item of ul.children) {
  item.style.color = "#fff";
}

ul.firstElementChild.style.backgroundColor = "yellow";
ul.firstElementChild.style.color = "#737373";

p.style.color = "red";

for (const iterator of p.children) {
  iterator.style.color = "green";
}

tiger.previousElementSibling.style.backgroundColor = "coral";
tiger.previousElementSibling.style.color = "#fff";
tiger.nextElementSibling.style.backgroundColor = "green";
