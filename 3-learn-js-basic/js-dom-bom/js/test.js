// const [a, b, ...r] = [1, 2, 236, 7, 37, 2];
// console.log(a);
// console.log(b);
// console.log(r);

// const { a, b } = { a: "aaa", b: "bbb" };

// console.log(a);
// console.log(b);

// const arr = ["a", "c", "d", "b", "r"];
// const obj = {
//   brand: "apple",
//   model: "macbook pro",
//   spec: { cpu: "i7", ram: "16GB", ssd: "1TB" },
// };
// const j = '["a","c","d","b","r"]';
// const j2 = `{
//     "brand": "apple",
//     "model": "macbook pro",
//     "spec": { "cpu": "i7", "ram": "16GB", "ssd": "1TB" }
//   }`;

// // json to js

// console.log(JSON.parse(j)[1]);
// console.log(JSON.parse(j2).model);

// js to json

// console.log(JSON.stringify(obj));

// function run() {
//   //   const req = new XMLHttpRequest();
//   // console.log(req);

//   //   req.open("GET", "https://fakestoreapi.com/products/");
//   //   req.send();
//   //   req.addEventListener("load", (event) => {
//   //     console.log(event.target.responseText);
//   //     const data = JSON.parse(event.target.responseText);
//   //     console.log(data);
//   //   });

//   fetch("https://fakestoreapi.com/products/")
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     });
// }

// localStorage.setItem("myName", "hein htet zan");
// localStorage.setItem("myAge", 28);

// document.cookie = "name=heinhtetzan";
// document.cookie = "laptop=imac";
