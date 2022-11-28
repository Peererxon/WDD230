import fetchCompanies from "./fetchCompanies.js";

const getCompaniesWithSilverAndGold = (companies) => {
  return companies.filter(
    ({ membership }) => membership === "Silver" || membership === "Gold"
  );
};

// returns 3 random companies
const getThreeRandomCompanies = (companies) => {
  const randomCompanies = [];

  while (randomCompanies.length < 3) {
    const randomInt = Math.floor(Math.random() * companies.length);

    const company = companies[randomInt];

    // This line is to avoid push repeated companies
    const alreadyExistsInRandomCompanies = randomCompanies.find(
      (item) => item.name === company.name
    );

    if (alreadyExistsInRandomCompanies) {
      continue;
    }

    randomCompanies.push(company);
  }
  return randomCompanies;
};

const setSpotlight = async () => {
  const companies = await fetchCompanies();

  const companiesWithSilverAndGold = getCompaniesWithSilverAndGold(companies);

  const randomCompanies = getThreeRandomCompanies(companiesWithSilverAndGold);

  const spot1 = document.querySelector("#spot1");
  const spot2 = document.querySelector("#spot2");
  const spot3 = document.querySelector("#spot3");

  const spotLink1 = document.querySelector("#spotLink1");
  const spotLink2 = document.querySelector("#spotLink2");
  const spotLink3 = document.querySelector("#spotLink3");

  const spotTitle1 = document.querySelector("#spotTitle1");
  const spotTitle2 = document.querySelector("#spotTitle2");
  const spotTitle3 = document.querySelector("#spotTitle3");

  const companyImgUrl1 = `url('${randomCompanies[0].img.replace("../", "")}')`;

  const companyImgUrl2 = `url('${randomCompanies[1].img.replace("../", "")}')`;

  const companyImgUrl3 = `url('${randomCompanies[2].img.replace("../", "")}')`;

  spot1.style.backgroundImage = companyImgUrl1;
  spot2.style.backgroundImage = companyImgUrl2;
  spot3.style.backgroundImage = companyImgUrl3;

  // Setting company name to spot title
  spotTitle1.textContent = randomCompanies[0].name;
  spotTitle2.textContent = randomCompanies[1].name;
  spotTitle3.textContent = randomCompanies[2].name;

  // Setting spot links
  spotLink1.setAttribute("href", randomCompanies[0].url);
  spotLink2.setAttribute("href", randomCompanies[1].url);
  spotLink3.setAttribute("href", randomCompanies[2].url);
};

setSpotlight();
