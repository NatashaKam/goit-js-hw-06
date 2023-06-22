const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  outputEl.textContent = inputEl.value.trim() || "Anonymous";
  console.log(inputEl);
  console.log(outputEl);
});
