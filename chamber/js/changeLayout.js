const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const companiesContainerSelector = document.querySelector(
  "div.companies-container"
);

function changeToListLayout(container) {
  container.classList.add("list");
  container.classList.remove("grid");
}
function changeToGridLayout(container) {
  container.classList.add("grid");
  container.classList.remove("list");
}

listbutton.addEventListener("click", () => {
  changeToListLayout(companiesContainerSelector);
});

gridbutton.addEventListener("click", () => {
  changeToGridLayout(companiesContainerSelector);
});
