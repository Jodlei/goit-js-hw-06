const input = document.querySelector("#name-input");
const text = document.querySelector("#name-output");
text.textContent = "Anonymous";

function setText() {
  text.textContent = input.value;
}
input.addEventListener("input", setText);
