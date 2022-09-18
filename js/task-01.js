const listQuantity = document.querySelectorAll("li.item").length;
console.log("Number of categories:", listQuantity);

const categories = [...document.querySelectorAll("h2")];

for (const category of categories) {
  console.log("Category:", category.textContent);

  console.log("Elements:", category.nextElementSibling.children.length);
}
