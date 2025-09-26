let showbtn = document.querySelector(".more_btn");
let showmore = document.querySelector(".extra_years");
let exitbtn = document.querySelector(".close_btn");

showbtn.addEventListener("click", function(){
    showmore.style.display = "block";
    showbtn.style.display = 'none';
    exitbtn.style.display = "block";
})

exitbtn.addEventListener("click", function(){
    showmore.style.display = "none";
    showbtn.style.display = 'block';
    exitbtn.style.display = "none";
})