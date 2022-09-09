const counterValue = document.querySelector('#value');
const btnDecrementElement = document.querySelector('button[data-action="decrement"]');
const btnIncrementElement = document.querySelector('button[data-action="increment"]');

let value = 0;

btnDecrementElement.addEventListener('click', () => {
    value -= 1;
    counterValue.innerHTML = value;
});
btnIncrementElement.addEventListener('click', () => {
    value += 1;
    counterValue.innerHTML = value;
});

// done