const submenu = document.getElementById("submenu");
const sticky = submenu.offsetTop;

function setFixedHeader() {
  if (window.pageYOffset > sticky) {
    submenu.classList.add("sticky");
  } else {
    submenu.classList.remove("sticky");
  }
}
window.onscroll = () => setFixedHeader();
