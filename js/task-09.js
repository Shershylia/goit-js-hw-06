const widgetVall = document.querySelector(".widget");
const spanVal = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", handleClick);


function getRandomHexColor(event) {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClick(event) {
  let colorRandom = getRandomHexColor();
  spanVal.textContent = colorRandom;
  document.body.style.background = colorRandom;

  console.log(colorRandom);
}
