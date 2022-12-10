import { getSubmittedDrinksCounter } from "./localstorage.js";

const sumittedCounter = document.querySelector(".submitted_drinks_counter");

const sumittedDrinksCounter = getSubmittedDrinksCounter();

sumittedCounter.textContent = sumittedDrinksCounter;
