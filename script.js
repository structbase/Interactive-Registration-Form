// Cache HTML elements
const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Cache error spans
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Fill username if it exists in localStorage
window.addEventListener("DOMContentLoaded", () => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
});

// Cache button
const registerButton = document.getElementById("registerButton");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const validEmailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    let valid = true;

    // Username validation
    if (usernameInput.value.trim().length < 5) {
        usernameError.textContent =
            "Username must be at least 5 characters long.";
        valid = false;
    } else {
        usernameError.textContent = "";
    }

    // Email validation
    if (!validEmailCheck.test(emailInput.value.trim())) {
        emailError.textContent =
            "Please enter a valid email address (e.g., user@domain.com).";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    if (!validPassword.test(passwordInput.value.trim()) && passwordInput) {
        passwordError.textContent = "Password must requirement";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Confirm password validation
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    if (valid) {
        // Save username to localStorage
        localStorage.setItem("username", usernameInput.value.trim());

        registerButton.textContent = "Registered!";
        form.reset();
    }
});
