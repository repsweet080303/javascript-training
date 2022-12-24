document.addEventListener("keydown", (e) => {
  const element = document.querySelector("p");

  let a = "KeyA";
  let s = "KeyS";
  let d = "KeyD";
  let w = "KeyW";

  switch (e.code) {
    case a:
      element.textContent = "Left";
      break;
    case s:
      element.textContent = "Down";
      break;
    case d:
      element.textContent = "Right";
      break;
    case w:
      element.textContent = "Up";
      break;
  }
});

const section = document.querySelector("section");

section.addEventListener("click", (e) => console.log(e.target));
