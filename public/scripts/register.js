async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }   

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
        email: document.getElementById("registerEmail").value.trim(),
        password: document.getElementById("registerPassword").value,
    }
    let verifyPassword = document.getElementById("verifyPassword").value

    console.log(user);
    if (!user.firstName || !user.lastName || !user.email || !user.password || !verifyPassword) {
        document.getElementById("error").innerHTML = "Please fill out all fields";
        return;
    }
    if(user.password !== verifyPassword){
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
        alert(`Welcome, "${response.firstName}"! Registration successful.`);

        // Redirect to login or another page
        //window.location.href = "../login.html"; // Replace with your actual target page
    } catch (error) {
        // Handle registration errors
        console.error("Registration failed:", error.message);
        document.getElementById("error").innerHTML = `Registration failed: An unknown error occurred`;
    }
}