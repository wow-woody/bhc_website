let PosNum = 0; 
let positionValue = 0; 
let image_width = 496;

const rightBtn = document.querySelector(".right_arr");
const leftBtn = document.querySelector(".left_arr");
const images = document.querySelector(".event_img");

function updateImageWidth() {
const width = window.innerWidth;

if (width <= 780) {
  image_width = 385;
} else if (width <= 1024) {
  image_width = 494;
} else {
  image_width = 496;
}
}


// 버튼 표시 상태 함수
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

function resetPosition() {
  PosNum = 0;
  positionValue = 0;
  images.style.transform = `translateX(0px)`;
  hideBtn();
}

function eventRolling() {
  // 초기 width 설정
  updateImageWidth();

  // 화면 크기 변경시 image_width 값 업데이트 및 위치 초기화
  window.addEventListener('resize', () => {
    updateImageWidth();
    resetPosition();
  });

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

  images.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  images.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

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
        right();
      } else {
        left();
      }
    }
  }
}

eventRolling();
