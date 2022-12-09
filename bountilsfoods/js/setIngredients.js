import fetchFruits from "./fetchFruits.js";

const setIngredients = async () => {
  const fruits = await fetchFruits();
  console.log(
    "🚀 ~ file: setIngredients.js:5 ~ setIngredients ~ fruits",
    fruits
  );

  fruits.forEach((fruit) => {
    const ingredients1 = document.querySelector("#ingredient1");

    const option = document.createElement("option");

    option.setAttribute("value", fruit.name);

    option.textContent = fruit.name;

    ingredients1.append(option);
  });

  fruits.forEach((fruit) => {
    const ingredients1 = document.querySelector("#ingredient2");

    const option = document.createElement("option");

    option.setAttribute("value", fruit.name);

    option.textContent = fruit.name;

    ingredients1.append(option);
  });

  fruits.forEach((fruit) => {
    const ingredients1 = document.querySelector("#ingredient3");

    const option = document.createElement("option");

    option.setAttribute("value", fruit.name);

    option.textContent = fruit.name;

    ingredients1.append(option);
  });
};

setIngredients();
