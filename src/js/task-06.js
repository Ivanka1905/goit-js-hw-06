const checkValid = document.querySelector('#validation-input');
console.log(checkValid);

checkValid.addEventListener('blur', changeColor);
function changeColor(event) {
    checkValid.classList.add('invalid')
    
    if (event.target.value.length === Number(checkValid.dataset.length)) {
        checkValid.classList.replace('invalid', 'valid');
    } else {
        checkValid.classList.remove('valid')
    }
}

// done