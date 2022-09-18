function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector("button");
const text = document.querySelector(".color");
function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
}
button.addEventListener("click", changeColor);
