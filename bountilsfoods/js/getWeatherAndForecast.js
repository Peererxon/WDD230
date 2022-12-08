import fetchWeatherAndForecast from "./fetchWeather.js";

const setCurrentWeather = (currentWeather) => {
  // Select elements
  const temp = document.querySelector("#current_weather__temperature");

  const description = document.querySelector("#current_weather__description");

  const humidity = document.querySelector("#current_weather__humidity");

  const weatherIcon = document.querySelector("#currentWeatherIcon");

  const iconSrc = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;

  // Set values
  weatherIcon.setAttribute("src", iconSrc);

  description.textContent = `Condition description: ${currentWeather.weather[0].description}`;

  temp.textContent = `${currentWeather.temp}℉`;

  humidity.textContent = `Humidity: ${currentWeather.humidity}%`;
};
const setForecast = (forecast) => {
  // Select container
  const forecastContainer = document.querySelector(".forecast");

  [1, 2, 3].forEach(() => {
    // Create elements to add to the document
    const forecastItem = document.createElement("div");

    const weatherIcon = document.createElement("img");

    const date = document.createElement("p");

    const temperature = document.createElement("span");

    const description = document.createElement("span");

    const humidity = document.createElement("span");

    // Set classes and ids
    forecastItem.classList.add("forecast__item");

    date.setAttribute("id", "date");

    temperature.setAttribute("id", "forecast__temperature");

    description.setAttribute("id", "current_weather__description");

    humidity.setAttribute("id", "current_weather__humidity");

    // Set values
    const iconSrc = `https://openweathermap.org/img/w/01d.png`;

    weatherIcon.setAttribute("src", iconSrc);

    weatherIcon.setAttribute("alt", "weather icon");

    date.textContent = "MON";

    temperature.textContent = "30 ºF";

    description.textContent = "Condition description: SUNNY";

    humidity.textContent = "Humidity: 48%";

    // Append elements
    forecastItem.appendChild(date);

    forecastItem.appendChild(weatherIcon);

    forecastItem.appendChild(temperature);

    forecastItem.appendChild(description);

    forecastItem.appendChild(humidity);

    forecastContainer.appendChild(forecastItem);
  });
};

const setWeather = async () => {
  // const weather = await fetchWeatherAndForecast();
  // console.log(
  //   "🚀 ~ file: getWeatherAndForecast.js:19 ~ setWeather ~ weather",
  //   weather
  // );

  // setCurrentWeather(weather.current);

  setForecast([]);
};

setWeather();
