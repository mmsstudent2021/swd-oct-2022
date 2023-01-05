// select element
const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const records = document.getElementById("records");

// functions
const run = (x, y) => x + y;

const clearResult = () => {
  // console.log("clear result function");
  result.innerText = null;
};

const calcArea = () => {
  // console.dir(width)
  // console.log("calcArea function");

  const area = width.valueAsNumber * breadth.valueAsNumber;

  // calc
  result.innerText = `w:${width.value}ft * b:${breadth.value}ft = ${area}sqft`;

  // remove value
  width.value = breadth.value = null;
  //   width.valueAsNumber = breadth.valueAsNumber = null;
};

const storeResult = () => {
  // console.log("storeResult function");

  records.innerHTML += `<li>${result.innerText}</li>`;
  clearResult();
};

// process
calculate.onclick = calcArea;
clear.onclick = clearResult;
//<li></li>
store.onclick = storeResult;
