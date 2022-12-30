// function add(x, y) {
//   console.log(arguments);
//   return x + y;
// }

// console.log(add(1, 2));

// const add2 = function(x,y){
//     return x+y;
// }

// const add3 = (x,y) => x + y;

// console.dir(new Function());

// const add4 = new Function("x", "y", "return x+y");

// console.dir(add4(1, 2));

// console.log(add.toString());
// console.log(add(10, 20));
// console.log(add.bind(null, 10, 20).call());

// console.log(new Object());

// const arr = ["a", "b"];

// console.log(arr);

// const obj = {
//   a: "aaa",
//   b: "bbb",
// };

// console.log(obj.toString());
// console.log(obj.toLocaleString());
// console.log(obj.hasOwnProperty("e"));

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// function run(...x) {
//   console.log(x);
//   return "this is run";
// }

// console.log(run(1, 2, 6, 3445, 5, 56, 3));

// function sum(x, y, ...nums) {
//   console.log(x);
//   console.log(y);
//   console.log(nums);
//   return nums.reduce((pv, cv) => pv + cv, 0);
// }

// console.log(sum(1, 2, 5, 4, 2));

// const arr = [10, 20, 345, 45, 74, 378, 12];
// // console.log(arr[0]);
// // console.log(arr[1]);

// const [a, b, c, ...x] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(x);

// const obj = {
//   a: "aaa",
//   b: "bbb",
//   c: "ccc",
// };

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);

// const { a, b, c } = obj;

// console.log(a);
// console.log(b);
// console.log(c);
