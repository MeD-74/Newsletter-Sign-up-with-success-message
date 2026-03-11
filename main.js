let card = document.querySelector(".card");
let successMsg = document.querySelector("#success-msg");
let form = document.querySelector("#form");
let formError = document.querySelector(".form-control");
let errorMsg = document.querySelector(".error-msg");
let input = document.querySelector("#email");
let changeMail = document.querySelector("#user-email");
let dismiss = document.querySelector("#dismiss-btn");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let emailValue = input.value.trim();
  if (emailValue === "") {
    formError.classList.add("error");
    errorMsg.innerText = "Email required";
  } else if (!isValidEmail(emailValue)) {
    formError.classList.add("error");
    errorMsg.innerText = "Valid email required";
  } else {
    formError.classList.remove("error");
    card.classList.add("hidden");
    successMsg.classList.remove("hidden");
    changeMail.innerText = emailValue;
  }
});
dismiss.addEventListener("click", function (e) {
  card.classList.remove("hidden");
  successMsg.classList.add("hidden");
});
