const script = document.createElement('script');
script.src = 'js/product.js';

script.onload = () => {
    const products = window.products;

    const body = document.querySelector('body');
    const tabButtons = document.querySelectorAll('.category button');
    const productContainer = document.querySelector('.product');
    const categoryBtn = document.querySelectorAll('.category-item button');
    const productList = document.querySelector('.product-list');


    // product.js에서 상품 정보 가져오기
    const productByTab = (title) => {
        if (productContainer) {
            productContainer.innerHTML = '';
            const filterProduct = products.filter(product => product.title.includes(title));
            
            const slicedProducts = filterProduct.slice(0, 3);
            
            slicedProducts.forEach(product => {
                const productElement = createProductElement(product);
                productContainer.appendChild(productElement);
            })
        }
    }

    // 메인 - 베스트 상품 리스트
    const createProductElement = (product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('cell');
        productElement.innerHTML = `
            <a href='detail.html?product_id=${product.id}'>
                <img src="${product.imgSrc}">
                <div class=productText>
                    <p class=desc>${product.subText}</p>
                    <h3 class=name>${product.alt}</h3>
                    <span class=code>${product.code}</span>
                    <strong class=rentalPrice>렌탈가 ${commaCheck(product.rentalPrice)} 원</strong>
                </div>
            </a>
        `;
        return productElement;
    }


    // 서브 - 상품리스트
    const createItemElement = (product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('cell');
        productElement.innerHTML = `
            <a href='detail.html?product_id=${product.id}'>
                <img src="${product.imgSrc}">
                <div class=productText>
                    <span class=category>${product.category}</span>
                    <p class=desc>${product.subText}</p>
                    <ul class=colorType>
                        ${product.colors.map(colorInfo => `
                            <li 
                              style="background-color:${colorInfo.colorCode}"
                              ${colorInfo.colorClass ? `class="${colorInfo.colorClass}"` : ''}
                            >
                                <span>${colorInfo.color}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <span class=code>${product.code}</span>
                    <h4 class=name>${product.alt}</h4>
                    <ul class=priceWrap>
                        <li>
                            <p>구매</p>
                            <span class=price>${commaCheck(product.price)}원</span>
                        </li>
                        <li>
                            <p>렌탈</p>
                            <span class=rentalPrice>${commaCheck(product.rentalPrice)}원~</span>
                        </li>
                    </ul>
                </div>
            </a>
        `;

        return productElement;
    }

    // 모든 상품 표시
    const displayAllProducts = (category) => {
        if (productList) {
            productList.innerHTML = '';
    
            const filteredProducts = products.filter(product => product.title === category);
            
            filteredProducts.forEach(product => {
                const productElement = createItemElement(product);
                productList.appendChild(productElement);
            });
    
            const categoryName = document.querySelectorAll('.category');
            categoryName.forEach(item => {
                if (item.textContent == '얼음정수기') {
                    item.textContent = '냉정수기+얼음';
                } else if (item.textContent == '가습기') {
                    item.textContent = '가습공기청정기'
                }
            });
        }
    }

    const displayProducts = (category) => {
        productList.innerHTML = '';

        const filteredProducts = products.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const productElement = createItemElement(product);
            productList.appendChild(productElement);
        });
        
        const categoryName = document.querySelector('.category');
        if (category == '얼음정수기') {
            categoryName.textContent = '냉정수기+얼음';
        } else if (category == '가습기') {
            categoryName.textContent = '가습공기청정기'
        }
    }

    // 메인 - 코웨이 BEST 상품 탭메뉴
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(tabButton => {
                tabButton.classList.remove('on');
            });

            button.classList.add('on');

            const title = button.textContent;
            productByTab(title);

            const tabId = button.id;
            productContainer.className = `product ${tabId}`;
        })
    })

    // 상품리스트 탭메뉴
    categoryBtn.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.textContent;

            if (selectedCategory === '전체') {
                if (body.classList.contains('water-page')) {
                    displayAllProducts('정수기');
                } else if (body.classList.contains('air-page')) {
                    displayAllProducts('청정기');
                } else if (body.classList.contains('body-page')) {
                    displayAllProducts('비데/연수기');
                } else if (body.classList.contains('sleep-page')) {
                    displayAllProducts('매트리스/프레임');
                }
            } else {
                displayProducts(selectedCategory); // 카테고리에 해당되는 상품 노출
            }

            categoryBtn.forEach(btn => btn.classList.remove('on'));
            button.classList.add('on');
        })
    })

    if (body.classList.contains('index-page')) {
        productByTab(tabButtons[0].textContent);
    }

    // displayProducts(), categoryBtn() 모듈화
    const handleTab = (tabId, categoryName) => {
        categoryBtn.forEach(button => {
            button.classList.toggle('on', button.id === tabId);
        });
        displayProducts(categoryName);
    }
    
    const hash = window.location.hash;
    if (body.classList.contains('water-page')) { // 정수기 페이지
        displayAllProducts('정수기');
        
        if (hash.includes('tab2')) {
            handleTab('tab2', '냉정수기');
        } else if (hash.includes('tab3')) {
            handleTab('tab3', '얼음정수기');
        } else if (hash.includes('tab4')) {
            handleTab('tab4', '냉온정수기');
        } else if (hash.includes('tab5')) {
            handleTab('tab5', '정수전용');
        }
        
    } else if (body.classList.contains('air-page')) { // 청정기 페이지
        displayAllProducts('청정기');

        if (hash.includes('tab2')) {
            handleTab('tab2', '공기청정기');
        } else if (hash.includes('tab3')) {
            handleTab('tab3', '가습기');
        } else if (hash.includes('tab4')) {
            handleTab('tab4', '의류청정기');
        }

    } else if (body.classList.contains('body-page')) { // 비데 페이지
        displayAllProducts('비데/연수기');

        if (hash.includes('tab2')) {
            handleTab('tab2', '비데');
        } else if (hash.includes('tab3')) {
            handleTab('tab3', '연수기');
        }

    } else if (body.classList.contains('sleep-page')) { // 매트리스 페이지
        displayAllProducts('매트리스/프레임');

        if (hash.includes('tab2')) {
            handleTab('tab2', '매트리스');
        } else if (hash.includes('tab3')) {
            handleTab('tab3', '프레임');
        }
    }
    
}

document.head.appendChild(script);