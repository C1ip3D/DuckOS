// // api endpoint shit lolz
// const url = 'https://duckosauth.000webhostapp.com/login.php';

// // put the text box id values in the ""
// const username = document.getElementById("").value;
// const password = document.getElementById("").value;

// // dont mess with this
// const queryString = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
// fetch(`${url}?${queryString}`)
//   .then(response => response.text())
//   .then(result => {
//     // Process the result
//     console.log(result);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
//   });

import { auth } from './firebase.js';

auth.onAuthStateChanged(function (user) {
  if (user) {
    window.location.href = 'main.html';
  }
});

let username = document.getElementById('username')
let passwordLabel = document.getElementById('passwordLabel')
let password = document.getElementById('password');

document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.querySelector('.login');
  const legacyButton = document.querySelector('.legacy');
  const backupButton = document.querySelector('.backup');

  usernameInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      passwordLabel.classList.remove('hidden');
      password.classList.remove('hidden');
      submitButton.classList.remove('hidden');
      legacyButton.classList.remove('hidden');
      backupButton.classList.remove('hidden');
      passwordInput.focus();
    }
  });
});

let userEmail = username.value + '@duckos.org';

auth
  .signInWithEmailAndPassword(userEmail, password.value)
  .then(function (user) {
    console.log(user);
  })
  .catch(function (error) {
    alert('Error: ' + error.message);
  });
