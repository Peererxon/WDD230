const windchill = (temp, wind) => {
  const windchill = document.querySelector("#windchill");
  const windDegree = document.querySelector("#windDegree");

  windchill.textContent = "N/A";

  if (temp <= 50 && wind >= 3) {
    let chill = Math.round(
      35.74 +
        0.6215 * temp -
        35.75 * Math.pow(wind, 0.16) +
        0.4275 * temp * Math.pow(wind, 0.16)
    );
    windchill.textContent = chill.toFixed(0);
    windDegree.innerHTML = "&#8457;";
  }
};

const temperature = parseFloat(document.querySelector("#temp").textContent);
const windSpeed = parseFloat(document.querySelector("#wind").textContent);
windchill(temperature, windSpeed);
