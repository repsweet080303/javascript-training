function insert_Row() {
  let table = document.getElementById("sampleTable").insertRow(2);
  let cellOne = table.insertCell(0);
  let cellTwo = table.insertCell(1);
  cellOne.innerHTML = "New Cell1";
  cellTwo.innerHTML = "New Cell2";
}
