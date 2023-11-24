const idInput = document.getElementById('validation-input');
const dataInput = document.querySelector('input[data-length="6"]');

idInput.addEventListener("blur", handleInput);



function handleInput(event) {
    const lengInput = event.currentTarget.value.length;
    const dataInput = Number(idInput.dataset.length);
   

    if (lengInput === dataInput) {
        idInput.classList.add("valid");
        idInput.classList.remove("invalid")
    } else {
        idInput.classList.add("invalid");
        idInput.classList.remove("valid");
}
console.log(event.currentTarget.value);
};









