function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
// btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const newDiv = document.createElement("div") ;
  // return newDiv * amount;
  boxes.insertAdjacentHTML("beforeend", newDiv)
// console.log(newDiv * amount);
}
console.log(boxes);