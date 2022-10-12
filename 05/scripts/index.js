const submitButton = document.getElementById("submitCharadter");
let charapters = [];
const inputElement = document.getElementById("favchap");
submitButton.addEventListener("click", () => {
  if (inputElement.value.trim().length > 0) {
    charapters.unshift(inputElement.value);
    addELement(inputElement.value);
    inputElement.focus();
    inputElement.value = "";
  } else {
    showWarning();
    submitButton.setAttribute("disabled", true);
  }
});

document.getElementById("nose").addEventListener("click", removeElement);

function showWarning() {
  const warning = document.createElement("div");

  warning.textContent = "Not empy elements allowed";
  warning.id = "alert";
  warning.className = "alert";
  document.body.appendChild(warning);

  setTimeout(() => {
    submitButton.removeAttribute("disabled");
    document.body.removeChild(warning);
  }, 1000);
}

function addELement(charapter) {
  const list = document.getElementsByClassName("list")[0];
  const li = document.createElement("li");
  const button = document.createElement("button");
  const icon = document.createElement("i");

  icon.className = "remove";
  button.ariaLabel = "remove element";
  li.textContent = charapter;

  button.appendChild(icon);
  button.addEventListener("click", removeElement);
  li.appendChild(button);
  list.appendChild(li);
}

function removeElement(e) {
  const list = document.getElementsByClassName("list")[0];
  const selectedElement = e.target.parentElement.parentElement;
  const liValue = selectedElement.textContent.trim();
  charapters = charapters.filter((e) => e !== liValue);
  // this code is because sometimes we could press the X or the button and technically they are at differents levels od the DOM tree
  try {
    list.removeChild(selectedElement);
  } catch {
    list.removeChild(e.target.parentElement);
  }
  inputElement.value = "";
  inputElement.focus();
}
