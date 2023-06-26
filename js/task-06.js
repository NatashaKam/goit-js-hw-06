const inputEl = document.querySelector("#validation-input");

const onFieldInput = ({ target }) => {
  target.value.length === Number(target.dataset.length)
    ? target.classList.add("valid") || target.classList.remove("invalid")
    : target.classList.add("invalid") || target.classList.remove("valid");
  // console.log(inputEl);
};

inputEl.addEventListener("blur", onFieldInput);
