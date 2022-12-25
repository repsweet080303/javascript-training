const form = document.getElementById("form1");

function getFormvalue() {
  event.preventDefault();
  for (let i = 0; i < form.length; i++) {
    if (form.elements[i].value !== "Submit") {
      console.log(form.elements[i].value);
    }
  }
 
}

const paragraph = document.getElementById("paragraph");
function getValue() {
  console.log(paragraph.innerText);
}
