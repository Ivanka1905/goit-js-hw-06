// const form = document.querySelector('.login-form');
// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//         console.log(formData);
    
//     formData.forEach((value, name) => {
//         console.log('властивість:', name);
//         console.log('значення властивості:', value);
//         if (value === '') {
//             alert("Всі поля мають бути заповнені!");
//         }
//         form.reset();
//     });
// }
const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert ("Всі поля мають бути заповнені!");
  }
    const object = {
        email: email.value,
        password: password.value
  }
  console.log(object);
  event.currentTarget.reset();
}

// done