function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const backTopBtn = document.querySelector(".footer-section_backTopBtn");

backTopBtn.addEventListener("click", scrollToTop);
