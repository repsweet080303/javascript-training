let text = "";
let i = 0;
while (i < 10) {
  if (i === 3) break;
  text += "This is " + i + " <br> ";
  i++;
}

document.getElementById("demo").innerHTML = text;
