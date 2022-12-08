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

  forecast.forEach((weather) => {
    // Create elements to add to the document
    const forecastItem = document.createElement("div");

    const weatherIcon = document.createElement("img");

    const date = document.createElement("p");

    const temperature = document.createElement("p");

    const description = document.createElement("p");

    const humidity = document.createElement("p");

    // Set classes and ids
    forecastItem.classList.add("forecast__item");

    date.setAttribute("id", "date");

    temperature.setAttribute("id", "forecast__temperature");

    description.setAttribute("id", "current_weather__description");

    humidity.setAttribute("id", "current_weather__humidity");

    // Set values
    const iconSrc = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

    weatherIcon.setAttribute("src", iconSrc);

    weatherIcon.setAttribute("alt", "weather icon");

    date.textContent = "MON";

    temperature.textContent = `${weather.temp.day} ℉`;

    description.textContent = `Condition description: ${weather.weather[0].description}`;

    humidity.textContent = `Humidity: ${weather.humidity}%`;

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
  const weather = await fetchWeatherAndForecast();
  console.log(
    "🚀 ~ file: getWeatherAndForecast.js:19 ~ setWeather ~ weather",
    weather
  );

  // :TODO: check this
  const forecast = weather.daily.slice(1, 4);
  console.log(
    "🚀 ~ file: getWeatherAndForecast.js:91 ~ setWeather ~ forecast",
    forecast
  );

  setCurrentWeather(weather.current);

  setForecast(forecast);
};

setWeather();
