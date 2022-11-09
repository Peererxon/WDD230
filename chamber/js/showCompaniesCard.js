const companiesContainer = document.querySelector("div.companies-container");

const displayCompaniesCard = () => {
  // Create elements to add to the document
  const card = document.createElement("div");

  const companyLogo = document.createElement("img");
  const companyName = document.createElement("p");
  const category = document.createElement("small");
  const address = document.createElement("p");
  const website = document.createElement("a");

  // Set content
  companyName.textContent = "COMPANY NAME";
  category.textContent = "Entertaiment";
  address.textContent = "123 Venezuela Avenue between street 20 and 19";
  website.textContent = "Website";

  // Build attributes
  card.classList.add("company-card-grid-layout");
  card.classList.add("company-card");
  companiesContainer.classList.add("grid");
  companyLogo.setAttribute("src", "../images/500x300.png");
  companyLogo.setAttribute("alt", "company");
  companyName.classList.add("company-name");
  website.setAttribute("href", "#");

  // Add/append elements
  card.appendChild(companyLogo);
  card.appendChild(companyName);
  card.appendChild(category);
  card.appendChild(address);
  card.appendChild(website);

  // Add/append the existing HTML div with the cards class with the section(card)
  companiesContainer.appendChild(card);
};

for (let index = 0; index < 9; index++) {
  console.log(`${index + 1} cards displayed`);
  displayCompaniesCard();
}
