// selecting elements for theme
const toggleBtn = document.querySelectorAll('.toggle');
const htmlElement = document.documentElement;
const toggle1 = document.querySelector('#toggle1');
const toggle2 = document.querySelector('#toggle2');
const toggle3 = document.querySelector('#toggle3');

// selecting elements for keypad
const allKeys = document.querySelectorAll('.key-num');
const inputBox = document.querySelector('input');
const delteBtn = document.querySelectorAll('.same-one');
const resultBtn = document.querySelector('.orange');

// eventListener for toggle button
toggleBtn.forEach(function (toggle) {
	toggle.addEventListener('click', changeTheme);
});

// theme changer function
function changeTheme(e) {
	if (e.target.getAttribute('id') === 'toggle2') {
		htmlElement.classList.remove('theme-dark');
		htmlElement.classList.remove('theme-third');
		toggle1.style.opacity = 0;
		toggle3.style.opacity = 0;

		htmlElement.classList.add('theme-light');
		toggle2.style.opacity = '100%';
	} else if (e.target.getAttribute('id') === 'toggle3') {
		htmlElement.classList.remove('theme-dark');
		htmlElement.classList.remove('theme-light');
		toggle1.style.opacity = 0;
		toggle2.style.opacity = 0;

		htmlElement.classList.add('theme-third');
		toggle3.style.opacity = '100%';
	} else if (e.target.getAttribute('id') === 'toggle1') {
		htmlElement.classList.remove('theme-third');
		htmlElement.classList.remove('theme-light');
		toggle3.style.opacity = 0;
		toggle2.style.opacity = 0;

		htmlElement.classList.add('theme-dark');
		toggle1.style.opacity = '100%';
	}
}

// - - - -- - -- - -- - - - - - - - -- - - -- - -- - - - - -- -- - - - - --  -- - - - ---- - - --- - - -- -

// grabing value when user click on keypad
allKeys.forEach(function (key) {
	key.addEventListener('click', function (e) {
		inputBox.value += e.target.innerText;
	});
});

// clearing input
document.addEventListener('keydown', function(e) {
   if (e.key === 'Delete') {
      clearInput();
   }
})

delteBtn.forEach(function (del) {
	del.addEventListener('click', clearInput);
});

function clearInput() {
   inputBox.value = '';
}

// calculating result
document.addEventListener('keyup', function(e) {
   if (e.key === 'Enter') {
      displayResult();
   }
});
resultBtn.addEventListener('click', displayResult);

function displayResult() {
   const inputValue = inputBox.value;

   if (inputValue !== '') {

      try {
         const calculateResult = math.evaluate(inputValue);

         inputBox.value = calculateResult;
      } catch {
         inputBox.value = 'Error';
      }

   }
}

