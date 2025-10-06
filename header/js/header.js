let navWrap = document.querySelector("nav");
let mainMenu = document.querySelector(".main_menu");
let subMenu = document.querySelectorAll(".sub_menu");
let mainLinks = document.querySelectorAll(".main_menu>li>a");
let hamBtn = document.querySelector(".menu_close_btn");
let searchBox = document.querySelector(".search_wrap input");
let searchBtn = document.querySelector(".search_close_btn");
let wWidth = window.innerWidth;
function stieInit() {
    wWidth = window.innerWidth;
    console.log(wWidth);
}

window.addEventListener("resize", () => {
    let preWidth = wWidth;

    stieInit();

    if (preWidth > 786 && wWidth < 768) {
        navWrap.style.left = "-120%";
        navWrap.style.transition = "0.5s"
    }

    subMenu.forEach(sub => {
        sub.style.height = "";
        sub.classList.remove("active");
    })
    hamBtn.classList.remove("active");
})


searchBtn.addEventListener("click", (e) => {
    searchBtn.classList.toggle("active");
    searchBox.classList.toggle("active");
})

mainMenu.addEventListener("mouseenter", () => {
    if (wWidth >= 768) {
        subMenu.forEach(sub => {
            sub.classList.add("active");
        })
        mainMenu.classList.add("active");
    }
})
mainMenu.addEventListener("mouseleave", () => {
    if (wWidth >= 768) {
        subMenu.forEach(sub => {
            sub.classList.remove("active");
        })
        mainMenu.classList.remove("active");
        hamBtn.classList.remove("active");
    }
})



hamBtn.addEventListener("click", (e) => {
    if (wWidth < 768) {
        e.preventDefault();
        hamBtn.classList.toggle("active");
        navWrap.classList.toggle("active");
    }
    else {
        hamBtn.classList.toggle("active");
        mainMenu.classList.toggle("active");
        navWrap.classList.remove("active");
        subMenu.forEach(sub => {
            sub.classList.toggle("active");
        })
    }
})

mainLinks.forEach((link, i, arr) => {
    link.addEventListener("click", (e) => {
        if (wWidth < 768) {
            e.preventDefault();
            let next = mainLinks[i].nextElementSibling;

            if (next) {
                let isOpen = next.style.height && next.style.height !== "0px";
                if (isOpen) {
                    next.style.height = 0;
                }
                else {
                    let subHeight = next.scrollHeight;
                    next.style.height = subHeight + "px";
                }
            }
        }
    })
})
