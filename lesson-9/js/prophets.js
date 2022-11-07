const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let dateOfBirthPTag = document.createElement("p");
  let placeOfBirthPTag = document.createElement("p");
  let deathPTag = document.createElement("p");
  let numberOfChildren = document.createElement("p");
  let portrait = document.createElement("img");

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  dateOfBirthPTag.textContent = `Date of birth: ${prophet.birthdate}`;

  placeOfBirthPTag.textContent = `Place of birth: ${prophet.birthplace}`;

  deathPTag.textContent = `Death: ${prophet.death}`;

  numberOfChildren.textContent = `Number of children: ${prophet.numofchildren}`;

  // Build president order

  const presidentOrder = returnPresidentOrder(prophet.order);

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute(
    "alt",
    `Portait of  ${prophet.name} ${prophet.lastname} ${presidentOrder}`
  );
  portrait.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(dateOfBirthPTag);
  card.appendChild(deathPTag);
  card.appendChild(placeOfBirthPTag);
  card.appendChild(numberOfChildren);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}

function returnPresidentOrder(order) {
  if (order === 1) {
    return `- ${order}st Latter-day President`;
  }
  if (order === 2) {
    return `- ${order}nd Latter-day President`;
  }
  if (order === 3) {
    return `- ${order}rd Latter-day President`;
  }
  if (order === 11) {
    return `- ${order}st Latter-day President`;
  }
  return `- ${order}th Latter-day President`;
}
