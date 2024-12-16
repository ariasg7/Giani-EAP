/* Register */
let registerForm = document.getElementById("register-form-container");
if (registerForm){
    registerForm.addEventListener('submit',register)
}

async function register(e){

    e.preventDefault()

    const user = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("registerEmail").value,
        password: document.getElementById("registerPassword").value,
        verifyPassword: document.getElementById("verifyPassword").value
    }
    if (!user.firstName || !user.lastName || !user.email || !user.password || !user.verifyPassword) {
        document.getElementById("error").innerHTML = "Please fill out all fields";
        return;
    }
    if(user.password !== user.verifyPassword){
        console.log(user)
        document.getElementById("error").innerHTML = "Passwords do not match"
        return
    }
    //clear error message once passwords are the same
    document.getElementById("error").innerHTML = ""

    try {
        document.getElementById("error").innerHTML = "";

        // Use fetchData to send a POST request to your backend
        const response = await fetchData('/users/register', user, 'POST');
        
        // Handle successful registration
        console.log("Registration successful:", response);
        alert(`Welcome, ${response.firstName}! Registration successful.`);

        // Redirect to login or another page
        window.location.href = "../main.html"; // Replace with your actual target page
    } catch (error) {
        // Handle registration errors
        console.error("Registration failed:", error.message);
        document.getElementById("error").innerHTML = `Registration failed: ${error.message}`;
    }
}