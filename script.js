// Get references to the sections and toggle links
const signupSection = document.getElementById('signupSection');
const loginSection = document.getElementById('loginSection');
const showLogin = document.getElementById('showLogin');
const showSignup = document.getElementById('showSignup');

// Show the login section with animation
showLogin.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the link from navigating

  // Add animation classes
  signupSection.classList.remove('active');
  loginSection.classList.add('active');
});

// Show the signup section with animation
showSignup.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the link from navigating

  // Add animation classes
  loginSection.classList.remove('active');
  signupSection.classList.add('active');
});
