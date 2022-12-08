const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.158092&lon=-117.350594&exclude=hourly,minutely&units=imperial&appid=9292920acb5554113149ccdebbf09d8b`;

async function fetchWeatherAndForecast() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("can not fetch weather");
    }
  } catch (error) {
    console.log(error);
  }
}

export default fetchWeatherAndForecast;
