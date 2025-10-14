// URL 파라미터로 해당 메뉴만 표시
window.addEventListener('load', function() {
    const params = new URLSearchParams(window.location.search);
    const menu = params.get('menu');
    
    if (menu) {
        // 모든 메뉴 숨기기
        document.querySelectorAll('.menu_items_list').forEach(item => item.style.display = 'none');
        
        // 선택된 메뉴만 보이기
        document.querySelectorAll('.menu_items_list.' + menu).forEach(item => item.style.display = 'flex');
        
        // 해당 탭 활성화
        const tabs = ['fried', 'seasoned', 'bburinkle', 'King-Series', 'Hot-Series'];
        const index = tabs.indexOf(menu);
        const navTabs = document.querySelectorAll('.menu_nav li');
        
        navTabs.forEach(tab => tab.classList.remove('active'));
        if (navTabs[index]) navTabs[index].classList.add('active');
    }
});