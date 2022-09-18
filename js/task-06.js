const input = document.querySelector("#validation-input");
const limit = +input.dataset.length;
input.classList.add("invalid");

const check = () => {
  if (input.value.length === limit) {
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.replace("valid", "invalid");
  }
};

input.addEventListener("blur", check);
