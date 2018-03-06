const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const symbols = '`~!@#$%^&*()-_=+,<.>/?;:[{]}';
const charNum = document.querySelector('.form__characters');
const nums = document.querySelector('.numbers');
const syms = document.querySelector('.symbols');
const passwordDiv = document.querySelector('.password');
const btn = document.querySelector('.form__button');

btn.addEventListener('click', (e) => {
	let charStr = letters;

	nums.checked ? chars += numbers : '';
	syms.checked ? chars += symbols : '';
	passwordDiv.textContent = generatePassword(charNum.value, chars);

	e.preventDefault();
});

function generatePassword(num, chars) {
	let password = '';

	for (let i = 0; i <= num; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return password;
}






