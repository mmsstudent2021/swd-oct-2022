//class decleartion

// class Person {
//   // properties
//   name = "mg mg";
//   age = 24;

//   //methods
//   run() {
//     return "mg mg can run";
//   }
// }

// // console.log(Person);

// // class => object ( instantiate )

// const person = new Person();

// console.log(person);

// console.log(person.name);
// console.log(person.age);
// console.log(person.run());

// class က obj ရဲ template | blueprint

class Student {
  // name,gender,age,major
  constructor(inputName, inputGender, inputAge, inputMajor) {
    this.name = inputName;
    this.gender = inputGender;
    this.age = inputAge;
    this.major = inputMajor;

    // profit
    this.namePrefix = this.gender === "male" ? "mg" : "ma";
    this.birdthYear = 2022 - this.age;
    this.pronoun = this.gender === "male" ? "he" : "she";
    this.subjects = [
      "myan",
      "eng",
      "math",
      "chem",
      "phy",
      this.major === "bio" ? "bio" : "eco",
    ];
  }

  learn() {
    return this.name + " can learn " + this.subjects;
  }

  about() {
    return ` ${this.name} is ${this.age} year${this.age > 1 && "s"} and ${
      this.pronoun
    } was born in ${this.birdthYear}.now ${this.pronoun} attend ${
      this.major
    } major`;
  }
}

// class Monitor extends Student {
//   room = "Grade A";
// }

// const ga1 = new Monitor("Zaw Zaw", "male", 17, "bio");
// console.log(ga1);

// const st1 = new Student("Mg Mg", "male", 16, "bio");
// console.log(st1);
// console.log(st1.learn());
// console.log(st1.about());

// const st2 = new Student("Su Su", "female", 15, " eco");
// console.log(st2);

// const st3 = new Student("Hla Hla", "female", 16, "bio");
// console.log(st3);

// const st = new Student("xxx", "yyy");

// const st1 = new Student();
// //properties
// st1.name = "mg mg";
// st1.age = 16;
// st1.gender = "male";
// st1.major = "bio";

// //methods
// st1.learn = function () {
//   return st1.name + " can learn everything";
// };

// console.log(st1);

// const st2 = new Student();
// st2.name = "hla hla";
// st2.age = 15;
// st2.gender = "female";
// st2.major = "eco";
// //methods
// st2.learn = function () {
//   return this.name + " can learn everything";
// };

// console.log(st2.learn());

// const obj = {
//   name: "kyaw kyaw",
//   age: 18,
//   major: "bio",
//   gender: "male",
//   learn(){
//     return this.name+" can learn everything"
//   }
// };

// console.log(obj.learn());

// class A {
//   a = "aaa";
//   x = "xxx";
//   y = "yyy";
// }

// class B extends A {
//   b = "bbb";
// }

// class C extends B {
//   c = "ccc";
// }

// const c = new C();
// console.log(c);

// const a = new A();
// console.log(a);

// const b = new B();
// console.log(b);

// class A {
//   a = "aaa";
//   #x = "xxx";
// }

// const a = new A();
// console.log(a.x);

// class A {
//   a = "aaa";
//   static x = "xxx";
//   static y() {
//     return "yyy";
//   }
// }
// // const a = new A();
// // console.log(a.a);

// console.log(A.x);
// console.log(A.y());

// method chainging

// class A {
//   x() {
//     console.log("this is x");
//     return this;
//   }
//   y() {
//     console.log("this is y");
//     return this;
//   }
//   z() {
//     console.log("this is z");
//     return this;
//   }
// }

// const aa = new A();

// // a.x();
// // a.y();
// // a.z();

// aa.x().y().z();

// const d = new Date();

// d.setHours(d.getHours() + 300);
// d.setMonth(d.getMonth() + 4);
// d.setDate(d.getDate() + 25);

// console.dir(d);

// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());

// console.log(d.getDate());
// console.log(d.getMonth());
// // console.log(d.getYear());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTime());

// const str = new String("    min ga lar par byar    ");
// const str = "min ga lar par byar";
// console.log(typeof str);
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.length);
// console.log(str.substr(4, 6));
// console.log(str.substring(4, 10));
// console.log(str.search("za"));
// console.log(str.replace("ga", "za"));
// console.log(str.replace("ar", "xxx"));
// console.log(str.replaceAll("ar", "xxx"));

// console.log(str.length);
// console.log(str.trimEnd());
// 0000 0000 0000 0000 , 353456
// const luckyNumber = "32A4R25";
// console.log(luckyNumber.padStart(16, "A"));
// console.log(luckyNumber.padEnd(16, "A"));
// str to array
// console.log(str.trim().split(" "));
// console.log(str.trim().split(" ", 3));

// console.log(str);

const num = new Number("234.63642");
const strNum = "123.345345";
const weight = "160.58kg";
// console.log(typeof num);
// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed(2));
// console.log(num.toPrecision(2));
// console.log(Number(weight));

// console.log(parseInt(weight));
// console.log(parseFloat(weight));

// console.log(isNaN("hein" - "htet"));
// console.log(eval("2+6"));

// console.log(Math);

// console.log(7 - 5);
// console.log(Math.abs(5 - 7));
// console.log(Math.round(123.75));
// console.log(Math.ceil(123.15));
// console.log(Math.floor(123.75));

// console.log(Math.ceil(Math.random() * 10));
// console.log(Math.floor(Math.random() * 10));

// console.log(2 ** 5);
// console.log(Math.pow(2, 5));

// console.log(Math.sqrt(128));

// function run(x, y) {
//   return x + y;
// }

// console.log(run(1, 2));

// function run(x, y) {
//   return y(x);
// }

// console.log(
//   run(5, function (x) {
//     return x + 2;
//   })
// );

// console.log(
//   run(5, function (x) {
//     return x * 2;
//   })
// );

// const run = function (x, y) {
//   return x + y;
// };

// arrow function
// const run = (x, y) => x + y;

// const run = () => "this is arrow fun";
// const run = () => "this is arrow fun";
// const run = (x) => "this is arrow fun " + x;
// const run = (x, y) => "this is arrow fun " + (x + y);
// const run = (x, y) => {
//   let result = x * y;
//   return "arrow fun --- " + result;
// };

// console.log(run(15, 20));

// const obj = {
//   a: "a",
//   b() {
//     console.log(this);
//     return "this is b";
//   },

//   c: function () {
//     console.log(this);
//     return "this is c";
//   },

//   d: () => {
//     console.log(this);

//     return "this is d";
//   },
// };

// console.log(obj.b());
// console.log(obj.c());
// console.log(obj.d());

// const sum = new Function("a", "b", "return a + b");

// console.dir(sum);

// console.log(sum(1, 2));

function run(x, y) {
  console.log(arguments);
  return x + y;
}

console.dir(run);
// console.dir(run.name);
// console.log(run.bind(null, 4, 5,6,5,6).call());
console.log(run(1, 2));
