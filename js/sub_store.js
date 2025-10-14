
let mapDetail = document.querySelector(".store");
let popup = document.querySelector(".popup_wrap");
let closeBtn = document.querySelector(".popup .close_btn");
let cityBox = document.querySelector(".city_box");
let countiesBox = document.querySelector(".counties_box");
let cityList = document.querySelector(".city_list");
let countiesList = document.querySelector(".counties_list");

console.log(mapDetail);

mapDetail.addEventListener("click", () => {
    popup.style.display = "flex";

    // 카카오맵일 경우 (map은 지도 객체)
    setTimeout(() => {
        map.relayout();
    }, 100);  // 팝업이 열리고 DOM 변경 반영 후 호출
});


closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.style.display = "none";
});


var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5618815, 126.8511103), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.5618815, 126.8511103); 

// 마커를 생성합니다 
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div style="padding-left:30px;">BHC 가양점 <br><a href="https://map.kakao.com/link/map/Hello World!,37.5618815, 126.8511103" </div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.5618815, 126.8511103); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 

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
