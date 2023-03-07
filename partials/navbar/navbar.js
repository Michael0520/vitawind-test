const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 140) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

const navbarBtn = document.querySelector(".navbar_hamburgerBtn");
const body = document.querySelector("body");

navbarBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  body.classList.toggle("no-scroll");
});
