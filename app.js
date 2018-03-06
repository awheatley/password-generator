const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const symbols = '`~!@#$%^&*()-_=+,<.>/?;:[{]}';
const charNum = document.querySelector('.-characters');
const nums = document.querySelector('.-numbers');
const syms = document.querySelector('.-symbols');
const passwordDiv = document.querySelector('.password');
const btn = document.querySelector('.form__button');
const checkLabel = document.querySelectorAll('.form__label.-checkbox');
const charCount = document.querySelector('.form__characters');

function generatePassword(num, chars) {
	let password = '';

	for (let i = 0; i <= num; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return password;
}

function toggleSelected(el) {
	el.classList.contains('-selected') ?
	el.classList.remove('-selected') :
	el.classList.add('-selected');
}

function updateSliderVal(value) {
	charCount.textContent = value;
}

btn.addEventListener('click', (e) => {
	let charStr = letters;

	nums.checked ? charStr += numbers : '';
	syms.checked ? charStr += symbols : '';
	passwordDiv.textContent = generatePassword(charNum.value, charStr);

	e.preventDefault();
});

checkLabel.forEach((el) => {
	el.addEventListener('click', () => {
		toggleSelected(el);
	})
});

charNum.addEventListener('input', () => {
	let val = charNum.value;

	updateSliderVal(val);
});
