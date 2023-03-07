const body = document.querySelector("body");
const videoWrapper = document.querySelector(".home-video_video-wrapper");

const myDialog = document.getElementById("home-video_dialog");
const dialogCloseButton = myDialog.querySelector(
  ".home-video_dialog-container_dialog_close-button"
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

// indoor popup
const indoorBtn = document.querySelector(
  ".home-product_indoor-wrapper_content-wrapper_specification-text"
);
const indoorPopup = document.querySelector(
  ".home-product_indoor-wrapper_popup"
);
const indoorPopup_closeBtn = document.querySelector(
  ".home-product_indoor-wrapper_popup_closeBtn"
);

indoorBtn.addEventListener("click", () => {
  indoorPopup.classList.add("active");
});
indoorPopup_closeBtn.addEventListener("click", () => {
  indoorPopup.classList.remove("active");
});

// outdoor popup
const outdoorBtn = document.querySelector(
  ".home-product_outdoor-wrapper_content-wrapper_specification-text"
);
const outdoorPopup = document.querySelector(
  ".home-product_outdoor-wrapper_popup"
);
const outdoorPopup_closeBtn = document.querySelector(
  ".home-product_outdoor-wrapper_popup_closeBtn"
);

outdoorBtn.addEventListener("click", () => {
  outdoorPopup.classList.add("active");
});
outdoorPopup_closeBtn.addEventListener("click", () => {
  outdoorPopup.classList.remove("active");
});
