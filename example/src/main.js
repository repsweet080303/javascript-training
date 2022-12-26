let list = document.getElementById("mySelect");

function getOptions() {
  let textLength = `List have ${list.length} options:`;
  let options = "";
  for (let i = 0; i < list.length; i++) {
    options += `\n ${i + 1}: ${list.options[i].value}`;
  }
  console.log(`${textLength}
  ${options}`);
}
