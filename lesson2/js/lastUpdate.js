function getLastUpdate() {
  const lastUpdateSpan = document.querySelector("#lastUpdate");

  const name = "Anderson G. Petit";

  const currentDate = new Date();

  lastUpdateSpan.textContent = `© 2022 | ${name} | Venezuela
Last Updated: ${currentDate}`;
}

getLastUpdate();
