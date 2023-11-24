const formInfo = document.querySelector(".login-form");

formInfo.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (password.value === "" || email.value === "") {
        alert("Всі поля форми повинні бути заповнені");
    } else {
         const feedback = {
        email: email.value,
        password: password.value
    };
    console.log(feedback);
    event.currentTarget.reset();
    }
}