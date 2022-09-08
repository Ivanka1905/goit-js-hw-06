const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // console.log('up');
    const formData = new FormData(event.currentTarget);
        console.log(formData);

    formData.forEach((value, name) => {
        console.log('name:', name);
        console.log('value:', value);
    })
    // form.textContent = '';
}
// function onClearOutput() {
//     form.output.textContent = ' ';
// }