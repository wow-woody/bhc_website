// URL 파라미터로 해당 메뉴만 표시
window.addEventListener('load', function() {
    const params = new URLSearchParams(window.location.search);
    const menu = params.get('menu');
    
    if (menu) {
        // 기존 스크립트 완료 후 실행
        setTimeout(function() {
            // 모든 메뉴 강제 숨기기
            const allItems = document.querySelectorAll('.menu_items_list');
            allItems.forEach(item => {
                item.classList.add('hidden');
                item.style.display = 'none';
                item.style.opacity = '0';
            });
            
            // 선택된 메뉴만 강제 표시
            const selectedItems = document.querySelectorAll('.menu_items_list.' + menu);
            selectedItems.forEach(item => {
                item.classList.remove('hidden');
                item.style.display = 'flex';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            });
            
            // 탭 활성화
            const menuList = ['fried', 'seasoned', 'bburinkle', 'King-Series', 'Hot-Series'];
            const tabIndex = menuList.indexOf(menu);
            const tabs = document.querySelectorAll('.menu_nav li');
            
            // 모든 탭 비활성화
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // 해당 탭 활성화
            if (tabs[tabIndex]) {
                tabs[tabIndex].classList.add('active');
            }
            
            console.log('메뉴 표시:', menu, '항목 수:', selectedItems.length);
        }, 500);
    }
});