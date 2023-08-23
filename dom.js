// console.log(document.getElementsByTagName("body"));

// let h1 = document.getElementById("name");
// console.log(h1);

// let p = document.getElementsByTagName("p");
// console.log(p);
// console.log(p[0]);
// console.log(p[2]);
// console.log(p[p.length - 1]);

// let heading = document.getElementsByTagName("h1");

// console.log(heading[0]);

// let heading = document.getElementsByClassName("group");

// console.log(heading);

// let element = document.querySelector("#name");
// let element2 = document.querySelector(".group");
// let element3 = document.querySelectorAll(".group");

// console.log(element2);
// console.log(element3[0]);

// let list = document.querySelector("#result");
// // console.log(list.childNodes[1]);
// const children = list.children;
// console.log(children[children.length - 1]);
// const lastChild = list.lastChild;
// console.log(lastChild);

// // const first = document.querySelector(".item");

// // console.log(first.nextSibling);

// let div = document.querySelector("#container");
// console.log(div);
// let h1 = document.querySelector("h1");
// console.log(h1.nextSibling.nextSibling);

// let body = document.querySelector("body");

// body.style.backgroundColor = "red";
// body.style.color = "white";
// console.log(body);

// let h1 = document.querySelector(".text");

// h1.style.backgroundColor = "black";
// h1.style.textAlign = "center";

let p = document.getElementById("intro");
p.className = "add";
console.log(p);

let text = document.querySelector(".add");

text.style.color = "red";

p.className = "note";

let heading = document.getElementById("list");

heading.classList.add("note-heading");
heading.classList.add("good");
heading.classList.remove("good");
heading.classList.toggle("wow");
// heading.classList.toggle("note-heading");
console.log(heading);
