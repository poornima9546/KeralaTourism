let email = document.getElementById('email');
let password = document.getElementById('password');
let btn1 = document.getElementById('btn1'); // Corrected variable name

const isEmail = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
const isStrength = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d)[A-Za-z\d]{8,}$/

btn1.addEventListener('click', () => {
    if (email.value.trim() === '') {
        alert('Please enter email');
    } else if (password.value.trim() === '') {
        alert('Please enter password');
    } else if (!isEmail.test(email.value.trim())) {
        alert('Email must be alphanumeric and should include special character');
    } else if (!isStrength.test(password.value.trim())) {
        alert('Password must have at least 1 uppercase, 1 lowercase, 2 digits, and be at least 8 characters long');
    } else {
        alert('Success');
    }
});