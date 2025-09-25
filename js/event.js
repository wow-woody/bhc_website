let PosNum = 0; 
let positionValue = 0; 
const image_width = 496;

const rightBtn = document.querySelector(".right_arr");
console.log(rightBtn);
const leftBtn = document.querySelector(".left_arr");
const images = document.querySelector(".event_img");
console.log(images);

function updateButtonVisibility() {
  // 처음 위치면 왼쪽 버튼 숨김
  if (PosNum === 0) {
    rightBtn.style.display = "none";
  } else {
    rightBtn.style.display = "block";
  }

  // 마지막 위치면 오른쪽(왼쪽 이동) 버튼 숨김
  if (PosNum === 3) {
    leftBtn.style.display = "none";
  } else {
    leftBtn.style.display = "block";
  }
}


function right(){
  
  if(PosNum < 3){
    
    positionValue -= image_width; 
    images.style.transform = `translateX(${positionValue}px)`; 
    PosNum += 1; 
    updateButtonVisibility();
  }
}


function left(){
  if(PosNum > 0){
    positionValue += image_width; 
    images.style.transform = `translateX(${positionValue}px)`; 
    PosNum -= 1; 
    updateButtonVisibility();
  }
}


function eventRolling(){
  rightBtn.addEventListener("click", left); 
  leftBtn.addEventListener("click", right); 
  updateButtonVisibility();
}



eventRolling(); 


