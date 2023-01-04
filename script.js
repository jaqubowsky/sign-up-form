const formInput = document.querySelector(".form");
const submitButton = document.querySelector(".btn");
const invalidSpan = document.querySelector(".enable");
const emailSpan = document.querySelector(".email-enable");

submitButton.addEventListener("click", () => {
  formInput.classList.add("validate");
  if (formInput.checkValidity()) {
    formInput.classList.add("valid");
  }
});
