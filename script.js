function validateForm() {
    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Get form values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    // Validate name
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
    }

    // Validate email
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
    }

    // Validate password
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    }
}

function isValidEmail(email) {
    var emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
    return emailRegex.test(email);
}