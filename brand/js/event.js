let PosNum = 0;
let positionValue = 0;
const image_width = 496;

const rightBtn = document.querySelector(".right_arr");
console.log(rightBtn);
const leftBtn = document.querySelector(".left_arr");
const images = document.querySelector(".event_img");
console.log(images);

function updateBtn() {
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
    updateBtn();
  }
}


function left() {
  if (PosNum > 0) {
    positionValue += image_width;
    images.style.transform = `translateX(${positionValue}px)`;
    PosNum -= 1;
    updateBtn();
  }
}


function eventRolling() {
  rightBtn.addEventListener("click", (e) => {
    left();
    e.preventDefault();
  });
  leftBtn.addEventListener("click", (e) => {
    right();
    e.preventDefault();
  });
  updateBtn();
}

eventRolling();


