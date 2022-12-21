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

const d = new Date();

// d.setHours(d.getHours() + 300);
// d.setMonth(d.getMonth() + 4);
// d.setDate(d.getDate() + 25);

// console.dir(d);

// console.log(d.toDateString());
// console.log(d.toTimeString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());

// console.log(d.getDate());
// console.log(d.getMonth());
// // console.log(d.getYear());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTime());
