const findList = document.querySelectorAll("#categories .item");
// const countItems = [...findList];
// console.log(findList);

console.log(`Number of categories: ${findList.length}`);
   
findList.forEach((elem, item) => {
    const title = elem.firstElementChild;
    console.log("");
    console.log(`Category: ${title.textContent}`);
    const liValue = elem.lastElementChild;
    const allElements = liValue.childElementCount;
    console.log(`Element: ${allElements}`);
});


