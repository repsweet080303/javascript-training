const heading = document.querySelector("#heading");
// const orderList = document.getElementsByTagName("ul");
const listOrder = document.querySelector("ul");
const paragraph = document.createElement("p");
const newTodo = document.createElement("li");
const modifiedTodo = document.createElement("li");

heading.style.textTransform = "uppercase";

newTodo.innerText = "Read DOM manipulation";
modifiedTodo.innerText = "Eat diet";

// listOrder.forEach((item) => (item.style.listStyle = "none"));
listOrder.style.listStyle = "none";
listOrder.style.padding = "0 10px";

listOrder.appendChild(newTodo);
listOrder.insertBefore(newTodo, listOrder.lastElementChild);
listOrder.replaceChild(modifiedTodo, listOrder.children[2]);
listOrder.children[2].remove();
paragraph.innerText = "This is text include by inner text";
console.log(paragraph);

const text = document.createComment("This is comment");
console.log(text);
