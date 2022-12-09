import openModal from "./handleModal.js";

const form = document.querySelector("#fresh-form");

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

  openModal();
});
