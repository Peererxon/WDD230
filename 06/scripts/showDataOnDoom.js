import { getCharacter } from "./fetchData.js";

function loadList(data) {
  const listElement = document.getElementById("list");
  const dataModified = data.results.map((el) => {
    return {
      ...el,
      race: el.species,
      nombre: el.name,
      url: el.image,
      location: el.location.name,
      origin: el.origin.name,
    };
  });
  dataModified.forEach(({ url, nombre, race, status, location, origin }) => {
    const div = document.createElement("div");
    makeHeadCard(div, url, nombre, race, status);
    //body
    const body = makeBody(status, race, nombre, location, origin);
    div.append(body);
    listElement.append(div);
  });
}

function makeHeadCard(div, ...rest) {
  console.log(rest);
  const [url, nombre] = rest;
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "imageWrapper";
  //img
  const image = document.createElement("img");
  image.setAttribute("src", url);
  image.setAttribute("alt", nombre);
  image.setAttribute("loading", "lazy");
  //
  imageWrapper.append(image);
  div.append(imageWrapper);
}

function makeBody(status, race, nombre, location, origin) {
  const bodyCard = document.createElement("div");
  bodyCard.className = "characters__body";
  const empyDiv = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = nombre;

  empyDiv.append(h2);
  bodyCard.append(empyDiv);

  const statusElement = document.createElement("p");
  statusElement.classList = "status";
  const circle = document.createElement("span");
  circle.classList = "status__circle status__circle--red";

  const raceElement = document.createElement("span");
  raceElement.textContent = race;

  const statusCharacterElement = document.createElement("span");
  statusCharacterElement.textContent = " - " + status;

  const lastLocation = document.createElement("div");
  lastLocation.className = "grayText";
  lastLocation.textContent = "Last known location:";

  const locationValueElement = document.createElement("p");
  locationValueElement.textContent = location;

  const dimensionElement = document.createElement("div");
  dimensionElement.className = "grayText";
  dimensionElement.textContent = "Dimension origin:";

  const dimensionValue = document.createElement("p");
  dimensionValue.textContent = origin;

  statusElement.append(circle);
  statusElement.append(raceElement);
  statusElement.append(statusCharacterElement);

  bodyCard.append(statusElement);
  bodyCard.append(lastLocation);
  bodyCard.append(locationValueElement);
  bodyCard.append(dimensionElement);
  bodyCard.append(dimensionValue);

  return bodyCard;
}

async function main() {
  const pageNumber = Math.round(Math.random() * 35);
  console.log(
    "🚀 ~ file: showDataOnDoom.js ~ line 91 ~ main ~ pageNumber",
    pageNumber
  );

  const data = await getCharacter(pageNumber);
  loadList(data);
}

document.getElementById("load").addEventListener("click", main);
