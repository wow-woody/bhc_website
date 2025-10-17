let tabBtn = document.querySelectorAll(".tab_btn_list>li");
let tabContents = document.querySelectorAll(".event_content_wrap>div");

console.log(tabBtn);
console.log(tabContents);

tabBtn.forEach((tab, id) => {
    console.log(tabBtn);
    tab.addEventListener("click", () => {
        tabBtn.forEach((t, i) => {
            console.log(tab);
            // t.classList.remove("active");
            // tabContents[1].className.remove("active");
            t.classList.remove("active");
            tabContents[i].classList.remove("active");
        })
        tab.classList.add("active");
        tabContents[id].classList.add("active");
    })
})

let pageArrBtns = document.querySelectorAll(".event_page_btn_wrap>a");
let pagelistBtns = document.querySelectorAll(".event_page_btn_list>li");

pagelistBtns.forEach(listBtn => {
    listBtn.addEventListener("mouseenter", () => {
        listBtn.classList.add("active");
    })
    listBtn.addEventListener("mouseleave", () => {
        listBtn.classList.remove("active");
    })
})