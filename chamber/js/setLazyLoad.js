const setLazyLoad = () => {
  const imgs = document.querySelectorAll("img[data-src]");

  const preloadImage = (img) => {
    const dataSrc = img.getAttribute("data-src");

    if (!dataSrc) {
      return;
    }

    img.src = dataSrc;

    img.classList.add("fade-in-image");

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
};

export default setLazyLoad;
