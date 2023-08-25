//   function hello() {
//     alert("Welcome to event listener!");
//   }
// function over() {
//   const img = document.querySelector("img");
//   img.style.border = "2px solid red";
// }
// function out() {
//   const img = document.querySelector("img");
//   img.style.border = "none";
// }

function backgroundColor() {
  const changeBackgroundColor = document.getElementById(
    "changeBackgroundColor"
  );
  const colors = ["red", "green", "blue"];
  let colorPick = colors[Math.floor(Math.random() * colors.length)];

  changeBackgroundColor.style.backgroundColor = colorPick;

  //   console.log(colorPick);
}

setInterval(backgroundColor, 2000);

const addClick = document.getElementById("addClick");

addClick.addEventListener("click", () => {
  alert("Add Click");
});

const btn = document.getElementById("btn");
const msg = document.querySelector(".msg");

// element.addEventListener(event, function)

btn.addEventListener("click", myClick);

function myClick(e) {
  console.log(e.target.id);
}
