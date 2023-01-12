// variables
const fonts = ["Helvetica", "Gadget", "Courier", "Impact", "Tahoma"];

//selectors

const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");

fonts.forEach((font) => {
  //   console.log(font);
  //   console.log(new Option(font, font));
  fontFamily.append(new Option(font, font));
});

//action
// text ထဲမှာစာရိုက်တာနဲ့ output မှာတစ်ခါထဲပြ
text.addEventListener("keyup", (event) => {
  //   console.log(text.value);
  //   console.log(event.target.value);
  output.innerText = text.value;
  count.innerText = text.value.length;
});

color.addEventListener("change", (event) => {
  output.style.color = event.target.value;
});

fontSize.addEventListener("change", (event) => {
  console.log(fontSize.value);
  output.style.fontSize = event.target.value + "px";
});

fontFamily.addEventListener("change", (event) => {
  console.log(event.target.value);
  output.style.fontFamily = fontFamily.value;
});
