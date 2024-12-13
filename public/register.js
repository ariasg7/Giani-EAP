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
        document.getElementById("error").innerHTML = "Please fill out all fields";
        return;
    }
    if(user.registerEmail){

    }
    if(user.registerPassword == user.verifyPassword){
        console.log(user)
        document.getElementById("error").innerHTML = ""
    }
    else{
        document.getElementById("error").innerHTML = "Passwords do not match"
    }
}