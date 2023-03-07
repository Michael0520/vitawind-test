const cards = document.querySelectorAll(".converage-indoor_card");

// 遍歷每個卡片
cards.forEach((card) => {
  // 綁定點擊事件處理函數
  card.addEventListener("click", function () {
    // 如果這個卡片已經是 active，就不要取消它的 active 狀態
    if (this.classList.contains("active")) {
      return;
    }

    // 先將所有卡片的 active 狀態都取消掉
    cards.forEach((card) => {
      card.classList.remove("active");
    });

    // 為點擊的卡片添加 active 樣式
    this.classList.add("active");
  });
});
