function championWolrdCup(callback, team) {
  if (typeof callback === "function") {
    callback();
  } else {
    console.log("Please provide a callback");
  }
  console.log(`${team} winner WorldCup 2022`);
}

function teamWorldCup() {
  console.log("Congratulations !");
}

championWolrdCup(teamWorldCup, "Argentina");
