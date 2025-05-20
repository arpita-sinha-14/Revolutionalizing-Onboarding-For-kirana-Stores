document.getElementById('show-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('login-button').addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.getElementById('signup-button').addEventListener('click', function() {
    window.location.href = 'signup.html';
});

document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
    console.log('Login form submitted'); // Debug log
    alert('Login form submitted');
    window.location.href = 'home.html'; // Redirect to home.html after form submission
});

document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle signup logic here
    alert('Signup form submitted');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hide the current form
    document.getElementById('form-container').style.display = 'none';

    // Show the next form
    document.getElementById('next-form-container').style.display = 'block';
});

function nextStep(step) {
    var currentStep = document.querySelector('.step:not([style*="display: none"])');
    var nextStep = document.getElementById('step-' + step);
    if (currentStep && nextStep) {
        currentStep.style.display = 'none';
        nextStep.style.display = 'block';
        updateProgress(step);
    }
}

function prevStep(step) {
    var currentStep = document.querySelector('.step:not([style*="display: none"])');
    var prevStep = document.getElementById('step-' + step);
    if (currentStep && prevStep) {
        currentStep.style.display = 'none';
        prevStep.style.display = 'block';
        updateProgress(step);
    }
}

function updateProgress(step) {
    var progress = document.getElementById('progress');
    var totalSteps = 7; // Total number of steps
    var percentage = (step / totalSteps) * 100;
    progress.style.width = percentage + '%';
    progress.textContent = Math.round(percentage) + '%';
}

function sendOtp() {
    alert('OTP sent to your mobile number linked with Aadhar number');
}

function sendMobOtp() {
    alert('OTP sent to your mobile number');
}

function handleSignup(event) {
    event.preventDefault();
    // Perform any necessary validation or processing here
    alert('Signup successful!');
    window.location.href = 'index.html';
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to the server

    // You can add your validation or login logic here
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username && password) {
        // Assuming login is successful, redirect to the home page
        window.location.href = "home.html"; // Replace with the actual home page URL
    } else {
        alert("Please enter both username and password.");
    }
});
