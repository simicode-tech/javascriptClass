const myForm = document.getElementById("myForm")
const email = document.getElementById("email")
const username = document.getElementById("username")
const password = document.getElementById("password")
const output = document.getElementById("output")


myForm.addEventListener("submit",formValidation)

function formValidation(e){
    e.preventDefault()
    if(username.value  === ""||email.value ===" " || password.value===""){
        
        output.innerHTML = "incorrect usename or password"
        output.classList.add("error")
        // console.log();
    }else if(username.value.length ===0 || password.value.length ===0){
        output.innerHTML = "incorrect usename or password"
        output.classList.add("error")
    }else if(password.value.length > 6){
        output.innerHTML = "Password can't exceed 6 "
        output.classList.add("error")
    }else{
        output.innerHTML = "Register successful "
        output.classList.add("success")
        let user = {
            username:username.value,
            email: email.value,
            password :password.value
        }
        localStorage.setItem("users",JSON.stringify(user))
        
    }
}

// localStorage
localStorage.setItem("firstname","bola")
let usernames = localStorage.getItem("firstname")
console.log(usernames);
let students = ["david","peter"]
localStorage.setItem("studentName", JSON.stringify(students))
console.log(localStorage.getItem("studentName"));
console.log(JSON.parse(localStorage.getItem("studentName")));

let user = {
    name:"janet",
    password :"12344"
}
localStorage.setItem("user",JSON.stringify(user))

localStorage.clear()


