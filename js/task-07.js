const idInput = document.getElementById('font-size-control');
const idText = document.getElementById('text');

idInput.addEventListener("input", handleInput);

function handleInput(event) {
    idText.style.fontSize = event.currentTarget.value + 'px';
}