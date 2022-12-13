const menu = document.querySelector("#menu");

const close = document.querySelector("#close");

const hamburger = document.querySelector("#hamburger");

const container = document.querySelector(".container");

close.addEventListener("click", () => {
  menu.classList.add("none");
  container.classList.remove("off");
});

hamburger.addEventListener("click", () => {
  menu.classList.remove("none");
  container.classList.add("off");
});
