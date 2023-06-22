function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const inputEl = document.querySelector(".number");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxesEl = document.querySelector("#boxes");

// createBtn.addEventListener("click", createBoxes);
// destroyBtn.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//  amount = inputEl.value
//     const box = document.createElement("div");
//     let boxSize = 30;
//     box.style.backgroundColor = getRandomHexColor();

//     boxesEl.append(box);
//     boxSize += 10;

// }

// function destroyBoxes() {
//   boxesEl.innerHTML = "";
// }

// console.log(inputEl);
