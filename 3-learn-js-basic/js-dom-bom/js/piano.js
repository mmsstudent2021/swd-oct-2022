const sounds = [
  {
    id: 1,
    name: "C4",
    keyCode: 65,
  },
  {
    id: 2,
    name: "D4",
    keyCode: 83,
  },
  {
    id: 3,
    name: "E4",
    keyCode: 68,
  },
  {
    id: 4,
    name: "F4",
    keyCode: 70,
  },
  {
    id: 5,
    name: "G4",
    keyCode: 74,
  },
  {
    id: 6,
    name: "A4",
    keyCode: 75,
  },
  {
    id: 7,
    name: "B4",
    keyCode: 76,
  },
  {
    id: 8,
    name: "C5",
    keyCode: 186,
  },
];

const row = document.querySelector(".row");
// const keys = document.querySelectorAll(".key");

const createKey = ({ name }) => {
  const div = document.createElement("div");
  div.classList.add(
    "col",
    "key",
    "border",
    "border-dark",
    "py-5",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );
  div.setAttribute("sound", name);
  div.innerText = name;
  return div;
};

const play = (name) => {
  const a = new Audio("./sound/" + name + ".mp3");
  const el = document.querySelector("[sound=" + name + "]");
  el.classList.add("active");
  console.log(el);
  setTimeout(() => el.classList.remove("active"), 200);
  a.play();
};

sounds.forEach((sound) => {
  row.append(createKey(sound));
});

row.addEventListener("click", (event) => {
  if (event.target.classList.contains("key")) {
    const currentSound = event.target.getAttribute("sound");
    console.log(currentSound);
    play(currentSound);
  }
});

// document.addEventListener("keyup", (event) =>
//   console.log(event.keyCode, event.key)
// );

document.addEventListener("keyup", (event) => {
  const current = sounds.find(({ keyCode }) => keyCode === event.keyCode);
  if (current) {
    console.log(current);
    play(current.name);
  }
});
