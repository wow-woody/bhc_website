let mapDetail = document.querySelector(".store");
let popup = document.querySelector(".popup_wrap");
let closeBtn = document.querySelector(".popup .close_btn");

console.log(mapDetail);

mapDetail.addEventListener("click", ()=> {
    popup.style.display = "block";
})

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
})