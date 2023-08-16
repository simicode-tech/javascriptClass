/*
Logical operators

let user = prompt("Enter your username");
let password = prompt("Enter your password");

if (user === "" || password == "") {
  alert("password or username is required");
} else if (user === "janet" && password == "12345") {
  alert("You just login");
} else {
  alert("invalid username or password");
}

* /

/*
While loop
let i = 10,
  n = 1;

while (i <= n) {
  console.log(i);
  i++;
}

while (i <= n) {
  console.log(n);
  n--;
}
while (i >= n) {
  console.log(i);
  i--;
}

 */

// Do while loop
/*
Do while loop
do {
  i--;
  console.log(i);
} while (i >= n);

*/

// for loop
/*
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let A = 1; A <= 5; A++) {
  for (let B = 1; B <= 12; B++) {
    console.log(A + " X " + B + " = " + A * B);
  }
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

*/

// function declarations
/*
 function add() {
   console.log(2 + 2);
 }
 add();
 add();
 add();
 add();
 
 */

//  function expression
/*
let sub = function () {
  console.log(5 - 3);
};
sub();

*/

// parameter and argument
/*

function add1(p1, p2, p3) {
  console.log(p1 + p2 + p3);
}
add1(1, 4);
add1(10, 15, 20, 30);

function triangle(h, b) {
  let output = 1 / 2(h * b);
  console.log(output);
}

triangle(5, 6);
*/

// for (let i = 0; i < 10; i++) {
//   if (i == 6) {
//     // console.log(i);
//     break;
//   }
//   console.log(i);
// }

// function people() {
//   console.log("Hello world!");
// }
// // Invoke the function
// people();
// people();
// people();

// let people1 = function () {
//   let name = "javascript";
//   console.log(`Welcome to ${name} class`);
//   console.log("Welcome to" + " " + name + " class");
// };

// people1();

// simple intrest: PRT/100
function SI(p, r, t) {
  let output = (p * r * t) / 100;
  console.log(output);
}

SI(60000, 2, 1);

// Return in function

function addition(a, b, c) {
  let ans = a + b - c;
  return ans;
}
console.log(addition(3, 4, 2));

function Products(item1, item2) {
  let order = ` You order for ${item1} and ${item2}`;
  return order;
}

console.log(Products("Laptop", "Bag"));
console.log(Products("pen", "Bag"));

// callback function
function callback() {
  return "I'm a callback function ";
}

function greet(name, message) {
  console.log(message());
  console.log("My name is " + name);
}

greet("janet", callback);

// 1/2(a+b)*h

function sum(a, b) {
  let output = a + b;
  return output;
}

function trap(sum, h) {
  let output = (1 / 2) * sum(2, 5) * h;
  return output;
}

console.log(trap(sum, 12));

// arrow functions

let mult = (a, b) => {
  return a * b;
};

console.log(mult(3, 4));

// global scope

const course = "JavaScript";

function title() {
  console.log(`I love ${course}`);
}
title();

console.log(course);

// local scope
let number = 2;
if (number < 10) {
  let num = 5;
  console.log(num + number);
}

console.log(num);

// Array
let array1 = [1, 2, 3, 4, 5, 6, 7, "bag", 8, 9, 10, 11, 12];
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[9]);
console.log(array1[11]);
console.log(array1[4]);
console.log(array1[6]);
console.log(array1[7]);

let products = ["bag", "shoe", "clothes", "laptop"];

products[0] = "pen";
products[4] = "cup";
products[7] = "bag";
console.log(products);
console.log(products[6]);

let quizQuestions = [
  ["What is the capital of Lagos State?", "Agege", "Mushin", "Ikeja"],
  [
    "What is the capital of Kaduna State?",
    "Kagoro",
    "Kachia",
    "Kaduna",
    "Kaduna",
  ],
];

console.log(quizQuestions[0][0]);
console.log(quizQuestions[0][3]);
console.log(quizQuestions[0][3]);
console.log(quizQuestions[1][0]);

// spreed operators
let numberOne = [1, 2, 3];
let numberCombine = [...numberOne, 4, 5, 6];
console.log(numberCombine);

// // SI = PRT/100
// defaultValue in function
function SI(r, t, p = 10000) {
  let output = (p * r * t) / 100;
  return output;
}

console.log(SI(0.5, 2));
console.log(SI(0.5, 2, 15000));

// Revision
function sum(a, b) {
  let output = a * b;
  return output;
}

function triangle(sum) {
  let output = (1 / 2) * sum(4, 6);
  return output;
}

console.log(triangle(sum));

function para() {
  return sum(6, 4);
}

console.log(para());

function triangle2() {
  let output = (1 / 2) * sum(4, 6);
  return output;
}
console.log(triangle2());

// properties and methods
let text4 = "JavaScript";
let length = text4.length;
console.log(length);

console.log(text.toUpperCase());

let school = "This is our training centre";
console.log(school.startsWith("This "));

const products = [
  {
    id: 1,
    name: "black bag",
    price: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 2,
    name: "shoe",
    price: 400,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 3,
    name: "laptop",
    price: 400000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 4,
    name: "Hp laptop",
    price: 500000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 5,
    name: "bag",
    price: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
];

function displayProduct(product) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.startsWith(product)) {
      console.log(products[i].name);
    } else {
      console.log("No product found");
    }
  }
}

displayProduct("bk");

let company = "Welcome to Alabian Solution Limited";
console.log(company.lastIndexOf("Limited"));
let text = "Apple, Banana, Kiwi";
let part = text.slice(0, 5);
console.log(part);

let part2 = text.substring(-2, 5);
console.log(part2);
let x = "  I love javascript";
let change = x.replace("javascript", "php");
console.log(change);

console.log(x.indexOf("I"));

let trim1 = x.trim();
console.log(trim1.indexOf("I"));

let text2 = " HELLO WORLD";

for (let i = 0; i < text2.length; i++) {
  let char = text2.charAt(i);
  console.log(char);
}

let text3 = text2.includes("l");
console.log(text3);
// console.log(char);
let y = 8.0843;
console.log(typeof y);
console.log(y.toFixed(3));

let val = y.toString();
console.log(typeof val);

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.pop();
console.log(fruits2);

fruits.push("watermelon");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Lemon");
console.log(fruits);
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myBoys.concat(myGirls);

console.log(myChildren);

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 4, "Lemon", "Kiwi");
console.log(fruits4);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.slice(0, 3));

const cars1 = ["Toyota", "Benz", "Ferrari", "Volvo"];

cars1.forEach(function (item, index) {
  let display = ` ${index}: This is a ${item} car`;
  console.log(display);
});

cars.map((car, index) => {
  console.log(index + " : " + car);
});

const products = [
  {
    id: 1,
    name: "black bag",
    price: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 2,
    name: "shoe",
    price: 400,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 3,
    name: "laptop",
    price: 400000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 4,
    name: "Hp laptop",
    price: 500000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 5,
    name: "bag",
    price: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 6,
    name: "red bag",
    price: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
];

// // products.map((item) => {
// //   console.log(`${item.name} : ${item.price} `);
// // });

// // let store = [
// //   {
// //     id: 1,
// //     name: "bag",
// //     price: 2000,
// //   },
// //   {
// //     id: 1,
// //     name: "bag",
// //     price: 2000,
// //   },
// //   {
// //     id: 1,
// //     name: "bag",
// //     price: 2000,
// //   },
// //   {
// //     id: 1,
// //     name: "bag",
// //     price: 2000,
// //   },
// // ];

// // const cars1 = ["Toyota", "Benz", "Toyota 123", "Ferrari", "Volvo"];

// function listOfCar(item) {
//   products.filter((list) => {
//     let product = item.toLowerCase();
//     let productList = list.name.toLowerCase();

//     if (productList === product) {
//       console.log(list);
//     } else if (productList.startsWith(product)) {
//       console.log(list);
//     } else if (productList.includes(product)) {
//       console.log(list);
//     }
//   });
// }
// listOfCar("Bag");

const products = [
  {
    id: "1",
    name: "black bag",
    category: "women",
    price: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: "2",
    name: "shoe",
    category: "women",
    price: 400,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: "3",
    name: "shoe",
    category: "men",
    price: 400,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: "4",
    name: "laptop",
    category: "electronics",
    price: 400000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: "5",
    name: "Hp laptop",
    category: "electronics",
    price: 500000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: "6",
    name: "bag",
    category: "men",
    price: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
];

// products.map((product) => {
//   console.log(product.name);
// });

// function productFilter(category) {
//   let filterProduct = products.filter((item) => {
//     if (item.category === category || category === "all") {
//       return item;
//     }
//   });
//   return filterProduct;
// }

// console.log(productFilter("all"));

const cars = ["Toyota", "Benz", "Ferrari", "Toyota", "Volvo"];

const findCar = cars.find(function (car) {
  return car === "Toyota";
});
console.log(findCar);

const findProduct = products.find(function (product) {
  return product.id === "1";
});

console.log(findProduct);

const today = new Date();
console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getMonth());

const date = new Date("2022-03-25");

console.log(date);

const date1 = new Date();
console.log(date1);
