
// 메뉴 카테고리별 부드러운 필터링 및 애니메이션 (a 태그 기준)
const btns = document.querySelectorAll('.menu_keyword_btn_ul_list a');
const lists = document.querySelectorAll('.menu_items_warp > .menu_items_list');

const categoryMap = {
	'menu_keyword_btn_fried': 'fried',
	'menu_keyword_btn_seasoned': 'seasoned',
	'menu_keyword_btn_bburinkle': 'bburinkle',
	'menu_keyword_btn_King-Series': 'King-Series',
	'menu_keyword_btn_Hot-Series': 'Hot-Series'
};

// 페이지 진입 시 후라이드 메뉴 먼저 보이게
window.addEventListener('DOMContentLoaded', function() {
	showCategory('fried');
});

btns.forEach(btn => {
	btn.addEventListener('click', e => {
		e.preventDefault();
		let catClass = '';
		btn.classList.forEach(cls => {
			if (categoryMap[cls]) catClass = categoryMap[cls];
		});
		showCategory(catClass);
	});
});

// 최초 진입 시 후라이드 메뉴만 1개씩 천천히 부드럽게 보이게

function showCategory(catClass) {
	// 모든 메뉴 즉시 숨김 처리
	lists.forEach(list => {
		list.style.display = 'none';
		list.style.opacity = 0;
		list.style.transition = '';
	});
	// 해당 카테고리만 1개씩 부드럽게 등장
	const showList = Array.from(lists).filter(list => list.classList.contains(catClass));
	showList.forEach((list, i) => {
		setTimeout(() => {
			list.style.display = 'block';
			list.style.opacity = 0;
			list.style.transition = 'opacity 1s';
			setTimeout(() => { list.style.opacity = 1; }, 10);
		}, i * 300);
	});
}


