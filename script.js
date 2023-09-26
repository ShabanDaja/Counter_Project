const increaseButtonEl = document.querySelector('.counter__button--increase');
const counterValueEl = document.querySelector('.counter__value');

increaseButtonEl.addEventListener('click', function() {
    // get current value
    const currentValue = counterValueEl.textContent;

   // convert value to number type
    const currentValueAsNumber = +currentValue;

    // increment by 1
    const newValue = currentValueAsNumber +1;

    // set counter elemnet with new value
    counterValueEl.textContent = newValue;
});
