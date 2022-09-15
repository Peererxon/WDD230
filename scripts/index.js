//I used to make this to avoid hurting the Window object
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
  const separator = ",;|;,";
  return `${currentDate} ${separator} ${name} ${separator} ${location}`;
}

body();
