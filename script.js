function clicker(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value ;
    let password = document.getElementById('pass').value ;
    let gender = document.getElementById('gender').value ;
    let cpassword = document.getElementById('cpass').value ;
    let address = document.getElementById('address').value ;
    let phone = document.getElementById('pnumber').value ;
    if (name === '') {
        alert('Please enter your name.');
    } else if (name.length < 4) {
        alert('Name should be at least 4 characters long.');
    } else if (email === '') {
        alert('Please enter your email.');
    } else if (!email.includes('@')) {
        alert('Invalid email format.');
    } else if (password === '') {
        alert('Please enter your password.');
    } else if (password.length < 8) {
        alert('Password should be at least 8 characters long.');
    } else if (!password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/) || !password.match(/[^a-zA-Z0-9]/)) {
        alert('Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.');
    } else if (gender === '') {
        alert('Please specify your gender.');
    } else if (cpassword === '') {
        alert('Please confirm your password.');
    } else if (cpassword !== password) {
        alert('Passwords do not match.');
    } else if (address === '') {
        alert('Please enter your address.');
    } else if (phone === '') {
        alert('Please enter your phone number.');
    } else {
        alert('Registration successful!');
    }
}