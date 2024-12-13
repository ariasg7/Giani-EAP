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
