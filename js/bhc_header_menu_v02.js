// URL 파라미터로 해당 메뉴만 표시
(function() {
    const params = new URLSearchParams(window.location.search);
    const menu = params.get('menu');
    
    if (menu) {
        // sub_menu.js의 초기화를 덮어쓰기
        const originalOnload = window.onload;
        
        window.onload = function() {
            // sub_menu.js의 기존 로직 실행
            if (originalOnload) originalOnload();
            
            // 파라미터에 따른 메뉴 표시
            setTimeout(() => {
                const menuButtons = document.querySelectorAll('.menu_keyword_btn_ul_list li');
                const categories = ['fried', 'seasoned', 'bburinkle', 'King-Series', 'Hot-Series'];
                const index = categories.indexOf(menu);
                
                if (index >= 0 && menuButtons[index]) {
                    // sub_menu.js의 showCategory 함수 활용
                    showCategoryFromHeader(menu, menuButtons[index]);
                }
            }, 150);
        };
        
        // sub_menu.js와 동일한 로직으로 메뉴 표시
        function showCategoryFromHeader(categoryClass, activeButton) {
            const menuButtons = document.querySelectorAll('.menu_keyword_btn_ul_list li');
            
            // 강제로 모든 아이콘 상태 초기화 (sub_menu.js와 동일)
            menuButtons.forEach(btn => {
                btn.classList.remove('active');
                const icon = btn.querySelector('.menu_nav-icon');
                if (icon) {
                    icon.className = 'menu_nav-icon';
                    icon.removeAttribute('style');
                }
            });
            
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
                }, index * 100);
            });
            
            // 클릭된 버튼 활성화 및 해당 아이콘 클래스 재설정
            activeButton.classList.add('active');
            const activeIcon = activeButton.querySelector('.menu_nav-icon');
            if (activeIcon) {
                // 완전히 초기화 후 올바른 클래스만 추가 (sub_menu.js와 동일)
                activeIcon.className = `menu_nav-icon icon-${categoryClass}`;
            }
        }
    }
})();