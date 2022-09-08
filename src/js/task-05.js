const elem = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output')
};

// elem.input.addEventListener('focus', onInputFocus);

elem.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(event.currentTarget.value);
    elem.nameLabel.textContent = event.currentTarget.value;
}