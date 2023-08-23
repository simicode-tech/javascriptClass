const products = [
  {
    id: 1,
    name: "black bag",
    image: "images/portfolio2.jpg",
    category: "women",
    price: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 2,
    name: "shoe",
    image: "images/portfolio2.jpg",
    category: "women",
    price: 400,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 3,
    name: "shoe",
    image: "images/portfolio2.jpg",
    category: "men",
    price: 400,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 4,
    name: "laptop",
    image: "images/portfolio2.jpg",
    category: "electronics",
    price: 400000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 5,
    name: "Hp laptop",
    image: "images/portfolio2.jpg",
    category: "electronics",
    price: 500000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    id: 6,
    name: "bag",
    image: "images/portfolio2.jpg",
    category: "men",
    price: 500,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
];
function getProduct() {
  let displayProduct = "";
  products.map((items) => {
    displayProduct += `
      <div class="col-md-4">
      <div class="card">
        <img src="${items.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${items.name}</h5>
          <p class="card-text">
            ${items.description}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
          `;
  });
  document.getElementById("product").innerHTML = displayProduct;
}
getProduct();
