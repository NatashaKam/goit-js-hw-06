const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  inputEl.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.add("valid") || inputEl.classList.remove("invalid")
    : inputEl.classList.add("invalid") || inputEl.classList.remove("valid");
  console.log(inputEl);
});
