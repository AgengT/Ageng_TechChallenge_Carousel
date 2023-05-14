let activeIdx = 0;
const carouselHandler = function (prev = true) {
  const slides = document.querySelectorAll(".slide");
  slides[activeIdx].classList.add("move");

  setTimeout(() => {
    slides[activeIdx].classList.remove("show");
    slides[activeIdx].classList.remove("move");

    if (prev) {
      activeIdx = --activeIdx % slides.length;
      if (activeIdx < 0) {
        activeIdx = slides.length - 1;
      }
    } else {
      activeIdx = ++activeIdx % slides.length;
    }
    slides[activeIdx].classList.add("show");
  }, 500);
};