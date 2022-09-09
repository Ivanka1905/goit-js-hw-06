const elem = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output')
};
const firstText = elem.nameLabel.textContent;
elem.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(event.currentTarget.value);
    elem.nameLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === '') {
        elem.nameLabel.textContent = firstText;
    }
}

// done