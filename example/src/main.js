const myObject = {
  name: "Zenitsu",
  skill: "Flash storm",
  color: "Yellow",
};

for (let [key, value] of Object.entries(myObject)) {
  console.log(`${key}: ${value}`);
}

const yourObject = {
  ...myObject,
  name: "Tanjiro",
  skill: "Dragon fire",
  other: "Kind",
};

function display({ name, skill, color, other }) {
  console.log(name);
  console.log(skill);
  console.log(color);
  console.log(other);
}

display(myObject);
display(yourObject);

const stt = [23, 2, 3, 4];
const sst2 = {
  0: [234],
};

sst2[0] = 234;

function a() {
  const i = 1;
  return () => {
    console.log(i);
  };
}

const x = a();
x();


