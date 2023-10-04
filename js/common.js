const createTipContent = `
    <span class=contClose><i class="fa-solid fa-xmark fa-xl"></i></span>
    <dl class=tip>
        <dt class=tip>방문관리란?</dt>
        <dd class=tip>
            방문관리 기간동안 코웨이 제품의 관리 전문가인 ‘코디’가 방문하여 제품별 서비스 점검시기에 방문관리 서비스를 제공합니다.
        </dd>
        <dt class=tip>자가관리란?</dt>
        <dd class=tip>
            자가관리 기간동안 제품별 필터 제공시기에 필터가 배송되면 고객님이 제품의 필터를 직접 교체하고 관리하실 수 있습니다. (일부 제품은 방문관리 전용)
        </dd>
    </dl>
`;


document.addEventListener('DOMContentLoaded', () => { 
    // 검색 기능 실행
    const performSearch = () => {
        const searchInput = document.getElementById('srch-form');
        const searchTerm = searchInput.value.trim();

        if (searchTerm === '') return;

        // 상품 데이터와 검색어 일치하는 상품 찾기
        const matchedProduct = products.find(product => product.alt.includes(searchTerm));
        if (matchedProduct) {
            const productURL = `./detail.html?product_id=${matchedProduct.id}`;
            window.location.href = productURL;
        } else {
            alert('검색 결과가 없습니다.');
        }
    }


    // nav 메뉴 클릭 시 해당되는 카테고리로 이동하는 공통 함수
    const navigateToCategory = (index, categories) => {
        const category  = categories[index];
        const subURL = `${window.location.pathname}#${encodeURIComponent(category)}`;
        window.location.href = subURL;
        location.reload();
    }

    // 각각의 메뉴에 대한 이벤트 핸들러 등록
    const navMenus = document.querySelectorAll('.nav-menu dl');
    navMenus.forEach((dl, dlIndex) => {
        const ddList = dl.querySelectorAll('dd');
        ddList.forEach((dd, ddIndex) => {
            dd.addEventListener('click', () => {
                console.log(dlIndex); console.log(ddIndex);
                const categoryLists = [['tab2', 'tab3', 'tab4', 'tab5'], ['tab2', 'tab3', 'tab4'], ['tab2', 'tab3'], ['tab2', 'tab3']];
                const selectedCategories = categoryLists[dlIndex];
                navigateToCategory(ddIndex, selectedCategories);
            });
        });
    });

    // 검색 버튼 클릭 및 Enter 키 입력 이벤트 처리
    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('menu')) {
            target.nextElementSibling.classList.add('show');
        }

        if (target.classList.contains('close')) {
            target.parentElement.classList.remove('show');
        }

        if (e.target.id === 'srch-btn') {
            performSearch();
        }

    });

    document.addEventListener('keydown', (e) => {
        if (e.target.id === 'srch-form' && e.key === 'Enter') {
            performSearch();
        }
    })
});


// header 벗어날 시 fixed 메뉴 노출
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    const fixedMenu = document.querySelector('.fixed-menu');

    if (header && fixedMenu) {
        const srollY = window.scrollY;
        const headerHeight = header.clientHeight;
    
        if (scrollY >= headerHeight) {
            fixedMenu.classList.add('fixed');
        } else {
            fixedMenu.classList.remove('fixed');
        }
    }

})


// 3자리마다 콤마 (가격, 렌탈가)
const commaCheck = (e) => {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
}

// background-color Hex 방식으로 변환
const rgbToHex = (rgb) => {
    const values = rgb.match(/\d+/g);
    return `#${Number(values[0]).toString(16).padStart(2, '0')}${Number(values[1]).toString(16).padStart(2, '0')}${Number(values[2]).toString(16).padStart(2, '0')}`;
}