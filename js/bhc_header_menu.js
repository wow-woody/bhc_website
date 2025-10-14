// URL 파라미터로 해당 메뉴만 표시
(function() {
    const params = new URLSearchParams(window.location.search);
    const menu = params.get('menu');
    
    if (menu) {
        // 기존 sub_menu.js 함수 오버라이드
        const originalOnload = window.onload;
        
        window.onload = function() {
            // 즉시 해당 메뉴만 표시
            showMenuCategory(menu);
        };
        
        // 메뉴 카테고리 표시 함수
        function showMenuCategory(categoryClass) {
            // DOM이 준비될 때까지 대기
            if (!document.querySelector('.menu_items_list')) {
                setTimeout(() => showMenuCategory(categoryClass), 50);
                return;
            }
            
            // 모든 메뉴 숨기기
            document.querySelectorAll('.menu_items_list').forEach(item => {
                item.classList.add('hidden');
                item.style.display = 'none';
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            });
            
            // 선택된 메뉴만 표시
            document.querySelectorAll('.menu_items_list.' + categoryClass).forEach((item, index) => {
                item.classList.remove('hidden');
                item.style.display = 'flex';
                
                // 순차적 페이드인 효과
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            });
            
            // 탭 활성화
            const menuList = ['fried', 'seasoned', 'bburinkle', 'King-Series', 'Hot-Series'];
            const tabIndex = menuList.indexOf(categoryClass);
            const tabs = document.querySelectorAll('.menu_nav li');
            
            tabs.forEach(tab => tab.classList.remove('active'));
            if (tabs[tabIndex]) {
                tabs[tabIndex].classList.add('active');
            }
        }
    }
})();