// const products = [
//   {
//     id: 1,
//     name: "black bag",
//     category: "women",
//     price: 500,
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//   },
//   {
//     id: 2,
//     name: "shoe",
//     category: "women",
//     price: 400,
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//   },
//   {
//     id: 3,
//     name: "shoe",
//     category: "men",
//     price: 400,
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//   },
//   {
//     id: 4,
//     name: "laptop",
//     category: "electronics",
//     price: 400000,
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//   },
//   {
//     id: 5,
//     name: "Hp laptop",
//     category: "electronics",
//     price: 500000,
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//   },
//   {
//     id: 6,
//     name: "bag",
//     category: "men",
//     price: 500,
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//   },
// ];

// console.log(products.slice(0, 4));
// products.slice(0, 4).map((product) => {
//   console.log(product);
// });

// let items = ["a", "b", "c", "d", "e", "f", "g", "h"];
// // items.splice(0, 1, "j", "k");
// items[0] = "j";
// console.log(items);
// items.splice(3, 2, "l", "m");
// console.log(items);

const form = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");

let userInfo = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(email.value, username.value, password.value);
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  userInfo.push(user);
  localStorage.setItem("user", JSON.stringify(userInfo));
});

// products
const products = [
  {
    id: 1,
    name: "black bag",
    category: "women",
    price: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 2,
    name: "shoe",
    category: "women",
    price: 400,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 3,
    name: "shoe",
    category: "men",
    price: 400,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 4,
    name: "laptop",
    category: "electronics",
    price: 400000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 5,
    name: "Hp laptop",
    category: "electronics",
    price: 500000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 6,
    name: "bag",
    category: "men",
    price: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
];

console.log(products.slice(0, 4));
let productDetails = "";
products.slice(0, 4).map((product) => {
  productDetails += `
    <div class="product-list">
    <h2>${product.name}</h2>
    <p>${product.price}</p>
    <p>
    ${product.description}
    </p>
    <button class="button-filter" data-id=${product.id}>cart</button>
  </div>
    `;
  document.getElementById("product").innerHTML = productDetails;
});

let cartStore = [];
const buttons = document.querySelectorAll(".button-filter");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productId = products.find(
      (product) => product.id === Number(e.target.dataset.id)
    );

    cartStore.push(productId);
    localStorage.setItem("cart", JSON.stringify(cartStore));
    console.log(productId);

    // console.log(e.target.dataset.id);
  });
});

let table = document.getElementById("table");
let cartDetail = JSON.parse(localStorage.getItem("cart"));
