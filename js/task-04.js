let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const currentValue = document.querySelector("#value");

const onBtnClick = ({ target }) => {
  target.dataset.action === "increment"
    ? (counterValue += 1)
    : (counterValue -= 1);
  currentValue.textContent = counterValue;
  // console.log(currentValue);
};

decrementBtn.addEventListener("click", onBtnClick);
incrementBtn.addEventListener("click", onBtnClick);

// console.log(decrementBtn);
// console.log(incrementBtn);
