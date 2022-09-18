const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Потрібно заповнити всі поля!");
  }
  console.log({ Login: email.value, password: password.value });
  event.currentTarget.reset();
}
form.addEventListener("submit", handleSubmit);
