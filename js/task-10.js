function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const parentDiv = document.querySelector("#boxes");
const items = [];
let amount = 0;
function createBoxes(amount) {
  for (let i = 0, size = 30; i < amount; i += 1, size += 10) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    items.push(div);
  }
  return parentDiv.append(...items);
}
function givesAmountOfNumbers() {
  amount = +input.value;
  // return amount;
}
function createElements() {
  createBoxes(amount);
}
function deleteAllElements() {
  parentDiv.innerHTML = "";
  input.value = "";
  amount = 0;
}
input.addEventListener("input", givesAmountOfNumbers);
createBtn.addEventListener("click", createElements);
destroyBtn.addEventListener("click", deleteAllElements);
