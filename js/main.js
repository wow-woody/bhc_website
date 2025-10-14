
       window.addEventListener("load", function () {
    // 메인 슬라이더
    if (document.querySelector(".main_slider")) {
        new Swiper(".main_slider", {
            loop: true,
            autoplay: { delay: 4000 },
            speed: 1000,
            slidesPerView: 1.6,
            spaceBetween: 250,
            centeredSlides: true
        });
    }

    // 인스타그램 슬라이더
    if (document.querySelector(".insta_swiper")) {
        const swiperContainer = document.querySelector('.insta_swiper');
        swiperContainer.setAttribute('dir', 'rtl');
        swiperContainer.querySelectorAll('.swiper-slide').forEach(slide => slide.setAttribute('dir', 'ltr'));
        new Swiper(".insta_swiper", {
            slidesPerView: "auto",
            spaceBetween: 30,
            freeMode: true,
            slidesOffsetAfter: 10
        });
    }

    // 이벤트 슬라이더
    if (document.querySelector(".event_swiper")) {
        new Swiper(".event_swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });

        document.querySelectorAll('.swiper-button-next a, .swiper-button-prev a').forEach(el => {
            el.addEventListener('click', e => e.preventDefault());
        });
    }
});

