// 서브 메뉴 페이지 탭 기능
window.onload = function() {
    const menuButtons = document.querySelectorAll('.menu_nav li');
    const categories = ['fried', 'seasoned', 'bburinkle', 'King-Series', 'Hot-Series'];

    // 메뉴 카테고리 부드럽게 보이기 함수
    function showCategory(categoryClass, activeButton) {
        // 모든 버튼 비활성화
        menuButtons.forEach(btn => btn.classList.remove('active'));
        
        // 현재 보이는 메뉴들을 페이드아웃
        const currentVisibleItems = document.querySelectorAll('.menu_items_list:not(.hidden)');
        currentVisibleItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(-20px)';
        });

        // 잠시 후 숨기고 새로운 메뉴 표시
        setTimeout(() => {
            // 모든 메뉴 숨기기
            document.querySelectorAll('.menu_items_list').forEach(section => {
                section.classList.add('hidden');
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
            });
            
            // 선택한 카테고리만 보이기
            const targetSections = document.querySelectorAll(`.menu_items_list.${categoryClass}`);
            targetSections.forEach((section, index) => {
                section.classList.remove('hidden');
                section.style.display = 'flex';
                
                // 순차적으로 페이드인 효과
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, index * 100); // 각 아이템마다 100ms 지연
            });
            
            // 클릭된 버튼 활성화
            activeButton.classList.add('active');
        }, 200); // 페이드아웃 완료 후 실행
    }

    // 각 메뉴 버튼에 클릭 이벤트 추가
    menuButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showCategory(categories[index], this);
        });
    });

    // 초기 로딩 시 첫 번째 메뉴(후라이드) 활성화
    if (menuButtons[0]) {
        // 초기에는 모든 메뉴 숨기기
        document.querySelectorAll('.menu_items_list').forEach(section => {
            section.classList.add('hidden');
        });
        
        // 후라이드 메뉴만 보이기
        setTimeout(() => {
            showCategory('fried', menuButtons[0]);
        }, 100);
    }

    // 팝업 기능 추가
    setupPopupFunctionality();
    
    // 팝업 닫기 버튼 호버 효과 - 360도 회전 애니메이션
    const closeImg = document.querySelector('.menu-see-more-close-btn > img');
    if (closeImg) {
        closeImg.style.cursor = 'pointer'; // 손가락 커서로 변경
        closeImg.addEventListener('mouseenter', () => {
            closeImg.style.transform = 'rotate(180deg)'; // 마우스 올리면 360도 회전
            closeImg.style.transition = 'transform 0.75s ease'; // 0.75초 부드러운 회전
        });
        closeImg.addEventListener('mouseleave', () => {
            closeImg.style.transform = 'rotate(0deg)'; // 마우스 떠나면 원래 각도로 복귀
        });
    }
};


// 메뉴 상세보기 팝업 기능
function setupPopupFunctionality() {
    const popup = document.querySelector('.menu-see-more'); // 팝업창 요소
    const overlay = document.createElement('div'); // 배경 어둡게 처리용 오버레이 생성
    overlay.className = 'see-more-wrap-bg-overlay';
    document.body.appendChild(overlay); // body에 오버레이 추가하여 전체 화면 덮음
    
    // 팝업 열기/닫기 토글 함수 - CSS 클래스로 제어
    function togglePopup(show) {
        popup.classList.toggle('show', show); // .show 클래스로 팝업 중앙 표시
        overlay.classList.toggle('show', show); // .show 클래스로 배경 어둡게 처리
        document.body.style.overflow = show ? 'hidden' : ''; // 팝업 열릴 때 배경 스크롤 방지
    }
    
    // 메뉴 아이템의 "더보기" 버튼 클릭 시 팝업 열기
    document.querySelectorAll('.img_hover_text > a').forEach(btn => 
        btn.onclick = e => (e.preventDefault(), togglePopup(true)) // 링크 기본동작 방지 후 팝업 열기
    );
    
    // X 닫기 버튼 클릭 시 팝업 닫기
    document.querySelector('.menu-see-more-close-btn').onclick = e => 
        (e.preventDefault(), togglePopup(false)); // 팝업 닫기
    
    // 배경 오버레이 클릭 시 팝업 닫기 - UX 편의성
    overlay.onclick = () => togglePopup(false);
    
    // ESC 키 누르면 팝업 닫기 - 키보드 접근성
    document.onkeydown = e => e.key === 'Escape' && togglePopup(false);
}
