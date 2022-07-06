const dropdown = document.querySelector('.dropdown');
const toggleButton = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const skin = document.querySelector('.skin');

toggleButton.addEventListener('click', function () {
	menu.classList.toggle('on');
});

toggleButton.addEventListener('blur', function () {
	menu.classList.remove('on');
});

options.forEach(function (item) {
	item.addEventListener('click', function (e) {
		const value = e.currentTarget.innerText;
		toggleButton.innerText = value;
		toggleButton.classList.add('selected');
	});
});
