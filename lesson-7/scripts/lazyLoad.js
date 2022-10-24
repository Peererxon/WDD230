if ("IntersectionObserver" in window) {
  const images = document.querySelectorAll("img[data-src]");

  const preloadImage = (img) => {
    const dataSrc = img.getAttribute("data-src");

    if (!dataSrc) {
      return;
    }

    img.src = dataSrc;
  };

  const imageOptions = {
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
  };

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
}
