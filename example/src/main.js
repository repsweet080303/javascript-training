const link = document.getElementById("w3r");
const btn = document.querySelector("button");

function getAttributes() {
  console.log("link: " + link.getAttribute("href"));
  console.log("language: " + link.getAttribute("hreflang"));
  console.log("type: " + link.getAttribute("type"));
}
