// Placeholder for JavaScript functionality
// You can add interactivity to the page with these scripts

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter form');
    const emailInput = form.querySelector('input[type="email"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailValue = emailInput.value;

        if (validateEmail(emailValue)) {
            alert('Welcome to the community! You have successfully joined.');
            form.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
