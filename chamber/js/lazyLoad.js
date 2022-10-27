const divs = document.querySelectorAll("div[data-src]");

const preloadImage = (div) => {
  const dataSrc = div.getAttribute("data-src");

  if (!dataSrc) {
    return;
  }

  div.style.backgroundImage = `url("${dataSrc}")`;

  div.classList.add("fade-in-image");

  div.removeAttribute("data-src");
};

if ("IntersectionObserver" in window) {
  const imageOptions = {};

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      preloadImage(entry.target);

      imgObserver.unobserve(entry.target);
    });
  }, imageOptions);

  divs.forEach((image) => {
    imgObserver.observe(image);
  });
} else {
  divs.forEach((image) => {
    preloadImage(image);
  });
}
