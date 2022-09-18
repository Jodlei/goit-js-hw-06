const btnIncrement = document.querySelector('button[data-action="increment');

const btnDecrement = document.querySelector('button[data-action="decrement');

const value = document.querySelector("#value");
const numValue = value.textContent;
let count = Number(numValue);
console.log(count);

const increment = () => {
  count += 1;
  value.textContent = count;
};

const decrement = () => {
  count -= 1;
  value.textContent -= 1;
};

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
