// 메뉴 필터링 기능
document.addEventListener('DOMContentLoaded', function() {
    const buttons = {
        '.menu_keyword_btn_fried': '.fried',
        '.menu_keyword_btn_seasoned': '.seasoned', 
        '.menu_keyword_btn_bburinkle': '.bburinkle',
        '.menu_keyword_btn_King-Series': '.King-Series',
        '.menu_keyword_btn_Hot-Series': '.Hot-Series'
    };

    Object.keys(buttons).forEach(btnClass => {
        document.querySelector(btnClass)?.addEventListener('click', function(e) {
            e.preventDefault();
            showCategory(buttons[btnClass], btnClass);
        });
    });

    function showCategory(category, activeBtn) {
        // 모든 버튼 호버 상태 제거
        Object.keys(buttons).forEach(btn => {
            document.querySelector(btn).style.cssText = '';
        });
        
        // 클릭된 버튼을 호버 상태로 유지 (사이즈 변화 없음)
        document.querySelector(activeBtn).style.cssText = 'background: #ffcc00; color: #333; border: 1px solid var(--subColor); box-shadow: 0 0px 15px rgba(0, 0, 0, 0.070);';
        const items = document.querySelectorAll('.menu_items_warp > .menu_items_list');
        
        // 모든 아이템 숨기기
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s ease';
        });
        
        setTimeout(() => {
            items.forEach(item => item.style.display = 'none');
        }, 300);
        
        // 선택된 카테고리 아이템들 스르륵 천천히 표시
        const targetItems = document.querySelectorAll(`.menu_items_warp > .menu_items_list${category}`);
        targetItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.display = 'block';
                item.style.transform = 'translateY(30px)';
                item.style.opacity = '0';
                item.style.transition = 'all 0.8s ease';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 50);
            }, index * 200 + 400);
        });
    }
});
