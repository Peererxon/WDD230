// Lazy load for imgs
const imgs = document.querySelectorAll("img[data-src]");

const preloadImage = (img) => {
  const dataSrc = img.getAttribute("data-src");

  if (!dataSrc) {
    return;
  }

  img.setAttribute("src", dataSrc);

  img.removeAttribute("data-src");
};

if ("IntersectionObserver" in window) {
  const imageOptions = { threshold: 1.0 };

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

// Lazy load for source element

const sources = document.querySelectorAll("source[data-src]");

const preloadSource = (source) => {
  const dataSrc = source.getAttribute("data-src");

  if (!dataSrc) {
    return;
  }

  source.setAttribute("srcset", dataSrc);

  source.removeAttribute("data-src");
};

if ("IntersectionObserver" in window) {
  const imageOptions = { threshold: 1.0 };

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      preloadSource(entry.target);

      imgObserver.unobserve(entry.target);
    });
  }, imageOptions);

  sources.forEach((image) => {
    imgObserver.observe(image);
  });
} else {
  sources.forEach((image) => {
    preloadImage(image);
  });
}
