
let storeItem = document.querySelector(".store");
let popup = document.querySelector(".popup_wrap");
let closeBtn = document.querySelector(".popup .close_btn");
let cityBox = document.querySelector(".city_box");
let countiesBox = document.querySelector(".counties_box");
let cityList = document.querySelector(".city_list");
let countiesList = document.querySelector(".counties_list");
let mapDetail = document.querySelector(".store .detail");

console.log(storeItem);

mapDetail.addEventListener("mouseenter", () => {
    mapDetail.classList.add("active");
})

mapDetail.addEventListener("mouseout", () => {
    mapDetail.classList.remove("active");
})

//지도
storeItem.addEventListener("click", () => {
    popup.style.display = "flex";

    setTimeout(() => {
        map.relayout();
        map.setCenter(markerPosition);
    }, 100);  // 팝업이 열리고 DOM 변경 반영 후 호출
});


closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.style.display = "none";
});


var mapContainer = document.getElementById('map'),
    mapOption = {
        // center: new kakao.maps.LatLng(37.5618815, 126.8511103),
        center: new kakao.maps.LatLng(37.5630503, 126.8501181),
        level: 4
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = "../images/bhc-ms.svg",
    imageSize = new kakao.maps.Size(50, 50),
    imageOption = { offset: new kakao.maps.Point(27, 69) }; //마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.5618815, 126.8511103); // 마커가 표시될 위치

var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정 
});


marker.setMap(map);
map.setCenter(markerPosition);


var content = '<div class="customoverlay">' +
    '  <a href="https://map.kakao.com/link/map/26628353" target="_blank">' +
    '    <span class="title">BHC가양점</span>' +
    '  </a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치
var position = new kakao.maps.LatLng(37.5618815, 126.8511103);

// 커스텀 오버레이를 생성
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1
});

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


