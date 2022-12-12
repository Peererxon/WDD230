const imgs = document.querySelectorAll("img[data-src]");
console.log("🚀 ~ file: lazyLoadHome.js:2 ~ imgs", imgs);

const preloadImage = (img) => {
  const dataSrc = img.getAttribute("data-src");

  if (!dataSrc) {
    return;
  }

  img.setAttribute("src", dataSrc);

  img.removeAttribute("data-src");
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

  imgs.forEach((image) => {
    imgObserver.observe(image);
  });
} else {
  imgs.forEach((image) => {
    preloadImage(image);
  });
}
