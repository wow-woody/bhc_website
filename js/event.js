let PosNum = 0; 
let positionValue = 0; 
const image_width = 496;

const rightBtn = document.querySelector(".right_arr");
const leftBtn = document.querySelector(".left_arr");
const images = document.querySelector(".event_img");

function hideBtn() {
  if (PosNum === 0) {
    rightBtn.style.display = "none";
  } else {
    rightBtn.style.display = "block";
  }

  if (PosNum === 3) {
    leftBtn.style.display = "none";
  } else {
    leftBtn.style.display = "block";
  }
}

function right() {
  if (PosNum < 3) {
    positionValue -= image_width; 
    images.style.transform = `translateX(${positionValue}px)`; 
    PosNum += 1; 
    hideBtn();
  }
}

function left() {
  if (PosNum > 0) {
    positionValue += image_width; 
    images.style.transform = `translateX(${positionValue}px)`; 
    PosNum -= 1; 
    hideBtn();
  }
}

function eventRolling() {
  rightBtn.addEventListener("click", (e) => {
    e.preventDefault();
    left();
  });

  leftBtn.addEventListener("click", (e) => {
    e.preventDefault();
    right();
  });

  hideBtn();

 
  let startX = 0;
  let endX = 0;
  let isDragging = false;

  // 모바일 터치 이벤트
  images.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  images.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  // PC 마우스 이벤트
  images.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
  });

  images.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    endX = e.clientX;
    isDragging = false;
    handleSwipe();
  });

  // 마우스 밖에서 뗄 때도 처리
  images.addEventListener("mouseleave", (e) => {
    if (isDragging) {
      endX = e.clientX;
      isDragging = false;
      handleSwipe();
    }
  });

  function handleSwipe() {
    const threshold = 50;
    const swipeDistance = endX - startX;

    if (Math.abs(swipeDistance) > threshold) {
      if (swipeDistance < 0) {
        right(); // 왼쪽으로 스와이프 → 다음
      } else {
        left(); // 오른쪽으로 스와이프 → 이전
      }
    }
  }
}

eventRolling();
