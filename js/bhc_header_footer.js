fetch("bhc_header.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("#header").innerHTML = data;

        let logo = document.querySelector(".logo");
        let mainMenu = document.querySelector(".main_menu");
        let subMenu = document.querySelectorAll(".sub_menu");
        let mainLinks = document.querySelectorAll(".main_menu>li>a");
        let subLinks = document.querySelectorAll(".sub_menu>li>a");
        let hamBtn = document.querySelector(".menu_close_btn");
        let searchBox = document.querySelector(".search_wrap input");
        let searchBtn = document.querySelector(".search_close_btn");
        let wWidth = window.innerWidth;
        function stieInit() {
            wWidth = window.innerWidth;
            console.log(wWidth);
        }

        window.addEventListener("resize", () => {
            stieInit();
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
                hamBtn.classList.remove("active")
            }
        })

        let navWrap = document.querySelector("nav");
        hamBtn.addEventListener("click", (e) => {
            e.preventDefault();
            hamBtn.classList.toggle("active");
            if (wWidth < 768) {
                navWrap.classList.toggle("active");
            }
            else {
                subMenu.forEach(sub => {
                    sub.classList.toggle("active");
                })
                mainMenu.classList.toggle("active");
            }

        })

        mainLinks.forEach((link, i) => {
            link.addEventListener("click", (e) => {
                if (wWidth < 768) {
                    e.preventDefault();
                    let next = mainLinks[i].nextElementSibling;

                    let isOpen = next.style.height && next.style.height !== "0px";
                    if (isOpen) {
                        next.style.height = 0;
                    }
                    else {
                        let subHeight = next.scrollHeight;
                        next.style.height = subHeight + "px";
                    }
                }
            })
        })

        subLinks.forEach((link, i) => {
            link.addEventListener("mouseenter", (e) => {
                if (wWidth >= 768) {
                    link.style.fontWeight = 700;
                    link.style.borderBottom= "3px solid var(--mainColor)";
                }
            })

            link.addEventListener("mouseleave", (e) => {
                if (wWidth >= 768) {
                    link.style.fontWeight = 500;
                    link.style.borderBottom= "none";
                }
            })
        })
    })

 
fetch("bhc_footer.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("#footer").innerHTML = data;

        let familySiteWrap = document.querySelector(".site_map_wrap");
        let familySiteList = document.querySelector("site_list");
        let familySiteLinks = document.querySelectorAll(".site_list>li>a");

        familySiteWrap.addEventListener("click", (e) => {
            e.stopPropagation();
            familySiteWrap.classList.toggle("active");
        })

    // })
//     familySiteWrap.addEventListener("click", (e) => {
//     e.stopPropagation(); 

    
//     if (familySiteList.style.display === "block") {
//         familySiteList.style.display = "none";
//     } else {
//         familySiteList.style.display = "block";
//     }
// });

    //site_map
// let showSitemap = document.querySelector(".site_list");


// sitemapwrap.addEventListener("click", (e) => {
//     e.stopPropagation(); 

    
//     if (showSitemap.style.display === "block") {
//         showSitemap.style.display = "none";
//     } else {
//         showSitemap.style.display = "block";
//     }
// });
    });