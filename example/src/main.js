// define variables
const demoId = document.getElementById("demo");
const demoClass = document.getElementsByClassName("demo");
const demoTag = document.getElementsByTagName("article");
const demoSelector = document.querySelector("#demo-query");
const demoSelectorAll = document.querySelectorAll(".demo-query-all");

// styles for getElementById
demoId.style.border = "2px solid green";
demoId.style.backgroundColor = "#737373";
demoId.style.color = "#FFF";

// styles for getElementsByClassName
for (let i = 0; i < demoClass.length; i++) {
  demoClass[i].style.backgroundColor = "#737373";
  demoClass[i].style.color = "#FFF";
  demoClass[i].style.border = "2px solid red";
}

// styles for getElementsByTagName
for (let i = 0; i < demoTag.length; i++) {
  demoTag[i].style.backgroundColor = "#737373";
  demoTag[i].style.color = "#FFF";
  demoTag[i].style.border = "2px solid yellow";
}

// styles for querySelector
demoSelector.style.border = "2px solid orange";
demoSelector.style.backgroundColor = "#737373";
demoSelector.style.color = "#FFF";

// styles for querySelectorAll
demoSelectorAll.forEach((item) => {
  item.style.border = "2px solid blue";
  item.style.backgroundColor = "#737373";
  item.style.color = "#FFF";
});
