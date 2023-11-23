const findList = document.querySelectorAll("#categories .item");
// const countItems = [...findList];
// console.log(findList);

console.log(`Number of categories: ${findList.length}`);
   
findList.forEach((elem, item) => {
    const title = elem.querySelector("h2");
    console.log("");
    console.log(title.textContent);
    const liValue = elem.querySelectorAll("li");
    console.log(`Element: ${liValue.length}`)
});


