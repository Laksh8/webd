const loginBtn = document.querySelector('#login-btn');
const loginDialog = document.querySelector('.login-dialog');
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

loginBtn.addEventListener('click', () => {
	loginDialog.classList.add('show');
});

closeBtn.addEventListener('click', () => {
	loginDialog.classList.remove('show');
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	// Validate email and password
	if (email.value === '' || password.value === '') {
		alert('Please enter both email and password');
		return;
	}
	
	// Simulate login
	alert('Login successful');
	
	// Close dialog
	loginDialog.classList.remove('show');
});
