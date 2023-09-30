const headerTemplate = `
    <div class="wrapper">
        <nav class="menu-list">
            <i class="fa-solid fa-bars-sort fa-xl menu"></i>
            <div class="menu-wrap">
                <span class="fa-solid fa-xmark fa-lg close"></span>
                <div class="wrapper">
                    <div class="srch-wrap">
                        <input type="text" id="srch-form" placeholder="검색어를 입력하세요">
                        <button id="srch-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                        <div class="recommend">
                            <a href="detail.html?product_id=15">아이콘정수기</a>
                            <a href="detail.html?product_id=22">멀티액션공기청정기</a>
                            <a href="detail.html?product_id=33">스타일케어비데</a>
                        </div>
                    </div>
                    <div class="nav-menu">
                        <dl>
                            <dt><a href="waterCare.html">정수기</a></dt>
                            <dd><a href="waterCare.html#tab2">냉정수기</a></dd>
                            <dd><a href="waterCare.html#tab3">얼음정수기</a></dd>
                            <dd><a href="waterCare.html#tab4">냉온정수기</a></dd>
                            <dd><a href="waterCare.html#tab5">정수전용</a></dd>
                        </dl>
                        <dl>
                            <dt><a href="airCare.html">청정기</a></dt>
                            <dd><a href="airCare.html#tab2">공기청정기</a></dd>
                            <dd><a href="airCare.html#tab3">가습기</a></dd>
                            <dd><a href="airCare.html#tab4">의류청정기</a></dd>
                        </dl>
                        <dl>
                            <dt><a href="bodyCare.html">비데/연수기</a></dt>
                            <dd><a href="bodyCare.html#tab2">비데</a></dd>
                            <dd><a href="bodyCare.html#tab3">연수기</a></dd>
                        </dl>
                        <dl>
                            <dt><a href="sleepCare.html">매트리스</a></dt>
                            <dd><a href="sleepCare.html#tab2">매트리스</a></dd>
                            <dd><a href="sleepCare.html#tab3">프레임</a></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </nav>
        <h1 class="logo"><a href="index.html"><img src="images/ci_skyblue.png" alt="코웨이"></a></h1>
        <a href="/tel:0000-0000" class="direct-number"><i class="fa-solid fa-phone-volume fa-xl"></i></a>
        <ul class="fixed-menu">
            <li><a href="waterCare.html">정수기</a></li>
            <li><a href="airCare.html">청정기</a></li>
            <li><a href="bodyCare.html">비데/연수기</a></li>
            <li><a href="sleepCare.html">매트리스</a></li>
        </ul>
    </div>
`;

const footerTemplate = `
    <div class="wrapper">
        <ul>
            <li>이용약관</li>
            <li>개인정보취급방침</li>
            <li>사업자정보확인</li>
        </ul>
        <address>
            <p>00사업본부 0000사업점 상호명: 000</p>
            <p>서울특별시 금천구 벚꽃로 234, 1202호 아이보스 대표자: 코웨이</p>
            <p>대표번호 : 010-0000-0000 사업자번호 : 000-00-00000</p>
            <p>관리자 : 코웨이 이메일 :coway@i-boss.co.kr</p>
            <p>상담 시간: 24시간 (주말, 공휴일포함)</p>
            <p>*본 쇼핑몰은 일체의 결제 시스템이 없으며, 모든 결제는 후불로 처리됩니다.</p>
        </address>
    </div>
`;

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

// header, footer 
document.addEventListener('DOMContentLoaded', () => { 
    document.querySelector('#header').innerHTML = headerTemplate;
    document.querySelector('#footer').innerHTML = footerTemplate;

    const nav = document.querySelector('.menu');
    const close = document.querySelector('.close');
    
    nav.addEventListener('click', () => {
        nav.nextElementSibling.classList.add('show');
    })
    
    close.addEventListener('click', () => {
        nav.nextElementSibling.classList.remove('show');
    })


    // 검색 입력 필드, 검색 버튼
    const searchInput = document.getElementById('srch-form');
    const searchBtn = document.getElementById('srch-btn');

    searchBtn.addEventListener('click', () => {
        performSearch();
    })

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') performSearch();
    })

    const performSearch = () => {
        const searchTerm = searchInput.value.trim();

        if (searchTerm === '') return;

        // 상품 데이터와 검색어 일치하는 상품 찾기
        const matchedProduct = products.find(product => product.alt.includes(searchTerm));
        if (matchedProduct) {
            const productURL = `/detail.html?product_id=${matchedProduct.id}`;
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
})


// header 벗어날 시 fixed 메뉴 노출
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    const fixedMenu = document.querySelector('.fixed-menu');

    const srollY = window.scrollY;
    const headerHeight = header.clientHeight;

    if (scrollY >= headerHeight) {
        fixedMenu.classList.add('fixed');
    } else {
        fixedMenu.classList.remove('fixed');
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