let list = document.getElementById("colorSelect");

function removecolor() {
  var select = list.options.selectedIndex;
  list.remove(select);
}
