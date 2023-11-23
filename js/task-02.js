const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");
const arr = [];
ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  
  liEl.classList.add("item");
  arr.push(liEl)
})


  // liEl.append(liValue);
ulEl.append(...arr);

console.log(ulEl);




