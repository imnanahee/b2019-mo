const script = document.createElement('script');
script.src = '/js/product.js';

script.onload = () => { 
    const detailViewList = document.querySelector('.detail-view .wrapper');
    
    // 상품 디테일 페이지
    const fetchProductDetails=(productId) => {
        const productItem = products.find((item) => item.id === productId);
        return productItem;
    }

    // URL에서 상품 id 추출
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('product_id'));

    const product = fetchProductDetails(productId);

    const createProductDetail = (product) => {
        return `
            <div class=infoTop>
                ${product.state.map((state, index) => `
                    ${product.state.length == 0 ? 
                        `<strong class=state>${state}</strong>` : 
                        `<strong class=state>${index ? ` · ` : ``}${state}</strong>`}
                `).join('')}
                <h4 class=name>${product.alt}</h4>
                <span class=code>${product.code}</span>
                <img src="${product.imgSrc}">
                <span class=category>${product.category}</span>
                <p class=desc>${product.subText}</p>
            </div>
            <div class=infoBottom>
                ${product.title === '매트리스/프레임' ?
                    `<div class=mattress>
                        <div class=inBox>
                            <h5>사이즈</h5>
                            <p class=areas>
                                ${product.size.map(size => `
                                    <span>${size}</span>
                                `).join('')}
                            </p>
                        </div>
                        ${product.hardness.length > 0 ? `
                            <div class=inBox>
                                <h5>경도</h5>
                                <p class=areas>
                                    ${product.hardness.map(hard => `
                                        ${product.hardness.length >= 2 ? `
                                            <span>${hard}</span>
                                        `: `<span class=area>${hard}</span>`}
                                    `).join('')}
                                </p>
                            </div>
                        ` : ``}
                    </div>
                `: ``}
                <div class=colorWrap>
                    ${product.colors.length > 0 ? `
                        <h5>색상</h5>
                        <div class=colorList>
                            ${product.colors.map(colorInfo => `
                                <p>${colorInfo.color}</p>
                            `).join('')}
                        </div>
                        <ul class=colorType>
                            ${product.colors.map(colorInfo => `
                                <li 
                                    style="background:${colorInfo.colorCode}"
                                    ${colorInfo.colorClass ? `class="${colorInfo.colorClass}"` : ''}
                                    >
                                        <span>${colorInfo.color}</span>
                                </li>
                            `).join('')}
                        </ul>
                    ` : ''}
                </div>
                <div class=tabMenuWrap>
                    <ul class=tabMenu>
                        <li class="on" data-tab="buyType1">렌탈</li>
                        <li data-tab=buyType2>구매</li>
                    </ul>
                    <div id=buyType1 class="tab on">
                        <div class=boxWrap>
                            <div class=inBox>
                                <h5>관리유형 <span class="toolTip fa-solid fa-circle-question"></span></h5>
                                ${product.manageType.length > 1 ? `
                                    <p class=areas>
                                    ${product.manageType.map(manageType => `
                                        <span>${manageType}</span>
                                    `).join('')}
                                    </p>
                                ` :
                                    `${product.manageType.map(manageType => `
                                            <p class=area>${manageType}</p>
                                    `).join('')}
                                `}
                            </div>
                            <div class="inBox last">
                                <h5>약정기간</h5>
                                <p class=box>
                                    ${product.contract.map((contract, index) => `
                                        <span class=contract${index}>${contract.period}</span>
                                    `).join('')}
                                </p>
                            </div>
                        </div>
                        <div class=totalPrice>
                            <h5>예상 렌탈료</h5>
                            <div class=priceWrap>
                                ${product.contract.map((contract, index) => {
                                    if (contract.price !== "") {
                                        return `
                                            <div class="contract${index}">
                                                <span>${contract.period}</span>
                                                <p class="price">월 ${commaCheck(contract.price)}원</p>
                                                <p class="salePrice">월 <strong>${commaCheck(contract.salePrice)}</strong>원</p>
                                            </div>
                                        `;
                                    } else {
                                        return `
                                            <div class="contract${index}">
                                                <span>${contract.period}</span>
                                                <p class="salePrice">월 <strong>${commaCheck(contract.salePrice)}</strong>원</p>
                                            </div>
                                        `;
                                    }
                                }).join('')}
                            </div>
                        </div>
                    </div>
                    <div id=buyType2 class=tab>
                        <div class=boxWrap>
                            <div class=inBox>
                                <h5>관리유형 <span class="toolTip fa-solid fa-circle-question"></span></h5>
                                ${product.manageType.length > 1 ? `
                                    <p class=areas>
                                    ${product.manageType.map(manageType => `
                                        <span>${manageType}</span>
                                    `).join('')}
                                    </p>
                                ` :
                                `${product.manageType.map(manageType => `
                                        <p class=area>${manageType}</p>
                                    `).join('')}
                                `}
                            </div>
                            ${product.component.length > 0 ? `
                                <div class="inBox last">
                                    <h5>추가구성품</h5>
                                    <div class=componentSelect>
                                        <button type="button" class="noSelected"><span>선택안함</span><i class="fa-solid fa-caret-down"></i></button>
                                        <ul class=componentList>
                                            ${product.component.map(component => `
                                                <li>${component}</li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                        <div class=totalPrice>
                            <h5>예상 구매가</h5>
                            <p class="priceWrap purchase"><strong>${commaCheck(product.price)}</strong>원</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }


    if (product) {
        const productDetailElement = document.createElement('div');
        productDetailElement.classList.add('cell');
        productDetailElement.innerHTML = createProductDetail(product);

        detailViewList.appendChild(productDetailElement);
    } else {
        alert('상품을 찾을 수 없습니다.');
        location.href = 'index.html';
    }


    // 색상 컬러 선택 시 텍스트 변환
    const firstLi = document.querySelector('.colorType li:first-child');
    const colorTypeLi = document.querySelectorAll('.colorType li');

    // .colorType li를 클릭할 때 이벤트 리스너 추가
    if (colorTypeLi.length === 1) { // .colorType이 1개일 경우
        const li = colorTypeLi[0];
        li.classList.add('on');
    } else {
        colorTypeLi.forEach(li => {
            firstLi.classList.add('on');
            li.addEventListener('click', () => {
                // 모든 li에서 "on" 클래스 제거
                document.querySelectorAll('.colorType li').forEach(otherLi => {
                    if (otherLi !== li) {
                        otherLi.classList.remove('on');
                    }
                });
    
                li.classList.add('on');
                
                const selectedColorCode = li.style.backgroundColor;
                const selectedColorCodeHex = rgbToHex(selectedColorCode);
                const selectedColor = product.colors.find(colorInfo => colorInfo.colorCode === selectedColorCodeHex);
                
                if (selectedColor) {
                    // 모두 초기 상태로 되돌리기
                    document.querySelectorAll('.colorList p').forEach(colorList => {
                        colorList.style.display = 'none';
                    });
        
                    // 선택된 색상과 일치하는 p.colorList만 보이게 설정
                    document.querySelectorAll('.colorList p').forEach(colorList => {
                        const colorText = colorList.textContent.trim();
                        if (colorText === selectedColor.color) {
                            colorList.style.display = 'block';
                        }
                    });
                }
            })
        })
    }


    // 구매, 렌탈 탭메뉴
    const buttons = document.querySelectorAll('.tabMenu li');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(btn => {
                // 모든 버튼의 활성 클래스를 제거
                btn.classList.remove('on');
            })

            // 클릭한 버튼에 활성 클래스를 추가
            e.target.classList.add('on');

            const tabId = e.target.getAttribute('data-tab');
            openTab(tabId);
        })
    });

    const openTab = (tabId) => {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('on');
        })

        const tab = document.getElementById(tabId);
        tab.classList.add('on');
    }


    // 관리유형 안내
    const toolTip = document.querySelectorAll('.toolTip');
    toolTip.forEach(tool => {
        tool.addEventListener('click', () => {
            const tipContent = document.createElement('div');
            tipContent.classList.add('tipContent');
            tipContent.innerHTML = createTipContent; // common.js에 템플릿 함수 저장
        
            document.querySelector('.tab.on .inBox').appendChild(tipContent);

            const contClose = tipContent.querySelector('.contClose');
            contClose.addEventListener('click', () => {
                tipContent.remove();
            });
    
            // body 클릭 이벤트 추가
            document.body.addEventListener('click', (e) => {
                const target = e.target;
                // 클릭한 요소가 .tipContent, .contClose, .toolTip인 경우 무시
                if (target.classList.contains('tipContent') || target.classList.contains('toolTip') || target.classList.contains('tip')) {
                    return;
                }
                
                tipContent.remove(); // 그 외의 경우 .tipContent 요소 제거
            });
        })
    })


    // 약정 버튼 클릭 시 그에 맞는 렌탈가 노출
    const contractBtnGetClass = () => {
        const contractBtn = document.querySelectorAll('.box span');
        const contractPrice = document.querySelectorAll('.priceWrap div');

        // 초기 화면 세팅 class add on
        document.querySelector('.box .contract0').classList.add('on');
        document.querySelector('.priceWrap .contract0').classList.add('on');
        
        contractBtn.forEach(span => {
            const getBtnClass = span.getAttribute('class'); // span의 class값 가져오기

            contractPrice.forEach(div => {
                const getDivClass = div.getAttribute('class'); // div의 class값 가져오기

                span.addEventListener('click', (e) => {
                    contractBtn.forEach(btn => {
                        btn.classList.remove('on');
                    })
                    e.target.classList.add('on');
                    
                    // span과 div의 class값이 같을 경우
                    if (getBtnClass === getDivClass) div.classList.add('on');
                    else div.classList.remove('on');
                })
            })
        })
    }

    // 추가구성품
    const component = document.querySelector('.componentSelect');
    if (component) { // product.component에 값이 있다면
        component.addEventListener('click', () => {
            component.querySelector('.componentList').classList.add('active');
        })
        
        const componentLi = document.querySelectorAll('.componentList li');
        componentLi.forEach(li => {
            li.addEventListener('click', (e) => {
                e.stopPropagation();
                const liTextContent = li.textContent;
                const noSelectedBtn = document.querySelector('.componentSelect button span');
                component.querySelector('.componentList').classList.remove('active');
                noSelectedBtn.textContent = liTextContent;
    
                if (noSelectedBtn.textContent !== '선택안함') {
                    noSelectedBtn.parentNode.classList.remove('noSelected');
                    noSelectedBtn.parentNode.classList.add('selected');
                } else {
                    noSelectedBtn.parentNode.classList.add('noSelected');
                    noSelectedBtn.parentNode.classList.remove('selected');
                }
            })
        })
    }

    contractBtnGetClass();

           
    // 관리유형, 약정기간 옵션 on off
    document.querySelectorAll('.tab').forEach(tab => {
        const areasInTab = tab.querySelectorAll('.areas span');
                
        // 매트리스 상품일 경우 - 관리유형
        if (areasInTab.length > 0) {
            areasInTab[0].classList.add('on');
        }

        areasInTab.forEach(span => {
            span.addEventListener('click', (e) => {
                areasInTab.forEach(btn => {
                    btn.classList.remove('on');
                });
                e.target.classList.add('on');
            });
        });
    });


    // 매트리스 상품일 경우 - 사이즈, 경도 옵션 on off
    document.querySelectorAll('.mattress .inBox').forEach(inBox => {
        const areasInMattress = inBox.querySelectorAll('.areas span');

        if (areasInMattress.length > 0) {
            areasInMattress[0].classList.add('on');
        }

        areasInMattress.forEach(span => {
            span.addEventListener('click', (e) => {
                areasInMattress.forEach(btn => {
                    btn.classList.remove('on');
                })
                e.target.classList.add('on');
            })
        })
    })

}

document.head.appendChild(script);