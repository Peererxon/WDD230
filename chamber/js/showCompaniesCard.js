import setEventListeners from "./changeLayout.js";

const companiesContainer = document.querySelector("div.companies-container");

const displayCompaniesCard = (companies) => {
  companies.forEach((company) => {
    // Create elements to add to the document
    const card = document.createElement("div");
    const companyLogo = document.createElement("img");
    const companyName = document.createElement("p");
    const category = document.createElement("p");
    const address = document.createElement("p");
    const website = document.createElement("a");
    // Set content
    companyName.textContent = company.name;
    category.textContent = company.category;
    address.textContent = company.address;
    website.textContent = company.url;
    // Build attributes
    card.classList.add("company-card-grid-layout");
    card.classList.add("company-card");
    companiesContainer.classList.add("grid");
    companyLogo.setAttribute("src", company.img);
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
  });
};

fetch(
  "https://raw.githubusercontent.com/Peererxon/WDD230/main/chamber/mock/data.json"
)
  .then((response) => response.json())
  .then(({ companies }) => {
    displayCompaniesCard(companies);
    setEventListeners();
  });
