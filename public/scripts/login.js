/*Fetch*/
// Fetch Data Utility Function
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok) {
      return await response.json(); // Parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }

/* Login */

let loginForm = document.getElementById("login-form-container");
if (loginForm){
    loginForm.addEventListener('submit',login)
}
async function login(e){
    e.preventDefault()

    const loginUser ={
        email: document.getElementById("loginEmail").value.trim(),
        password: document.getElementById("loginPassword").value
    }
    console.log(loginUser)
    
    


    try {
        // Use fetchData to send a POST request to your backend
        const response = await fetchData('/users/login', loginUser, 'POST');
    
        // Handle successful login
        console.log("Login successful:", response);
        alert("Login successful! Welcome " + response.firstname);
    
        // Redirect to a dashboard or another page
        window.location.href = "../main.html"; // Replace with your actual target page
      } catch (error) {
        // Handle login errors
        console.error("Login failed:", error.message);
        alert("Login failed: " + error.message);
      }
}