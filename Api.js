const product = document.getElementById("product");

// fetch("https://fakestoreapi.com/productss")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     let productDetail = "";
//     data.map((item) => {
//       productDetail += `
//         <div class="col-md-4 mb-3">
//           <div class="card">
//             <img src="${item.image}" class="card-img-top" height: "250px"; alt="..." />
//             <div class="card-body">
//               <h5 class="card-title">${item.title}</h5>
//               <p class="card-text">
//                 ${item.description}
//               </p>
//               <a href="#" class="btn btn-primary" data-category="${item.category}">Go somewhere</a>
//             </div>
//           </div>
//         </div>
//    `;
//     });

//     product.innerHTML = productDetail;
//   })
//   .catch((error) => {
//     console.log(error);
//   });
let newData = [];

async function getProduct() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  //   newData = data;
  data.map((dataItem) => {
    return newData.push(dataItem);
  });

  //   console.log(data);
}

async function renderProduct() {
  await getProduct();
  console.log(newData[0]);
  let productDetail = "";
  newData.map((item) => {
    productDetail += `
              <div class="col-md-4 mb-3">
                <div class="card">
                  <img src="${item.image}" class="card-img-top" height: "250px"; alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">
                      ${item.description}
                    </p>
                    <a href="#" class="btn btn-primary" data-category="${item.category}">Go somewhere</a>
                  </div>
                </div>
              </div>
         `;
  });
  product.innerHTML = productDetail;
}  
renderProduct();
