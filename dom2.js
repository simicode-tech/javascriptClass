const info = document.getElementById("info");
const appendElement = document.getElementById("list");

const result = document.getElementById("result");
// console.log(info.classList.contains("disabled"));

function chandeBackgroundColor() {
  if (info.classList.contains("disable")) {
    info.classList.remove("disable");
    info.classList.add("text");
  }
}
chandeBackgroundColor();
const element = document.createElement("div");
const divBody = document.createTextNode("A simple website");
element.appendChild(divBody);
appendElement.appendChild(element);

const p = document.createElement("p");
const text2 = document.createTextNode(
  "String that specifies the nodeValue property of the text node."
);
p.appendChild(text2);
appendElement.appendChild(p);

// link the text node

const newLink = document.createElement("a");
newLink.id = "myLink";
newLink.href = "https://facebook.com/";
newLink.target = "_blank";
newLink.textContent = "Facebook";
appendElement.appendChild(newLink);
// console.log(newLink);
const Link = document.getElementById("myLink");
Link.style.textDecoration = "none";
console.log(Link);

// result.remove();
console.log(result);

const heading = document.querySelector("h1");
result.removeChild(heading);
const newElement = document.createElement("h3");

newElement.setAttribute("id", "myName");
newElement.textContent = "My name is janet";
result.appendChild(newElement);
console.log(newElement);
newElement.setAttribute("class", "main_heading");
newElement.setAttribute("class", "heading");

const input = document.createElement("input");

input.setAttribute("type", "text");
input.setAttribute("placeholder", "enter your username");

result.appendChild(input);

const displayText = document.createElement("div");
displayText.innerText = "<p>I love programming<p>";

console.log(displayText);
result.appendChild(displayText);
const displayText2 = document.createElement("div");
displayText2.innerHTML = "<p>I love programming<p>";
result.appendChild(displayText2);

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
const product = document.getElementById("product");
let displayProduct;
products.map((items) => {
  displayProduct += `
  <div style= "display:flex">
    <h2>${items.name}</h2>
    <p>${items.price}</p>
    <p>${items.description}</p>
  </div>
    `;
  product.innerHTML = displayProduct;
});
