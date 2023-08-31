const myForm = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

myForm.addEventListener("submit", formEvent);

function formEvent(e) {
  e.preventDefault();
  console.log(
    ` username: ${username.value}  email:${email.value} password: ${password.value}`
  );
}
