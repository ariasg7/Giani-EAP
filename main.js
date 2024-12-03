/* Register */

let registerForm = document.getElementById("register-form-container");
if (registerForm){
    registerForm.addEventListener('submit',register)
}

function register(e){

    e.preventDefault()

    const user = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        registerEmail: document.getElementById("registerEmail").value,
        registerPassword: document.getElementById("registerPassword").value,
        verifyPassword: document.getElementById("verifyPassword").value
    }
    if (!user.firstName || !user.lastName || !user.registerEmail || !user.registerPassword || !user.verifyPassword) {
        document.getElementById("error").innerHTML = "Please fill out all fields.";
        return;
    }
    if(user.registerPassword == user.verifyPassword){
        console.log(user)
        document.getElementById("error").innerHTML = ""
    }
    else{
        document.getElementById("error").innerHTML = "Passwords do not match"
    }
}
/* Login */
let loginForm = document.getElementById("login-form-container");
if (loginForm){
    loginForm.addEventListener('submit',login)
}
function login(e){
    e.preventDefault()

    const loginUser ={
        loginEmail: document.getElementById("loginEmail").value,
        loginPassword: document.getElementById("loginPassword").value
    }
    console.log(loginUser)
}


/* Post */

let postForm = document.getElementById("post-form-container");
if (postForm){
    postForm.addEventListener('submit',post)
}
function post(e){
    e.preventDefault()

    const userPost ={
        input: document.getElementById("input").value
    }
    console.log(userPost)
}