const list = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const items = [];
ingredients.forEach(function (el) {
  const li = document.createElement(`li`);
  li.textContent = el;
  li.classList.add("item");
  return items.push(li);
});

list.append(...items);
