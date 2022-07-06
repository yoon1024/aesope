const dropdown = document.querySelector('.dropdown');
const toggleButton = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
// const nextButton = document.querySelector('.next-button');

// 토글버튼을 클릭 ->메뉴를 보여준다
//메뉴 max-height:0
//메뉴.show =>해지

toggleButton.addEventListener('click', function () {
	menu.classList.toggle('show');
});

toggleButton.addEventListener('blur', function () {
	menu.classList.remove('show');
});

options.forEach(function (item) {
	item.addEventListener('click', function (e) {
		console.log(e.currentTarget);
		const value = e.currentTarget.textContent.trim();
		toggleButton.textContent = value;
		toggleButton.classList.add('selected');
		// menu.classList.remove('show');

		// nextButton.removeAttribute('disabled');
	});
});
