const products = [
    {
        id: 11,
        title: "정수기",
        imgSrc: 'images/product/water_1.png',
        alt: "프라임 정수기 2.0",
        subText: "총 108가지 유해 물질을 깐깐하게 거르는 깨끗함",
        state: ["BEST"],
        colors: [{
            color: "화이트",
            colorCode: "white"
        }],
        contract: [
            {
                period: "6년약정",
                price: "36900",
                salePrice: "31900"
            },
            {
                period: "3년약정",
                price: "38900",
                salePrice: "33900"
            }
        ],
        component: [
            "선택안함",
            "조리수기"
        ],
        manageType: ['방문관리'],
        code: "CHP-6310L",
        category: "냉온정수기",
        rentalPrice: 31900,
        price: 1500000,
        rental: [
            "일시불 1,500,000원\n", 
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 2,296,800원"
        ]
    },
    {
        id: 12,
        title: "정수기",
        imgSrc: 'images/product/water_2.png',
        alt: "아이콘 얼음정수기",
        subText: "빠른 제빙 속도로 얼음을 늘 신선하게!",
        state: [
            "NEW",
            "BEST"
        ],
        colors: [
            {
                color: "아이스 화이트",
                colorCode: "#eaeaea"
            },
            {
                color: "아이스 블루",
                colorCode: "#ccd8e7"
            },
            {
                color: "아이스 핑크",
                colorCode: "#eeddd9"
            },
            {
                color: "아이스 그레이",
                colorCode: "#818181"
            }
        ],
        contract: [
            {
                period: "6년약정",
                price: "48900",
                salePrice: "42900"
            },
            {
                period: "3년약정",
                price: "52900",
                salePrice: "46900"
            }
        ],
        component: [],
        manageType: ['방문관리'],
        code: "CPI-7400N_WT",
        category: "얼음정수기",
        rentalPrice: 42900,
        price: 2170000,
        rental: [
            "일시불 2,170,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 3,088,800원"
        ]
    },
    {
        id: 13,
        title: "정수기",
        imgSrc: 'images/product/water_3.png',
        alt: "엘리트 정수기",
        subText: "똑똑하게, 필요한 모든 것을 담은 정수기",
        state: ["NEW"],
        colors: [{
            color: "포슬린 화이트",
            colorCode: "#e7e7e7"
        }],
        contract: [
            {
                period: "6년약정",
                price: "33900",
                salePrice: "29900"
            },
            {
                period: "3년약정",
                price: "35900",
                salePrice: "31900"
            }
        ],
        component: [],
        manageType: ['방문관리'],
        code: "CP-6340L",
        category: "냉정수기",
        rentalPrice: 29900,
        price: 1200000,
        rental: [
            "일시불 1,200,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 2,152,800원"
        ]
    },
    {
        id: 14,
        title: "정수기",
        imgSrc: 'images/product/water_4.png',
        alt: "프라임 스탠드",
        subText: "넉넉한 용량에 강화된 위생까지",
        state: [
            "NEW",
            "프로모션 진행중"
        ],
        colors: [{
            color: "오트밀 베이지",
            colorCode: "#e6d2cd"
        }],
        contract: [
            {
                period: "6년약정",
                price: "53900",
                salePrice: "47900"
            },
            {
                period: "3년약정",
                price: "57900",
                salePrice: "51900"
            }
        ],
        component: [],
        manageType: ["방문관리"],
        code: "CHP-5720L",
        category: "냉온정수기",
        rentalPrice: 47900,
        price: 2040000,
        rental: [
            "일시불 2,040,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 3,448,800원"
        ]
    },
    {
        id: 15,
        title: "정수기",
        imgSrc: 'images/product/water_5.png',
        alt: "아이콘 정수기 2",
        subText: "콤팩트한 사이즈는 그대로, 관리와 편의 기능은 업그레이드",
        state: [
            "BEST",
            "프로모션 진행중"
        ],
        colors: [
            {
                color: "스노우 화이트",
                colorCode: "#f2f2f2"
            },
            {
                color: "트러플 실버",
                colorCode: "#a5a5a5"
            },
            {
                color: "페블 그레이",
                colorCode: "#7a7a7a"
            },
            {
                color: "민트 그린",
                colorCode: "#6ed0bd"
            },
            {
                color: "미네랄 블루",
                colorCode: "#86a4e0",
            },
            {
                color: "블러썸 핑크",
                colorCode: "#efdad7"
            }
        ],
        contract: [
            {
                period: "6년약정",
                price: "32900",
                salePrice: "27900"
            },
            {
                period: "3년약정",
                price: "36900",
                salePrice: "31900"
            }
        ],
        component: [],
        manageType: [
            "자가관리",
            "방문관리"
        ],
        code: "CP-7211N",
        category: "냉정수기",
        rentalPrice: 27900,
        price: 1140000,
        rental: [
            "일시불 1,140,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 2,152,800원"
        ]
    },
    {
        id: 16,
        title: "정수기",
        imgSrc: 'images/product/water_6.png',
        alt: "빌트인 정수기",
        subText: "15cm 공간으로 깨끗한 직수를 풍부하게!",
        state: [],
        colors: [
            {
                color: "화이트",
                colorCode: "white"
            }
        ],
        contract: [
            {
                period: "3년약정",
                price: "",
                salePrice: "23800"
            }
        ],
        component: [
            "선택안함",
            "조리수기"
        ],
        manageType: ["방문관리"],
        code: "P-150N",
        category: "정수전용",
        rentalPrice: 23800,
        price: 740000,
        rental: [
            "일시불 740,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "3년(의무사용기간) 856,800원 / 5년(소유권이전) 1,428,000원"
        ]
    },
    {
        id: 21,
        title: "청정기",
        imgSrc: 'images/product/ac_1.png',
        alt: "벽걸이 공기청정기",
        subText: "넓은 공간을 청정하고 초미세먼지 수치를 실시간으로 확인!",
        state: [],
        colors: [{
            color: "화이트",
            colorCode: "white"
        }],
        contract: [
            {
                period: "3년약정",
                price: "",
                salePrice: "53900"
            }
        ],
        component: [
            "선택안함",
            "미세먼지필터",
            "이중탈취필터"
        ],
        manageType: ['방문관리'],
        code: "AP-3519A",
        category: "공기청정기",
        rentalPrice: 42900,
        price: 2400000,
        rental: [
            "일시불 2,400,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 3,088,800원"
        ]
    },
    {
        id: 22,
        title: "청정기",
        imgSrc: 'images/product/ac_2.png',
        alt: "멀티액션 공기청정기",
        subText: "실시간으로 초미세먼지 수치를 확인!",
        state: ["프로모션 진행중"],
        colors: [{
            color: "화이트",
            colorCode: "white"
        }],
        contract: [
            {
                period: "6년약정",
                price: "37900",
                salePrice: "33900"
            },
            {
                period: "3년약정",
                price: "40900",
                salePrice: "36900"
            }
        ],
        component: [
            "선택안함",
            "이중탈취필터",
            "매연필터",
            "새집전용필터",
            "미세먼지필터"
        ],
        manageType: ['방문관리'],
        code: "AP-1519M",
        category: "공기청정기",
        rentalPrice: 33900,
        price: 970000,
        rental: [
            "일시불 970,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 2,440,800원"
        ]
    },
    {
        id: 23,
        title: "청정기",
        imgSrc: 'images/product/ac_3.png',
        alt: "콰트로파워 공기청정기",
        subText: "넓은 공간까지 빈틈없이 구석구석 청정!",
        state: [
            "BEST",
            "프로모션 진행중",   
        ],
        colors: [{
            color: "화이트",
            colorCode: "white"
        }],
        contract: [
            {
                period: "6년약정",
                price: "56900",
                salePrice: "52900"
            },
            {
                period: "3년약정",
                price: "59900",
                salePrice: "55900"
            }
        ],
        component: [
            "선택안함",
            "이중탈취필터",
            "매연필터",
            "새집전용필터",
        ],
        manageType: ['방문관리'],
        code: "AP-3018B",
        category: "가습기",
        rentalPrice: 52900,
        price: 1650000,
        rental: [
            "일시불 1,650,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n",
            "6년(의무사용기간) 3,808,800원"
        ]
    },
    {
        id: 24,
        title: "청정기",
        imgSrc: 'images/product/ac_4.png',
        alt: "사계절 의류청정기 더블케어",
        subText: "의류 케어에서 공간 케어까지 두 배로 넓어진 능력",
        state: ["BEST"],
        colors: [{
            color: "화이트",
            colorCode: "white"
        }],
        contract: [
            {
                period: "6년약정",
                price: "",
                salePrice: "40900"
            },
            {
                period: "3년약정",
                price: "",
                salePrice: "44900"
            }
        ],
        component: [
            "선택안함",
            "이중탈취필터",
            "미세먼지필터",
            "황사필터",
        ],
        manageType: [
            "자가관리",
            '케어서비스',
        ],
        code: "FAD-02S",
        category: "의류청정기",
        rentalPrice: 53900,
        price: 1620000,
        rental: [
            "일시불 1,620,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "3년(의무사용기간) 1,940,400원 / 5년(소유권이전) 3,234,000원"
        ]
    },
    {
        id: 25,
        title: "청정기",
        imgSrc: 'images/product/ac_5.png',
        alt: "아이콘 공기청정기",
        subText: "감각적인 소재와 디자인으로 조화로운 인테리어 공기청정기!",
        state: [
            "BEST",
            "프로모션 진행중"
        ],
        colors: [
            {
                color: "샌드 베이지",
                colorCode: "#b4a096"
            },
            {
                color: "라이트 웜 그레이",
                colorCode: "#c6c6c6"
            }
        ],
        contract: [
            {
                period: "6년약정",
                price: "32900",
                salePrice: "28900"
            },
            {
                period: "3년약정",
                price: "35900",
                salePrice: "31900"
            }
        ],
        component: [
            "선택안함",
            "이중탈취필터",
            "미세먼지필터",
            "매연필터",
            "새집전용필터"
        ],
        manageType: ["방문관리"],
        code: "AP-1019D",
        category: "공기청정기",
        rentalPrice: 28900,
        price: 970000,
        rental: [
            "일시불 970,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 2,080,800원"
        ]
    },
    {
        id: 26,
        title: "청정기",
        imgSrc: 'images/product/ac_6.png',
        alt: "듀얼클린 가습공기청정기",
        subText: "청정한 공기부터 위생적인 가습까지 하나로!",
        state: ["BEST"],
        colors: [{
            color: "화이트",
            colorCode: "white"
        }],
        contract: [
            {
                period: "6년약정",
                price: "",
                salePrice: "27400"
            },
            {
                period: "3년약정",
                price: "",
                salePrice: "30400"
            }
        ],
        component: [
            "선택안함",
            "이중탈취필터",
            "미세먼지필터",
        ],
        manageType: [
            "자가관리",
            "방문관리",
        ],
        code: "APMS-1020A",
        category: "가습공기청정기",
        rentalPrice: 27400,
        price: 1200000,
        rental: [
            "일시불 1,200,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 1,972,800원"
        ]
    },
    {
        id: 31,
        title: "비데/연수기",
        imgSrc: 'images/product/bc_1.png',
        alt: "스스로케어 비데(저수압 특화)",
        subText: "스스로 케어하고, 약한 수압도 문제 없는 저수압용 비데",
        state: [
            "NEW",
            "프로모션 진행중"
        ],
        colors: [{
            color: "화이트",
            colorCode: "white"
        }],
        contract: [
            {
                period: "6년약정",
                price: "26900",
                salePrice: "23400"
            },
            {
                period: "3년약정",
                price: "28900",
                salePrice: "25400"
            }
        ],
        component: [],
        manageType: ["방문관리"],
        code: "BAS39-A",
        category: "비데",
        rentalPrice: 23400,
        price: 810000,
        rental: [
            "일시불 810,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 1,684,800원"
        ]
    },
    {
        id: 32,
        title: "비데/연수기",
        imgSrc: 'images/product/bc_2.png',
        alt: "더블케어 플러스 비데",
        subText: "완벽한 위생에 자동 개폐로 편의성까지!",
        state: ["프로모션 진행중"],
        colors: [{
            color: "화이트",
            colorCode: "white"
        }],
        contract: [
            {
                period: "6년약정",
                price: "30400",
                salePrice: "26900"
            },
            {
                period: "3년약정",
                price: "32400",
                salePrice: "28900"
            }
        ],
        component: [],
        manageType: [
            "자가관리",
            "방문관리"
        ],
        code: "BAS38-A",
        category: "비데",
        rentalPrice: 26900,
        price: 970000,
        rental: [
            "일시불 970,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 1,936,800원"
        ]
    },
    {
        id: 33,
        title: "비데/연수기",
        imgSrc: 'images/product/bc_3.png',
        alt: "스타일케어 비데",
        subText: "욕실을 더욱 세련되게, 콤팩트하고 스타일리시하게",
        state: [
            "BEST",
            "프로모션 진행중"    
        ],
        colors: [
            {
                color: "화이트&인디언핑크",
                colorCode: "white",
                colorClass: "whiteNpink"
            },
        ],
        contract: [
            {
                period: "6년약정",
                price: "27400",
                salePrice: "23900"
            },
            {
                period: "3년약정",
                price: "29400",
                salePrice: "25900"
            }
        ],
        component: [],
        manageType: ["방문관리"],
        code: "BAS31-A",
        category: "비데",
        rentalPrice: 23900,
        price: 850000,
        rental: [
            "일시불 850,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 1,720,800원"
        ]
    },
    {
        id: 34,
        title: "비데/연수기",
        imgSrc: 'images/product/bc_4.png',
        alt: "프라임 비데 A",
        subText: "맞춤 기능이 있는 기본에 강한 비데",
        state: ["프로모션 진행중"],
        colors: [{
            color: "화이트",
            colorCode: "white"
        }],
        contract: [
            {
                period: "6년약정",
                price: "23900",
                salePrice: "20400"
            },
            {
                period: "3년약정",
                price: "25900",
                salePrice: "22400"
            }
        ],
        component: [],
        manageType: ["방문관리"],
        code: "BA36-A",
        category: "비데",
        rentalPrice: 20400,
        price: 760000,
        rental: [
            "일시불 760,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 1,468,800원"
        ]
    },
    {
        id: 35,
        title: "비데/연수기",
        imgSrc: 'images/product/bc_5.png',
        alt: "연수기(BB15-A)",
        subText: "깨끗하고 윤기있는 피부, 365일 부드럽게 케어",
        state: ["프로모션 진행중"],
        colors: [{
            color: "화이트",
            colorCode: "white"
        }],
        contract: [
            {
                period: "6년약정",
                price: "30900",
                salePrice: "26900"
            },
            {
                period: "3년약정",
                price: "33900",
                salePrice: "29900"
            }
        ],
        component: [
            "선택안함",
            "아로마비타민샤워헤드"
        ],
        manageType: [
            "스탠드",
            "벽걸이"
        ],
        code: "BB15-A",
        category: "연수기",
        rentalPrice: 26900,
        price: 810000,
        rental: [
            "일시불 810,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "6년(의무사용기간) 1,936,800원"
        ]
    },
    {
        id: 36,
        title: "비데/연수기",
        imgSrc: 'images/product/bc_6.png',
        alt: "프라임 비데",
        subText: "사용자를 생각한 다양한 세정으로 깔끔하게",
        state: ["온라인전용"],
        colors: [{
            color: "화이트",
            colorCode: "white"
        }],
        contract: [
            {
                period: "3년약정",
                price: "",
                salePrice: "20900"
            }
        ],
        component: [],
        manageType: ["방문관리"],
        code: "BA20-C",
        category: "비데",
        rentalPrice: 20900,
        price: 650000,
        rental: [
            "일시불 650,000원\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "3년(의무사용기간) 752,400원 / 5년(소유권이전) 1,254,000원"
        ]
    },
    {
        id: 41,
        title: "매트리스/프레임",
        imgSrc: 'images/product/sc_1.png',
        alt: "탑퍼교체 매트리스 하이브리드4",
        subText: "클라우드 메모리폼과 AD7 System으로 내 몸에 맞춘 편안함",
        state: [
            "BEST",
            "프로모션 진행중"
        ],
        colors: [],
        size: [
            "킹(K)",
            "퀸(Q)",
            "슈퍼싱글(SS)"
        ],
        hardness: [
            "중간(Medium)",
            "단단함(Hard)"
        ],
        contract: [
            {
                period: "7년약정 탑퍼교체",
                price: "34900",
                salePrice: "29900"
            },
        ],
        component: [],
        manageType: [
            "케어서비스 프리",
            "케어서비스"
        ],
        code: "CMSS-PR04M_V2",
        category: "매트리스",
        rentalPrice: 29900,
        price: 1936000,
        rental: [
            "일시불 1,936,000\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "7년(의무사용기간) 2,511,600원"
        ]
    },
    {
        id: 42,
        title: "매트리스/프레임",
        imgSrc: 'images/product/sc_2.png',
        alt: "스마트 매트리스 S7",
        subText: "나에게 딱 맞는 수면 환경의 혁신",
        state: [
            "NEW",
            "BEST",
            "프로모션 진행중"
        ],
        colors: [],
        size: [
            "킹(K)",
            "퀸(Q)",
            "슈퍼싱글(SS)"
        ],
        hardness: ["스마트 경도 컨트롤"],
        contract: [
            {
                period: "7년약정 커버교체",
                price: "75900",
                salePrice: "65900"
            },
        ],
        component: [],
        manageType: [
            "케어서비스 프리",
            "케어서비스"
        ],
        code: "CMSS-AS03",
        category: "매트리스",
        rentalPrice: 19900,
        price: 4350000,
        rental: [
            "일시불 4,350,000\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "7년(의무사용기간) 1,671,600원"
        ]
    },
    {
        id: 43,
        title: "매트리스/프레임",
        imgSrc: 'images/product/sc_3.png',
        alt: "마이 프레임 (사이드형)",
        subText: "내 마음대로 고르고 디자인하는 나만의 침대",
        state: [
            "NEW",
            "프로모션 진행중"
        ],
        colors: [
            {
                color: "민트 그린",
                colorCode: "#91a49c"
            },
            {
                color: "오트밀 베이지",
                colorCode: "#b5a8a1"
            },
            {
                color: "크림 아이보리",
                colorCode: "#e2deda"
            },
            {
                color: "차콜 그레이",
                colorCode: "#737373"
            },
            {
                color: "모카 브라운",
                colorCode: "#927963"
            },
        ],
        size: [
            "킹(K)",
            "퀸(Q)",
            "슈퍼싱글(SS)"
        ],
        hardness: [],
        head: [
            "플랫",
            "볼륨"
        ],
        contract: [
            {
                period: "7년약정",
                price: "",
                salePrice: "24900"
            },
            {
                period: "6년약정",
                price: "",
                salePrice: "28900"
            },
            {
                period: "5년약정",
                price: "",
                salePrice: "33900"
            },
        ],
        component: [],
        manageType: [],
        code: "CFSS-FP02S_IV",
        category: "프레임",
        rentalPrice: 24900,
        price: 1850000,
        rental: [
            "일시불 1,850,000\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "7년(의무사용기간) 2,091,600원"
        ]
    },
    {
        id: 44,
        title: "매트리스/프레임",
        imgSrc: 'images/product/sc_4.png',
        alt: "탑퍼교체 매트리스 프라임",
        subText: "신체 부위별로 최적화된 편안함, 컨투어 5존 폼 탑퍼",
        state: [
            "BEST",
            "프로모션 진행중"
        ],
        colors: [],
        size: [
            "라지킹(LK)",
            "킹(K)",
            "퀸(Q)",
            "슈퍼싱글(SS)"
        ],
        hardness: [
            "중간(Medium)",
            "단단함(Hard)"
        ],
        contract: [
            {
                period: "7년약정 탑퍼교체",
                price: "24900",
                salePrice: "19900"
            },
        ],
        component: [],
        manageType: [
            "케어서비스 프리",
            "케어서비스"
        ],
        code: "CMSS-S03M",
        category: "매트리스",
        rentalPrice: 65900,
        price: 1530000,
        rental: [
            "일시불 1,530,000\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "7년(의무사용기간) 5,535,600원"
        ]
    },
    {
        id: 45,
        title: "매트리스/프레임",
        imgSrc: 'images/product/sc_5.png',
        alt: "커버교체 원바디 2 매트리스",
        subText: "매트리스와 프레임, 올인원으로 컴팩트하게",
        state: [
            "NEW",
            "프로모션 진행중"
        ],
        colors: [
            {
                color: "베이지",
                colorCode: "#d5c4af"
            },
            {
                color: "차콜",
                colorCode: "#575149"
            }
        ],
        size: [
            "퀸(Q)",
            "슈퍼싱글(SS)"
        ],
        hardness: [
            "단단함(Hard)"
        ],
        contract: [
            {
                period: "7년약정 커버교체",
                price: "23900",
                salePrice: "18900"
            },
        ],
        component: [],
        manageType: [
            "케어서비스 프리",
            "케어서비스"
        ],
        code: "CMSS-OB03_BG",
        category: "매트리스",
        rentalPrice: 18900,
        price: 1430000,
        rental: [
            "일시불 1,430,000\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "7년(의무사용기간) 1,587,600원"
        ]
    },
    {
        id: 46,
        title: "매트리스/프레임",
        imgSrc: 'images/product/sc_6.png',
        alt: "마이 프레임 (기본형)",
        subText: "내 마음대로 고르고 디자인하는 나만의 침대",
        state: [
            "NEW",
            "프로모션 진행중"
        ],
        colors: [
            {
                color: "민트 그린",
                colorCode: "#91a49c"
            },
            {
                color: "오트밀 베이지",
                colorCode: "#b5a8a1"
            },
            {
                color: "크림 아이보리",
                colorCode: "#e2deda"
            },
            {
                color: "차콜 그레이",
                colorCode: "#737373"
            },
            {
                color: "모카 브라운",
                colorCode: "#927963"
            },
        ],
        size: [
            "킹(K)",
            "퀸(Q)",
            "슈퍼싱글(SS)"
        ],
        hardness: [],
        head: [
            "플랫",
            "볼륨"
        ],
        contract: [
            {
                period: "7년약정",
                price: "",
                salePrice: "20900"
            },
            {
                period: "6년약정",
                price: "",
                salePrice: "23900"
            },
            {
                period: "5년약정",
                price: "",
                salePrice: "27900"
            },
        ],
        component: [],
        manageType: [
            "케어서비스 프리",
            "케어서비스"
        ],
        code: "CFSS-FP01_GN",
        category: "프레임",
        rentalPrice: 20900,
        price: 1600000,
        rental: [
            "일시불 1,600,000\n",
            "렌탈료 총합(렌탈등록비 할인혜택 적용, 프로모션 적용 기준)\n", 
            "7년(의무사용기간) 1,755,600원"
        ]
    },
]

window.products = products;