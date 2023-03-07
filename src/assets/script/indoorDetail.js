import Swiper from "swiper/swiper-bundle.esm.js";
import "swiper/swiper-bundle.css";

window.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(
    ".indoorDetail_screen-capture > .swiper-container",
    {
      spaceBetween: 0,
      slidesPerView: 1.8,
      centeredSlides: true,
      roundLengths: true,
      speed: 200, // 將動畫速度設置為800毫秒

      loop: true,
      breakpoints: {
        0: {
          spaceBetween: 0,
          centeredSlides: false,
          slidesPerView: 1.2,
        },
        375: {
          spaceBetween: 0,
          centeredSlides: false,
          slidesPerView: 1.2,
        },
        768: {
          centeredSlides: true,
          slidesPerView: 1.8,
        },
        1440: {
          centeredSlides: true,
          slidesPerView: 1.8,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }
  );

  mySwiper.on("click", function (event) {
    const clickedIndex = event.clickedIndex;
    const activeIndex = mySwiper.activeIndex;

    if (clickedIndex === activeIndex) {
      // 取得當前 active slide 的圖片 src
      const src = event.clickedSlide.getElementsByTagName("img")[0].src;
      const text = event.clickedSlide.querySelector("p").textContent;

      document.body.style.overflow = "hidden";

      // 將圖片 src 賦予到對話框中的 img 元素
      document.getElementById("dialog-image").src = src;

      // 將 text 內容賦予到對話框中的 text 元素
      document.getElementById("dialog-text").textContent = text;

      // 顯示對話框
      document.getElementById("myDialog").style.display = "block";
    }
  });

  // 綁定對話框的關閉按鈕
  document
    .getElementById("myDialog")
    .addEventListener("click", function (event) {
      if (event.target === this) {
        // 隱藏對話框
        this.style.display = "none";

        // 恢復捲軸的滾動
        document.body.style.overflow = "";
      }
    });
});

///

const body = document.querySelector("body");
const videoWrapper = document.querySelector(".indoorDetail_video-wrapper");

console.log(videoWrapper);

const myDialog = document.getElementById("indoorDetail-video_dialog");
const dialogCloseButton = myDialog.querySelector(
  ".indoorDetail_dialog-container_dialog_close-button"
);

// video button
videoWrapper.addEventListener("click", () => {
  myDialog.style.display = "flex";
  const videoSrc = videoWrapper.querySelector("video").getAttribute("src");
  const videoPoster = videoWrapper
    .querySelector("video")
    .getAttribute("poster");
  videoPlayer.setAttribute("src", videoSrc);
  videoPlayer.setAttribute("poster", videoPoster);

  body.style.overflow = "hidden";
});

dialogCloseButton.addEventListener("click", () => {
  myDialog.style.display = "none";
  body.style.overflow = "";
});
