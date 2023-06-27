const formEl = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const userInfo = {
    email: email.value,
    password: password.value,
  };

  // console.log(`Email: ${email.value}, Password: ${password.value}`);
  console.log(userInfo);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", onFormSubmit);
