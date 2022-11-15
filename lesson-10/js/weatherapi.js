// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const spanIconSrc = document.querySelector("#icon-src");

const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=9292920acb5554113149ccdebbf09d8b`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = capitalize(weatherData.weather[0].description);
  console.log(
    "🚀 ~ file: weatherapi.js ~ line 33 ~ displayResults ~ desc",
    desc
  );

  spanIconSrc.textContent = iconsrc;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}

function capitalize(word) {
  const words = word.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}
