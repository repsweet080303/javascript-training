async function getName(name) {
  // if (name === "Inosuke") {
  //   setTimeout(() => console.log(name), 2000);
  // }
  return name;
}

const testSpeed = async () => {
  const characterOne = await getName("Nezuko");
  const characterTwo = await setTimeout(() => console.log("Inosuke"), 2000);
  const characterThree = await getName("Zenitsu");
  return [characterOne, characterTwo, characterThree];
};

testSpeed().then((res) => console.log(res));
