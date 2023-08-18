// let date = new Date();

// console.log(date.getHours());
// console.log(date.getFullYear());
// console.log(Math.abs(-10));
// console.log(Math.abs(2.34));
// console.log(Math.round(2.56));
// console.log(Math.round(2.46));

// let num1 = 34.4;
// let num2 = 54.034;
// let num3 = 7.0001;
// let num4 = 867.1;
// let num5 = 212.0;

// console.log(Math.floor(num1));
// console.log(Math.floor(num2));
// console.log(Math.floor(num3));
// console.log(Math.floor(num5));

// let x = 2;
// let y = 5;

// let answer = y ** x;
// console.log(answer);
// console.log(Math.pow(y, x));

// function pow(p, p1) {
//   let result = p ** p1;
//   return result;
// }

// // console.log(pow(y, x));

// // let Maths = {
// //   pow: function (p, p1) {
// //     let result = p ** p1;
// //     return result;
// //   },
// // };
// // console.log(Maths.pow(y, x));

// let x1 = 67;
// console.log(Math.sqrt(x1));

// console.log(Math.max(3, 9, 1, 5, 6));

// let number = Math.random() * 10;
// console.log(Math.round(number));

// function otp() {
//   let otpNumber = Math.random() * 10000;
//   console.log(Math.floor(otpNumber));
// }
// otp();

// let user = prompt("Enter your username");
// alert(user);

// function msg() {
//   let message = confirm("JavaScript class");
//   if (message === true) {
//     alert("ok");
//   } else {
//     alert("cancel");
//   }
// }
// // msg();

// console.log(window.location.href);
// console.log(window.location.pathname);
// console.log(window.location.search);

// setTimeout(function () {
//   alert("Welcome to Javatpoint after 2 seconds");
// }, 2000);

// let timeOut = setTimeout(display, 3000);
// function display() {
//   console.log("Welcome to Javatpoint after 3 seconds");
// }

// setTimeout(cancelTimeOut, 4000);

// function cancelTimeOut() {
//   clearTimeout(timeOut);
//   window.open("end.html");
//   // console.log("Time Out");
// }
// setInterval(() => {
//   console.log("Time interval");
// }, 2000);

let count = 0;
let intervalId;

intervalId = setInterval(() => {
  count++;
  console.log("Count:", count);
}, 1000);

setTimeout(stopCounter, 3000);

function stopCounter() {
  clearInterval(intervalId);
  console.log("Counter stopped");
}
