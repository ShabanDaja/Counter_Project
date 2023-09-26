const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--deacrease');
const counterValueEl = document.querySelector('.counter__value');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title');

resetButtonEl.addEventListener('click', function() {

   counterValueEl.textContent = 0;

   counterEl.classList.remove('counter--limit');

   counterTitleEl.textContent = 'Counter';

   increaseButtonEl.disabled = false;
   decreaseButtonEl.disabled = false;

    resetButtonEl.blur();
});

decreaseButtonEl.addEventListener('click', function() {

    const currentValue = counterValueEl.textContent;

    const currentValueAsNumber = +currentValue;

    let newValue = currentValueAsNumber - 1;

    if (newValue < 0) {
        newValue = 0;
    }

    counterValueEl.textContent = newValue;

    decreaseButtonEl.blur();
});

function incrementCounter() {
    // get current value
    const currentValue = counterValueEl.textContent;

   // convert value to number type
    const currentValueAsNumber = +currentValue;

    // increment by 1
    let newValue = currentValueAsNumber +1;

    if (newValue > 5) {
        newValue = 5;

        counterEl.classList.add('counter--limit');

        counterTitleEl.innerHTML = 'Limit! Buy <b>pro</b> for > 5';

        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
    };

    // set counter elemnet with new value
    counterValueEl.textContent = newValue;

    increaseButtonEl.blur();
};

increaseButtonEl.addEventListener('click', incrementCounter);
document.addEventListener('keydown', incrementCounter);

