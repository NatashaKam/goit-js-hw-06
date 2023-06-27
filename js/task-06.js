const inputEl = document.querySelector("#validation-input");

const onFieldInput = ({ target }) => {
  const { value, dataset, classList } = target;
  if (value.length === Number(dataset.length)) {
    classList.add("valid");
    classList.remove("invalid");
    return;
  } else {
    classList.add("invalid");
    return;
  }
};

inputEl.addEventListener("blur", onFieldInput);
