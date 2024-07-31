const formEl = document.querySelector('.su__form');
const suEl = document.querySelector('.su');
const msgEl = document.querySelector('.msg');
const msgBtnEl = document.querySelector('.msg__button');
const input = document.querySelector('.su__input');

suEl.style.display = 'flex';
msgEl.style.display = 'none';

formEl.addEventListener('submit', (ev) => {
	ev.preventDefault();

	if (!input.value.trim() || validateEmail(input.value))
		toggleSections();
	else if (!formEl.classList.contains('su__form--alert'))
		formEl.classList.toggle('su__form--alert');
});

input.addEventListener('input', () => {
	if (formEl.classList.contains('su__form--alert'))
		formEl.classList.toggle('su__form--alert');
});

msgBtnEl.addEventListener('click', toggleSections);

function toggleSections() {
	suEl.style.display = suEl.style.display === 'none' ? 'flex' : 'none';
	msgEl.style.display = msgEl.style.display === 'none' ? 'flex' : 'none';
}
function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
