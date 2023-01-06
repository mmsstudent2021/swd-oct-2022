const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");

const createLi = (text) => {
  const dynamicId = "flexCheck" + Date.now();
  const li = document.createElement("li");
  li.addEventListener("dblclick", edit);
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
  <button class="btn btn-sm btn-danger ms-auto" onclick="del(event)">Del</button>
    `;

  return li;
};

const addList = () => {
  lists.append(createLi(textInput.value));
  textInput.value = null;
};

const del = (event) => {
  if (confirm("Are U sure to delete ?")) {
    event.target.parentElement.remove();
  }
};

const done = (event) => {
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
};

const edit = (event) => {
  const old = event.target.querySelector(".form-check-label");
  const newText = prompt("Input New Text", old.innerText);
  console.log(newText);
  old.innerText = newText;
};

createBtn.addEventListener("click", addList);

textInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    // console.log(event);
    addList();
  }
});
