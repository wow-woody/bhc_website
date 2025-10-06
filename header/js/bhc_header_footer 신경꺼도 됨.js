fetch("bhc_header.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("#header").innerHTML = data;

        let logo = document.querySelector(".logo");
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
            stieInit();
            subMenu.forEach(sub => {
                sub.style.height = "";
                sub.classList.remove("active");
            })
            hamBtn.classList.remove("active");
        })

        // let menu = document.querySelector(".menu");
        // let order = document.querySelector(".order");
        // let store = document.querySelector(".store");
        // let sns = document.querySelector(".sns");
        // let brand = document.querySelector(".brand");
        // let mall = document.querySelector(".mall");
        // let searchClose = document.querySelector(".search_close_btn");

        logo.addEventListener("click", () => {
            document.querySelector("../index.html");
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
            }
        })

        let navWrap = document.querySelector("nav");
        hamBtn.addEventListener("click", (e) => {
            e.preventDefault();
            hamBtn.classList.toggle("active");
            navWrap.classList.toggle("active");
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


        // order.addEventListener("click", () => {
        //     window.open("../sub_order.html");
        // })

        // store.addEventListener("click", () => {
        //     document.querySelector("../sub_store.html");
        // })

        // sns.addEventListener("click", () => {
        //     document.querySelector("../sub_sns.html");
        // })

        // brand.addEventListener("click", () => {
        //     document.querySelector("../sub_brand.html");
        // })

        // mall.addEventListener("click", () => {
        //     window.open("https://bhcmall.co.kr/main/");
        // })

        // searchClose.addEventListener("click", () => {
        //     searchClose.classList.add("active");
        // })
    })


fetch("bhc_footer.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("#footer").innerHTML = data;
    })


//site_map
let sitemapwrap = document.querySelector(".site_map_wrap");
let showSitemap = document.querySelector(".site_list");


sitemapwrap.addEventListener("click", (e) => {
    e.stopPropagation();


    if (showSitemap.style.display === "block") {
        showSitemap.style.display = "none";
    } else {
        showSitemap.style.display = "block";
    }
});


showSitemap.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.addEventListener("click", () => {
    showSitemap.style.display = "none";
});
