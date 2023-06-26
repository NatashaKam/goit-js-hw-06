const categoriesList = document.querySelector("#categories");
const listItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((item) => {
  const titleText = item.querySelector("h2");
  const listEl = item.querySelectorAll("li");
  console.log(`Category: ${titleText.textContent}`);
  console.log(`Elements: ${listEl.length}`);
});
