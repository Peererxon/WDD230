import openModal from "./handleModal.js";

const form = document.querySelector("#fresh-form");

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
