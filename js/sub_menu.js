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
};
