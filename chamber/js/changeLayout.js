// Selectors
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const companiesContainerSelector = document.querySelector(
  "div.companies-container"
);
const companiesCards = document.querySelectorAll("div.company-card");

// functions to change the companies card layout
function changeCardToListLayout(cardContainer) {
  cardContainer.forEach((element) => {
    element.classList.add("company-card-list-layout");
    element.classList.remove("company-card-grid-layout");
  });
}
function changeCardToGridLayout(cardContainer) {
  cardContainer.forEach((element) => {
    element.classList.add("company-card-grid-layout");
    element.classList.remove("company-card-list-layout");
  });
}

// Functions to change the companies container layout
function changeToListLayout(container) {
  container.classList.add("list");
  container.classList.remove("grid");
}
function changeToGridLayout(container) {
  container.classList.add("grid");
  container.classList.remove("list");
}

// Event listeners
listbutton.addEventListener("click", () => {
  changeToListLayout(companiesContainerSelector);
  changeCardToListLayout(companiesCards);
});

gridbutton.addEventListener("click", () => {
  changeToGridLayout(companiesContainerSelector);
  changeCardToGridLayout(companiesCards);
});
