const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

const onFieldInput = ({ target }) => {
  spanEl.style.fontSize = `${target.value}px`;
  // console.log(inputEl);
  // console.log(spanEl);
};

inputEl.addEventListener("input", onFieldInput);
