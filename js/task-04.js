let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const totalValue = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  totalValue.textContent = counterValue;
  console.log(totalValue);
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  totalValue.textContent = counterValue;
  console.log(totalValue);
});

console.log(decrementBtn);
console.log(incrementBtn);
