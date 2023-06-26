function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const onBtnClick = (event) => {
  const newColor = getRandomHexColor();
  const docBody = document.body;
  docBody.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
  // console.log(buttonEl);
  // console.log(spanEl);
};

buttonEl.addEventListener("click", onBtnClick);
