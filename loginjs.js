// Toggle Password visibility
document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("login-password");
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
  });

// Toggle Password visibility for registration
document.getElementById("toggleReg").addEventListener("click", function () {
  const passwordField = document.getElementById("register-password");
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;
});

// Register form submit
document.getElementById("register-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  // Email and password validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email ending with @domain.com");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    );
    return;
  }

  // Save user data to localStorage
  const userData = {
    username: username,
    email: email,
    password: password,
  };
  localStorage.setItem("user", JSON.stringify(userData));
  alert("Account created successfully!");

  // Switch to login page after registration
  document.querySelector(".container").classList.remove("sign-up-mode");
});

// Login form submit
document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedData = JSON.parse(localStorage.getItem("user"));

  if (storedData) {
    if (username === storedData.username && password === storedData.password) {
      // Simulate login process
      document
        .getElementById("login-logout")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Normally you'd validate credentials here, but for simplicity, we'll assume login is successful
          localStorage.setItem("user", true); // Mark the user as logged in
          window.location.href = "musabHome.html"; // Redirect to home page
        });
      window.location.href = "musabHome.html";
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  } else {
    alert("No account found. Please register first.");
  }
});

// Switch to Register Page
document.getElementById("sign-up-btn").addEventListener("click", function () {
  document.querySelector(".container").classList.add("sign-up-mode");
});

// Switch to Login Page
document.getElementById("sign-in-btn").addEventListener("click", function () {
  document.querySelector(".container").classList.remove("sign-up-mode");
});

function toggleTheme(mode) {
  if (mode === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// On page load, apply the saved theme if any
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
});

// ashjan code for login
// document.getElementById("login-btn").addEventListener("click", () => {
//   window.location.href = "musabHome.html?loggedIn=true";
// });
// Login user
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && username === user.username && password === user.password) {
    sessionStorage.setItem("user", "true");
    // alert("Login successful!");
    window.location.href = "musabHome.html";
  } else {
    // alert("Invalid username or password. Please try again.");
  }
});
