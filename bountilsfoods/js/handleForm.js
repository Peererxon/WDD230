import openModal from "./handleModal.js";
import data from "./fetchFruits.js";

const form = document.querySelector("#fresh-form");

const getTotalCarbohydrates = (ingredient1, ingredient2, ingredient3) => {
  const fruits = data.filter((fruit) => {
    return (
      fruit.name === ingredient1 ||
      fruit.name === ingredient2 ||
      fruit.name === ingredient3
    );
  });

  const totalCalories =
    fruits[0].nutritions.carbohydrates +
    fruits[1].nutritions.carbohydrates +
    fruits[2].nutritions.carbohydrates;

  return totalCalories;
};

const getTotalProtein = (ingredient1, ingredient2, ingredient3) => {
  const fruits = data.filter((fruit) => {
    return (
      fruit.name === ingredient1 ||
      fruit.name === ingredient2 ||
      fruit.name === ingredient3
    );
  });

  const totalProtein =
    fruits[0].nutritions.protein +
    fruits[1].nutritions.protein +
    fruits[2].nutritions.protein;

  return totalProtein;
};

const getTotalfat = (ingredient1, ingredient2, ingredient3) => {
  const fruits = data.filter((fruit) => {
    return (
      fruit.name === ingredient1 ||
      fruit.name === ingredient2 ||
      fruit.name === ingredient3
    );
  });

  const totalFat =
    fruits[0].nutritions.fat +
    fruits[1].nutritions.fat +
    fruits[2].nutritions.fat;

  return totalFat;
};

const getTotalCalories = (ingredient1, ingredient2, ingredient3) => {
  const fruits = data.filter((fruit) => {
    return (
      fruit.name === ingredient1 ||
      fruit.name === ingredient2 ||
      fruit.name === ingredient3
    );
  });

  const totalCalories =
    fruits[0].nutritions.calories +
    fruits[1].nutritions.calories +
    fruits[2].nutritions.calories;

  return totalCalories;
};

const getTotalSugar = (ingredient1, ingredient2, ingredient3) => {
  const fruits = data.filter((fruit) => {
    return (
      fruit.name === ingredient1 ||
      fruit.name === ingredient2 ||
      fruit.name === ingredient3
    );
  });

  const totalSugar =
    fruits[0].nutritions.sugar +
    fruits[1].nutritions.sugar +
    fruits[2].nutritions.sugar;

  return totalSugar;
};

const setModalContent = ({
  firstName,
  email,
  cellPhoneNumber,
  ingredient1,
  ingredient2,
  ingredient3,
  specialInstructions,
}) => {
  // Get inputs value
  document.querySelector("#firstNameModal").textContent = firstName;

  document.querySelector("#emailModal").textContent = email;

  document.querySelector("#cellPhoneNumberModal").textContent = cellPhoneNumber;

  document.querySelector("#ingredient1Modal").textContent = ingredient1;

  document.querySelector("#ingredient2Modal").textContent = ingredient2;

  document.querySelector("#ingredient3Modal").textContent = ingredient3;

  document.querySelector("#specialInstructionsModal").textContent =
    specialInstructions;

  document.querySelector("#orderDateModal").textContent =
    new Date().toDateString();

  const totalCarbohydrates = getTotalCarbohydrates(
    ingredient1,
    ingredient2,
    ingredient3
  );

  const totalProtein = getTotalProtein(ingredient1, ingredient2, ingredient3);

  const totalFat = getTotalfat(ingredient1, ingredient2, ingredient3);

  const totalSugar = getTotalSugar(ingredient1, ingredient2, ingredient3);

  const totalCalories = getTotalCalories(ingredient1, ingredient2, ingredient3);

  document.querySelector("#totalcarbohydratesModal").textContent =
    totalCarbohydrates;

  document.querySelector("#totalProteinModal").textContent = totalProtein;

  document.querySelector("#totalFatModal").textContent = totalFat;

  document.querySelector("#totalSugarModal").textContent = totalSugar;

  document.querySelector("#totalCaloriesModal").textContent = totalCalories;

  openModal();
};
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get inputs value
  const firstName = document.querySelector("#firstName").value;

  const email = document.querySelector("#email").value;

  const cellPhoneNumber = document.querySelector("#cellPhoneNumber").value;

  const ingredient1 = document.querySelector("#ingredient1").value;

  const ingredient2 = document.querySelector("#ingredient2").value;

  const ingredient3 = document.querySelector("#ingredient3").value;

  const specialInstructions = document.querySelector(
    "#specialInstructions"
  ).value;

  setModalContent({
    firstName,
    email,
    cellPhoneNumber,
    ingredient1,
    ingredient2,
    ingredient3,
    specialInstructions,
  });
});
