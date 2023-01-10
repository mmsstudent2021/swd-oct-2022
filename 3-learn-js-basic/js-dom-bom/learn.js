// input

// const x = window.prompt()
// window.alert(x);

// area calc (w,b)
// const width = window.prompt("Input Width");
// const breadth = window.prompt("Input breadth");
// const area = width * breadth;
// window.alert("Area is "+area+" sqft")

// const run = (x, y) => {
//   window.alert(parseInt(x));
//   window.alert(parseInt(y));
//   return parseFloat(x) + parseFloat(y);
// };

// const inputX = window.prompt("Input X .....");
// const inputY = window.prompt("Input Y .....");
// window.alert(run(inputX, inputY));

// const answer = window.confirm("ထမင်းစားပြီးပြီ လား ? ....");
// window.alert(answer ? "စားပြီးပြီ ..." : "မစားရသေးဘူး")

// console.log(window);

// const myName = window.prompt("What is your name ?");
// console.log(`My name is ${myName}`);

// const obj = {
//     a : "aaa"
// }

// console.log(obj.a)//value access

// obj.a = "111";// reasign value | overrite | overwrite value

// console.log(obj.a)

// const h1 = document.getElementsByTagName("h1")[0];

// console.dir(h1);
// console.log(h1.innerText);
// console.log(h1.style.color);
// console.log(h1.title);

// const showAlert = (event, x, y) => alert(x + y);

// const btn = document.querySelector("#btn");
// btn.onclick = showAlert.bind(null,event,5,6);
// console.dir(btn);

// btn.addEventListener("click", showAlert.bind(null,event,2,5));

// const h1 = document.querySelector("h1");

// h1.addEventListener("mouseenter", () => console.log("Mouse Enter Event"));
// h1.addEventListener("mouseout", () => console.log("Mouse Out Event"));
// h1.addEventListener("click", (e) => console.log(e, "Mouse Move Event"));

// const input = document.querySelector("input");
// // const select = document.querySelector("select");

// input.addEventListener("change", function (event) {
//   // console.log(this.valueAsDate);
//   console.log(event.target.valueAsDate);
// });

// input.addEventListener("change", () => console.log("change Event"));
// select.addEventListener("change", () => console.log("change Event"));
// input.addEventListener("keyup", () => console.log("KeyUp Event"));
// input.addEventListener("focus", () => console.log("focus Event"));
// input.addEventListener("blur", () => console.log("blur Event"));
// input.addEventListener("keydown", () => console.log("KeyDown Event"));
// input.addEventListener("keypress", () => console.log("KeyPress Event"));

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(this)
//   console.log(document.querySelector("input").valueAsDate);
// });

// form.addEventListener("submit", () => console.log("U submit form"));

// window.addEventListener("scroll", () => console.log("U scroll"));

// document
//   .querySelector("#box")
//   .addEventListener("scroll", () => console.log("U scoroll div"));

// window.addEventListener("load", () => console.log("window loaded"));

// console.log("hello 1")
// console.log("hello 2")
// console.log("hello 3")

// document.querySelector("a").addEventListener("click", (e) => {
//     e.preventDefault()
//   console.log(e);
// });

const btn = document.querySelector("#btn");
const showConsole = (event) => {
  console.log(event);
  // btn.removeEventListener("click", showConsole);
};

btn.addEventListener("click", showConsole);

// console.log(new Event());
