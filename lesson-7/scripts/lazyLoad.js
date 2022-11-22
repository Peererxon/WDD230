const images = document.querySelectorAll("img[data-src]");

const preloadImage = (img) => {
  const dataSrc = img.getAttribute("data-src");

  if (!dataSrc) {
    return;
  }

  img.setAttribute("src", dataSrc);

  img.removeAttribute("data-src");
};

// This is practically a pollifill for the IntersectionObserver API
if ("IntersectionObserver" in window) {
  const imageOptions = {}; //configuraciones para el observer

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      preloadImage(entry.target);

      imgObserver.unobserve(entry.target);
    });
  }, imageOptions);

  images.forEach((image) => {
    imgObserver.observe(image);
  });
} else {
  images.forEach((image) => {
    preloadImage(image);
  });
}
