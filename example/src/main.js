const body = document.querySelector("body");
const list = document.querySelector("ul");
const items = list.querySelectorAll("li");
const nickName = list.querySelector("#nickname");
const favorites = list.querySelector("#favorites");
const hometown = list.querySelector("#hometown");

body.style.fontFamily = "'Courier New', Courier, monospace";

nickName.textContent = "Px Viet";
favorites.textContent = "Music";
hometown.textContent = "DaNang";

items.forEach((item) => {
  item.className = "listitem";
  item.style.color = "red";
});

const image = document.createElement("img");
image.src = "http://gotocon.com/dl/jaoo_aus2008/photos/speakers/Pamela_Fox.jpg";
console.log(image);

document.body.appendChild(image);
