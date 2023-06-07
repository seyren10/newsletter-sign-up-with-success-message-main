const form = document.querySelector("#form-validate");
const errorMessage = document.querySelector("#invalid-message");
const errorInput = document.querySelector("input");

const showError = () => {
  errorMessage.classList.remove("hide");
  errorMessage.classList.add("show");
  errorInput.classList.add("invalid");
};

const hideError = () => {
  errorMessage.classList.remove("show");
  errorMessage.classList.add("hide");
  errorInput.classList.remove("invalid");
};

const validateForm = (event) => {
  event.preventDefault();

  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (errorInput.value.match(emailFormat)) {
    hideError()
    event.target.submit();
  } else {
    showError()
  }
};

errorInput.addEventListener("focus", () => {
  hideError();
});

form.addEventListener("submit", validateForm);
