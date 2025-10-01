// 메뉴 섹션 탭 기능
window.onload = function() {
    // 특정 섹션 보이기 함수
    function showSection(sectionClass, activeButton) {
        // 모든 섹션 숨기기
        document.querySelectorAll('.menu_items_warp').forEach(section => {
            section.style.display = 'none';
        });
        
        // 모든 버튼 비활성화
        document.querySelectorAll('.menu_nav li').forEach(button => {
            button.classList.remove('active');
        });
        
        // 선택한 섹션만 보이기
        document.querySelector(`.menu_items_warp.${sectionClass}`).style.display = 'flex';
        
        // 선택한 버튼만 활성화
        activeButton.classList.add('active');
    }

    // 초기 로딩 시 .fried만 보이게 설정
    showSection('fried', document.querySelector('.fried_btn'));

    // 각 버튼에 클릭 이벤트 추가
    document.querySelector('.fried_btn').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('fried', this);
    });

    document.querySelector('.seasoned_btn').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('seasoned', this);
    });

    document.querySelector('.bburinkle_btn').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('bburinkle', this);
    });

    document.querySelector('.king_btn').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('king', this);
    });

    document.querySelector('.hot_btn').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('hot', this);
    });
};