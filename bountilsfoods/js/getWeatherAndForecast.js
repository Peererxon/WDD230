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

const setWeather = async () => {
  const weather = await fetchWeatherAndForecast();
  console.log(
    "🚀 ~ file: getWeatherAndForecast.js:19 ~ setWeather ~ weather",
    weather
  );

  setCurrentWeather(weather.current);
};

setWeather();
