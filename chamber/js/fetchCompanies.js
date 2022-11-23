const fetchCompanies = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/Peererxon/WDD230/main/chamber/mock/data.json"
  );

  const { companies } = await response.json();

  return companies;
};

export default fetchCompanies;
