const paragraph = document.createElement("p");
const btn = document.createElement("button");

paragraph.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est deserunt dolorum soluta reiciendis. Totam modi quisquam asperiores vitae, voluptate veniam qui sed sit quod sapiente, quia porro cumque, dolorum a?`;
btn.innerText = "Change bg";

document.body.appendChild(paragraph);
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  paragraph.style.backgroundColor = "#737373";
});
