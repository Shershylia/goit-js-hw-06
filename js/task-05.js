const userName = document.querySelector("#name-input");
const anonym = document.querySelector("#name-output");
const anonymo = document.querySelector("#name-output").value;



userName.addEventListener("input", (eve) => {
    anonym.textContent = eve.currentTarget.value;
if (userName.value === "") {
   anonym.textContent = "Anonymous";
}

})