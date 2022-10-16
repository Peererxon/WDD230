const menu = document.getElementById("menu");

menu.addEventListener("click", (e) => {
  const containerMenu = document.querySelector(".selectionMenu ul");
  containerMenu.classList.toggle("closed");
});
let now = new Date();
const day = now.getDay();
const dateToShow = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
}).format(now);
document.getElementById("date").textContent = dateToShow;
if (day === 1 || day === 2) {
  document.getElementById("bannerMessage").textContent =
    "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}
function body() {
  const firstRow = document.getElementById("year");
  const dateAndName = prepareDate();
  firstRow.textContent = firstRow.textContent + dateAndName;
  const last_updated_date = document.lastModified;
  const secondRow = document.getElementById("last_updated");
  secondRow.textContent = "Last updated: " + last_updated_date;
}

function prepareDate() {
  const name = "Anderson G. Petit";
  const location = "Barquisimeto";
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });
  const separator = " | ";
  return `${currentDate} ${separator} ${name} ${separator} ${location}`;
}

body();
