const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onFieldInput = ({ target }) => {
  outputEl.textContent = target.value.trim() || "Anonymous";
  // console.log(inputEl);
  // console.log(outputEl);
};

inputEl.addEventListener("input", onFieldInput);
