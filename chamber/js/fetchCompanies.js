const fetchCompanies = async () => {
  const response = await fetch("http://localhost:3000/companies");

  const companies = await response.json();

  return companies;
};

export default fetchCompanies;
