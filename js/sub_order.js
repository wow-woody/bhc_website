document.addEventListener('DOMContentLoaded', () => {
    //결체창
    const paymentBar = document.querySelector(".order_bottom");
    const footer = document.querySelector("#footer");

    function handleScroll() {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop <= windowHeight) {
            // 푸터가 보이기 시작하면 결제창을 푸터 위에 고정
            paymentBar.classList.add('sticky-end');
            const offsetTop = footer.offsetTop - paymentBar.offsetHeight;
            paymentBar.style.top = offsetTop + 'px';
        } else {
            // 푸터에 안 닿았을 땐 화면 하단에 고정
            paymentBar.classList.remove('sticky-end');
            paymentBar.style.top = '';
        }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // 처음 로딩 시에도 위치 체크
    handleScroll();


    //
    //
    //주문 count
    const total = document.querySelector(".total p strong");

    //기본치킨
    const basPrice = 23000;
    let baseCount = 1;
    const baseSpan = document.querySelector(".count span");
    const baseM = document.querySelector(".count .minus");
    const baseP = document.querySelector(".count .plus");

    baseSpan.innerHTML = baseCount;

    baseP.addEventListener("click", () => {
        baseCount++;
        baseSpan.innerHTML = baseCount;
        updateTotal();
    })
    baseM.addEventListener("click", () => {
        if (baseCount > 1) {
            baseCount--;
            baseSpan.innerHTML = baseCount;
            updateTotal();
        }
    })

    // 시즈닝 체크박스
    const seasCheck = document.querySelectorAll('.add_seas input[type="checkbox"]');

    seasCheck.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotal);
    });

    function updateTotal() {
        let totalSum = basPrice * baseCount;
        let categorySelect = { sideT: [], drinkT: [] }


        //시즈닝 체크
        seasCheck.forEach(cb => {
            if (cb.checked) {
                totalSum += 800;
            }
        });

        let lists = document.querySelectorAll(".order");
        lists.forEach(list => {
            let category = list.classList[1];
            // console.log(category);
            let items = list.querySelectorAll(".add");
            items.forEach(item => {
                let goodsName = item.querySelector(".menu p").innerHTML;
                let price = parseInt(item.querySelector(".menu span").innerHTML.replace(/[^0-9]/g, ''));
                let count = parseInt(item.querySelector(".counter span").innerHTML);
                if (count > 0) {
                    totalSum += price * count;
                    categorySelect[category].push(goodsName);
                }
            })
            console.log(categorySelect);
        })

        updateOption(".sideCategory strong", categorySelect.sideT);
        updateOption(".drinkCategory strong", categorySelect.drinkT);

        function updateOption(selector, cateItem) {
            let selectorShow = document.querySelector(selector);
            if (cateItem.length > 0) {
                let extra = cateItem.length - 1;
                selectorShow.innerHTML = `${cateItem[0]} ${extra > 0 ? `외 ${extra}개` : ""}`
            }
        }
        total.innerHTML = totalSum.toLocaleString();
    }

    updateTotal();

    let counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        let minus = counter.querySelector(".minus");
        let plus = counter.querySelector(".plus");
        let countNum = counter.querySelector("span");

        minus.addEventListener("click", () => {
            let count = parseInt(countNum.innerText);
            if (count > 0) {
                count--;
                countNum.innerText = count;
                updateTotal();
            }
        });

        plus.addEventListener("click", () => {
            let count = parseInt(countNum.innerText);
            count++;
            countNum.innerText = count;
            updateTotal();
        });
    });


    //결제창 글자
    const selectBasic = document.querySelector(".order_left h2");
    const showBasic = document.querySelector("#basic strong");
    showBasic.innerHTML = selectBasic.innerHTML;



    // 480px
    let sideShow = document.querySelector(".sideT")
    let btn = document.querySelector("button")

    btn.addEventListener("click", function () {
        sideShow.style.display = "block";
        console.log(btn);
    })
});