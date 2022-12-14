function dataInfomation(name = "Hong", age = "23") {
  if (name === undefined) {
    console.log("Please input name parameter");
  }

  if (age === undefined) {
    console.log("Please input age parameter");
  }

  let data = `Your name: ${name} 
Your age: ${age}`;

  return data;
}

console.log(dataInfomation("Viet", 17));

