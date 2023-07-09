import { auth } from './firebase.js';

document.addEventListener('DOMContentLoaded', function () {
  const usernameInput = document.getElementById('username');
  const passwordLabel = document.getElementById('passwordLabel');
  const passwordInput = document.getElementById('password');

  usernameInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      passwordLabel.classList.remove('hidden');
      passwordInput.classList.remove('hidden');
		passwordInput.focus();
		return
    }
  });

  passwordInput.addEventListener('keydown', function (e) {
	  console.log(e.key)
	  if (e.key === 'Enter') {
		e.preventDefault()
      const username = usernameInput.value;
      const password = passwordInput.value;
      let userEmail = username + '@duckos.org';

      auth
        .createUserWithEmailAndPassword(userEmail, password)
        .then(function (user) {
          console.log(user);
          window.location.href = 'main.html';
        })
        .catch(function (error) {
          console.log(error);
          alert('Error: ' + error.message);
        });
    }
  });
});

