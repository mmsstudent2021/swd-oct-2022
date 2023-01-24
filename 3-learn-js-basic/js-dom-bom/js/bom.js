// console.log(window.innerWidth);
// console.log(window.innerHeight);
// // console.log(window.outerWidth);
// // console.log(window.outerHeight);

// const exampleModal = new bootstrap.Modal("#exampleModal");
// // user က အသုံးပြုလာတာ ၇၅% လောက်ရောက်ရင် modal ထိုးပြမယ်

// const h75 = 0.75 * (document.body.getBoundingClientRect().height - window.innerHeight );

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
//   if(window.scrollY > h75){
//     exampleModal.show();
//   }
// });

// window.addEventListener("resize", () => {
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
// });

// window.addEventListener("online", () => {
//   console.log("u are online");
// });

// window.addEventListener("offline", () => {
//   console.log("u are offline");
// });

// alert("hello");

// console.log(innerHeight);

// const clock = document.querySelector("#clock");
const clockStart = document.querySelector("#start");
const clockStop = document.querySelector("#stop");
const to = document.querySelector("#to");

// const run = () => {
//   const d = new Date();

//   //   console.log(d.getHours(), ":", d.getMinutes(), ":", d.getSeconds());

//   clock.innerText = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// };

// // setTimeout(run,3000)
// let runClock; //state
// const stopRunClock = clearInterval(runClock);

// clockStart.addEventListener("click", () => {
//   runClock = setInterval(run, 1000);
// });
// clockStop.addEventListener("click", () => {
//   clearInterval(runClock);
// });

// let run;

// clockStart.addEventListener("click", () => {
//   run = setTimeout(() => console.log("hello"), 3000);
// });

// clockStop.addEventListener("click", () => {
//   clearTimeout(run);
// });
// function test(start, stop) {
//   let i = start;
//   const run = setInterval(() => {
//     console.log("hello", ++i);
//     if (i === stop) {
//       clearInterval(run);
//     }
//   }, 1000);
// }

// clockStart.addEventListener("click", () => {
//   //   const windowFeatures = "left=100,top=100,width=320,height=320";
//   //   const handle = window.open(
//   //     "https://mms-it.com",
//   //     "mozillaWindow",
//   //     windowFeatures
//   //   );

//   //   window.resizeTo(400, 400);

//   scrollTo(0, document.querySelector("#to").getBoundingClientRect().y);
// });

// clockStop.addEventListener("click", () => {
//   close();
// });

// for ( i = 1; i <= 5; i++) {
//   console.log(i, "loop");
// }

// console.log(i);

// global
// block
// local
// module
