// const plusBtn =  document.getElementsByTagName("button");

const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMin = document.querySelector('button[data-action="decrement"]');
const allValue = document.querySelector("#value");



let counterValue = {
    plus: 0,
    min: 0,
};


const handleclick = event => {
    counterValue.plus += 1;
allValue.textContent = counterValue.plus;
}

const handleclickMin = event => {
    counterValue.min -= 1;
allValue.textContent = counterValue.min;
}


btnPlus.addEventListener("click", handleclick);
btnMin.addEventListener("click", handleclickMin);

