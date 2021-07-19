// Collect data from inputs

var user = document.getElementById('name');
var email = document.getElementById('email');
let successMsg = document.getElementById('successMsg');

// Save user data on localStorage
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {

    if (user.value != "" && email.value != "") {
        successMsg.classList.toggle('hidden');

        localStorage.setItem('user', user.value);
        localStorage.setItem('email', email.value);
    }
})