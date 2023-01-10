const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const data = [
  "Sar pee pe lar",
  "morning",
  "good night",
  "read book",
  "learn JavaScript",
];

const counter = () => {
  const totalCount = lists.children.length;
  const doneTotalCount = [...lists.children].filter(
    (el) => el.querySelector(".form-check-input").checked === true
  ).length;
  total.innerText = totalCount;
  doneTotal.innerText = doneTotalCount;
};

const createLi = (text) => {
  const dynamicId = "flexCheck" + Math.random();
  const li = document.createElement("li");
  // li.addEventListener("dblclick", edit);
  //   li.ondblclick = edit
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="${dynamicId}"
      onchange="done(event)"
    />
    <label class="form-check-label" for="${dynamicId}">
      ${text}
    </label>
  </div>
  <div class="btn-group">
    <button class="btn btn-sm btn-outline-dark" onclick="edit(event)">
      <i class=" bi  bi-pencil pe-none"></i>
    </button>
    <button class="btn btn-sm btn-outline-dark " onclick="del(event)">
      <i class=" bi bi-trash3 pe-none"></i>
    </button>
  </div>
    `;
  return li;
};

const addList = () => {
  if (textInput.value.trim()) {
    lists.append(createLi(textInput.value));
    textInput.value = null;
    counter();
  } else {
    alert("Input Text is empty");
  }
};

const del = (event) => {
  if (confirm("Are U sure to delete ?")) {
    console.log(event.target);
    event.target.closest(".list-group-item").remove();
    counter();
  }
};

const done = (event) => {
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
  counter();
};

const edit = (event) => {
  const old = event.target
    .closest(".list-group-item")
    .querySelector(".form-check-label");
  const newText = prompt("Input New Text", old.innerText);
  if (newText && newText.trim()) {
    old.innerText = newText;
  }
};

data.forEach((d) => lists.append(createLi(d)));

createBtn.addEventListener("click", addList);

textInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    // console.log(event);
    addList();
  }
});

window.addEventListener("load", counter);
