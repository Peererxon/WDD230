import setEventListeners from "./changeLayout.js";
import setLazyLoad from "./setLazyLoad.js";

const companiesContainer = document.querySelector("div.companies-container");

const displayCompaniesCard = (companies) => {
  companies.forEach((company) => {
    // Create elements to add to the document
    const card = document.createElement("div");
    const companyLogo = document.createElement("img");
    const companyName = document.createElement("h2");
    const phoneNumber = document.createElement("p");
    const category = document.createElement("p");
    const address = document.createElement("p");
    const website = document.createElement("a");
    const linkToOtherPage = document.createElement("img");
    // Set content
    companyName.textContent = company.name;
    phoneNumber.textContent = company.phoneNumber;
    category.textContent = company.category;
    address.textContent = company.address;
    website.textContent = "website";
    // Build attributes
    card.classList.add("company-card-grid-layout");
    card.classList.add("company-card");
    companiesContainer.classList.add("grid");
    companyLogo.setAttribute("src", "../images/placeholder.png");
    companyLogo.setAttribute("data-src", company.img);
    companyLogo.setAttribute("alt", `${company.name} logo`);
    companyName.classList.add("company-name");
    website.setAttribute("href", company.url);
    website.setAttribute("target", "__blank");
    linkToOtherPage.setAttribute("src", "../images/link.svg");
    linkToOtherPage.setAttribute("alt", "link to other page");
    // Add/append elements
    card.appendChild(companyLogo);
    card.appendChild(companyName);
    card.appendChild(category);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    website.appendChild(linkToOtherPage);
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
    setLazyLoad();
  });
