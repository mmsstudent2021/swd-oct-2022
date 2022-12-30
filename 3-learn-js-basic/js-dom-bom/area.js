// select element
const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const records = document.getElementById("records");

calculate.onclick = function () {
  // console.dir(width)

  const area = width.valueAsNumber * breadth.valueAsNumber;

  // calc
  result.innerText = `w:${width.value}ft * b:${breadth.value}ft = ${area}sqft`;

  // remove value
  width.value = breadth.value = null;
//   width.valueAsNumber = breadth.valueAsNumber = null;
};

clear.onclick = () => (result.innerText = null);

//<li></li>
store.onclick = () => {
  records.innerHTML += `<li>${result.innerText}</li>`;
  result.innerText = null;
};
