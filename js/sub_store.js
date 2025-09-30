let mapDetail = document.querySelector(".store");
let popup = document.querySelector(".popup_wrap");
let closeBtn = document.querySelector(".popup .close_btn");
let cityBox = document.querySelector(".city_box");
let countiesBox = document.querySelector(".counties_box");
let cityList = document.querySelector(".city_list");
let countiesList = document.querySelector(".counties_list");

console.log(mapDetail);
//popup
mapDetail.addEventListener("click", () => {
    popup.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
})

//지역선택
cityBox.addEventListener("click", () => {
    cityList.style.display = "block";
})
cityList.addEventListener("click", () => {
    cityList.style.display = "none";
})
countiesBox.addEventListener("click", () => {
    countiesList.style.display = "block";
})
countiesList.addEventListener("click", () => {
    countiesList.style.display = "none";
})