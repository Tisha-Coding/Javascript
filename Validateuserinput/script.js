document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let message = document.getElementById('message');

    if (email.includes('@') && password.length <= 8) {
        message.textContent = "Valid email and password!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid email or password!";
        message.style.color = "red";
    }
});
