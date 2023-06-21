const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const addItems = (ingredient) => {
  const listItems = document.createElement("li");
  listItems.textContent = ingredient;
  listItems.classList.add("item");
  return listItems;
};

const ingredientsEl = ingredients.map(addItems);

ingredientsList.append(...ingredientsEl);

console.log(ingredientsList);
