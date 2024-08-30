document.addEventListener('DOMContentLoaded', () => {
    const showSignUpButton = document.getElementById('show-signup');
    const showLoginButton = document.getElementById('show-login');
    const loginContainer = document.querySelector('.login-container');
    const signUpContainer = document.querySelector('.sign-up-container');

    // Toggle between login and sign-up forms
    showSignUpButton.addEventListener('click', (event) => {
        event.preventDefault();
        loginContainer.classList.add('hidden');
        signUpContainer.classList.remove('hidden');
    });

    showLoginButton.addEventListener('click', (event) => {
        event.preventDefault();
        signUpContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
    });

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        alert(`Login attempted with Username: ${username} and Password: ${password}`);
        // Here you would send the login data to the server
    });

    // Handle sign-up form submission
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Retrieve form data
        const fullName = signupForm.querySelector('input[type="text"]').value;
        const username = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;
        const mobileNumber = signupForm.querySelector('input[type="tel"]').value;
        const dateOfBirth = signupForm.querySelector('input[type="date"]').value;
        const address = signupForm.querySelector('input[type="text"]').value;
        const gender = signupForm.querySelector('select').value;

        // Alert for demonstration purposes
        alert(`Sign Up attempted with:\nFull Name: ${fullName}\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}\nMobile Number: ${mobileNumber}\nDate of Birth: ${dateOfBirth}\nAddress: ${address}\nGender: ${gender}`);

        // Here you would send the registration data to the server
    });
});

