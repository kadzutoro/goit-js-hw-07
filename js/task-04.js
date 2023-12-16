const formInput = document.querySelector(".login-form")

formInput.addEventListener('submit',formSubmit)

function formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email.trim() === "" || password.trim() === "") {
        return alert('All form fields must be filled in')
    }
    const userData = {
        email,
        password
    }
    console.log (userData);
    form.reset();
}




