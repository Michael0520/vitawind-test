import Swiper from "swiper/swiper-bundle.esm.js";
import "swiper/swiper-bundle.css";

window.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(
    ".promotion_wrapper_content_gridColumn_span > .swiper-container",
    {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 8000,
      },
      breakpoints: {
        0: {
          centeredSlides: false,
          slidesPerView: 1.2,
        },
        375: {
          centeredSlides: false,
          slidesPerView: 1.2,
        },
        768: {
          centeredSlides: false,
          slidesPerView: 1.5,
        },
        1440: {
          centeredSlides: false,
          slidesPerView: 1.5,
        },
      },
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
    }
  );
});
