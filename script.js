const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--deacrease');
const counterValueEl = document.querySelector('.counter__value');

decreaseButtonEl.addEventListener('click', function() {

    const currentValue = counterValueEl.textContent;

    const currentValueAsNumber = +currentValue;

    const newValue = currentValueAsNumber -1;

    counterValueEl.textContent = newValue;
})

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


