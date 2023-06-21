const categoriesList = document.querySelector("#categories");
const listItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((item) => {
  const itemName = item.querySelector("h2").textContent;
  const itemCount = item.querySelectorAll("li").length;
  console.log(`Category: ${itemName}`);
  console.log(`Elements: ${itemCount}`);
});
