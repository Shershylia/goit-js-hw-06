// const plusBtn =  document.getElementsByTagName("button");

const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMin = document.querySelector('button[data-action="decrement"]');
const allValue = document.querySelector("#value");

let counterValue = 0;


const handleclick = event => {
    counterValue += 1;
console.log(allValue.textContent = counterValue);
}

const handleclickMin = event => {
    counterValue -= 1;
console.log(allValue.textContent = counterValue);
}


btnPlus.addEventListener("click", handleclick);
btnMin.addEventListener("click", handleclickMin);

