function validateForm() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.length < 6) {
        alert('Username must be at least 6 characters long.');
        event.preventDefault();
    }

    if (password.length < 5) {
        alert('Password must be at least 5 characters long.');
        event.preventDefault();
    }
}