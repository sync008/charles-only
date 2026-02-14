if (typeof flashcardData === 'undefined') var flashcardData = {};

Object.assign(flashcardData, {
    // MODE OF TRANSPORTATION
    "Mode of Transportation": [
        { korean: "기차", romanization: "gicha", meaning: "Train" },
        { korean: "자전거", romanization: "jajeongeo", meaning: "Bicycle" },
        { korean: "비행기", romanization: "bihaenggi", meaning: "Airplane" },
        { korean: "지하철", romanization: "jihacheol", meaning: "Subway" },
        { korean: "자동차", romanization: "jadongcha", meaning: "Car" },
        { korean: "배", romanization: "bae", meaning: "Boat/Ship" },
        { korean: "마을 버스", romanization: "maeul beoseu", meaning: "Shuttle bus (in-town)" },
        { korean: "시내버스", romanization: "sinaebeoseu", meaning: "Intercity bus" },
        { korean: "시외/고속버스", romanization: "siwoe/gosokbeoseu", meaning: "Express bus" },
        { korean: "버스터미널", romanization: "beoseu teomineol", meaning: "Bus terminal" },
        { korean: "택시 승강장", romanization: "taeksi seunggangjiang", meaning: "Taxi stop" },
        { korean: "기차역", romanization: "gichayeok", meaning: "Train station" },
        { korean: "지하철역", romanization: "jihacheol yeok", meaning: "Subway station" }
    ],

    "Traffic Conditions": [
        { korean: "교통 상황", romanization: "gyotong sanghwang", meaning: "traffic conditions" },
        { korean: "출근 시간", romanization: "chulgeun sigan", meaning: "clock-in time" },
        { korean: "퇴근 시간", romanization: "toegeun sigan", meaning: "clock-out time" },
        { korean: "출퇴근 시간", romanization: "chultogeun sigan", meaning: "commuting hours" },
        { korean: "차가 복잡하다/막히다", romanization: "chaga bokjaphada/makhida", meaning: "traffic jam" }
    ],

    "Transport": [
        { korean: "이동", romanization: "idong", meaning: "transport" },
        { korean: "타다", romanization: "tada", meaning: "to ride" },
        { korean: "타고 가다", romanization: "tago gada", meaning: "to have a ride" },
        { korean: "타고 오다", romanization: "tago oda", meaning: "to come by" },
        { korean: "걷다", romanization: "geotda", meaning: "to walk" },
        { korean: "걸어가다", romanization: "georeogada", meaning: "to go on foot" },
        { korean: "걸어오다", romanization: "georeooda", meaning: "to come on foot" },
        { korean: "내리다", romanization: "naerida", meaning: "to get-off" },
        { korean: "갈아타다/환승하다", romanization: "garatada/hwanseunghada", meaning: "to transfer" },
        { korean: "지나다", romanization: "jinada", meaning: "to pass" },
    ],

    "Fare and Payment": [
        { korean: "교통카드", romanization: "gyotongkadeu", meaning: "T-money" },
        { korean: "표", romanization: "pyo", meaning: "ticket" },
        { korean: "현금", romanization: "hyeongeum", meaning: "cash" },
        { korean: "전화", romanization: "jeonhwa", meaning: "telephone" },
        { korean: "전화", romanization: "jeonhwa", meaning: "telephone" },
        { korean: "휴대전화/휴대폰", romanization: "hyudae jeonhwa/hyudae pon", meaning: "cell phone" },
        { korean: "스마트폰", romanization: "seumateupon", meaning: "smart phone" },
        { korean: "인터넷 전화", romanization: "inteonet jeonhwa", meaning: "internet phone" },
        { korean: "전화를 걸다", romanization: "jeonhwareul geolda", meaning: "to make a call" },
        { korean: "전화가 오다", romanization: "jeonhwaga oda", meaning: "the phone is ringing" },
        { korean: "전화를 받다", romanization: "jeonhwareul batda", meaning: "to answer the phone" },
        { korean: "(전화)통화하다", romanization: "(jeonhwa) tonghwahada", meaning: "to be on the phone" },
        { korean: "전화를 바꾸다", romanization: "jeonhwareul bakkuda", meaning: "to transfer to (someone) to (someone else)" },
        { korean: "전화를 잘못 걸다", romanization: "jeonhwareul jalmot geolda", meaning: "to call the wrong number" },
        { korean: "전화를 끊다", romanization: "jeonhwareul kkeunta", meaning: "to hang up the phone" },
        { korean: "통화 중이다", romanization: "tonghwa jung-ida", meaning: "the line is busy" },
        { korean: "휴대전화를 켜다", romanization: "hyudaejeonhwa-reul kyeoda", meaning: "to turn on the phone" },
        { korean: "휴대전화를 끄다", romanization: "hyudaejeonhwa-reul kkeuda", meaning: "to turn off the phone" },
        { korean: "문자를 보내다", romanization: "munjareul bonaeda", meaning: "to send a text message" },
        { korean: "문자를 확인하다", romanization: "munjareul hwaginhada", meaning: "to check a text message" }
    ],

    "Signs for public places" : [
        { korean: "화장실", romanization: "hwajangsil", meaning: "restroom" },
        { korean: "공중전화", romanization: "gongjung jeonhwa", meaning: "public phone" },
        { korean: "주차장", romanization: "juchajang", meaning: "parking lot" },
        { korean: "비상구", romanization: "bisanggu", meaning: "exit" },
        { korean: "지하철역", romanization: "jihacheol yeok", meaning: "subway station" },
        { korean: "기차역", romanization: "gicha yeok", meaning: "train station" },
        { korean: "택시 정류장", romanization: "taeksi jeongnyujang", meaning: "taxi stand" },
        { korean: "버스 정류장", romanization: "beoseu jeongnyujang", meaning: "bus stop" },
        { korean: "엘리베이터", romanization: "ellibeiteo", meaning: "elevator" },
        { korean: "에스컬레이터", romanization: "eseukeoleteo", meaning: "escalator" },
        { korean: "자동차 전용", romanization: "jadongcha jeonyong", meaning: "motorways" },
        { korean: "자전거 전용", romanization: "jajeongeo jeonyong", meaning: "bike lanes" },
        { korean: "노약자석", romanization: "noyakjaseok", meaning: "handicapped seating" }
    ],

    "Tourism": [
        { korean: "산", romanization: "san", meaning: "mountain" },
        { korean: "동굴", romanization: "donggul", meaning: "cave" },
        { korean: "폭포", romanization: "pokpo", meaning: "fall" },
        { korean: "호수", romanization: "hosu", meaning: "lake" },
        { korean: "강", romanization: "gang", meaning: "river" },
        { korean: "바다", romanization: "bada", meaning: "sea" },
        { korean: "섬", romanization: "seom", meaning: "island" },
        { korean: "온천", romanization: "oncheon", meaning: "hot spring" },
        { korean: "유적지", romanization: "yujeokji", meaning: "historic site" },
        { korean: "민속촌", romanization: "minsokchon", meaning: "folk village" },
        { korean: "놀이공원", romanization: "nori gongwon", meaning: "amusement park" },
        { korean: "드라마 촬영지", romanization: "deurama chwalyeongji", meaning: "film (K-drama) shooting location" },
        { korean: "아름답다", romanization: "areumdapda", meaning: "beautiful" },
        { korean: "유명하다", romanization: "yumyeonghada", meaning: "famous" },
        { korean: "경치가 좋다", romanization: "gyeongchiga jota", meaning: "to have a great scenery" },
        { korean: "사람들이 친절하다", romanization: "saramdeuri chinjeolhada", meaning: "people are kind/nice" }
    ],

    "Planning a Trip and Activities": [
        { korean: "여행을 계획하다", romanization: "yeohaengeul gyehoekhada", meaning: "to plan a trip" },
        { korean: "여행을 준비하다", romanization: "yeohaengeul junbihada", meaning: "to prepare for a trip" },
        { korean: "표를 사다", romanization: "pyoreul sada", meaning: "to buy tickets" },
        { korean: "숙소를 예약하다", romanization: "suksoreul yeyakhada", meaning: "to book accommodations" },
        { korean: "짐을 싸다", romanization: "jimeul ssada", meaning: "to pack" },
        { korean: "출발하다", romanization: "chulbalhada", meaning: "to depart" },
        { korean: "도착하다", romanization: "dochakhada", meaning: "to arrive" },
        { korean: "짐을 풀다", romanization: "jimeul pulda", meaning: "to unpack" },
        { korean: "묵다", romanization: "mukda", meaning: "to stay" },
        { korean: "박물관을 관람하다", romanization: "bangmulgwan-eul gwallamhada", meaning: "to look around a museum" },
        { korean: "축제를 구경하다", romanization: "chukjereul gugyeonghada", meaning: "to go for a festival" },
        { korean: "기념품을 사다", romanization: "ginyeompum-eul sada", meaning: "to buy souvenirs" }
    ],

    "Characteristics of the Cities": [
        { korean: "인구가 많다", romanization: "inguga manta", meaning: "heavily populated" },
        { korean: "인구가 적다", romanization: "inguga jeokda", meaning: "thinly populated" },
        { korean: "복잡하다", romanization: "bokjapada", meaning: "crowded" },
        { korean: "한적하다", romanization: "hanjeokada", meaning: "tranquil/calm" },
        { korean: "교통이 편리하다", romanization: "gyotongi pyeollihada", meaning: "transportation system is convenient" },
        { korean: "교통이 불편하다", romanization: "gyotongi bulpyeonhada", meaning: "transportation system is inconvenient" },
        { korean: "시끄럽다", romanization: "sikkeureapda", meaning: "noisy" },
        { korean: "조용하다", romanization: "joyonghada", meaning: "quiet" },
        { korean: "공기가 맑다", romanization: "gonggi-ga malkda", meaning: "the air is fresh" },
        { korean: "유명하다", romanization: "yumyeonghada", meaning: "famous" },
        { korean: "친절하다", romanization: "chinjeolhada", meaning: "kind/nice" }
    ],
});