// ALL FLASHCARD DATA - EPS TOPIK BOOK 1 AND 2
// This object contains all the Korean words organized by category

const flashcardData = {
    "Reading Practice (Beginner)": [
        { 
            korean: "주말에 잘 보내세요.", 
            romanization: "jumal-e jal bonaeseyo", 
            meaning: "Have a great weekend!",
            breakdown: [
                { word: "주말", dictForm: "주말", role: "noun", meaning: "weekend" },
                { word: "잘", dictForm: "잘", role: "adverb", meaning: "well" },
                { word: "보내세요", dictForm: "보내다", role: "verb", meaning: "to spend (time)", conjugation: "보내다 → 보내세요 (polite imperative/request form)" }
            ]
        },
        { 
            korean: "저는 한국어를 공부해요.", 
            romanization: "jeoneun hangugeo-reul gongbuhaeyo", 
            meaning: "I'm studying Korean language.",
            breakdown: [
                { word: "저", dictForm: "저", role: "pronoun", meaning: "I (humble)" },
                { word: "한국어", dictForm: "한국어", role: "noun", meaning: "Korean language", explanation: "한국 (Korea) + 어 (language suffix)" },
                { word: "공부해요", dictForm: "공부하다", role: "verb", meaning: "to study", conjugation: "공부하다 → 공부해요 (polite present tense)" }
            ]
        },
        { 
            korean: "내일 약속이 있어요.", 
            romanization: "naeil yaksok-i isseoyo", 
            meaning: "I have an appointment tomorrow.",
            breakdown: [
                { word: "내일", dictForm: "내일", role: "noun", meaning: "tomorrow" },
                { word: "약속", dictForm: "약속", role: "noun", meaning: "appointment/promise" },
                { word: "있어요", dictForm: "있다", role: "verb", meaning: "to have/exist", conjugation: "있다 → 있어요 (polite present tense)" }
            ]
        },
        { 
            korean: "한국어 공부는 어렵지만 재미있어요.", 
            romanization: "hangugeo gongbuneun eoryeopjiman jaemiisseoyo", 
            meaning: "Studying Korean is difficult but fun.",
            breakdown: [
                { word: "한국어", dictForm: "한국어", role: "noun", meaning: "Korean language" },
                { word: "공부", dictForm: "공부", role: "noun", meaning: "studying" },
                { word: "어렵지만", dictForm: "어렵다", role: "adjective", meaning: "to be difficult", conjugation: "어렵다 + 지만 (but) → 어렵지만" },
                { word: "재미있어요", dictForm: "재미있다", role: "adjective", meaning: "to be fun/interesting", conjugation: "재미있다 → 재미있어요 (polite present tense)" }
            ]
        },
        { 
            korean: "오늘은 수업이 있어요.", 
            romanization: "oneureun sueop-i isseoyo", 
            meaning: "I have class today.",
            breakdown: [
                { word: "오늘", dictForm: "오늘", role: "noun", meaning: "today" },
                { word: "수업", dictForm: "수업", role: "noun", meaning: "class/lesson" },
                { word: "있어요", dictForm: "있다", role: "verb", meaning: "to have/exist", conjugation: "있다 → 있어요 (polite present tense)" }
            ]
        },
        { 
            korean: "교실이 깨끗해요.", 
            romanization: "gyosil-i kkaekkeutaeyo", 
            meaning: "The classroom is clean.",
            breakdown: [
                { word: "교실", dictForm: "교실", role: "noun", meaning: "classroom" },
                { word: "깨끗해요", dictForm: "깨끗하다", role: "adjective", meaning: "to be clean", conjugation: "깨끗하다 → 깨끗해요 (polite present tense)" }
            ]
        },
        { 
            korean: "시험이 어려웠어요.", 
            romanization: "siheom-i eoryeowosseoyo", 
            meaning: "The exam was difficult.",
            breakdown: [
                { word: "시험", dictForm: "시험", role: "noun", meaning: "exam/test" },
                { word: "어려웠어요", dictForm: "어렵다", role: "adjective", meaning: "to be difficult", conjugation: "어렵다 → 어려웠어요 (polite past tense: irregular ㅂ → 어려우 + 었어요)" }
            ]
        },
        { 
            korean: "제 취미는 음악 듣기예요.", 
            romanization: "je chwimineun eumak deutgieyeyo", 
            meaning: "My hobby is listening to music.",
            breakdown: [
                { word: "제", dictForm: "저의", role: "pronoun", meaning: "my (humble)", explanation: "저의 contracted to 제" },
                { word: "취미", dictForm: "취미", role: "noun", meaning: "hobby" },
                { word: "음악", dictForm: "음악", role: "noun", meaning: "music" },
                { word: "듣기", dictForm: "듣다", role: "verb", meaning: "to listen", conjugation: "듣다 → 듣기 (noun form: listening)" },
                { word: "예요", dictForm: "이다", role: "copula", meaning: "to be", conjugation: "이다 → 예요 (after vowel-ending noun)" }
            ]
        },
        { 
            korean: "저는 그림을 그려요.", 
            romanization: "jeoneun geurimeul geuryeoyo", 
            meaning: "I draw pictures.",
            breakdown: [
                { word: "저", dictForm: "저", role: "pronoun", meaning: "I (humble)" },
                { word: "그림", dictForm: "그림", role: "noun", meaning: "picture/drawing" },
                { word: "그려요", dictForm: "그리다", role: "verb", meaning: "to draw", conjugation: "그리다 → 그려요 (polite present tense: irregular ending)" }
            ]
        },
        { 
            korean: "아침에 일찍 일어나요.", 
            romanization: "achim-e iljjik ireonayo", 
            meaning: "I wake up early in the morning.",
            breakdown: [
                { word: "아침", dictForm: "아침", role: "noun", meaning: "morning" },
                { word: "일찍", dictForm: "일찍", role: "adverb", meaning: "early" },
                { word: "일어나요", dictForm: "일어나다", role: "verb", meaning: "to wake up/get up", conjugation: "일어나다 → 일어나요 (polite present tense)" }
            ]
        },
        { 
            korean: "학교는 집에서 가까워요.", 
            romanization: "hakgyoneun jib-eseo gakkawayo", 
            meaning: "The school is close to my house.",
            breakdown: [
                { word: "학교", dictForm: "학교", role: "noun", meaning: "school" },
                { word: "집", dictForm: "집", role: "noun", meaning: "house/home" },
                { word: "가까워요", dictForm: "가깝다", role: "adjective", meaning: "to be close/near", conjugation: "가깝다 → 가까워요 (irregular ㅂ → 가까우 + 어요)" }
            ]
        },
        { 
            korean: "선생님 말씀을 잘 들어요.", 
            romanization: "seonsaengnim malsseumeul jal deureoyo", 
            meaning: "I listen to the teacher well.",
            breakdown: [
                { word: "선생님", dictForm: "선생님", role: "noun", meaning: "teacher (honorific)" },
                { word: "말씀", dictForm: "말씀", role: "noun", meaning: "words/speech (honorific form of 말)" },
                { word: "잘", dictForm: "잘", role: "adverb", meaning: "well" },
                { word: "들어요", dictForm: "듣다", role: "verb", meaning: "to listen/hear", conjugation: "듣다 → 들어요 (irregular ㄷ: ㄷ drops, 듣 → 들 + 어요)" }
            ]
        },
        { 
            korean: "도서관에서 공부해요.", 
            romanization: "doseogwan-eseo gongbuhaeyo", 
            meaning: "I study at the library.",
            breakdown: [
                { word: "도서관", dictForm: "도서관", role: "noun", meaning: "library" },
                { word: "공부해요", dictForm: "공부하다", role: "verb", meaning: "to study", conjugation: "공부하다 → 공부해요 (polite present tense)" }
            ]
        },
        { 
            korean: "날씨가 너무 더워요.", 
            romanization: "nalssiga neomu deoweoyo", 
            meaning: "The weather is very hot.",
            breakdown: [
                { word: "날씨", dictForm: "날씨", role: "noun", meaning: "weather" },
                { word: "너무", dictForm: "너무", role: "adverb", meaning: "very/too much" },
                { word: "더워요", dictForm: "덥다", role: "adjective", meaning: "to be hot (weather)", conjugation: "덥다 → 더워요 (irregular ㅂ: ㅂ drops → 더우 + 어요 → 더워요)" }
            ]
        },
        { 
            korean: "한국에 가고 싶어요.", 
            romanization: "hanguk-e gago sipeoyo", 
            meaning: "I want to go to Korea.",
            breakdown: [
                { word: "한국", dictForm: "한국", role: "noun", meaning: "Korea" },
                { word: "가고", dictForm: "가다", role: "verb", meaning: "to go", conjugation: "가다 → 가고 (stem + 고)" },
                { word: "싶어요", dictForm: "싶다", role: "auxiliary", meaning: "to want to", conjugation: "verb stem + 고 싶다 → 싶어요 (polite present tense)" }
            ]
        },
        { 
            korean: "한국에 일을 하고 싶어요.", 
            romanization: "hanguk-e ireul hago sipeoyo", 
            meaning: "I want to work in Korea.",
            breakdown: [
                { word: "한국", dictForm: "한국", role: "noun", meaning: "Korea" },
                { word: "일", dictForm: "일", role: "noun", meaning: "work" },
                { word: "하고", dictForm: "하다", role: "verb", meaning: "to do", conjugation: "하다 → 하고 (stem + 고)" },
                { word: "싶어요", dictForm: "싶다", role: "auxiliary", meaning: "to want to", conjugation: "verb stem + 고 싶다 → 싶어요 (polite present tense)" }
            ]
        },
        { 
            korean: "고양이가 소파를 긁어요.", 
            romanization: "goyangi-ga sopareul geulgeoyo", 
            meaning: "The cat scratches the sofa.",
            breakdown: [
                { word: "고양이", dictForm: "고양이", role: "noun", meaning: "cat" },
                { word: "소파", dictForm: "소파", role: "noun", meaning: "sofa" },
                { word: "긁어요", dictForm: "긁다", role: "verb", meaning: "to scratch", conjugation: "긁다 → 긁어요 (polite present tense)" }
            ]
        },
        { 
            korean: "학생이 의자에 앉아요.", 
            romanization: "haksaeng-i uija-e anjayo", 
            meaning: "The student sits on the chair.",
            breakdown: [
                { word: "학생", dictForm: "학생", role: "noun", meaning: "student" },
                { word: "의자", dictForm: "의자", role: "noun", meaning: "chair" },
                { word: "앉아요", dictForm: "앉다", role: "verb", meaning: "to sit", conjugation: "앉다 → 앉아요 (polite present tense)" }
            ]
        },
        { 
            korean: "선생님이 문제를 적어요.", 
            romanization: "seonsaengnim-i munjereul jeogeoyo", 
            meaning: "The teacher writes down the question.",
            breakdown: [
                { word: "선생님", dictForm: "선생님", role: "noun", meaning: "teacher" },
                { word: "문제", dictForm: "문제", role: "noun", meaning: "question/problem" },
                { word: "적어요", dictForm: "적다", role: "verb", meaning: "to write down", conjugation: "적다 → 적어요 (polite present tense)" }
            ]
        },
        { 
            korean: "저는 한국어 단어를 외워요.", 
            romanization: "jeoneun hangugeo daneoreul oeweoyo", 
            meaning: "I memorize Korean words.",
            breakdown: [
                { word: "저", dictForm: "저", role: "pronoun", meaning: "I (humble)" },
                { word: "한국어", dictForm: "한국어", role: "noun", meaning: "Korean language" },
                { word: "단어", dictForm: "단어", role: "noun", meaning: "word/vocabulary" },
                { word: "외워요", dictForm: "외우다", role: "verb", meaning: "to memorize", conjugation: "외우다 → 외워요 (polite present tense)" }
            ]
        },
        { 
            korean: "저는 고양이를 안았어요.", 
            romanization: "jeoneun goyangi-reul anasseoyo", 
            meaning: "I hugged the cat.",
            breakdown: [
                { word: "저", dictForm: "저", role: "pronoun", meaning: "I (humble)" },
                { word: "고양이", dictForm: "고양이", role: "noun", meaning: "cat" },
                { word: "안았어요", dictForm: "안다", role: "verb", meaning: "to hug/hold", conjugation: "안다 → 안았어요 (polite past tense)" }
            ]
        },
        { 
            korean: "저는 신문을 읽었어요.", 
            romanization: "jeoneun sinmuneul ilgeosseoyo", 
            meaning: "I read the newspaper.",
            breakdown: [
                { word: "저", dictForm: "저", role: "pronoun", meaning: "I (humble)" },
                { word: "신문", dictForm: "신문", role: "noun", meaning: "newspaper" },
                { word: "읽었어요", dictForm: "읽다", role: "verb", meaning: "to read", conjugation: "읽다 → 읽었어요 (polite past tense: irregular ㄹㄱ pronunciation)" }
            ]
        },
        { 
            korean: "저는 돈이 없어요.", 
            romanization: "jeoneun doni eopseoyo", 
            meaning: "I have no money.",
            breakdown: [
                { word: "저", dictForm: "저", role: "pronoun", meaning: "I (humble)" },
                { word: "돈", dictForm: "돈", role: "noun", meaning: "money" },
                { word: "없어요", dictForm: "없다", role: "adjective", meaning: "to not exist/not have", conjugation: "없다 → 없어요 (polite present tense)" }
            ]
        },
        { 
            korean: "이 치마가 너무 짧아요.", 
            romanization: "i chimaga neomu jjalbayo", 
            meaning: "This skirt is too short.",
            breakdown: [
                { word: "이", dictForm: "이", role: "determiner", meaning: "this" },
                { word: "치마", dictForm: "치마", role: "noun", meaning: "skirt" },
                { word: "너무", dictForm: "너무", role: "adverb", meaning: "too/very" },
                { word: "짧아요", dictForm: "짧다", role: "adjective", meaning: "to be short", conjugation: "짧다 → 짧아요 (polite present tense)" }
            ]
        },
        { 
            korean: "매운 음식이 싫어해요.", 
            romanization: "maeun eumsik-i sireohaeyo", 
            meaning: "I don't like spicy food.",
            breakdown: [
                { word: "매운", dictForm: "맵다", role: "adjective", meaning: "spicy", conjugation: "맵다 → 매운 (adjective modifier form: irregular ㅂ)" },
                { word: "음식", dictForm: "음식", role: "noun", meaning: "food" },
                { word: "싫어해요", dictForm: "싫어하다", role: "verb", meaning: "to dislike", conjugation: "싫어하다 → 싫어해요 (polite present tense)" }
            ]
        },
        { 
            korean: "저는 한국어 시험을 잘 봤어요.", 
            romanization: "jeoneun hangugeo siheomeul jal bwasseoyo", 
            meaning: "I passed the Korean exam.",
            breakdown: [
                { word: "저", dictForm: "저", role: "pronoun", meaning: "I (humble)" },
                { word: "한국어", dictForm: "한국어", role: "noun", meaning: "Korean language" },
                { word: "시험", dictForm: "시험", role: "noun", meaning: "exam/test" },
                { word: "잘", dictForm: "잘", role: "adverb", meaning: "well" },
                { word: "봤어요", dictForm: "보다", role: "verb", meaning: "to see/take (exam)", conjugation: "보다 → 봤어요 (polite past tense)" }
            ]
        },
        { 
            korean: "저는 계란을 삶아요.", 
            romanization: "jeoneun gyeraneul samayo", 
            meaning: "I boil eggs.",
            breakdown: [
                { word: "저", dictForm: "저", role: "pronoun", meaning: "I (humble)" },
                { word: "계란", dictForm: "계란", role: "noun", meaning: "egg" },
                { word: "삶아요", dictForm: "삶다", role: "verb", meaning: "to boil", conjugation: "삶다 → 삶아요 (polite present tense)" }
            ]
        }
    ],

    "Verbs 1": [
        { korean: "일하다", romanization: "ilhada", meaning: "to work" },
        { korean: "만들다", romanization: "mandeulda", meaning: "to make" },
        { korean: "하다", romanization: "hada", meaning: "to do" },
        { korean: "끄다", romanization: "kkeuda", meaning: "to turn off" },
        { korean: "닫다", romanization: "datda", meaning: "to close (regular ㄷ)" },
        { korean: "열다", romanization: "yeolda", meaning: "to open" },
        { korean: "쓰다", romanization: "sseuda", meaning: "to use" },
        { korean: "입다", romanization: "ipda", meaning: "to wear (regular ㅂ)" },
        { korean: "벗다", romanization: "beotda", meaning: "to wear off (regular ㅅ)" },
        { korean: "씻다", romanization: "ssitda", meaning: "to wash (regular ㅅ)" },
        { korean: "두다", romanization: "duda", meaning: "to put" },
        { korean: "싣다", romanization: "sitda", meaning: "to load (irregular ㄷ)" },
        { korean: "잡다", romanization: "japda", meaning: "to catch/hold (regular ㅂ)" },
        { korean: "쥐다", romanization: "jwida", meaning: "to hold" },
        { korean: "집다", romanization: "jipda", meaning: "to pick (regular ㅂ)" },
        { korean: "줍다", romanization: "jupda", meaning: "to pick/select (regular ㅂ)" },
        { korean: "자르다", romanization: "jareuda", meaning: "to cut (irregular ㅡ)" },
        { korean: "썰다", romanization: "sseolda", meaning: "to chop" },
        { korean: "갈다", romanization: "galda", meaning: "to sharpen (blade)" },
        { korean: "매다", romanization: "maeda", meaning: "to tie" },
        { korean: "밀다", romanization: "milda", meaning: "to push" },
        { korean: "끌다", romanization: "kkeulda", meaning: "to pull/drag" },
        { korean: "나르다", romanization: "nareuda", meaning: "to carry" },
        { korean: "뽑다", romanization: "ppopda", meaning: "to unplug" },
        { korean: "걸다", romanization: "geolda", meaning: "to hang" },
        { korean: "오다", romanization: "oda", meaning: "to come" },
        { korean: "가다", romanization: "gada", meaning: "to go" },
        { korean: "들다", romanization: "deulda", meaning: "to enter" },
        { korean: "서다", romanization: "seoda", meaning: "to stand" },
        { korean: "앉다", romanization: "anda", meaning: "to sit" },
        { korean: "일어나다", romanization: "ireonada", meaning: "to get up" },
        { korean: "먹다", romanization: "meokda", meaning: "to eat" },
        { korean: "마시다", romanization: "masida", meaning: "to drink" },
        { korean: "쉬다", romanization: "swida", meaning: "to rest" },
        { korean: "끝내다", romanization: "kkeutnaeda", meaning: "to end/finish" },
        { korean: "마무리하다", romanization: "mamurihada", meaning: "to pack up/finishing up" },
        { korean: "읽다", romanization: "ikda", meaning: "to read" },
    ],

    "Verbs 2": [
        { korean: "믿다", romanization: "mitda", meaning: "to believe (regular ㄷ)" },
        { korean: "듣다", romanization: "deutda", meaning: "to listen (irregular ㄷ)" },
        { korean: "묻다", romanization: "mutda", meaning: "to ask (irregular ㄷ)" },
        { korean: "지키다", romanization: "jikida", meaning: "to follow/obey" },
        { korean: "빌리다", romanization: "billida", meaning: "to borrow" },
        { korean: "피우다", romanization: "piuda", meaning: "to smoke" },
        { korean: "나누다", romanization: "nanuda", meaning: "to divide" },
        { korean: "팔다", romanization: "palda", meaning: "to sell" },
        { korean: "짓다", romanization: "jitda", meaning: "to build (irregular ㅅ)" },
        { korean: "긋다", romanization: "geutda", meaning: "to draw a line (irregular ㅅ)" },
        { korean: "젓다", romanization: "jeotda", meaning: "to stir (irregular ㅅ)" },
        { korean: "빗다", romanization: "bitda", meaning: "to comb (regular ㅅ)" },
        { korean: "잇다", romanization: "itda", meaning: "to connect (irregular ㅅ)" },
        { korean: "널다", romanization: "neolda", meaning: "to hang up/to dry out (laundry)" },
        { korean: "담그다", romanization: "damgeuda", meaning: "to soak" },
        { korean: "오르다", romanization: "oreuda", meaning: "to ascend" },
        { korean: "올라오다", romanization: "ollaoda", meaning: "to come up" },
        { korean: "돌아오다", romanization: "doraoda", meaning: "to come back" },
        { korean: "기르다", romanization: "gireuda", meaning: "to raise/grow" },
        { korean: "휘다", romanization: "hwida", meaning: "to bend" },
        { korean: "뛰다", romanization: "ttwida", meaning: "to run/leap/jump" },
        { korean: "차다", romanization: "chada", meaning: "to kick" },
        { korean: "자다", romanization: "jada", meaning: "to sleep" },
        { korean: "산책하다", romanization: "sanchaekhada", meaning: "to take a walk" },
        { korean: "되다", romanization: "doeda", meaning: "to become/possible/permittable" },
        { korean: "피다", romanization: "pida", meaning: "to spread open" },
    ],

    "Verbs 3": [
        { korean: "싸다", romanization: "ssada", meaning: "to be cheap" },
        { korean: "깨닫다", romanization: "kkaedatda", meaning: "to realize (irregular ㄷ)" },
        { korean: "고프다", romanization: "gopeuda", meaning: "to be hungry" },
        { korean: "기쁘다", romanization: "gippeuda", meaning: "to be please" },
        { korean: "바쁘다", romanization: "bappeuda", meaning: "to be busy" },
        { korean: "크다", romanization: "keuda", meaning: "to be big" },
        { korean: "나쁘다", romanization: "nappeuda", meaning: "to be bad" },
        { korean: "다르다", romanization: "dareuda", meaning: "to be different" },
        { korean: "빠르다", romanization: "ppareuda", meaning: "to be fast" },
        { korean: "마르다", romanization: "mareuda", meaning: "to be dry" },
        { korean: "이르다", romanization: "ireuda", meaning: "to be early" },
        { korean: "흐르다", romanization: "heureuda", meaning: "to flow" },
        { korean: "높다", romanization: "nopda", meaning: "to be high" },
        { korean: "춥다", romanization: "chupda", meaning: "to be cold (irregular ㅂ)" },
        { korean: "좁다", romanization: "jopda", meaning: "to be narrow (regular ㅂ)" },
        { korean: "깊다", romanization: "gipda", meaning: "to be deep" },
        { korean: "굳다", romanization: "gutda", meaning: "to be hard/stiff (regular ㄷ)" },
        { korean: "맑다", romanization: "malkda", meaning: "to be clear in weather" },
        { korean: "없다", romanization: "eopda", meaning: "to do not have" },
        { korean: "미끄럽다", romanization: "mikkeureapda", meaning: "to be slippery (irregular ㅂ)" },
        { korean: "아름답다", romanization: "areumdapda", meaning: "to be beautiful (irregular ㅂ)" },
        { korean: "시끄럽다", romanization: "sikkeureapda", meaning: "to be noisy (irregular ㅂ)" },
        { korean: "간지럽다", romanization: "ganjirepda", meaning: "to be itchy (irregular ㅂ)" },
        { korean: "어둡다", romanization: "eodupda", meaning: "to be dark (irregular ㅂ)" },
        { korean: "귀엽다", romanization: "gwiyeopda", meaning: "to be cute (irregular ㅂ)" },
        { korean: "어렵다", romanization: "eoryeopda", meaning: "to be difficult (irregular ㅂ)" },
        { korean: "부지런하다", romanization: "bujireonhada", meaning: "to be diligent" }
    ],

    "Irregular Verbs (ㅂ ending)": [
        { korean: "덥다", romanization: "deopda", meaning: "to be hot (weather)" },
        { korean: "춥다", romanization: "chupda", meaning: "to be cold (weather)" },
        { korean: "쉽다", romanization: "swipda", meaning: "to be easy" },
        { korean: "어렵다", romanization: "eoryeopda", meaning: "to be difficult" },
        { korean: "맵다", romanization: "maepda", meaning: "to be spicy" },
        { korean: "싱겁다", romanization: "singgeopda", meaning: "to be bland" },
        { korean: "가볍다", romanization: "gabyeopda", meaning: "to be light" },
        { korean: "무겁다", romanization: "mugeopda", meaning: "to be heavy" },
        { korean: "차갑다", romanization: "chagapda", meaning: "to be cold (touch)" },
        { korean: "뜨겁다", romanization: "tteugeopda", meaning: "to be hot (touch)" },
        { korean: "더럽다", romanization: "deorepda", meaning: "to be dirty" },
        { korean: "어지럽다", romanization: "eojireopda", meaning: "to be dizzy" },
        { korean: "시끄럽다", romanization: "sikkeureapda", meaning: "to be noisy" },
        { korean: "미끄럽다", romanization: "mikkeureapda", meaning: "to be slippery" },
        { korean: "외롭다", romanization: "oeropda", meaning: "to be lonely" },
        { korean: "고맙다", romanization: "gomapda", meaning: "to be thankful" },
        { korean: "가깝다", romanization: "gakkapda", meaning: "to be near" },
        { korean: "즐겁다", romanization: "jeulgeopda", meaning: "to be enjoyable" },
        { korean: "무섭다", romanization: "museopda", meaning: "to be scary" },
        { korean: "아름답다", romanization: "areumdapda", meaning: "to be beautiful" },
        { korean: "그립다", romanization: "geuripda", meaning: "to miss (person)" },
        { korean: "굽다", romanization: "gupda", meaning: "to roast/bake" },
        { korean: "돕다", romanization: "dopda", meaning: "to help" },
        { korean: "눕다", romanization: "nupda", meaning: "to lie down" },
        { korean: "부럽다", romanization: "bureopda", meaning: "to be envious" }
    ],

    "Irregular Verbs (ㄹ ending)": [
        { korean: "살다", romanization: "salda", meaning: "to live" },
        { korean: "팔다", romanization: "palda", meaning: "to sell" },
        { korean: "만들다", romanization: "mandeulda", meaning: "to make" },
        { korean: "열다", romanization: "yeolda", meaning: "to open" },
        { korean: "놀다", romanization: "nolda", meaning: "to play/hang out" },
        { korean: "알다", romanization: "alda", meaning: "to know" },
        { korean: "울다", romanization: "ulda", meaning: "to cry" },
        { korean: "걸다", romanization: "geolda", meaning: "to call/hang" },
        { korean: "졸다", romanization: "jolda", meaning: "to doze off/sleepy" },
        { korean: "쓸다", romanization: "sseulda", meaning: "to sweep" },
        { korean: "풀다", romanization: "pulda", meaning: "to loosen" },
        { korean: "널다", romanization: "neolda", meaning: "to hang (laundry)" },
        { korean: "갈다", romanization: "galda", meaning: "to sharpen (knife)" },
        { korean: "멀다", romanization: "meolda", meaning: "to be far" },
        { korean: "달다", romanization: "dalda", meaning: "to be sweet" },
        { korean: "길다", romanization: "gilda", meaning: "to be long" },
        { korean: "썰다", romanization: "sseolda", meaning: "to chop (thinly/small)" },
        { korean: "힘들다", romanization: "himdeulda", meaning: "to be hard (physically)" },
        { korean: "밀다", romanization: "milda", meaning: "to push" },
        { korean: "끌다", romanization: "kkeulda", meaning: "to pull/drag" },
        { korean: "말다", romanization: "malda", meaning: "to roll" },
        { korean: "들다", romanization: "deulda", meaning: "to enter/to hold" },
        { korean: "물다", romanization: "mulda", meaning: "to bite" },
        { korean: "돌다", romanization: "dolda", meaning: "to turn/rotate" },
        { korean: "벌다", romanization: "beolda", meaning: "to earn" }
    ],

    "Irregular Verbs (ㅡ ending)": [
        { korean: "아프다", romanization: "apeuda", meaning: "to be sick/in pain" },
        { korean: "예쁘다", romanization: "yeppeuda", meaning: "to be pretty" },
        { korean: "바쁘다", romanization: "bappeuda", meaning: "to be busy" },
        { korean: "슬프다", romanization: "seulpeuda", meaning: "to be sad" },
        { korean: "고프다", romanization: "gopeuda", meaning: "to be hungry" },
        { korean: "크다", romanization: "keuda", meaning: "to be big" },
        { korean: "쓰다", romanization: "sseuda", meaning: "to be bitter" },
        { korean: "쓰다", romanization: "sseuda", meaning: "to write" },
        { korean: "쓰다", romanization: "sseuda", meaning: "to use" },
        { korean: "쓰다", romanization: "sseuda", meaning: "to wear (head)" },
        { korean: "나쁘다", romanization: "nappeuda", meaning: "to be bad" },
        { korean: "기쁘다", romanization: "gippeuda", meaning: "to be please" },
        { korean: "잠그다", romanization: "jamgeuda", meaning: "to lock" },
        { korean: "끄다", romanization: "kkeuda", meaning: "to turn off" },
        { korean: "뜨다", romanization: "tteuda", meaning: "to float" },
        { korean: "빠르다", romanization: "ppareuda", meaning: "to be fast" },
        { korean: "바르다", romanization: "bareuda", meaning: "to apply on (lotion)" },
        { korean: "누르다", romanization: "nureuda", meaning: "to press" },
        { korean: "부르다", romanization: "bureuda", meaning: "to call (out)" },
        { korean: "오르다", romanization: "oreuda", meaning: "to ascend" },
        { korean: "자르다", romanization: "jareuda", meaning: "to cut" },
        { korean: "서투르다", romanization: "seotureuda", meaning: "to be clumsy" },
        { korean: "다르다", romanization: "dareuda", meaning: "to be different" },
        { korean: "놀르다", romanization: "nolleuda", meaning: "to be surprise/shock" }
    ],

    "Irregular Verbs (르 ending)": [
        { korean: "이르다", romanization: "ireuda", meaning: "to reach/arrive at" },
        { korean: "마르다", romanization: "mareuda", meaning: "to be dry/skinny" },
        { korean: "들르다", romanization: "deulleuda", meaning: "to stop by" },
        { korean: "모르다", romanization: "moreuda", meaning: "to do not know" },
        { korean: "나르다", romanization: "nareuda", meaning: "to carry" },
        { korean: "고르다", romanization: "goreuda", meaning: "to choose" },
        { korean: "게으르다", romanization: "geeureuda", meaning: "to be lazy" },
        { korean: "서두르다", romanization: "seodureuda", meaning: "to hurry" },
        { korean: "기르다", romanization: "gireuda", meaning: "to raise/grow" },
        { korean: "이르다", romanization: "ireuda", meaning: "to be early" },
        { korean: "흐르다", romanization: "heureuda", meaning: "to flow" },
        { korean: "따르다", romanization: "ttareuda", meaning: "to follow/pour" }
    ],

    "Irregular Verbs (ㄷ ending)": [
        { korean: "걷다", romanization: "geotda", meaning: "to walk" },
        { korean: "듣다", romanization: "deutda", meaning: "to listen" },
        { korean: "묻다", romanization: "mutda", meaning: "to ask" },
        { korean: "싣다", romanization: "sitda", meaning: "to load (vehicles)" },
        { korean: "긷다", romanization: "gitda", meaning: "to draw water (well)" },
        { korean: "깨닫다", romanization: "kkaedatda", meaning: "to realize" }
    ],

    "Irregular Verbs (ㅅ ending)": [
        { korean: "낫다", romanization: "natda", meaning: "to recover" },
        { korean: "짓다", romanization: "jitda", meaning: "to build" },
        { korean: "붓다", romanization: "butda", meaning: "to swell/to pour" },
        { korean: "잇다", romanization: "itda", meaning: "to connect or link" },
        { korean: "젓다", romanization: "jeotda", meaning: "to stir/whip" },
        { korean: "긋다", romanization: "geutda", meaning: "to draw (a line)" }
    ],

    "Regular Verbs (ㅂ ending)": [
        { korean: "입다", romanization: "ipda", meaning: "to wear" },
        { korean: "잡다", romanization: "japda", meaning: "to catch/hold" },
        { korean: "집다", romanization: "jipda", meaning: "to pick" },
        { korean: "줍다", romanization: "jupda", meaning: "to pick" },
        { korean: "씹다", romanization: "ssipda", meaning: "to chew/bite" },
        { korean: "좁다", romanization: "jopda", meaning: "to narrow" }
    ],

    "Regular Verbs (ㄷ ending)": [
        { korean: "걷다", romanization: "geotda", meaning: "to gather/collect" },
        { korean: "닫다", romanization: "datda", meaning: "to close" },
        { korean: "받다", romanization: "batda", meaning: "to receive" },
        { korean: "믿다", romanization: "mitda", meaning: "to believe" },
        { korean: "굳다", romanization: "gutda", meaning: "to be stiff/hard" },
        { korean: "얻다", romanization: "eotda", meaning: "to get/obtain" },
        { korean: "쏟다", romanization: "ssotda", meaning: "to spill" },
        { korean: "묻다", romanization: "mutda", meaning: "to bury" }
    ],

    "Regular Verbs (ㅅ ending)": [
        { korean: "씻다", romanization: "ssitda", meaning: "to wash" },
        { korean: "웃다", romanization: "utda", meaning: "to laugh/smile" },
        { korean: "빗다", romanization: "bitda", meaning: "to comb" },
        { korean: "벗다", romanization: "beotda", meaning: "to wear off (general)" },
        { korean: "솟다", romanization: "sotda", meaning: "to rise" }
    ],

    // ANIMALS
    "Animals": [
        { korean: "개", romanization: "gae", meaning: "Dog" },
        { korean: "강아지", romanization: "gangaji", meaning: "Puppy" },
        { korean: "고양이", romanization: "goyangi", meaning: "Cat" },
        { korean: "토끼", romanization: "tokki", meaning: "Rabbit" },
        { korean: "쥐", romanization: "jwi", meaning: "Mouse" },
        { korean: "새", romanization: "sae", meaning: "Bird" },
        { korean: "개구리", romanization: "gaeguri", meaning: "Frog" },
        { korean: "뱀", romanization: "baem", meaning: "Snake" },
        { korean: "까치", romanization: "kkachi", meaning: "Magpie" },
        { korean: "귀뚜라미", romanization: "gwittulami", meaning: "Cricket" }
    ],

    "Animal Farm": [
        { korean: "닭", romanization: "dak", meaning: "Chicken" },
        { korean: "소", romanization: "so", meaning: "Cow" },
        { korean: "오리", romanization: "ori", meaning: "Duck" },
        { korean: "물고기", romanization: "mulgogi", meaning: "Fish" },
        { korean: "염소", romanization: "yeomso", meaning: "Goat" },
        { korean: "말", romanization: "mal", meaning: "Horse" },
        { korean: "돼지", romanization: "dwaeji", meaning: "Pig" },
        { korean: "양", romanization: "yang", meaning: "Sheep" },
        { korean: "황소", romanization: "hwangso", meaning: "Ox" }
    ],

    "Wild Animals": [
        { korean: "호랑이", romanization: "horangi", meaning: "Tiger" },
        { korean: "사자", romanization: "saja", meaning: "Lion" },
        { korean: "여우", romanization: "yeou", meaning: "Fox" },
        { korean: "코끼리", romanization: "kokkiri", meaning: "Elephant" },
        { korean: "원숭이", romanization: "wonsungi", meaning: "Monkey" },
        { korean: "곰", romanization: "gom", meaning: "Bear" },
        { korean: "기린", romanization: "girin", meaning: "Giraffe" },
        { korean: "타조", romanization: "tajo", meaning: "Ostrich" }
    ],

    // OBJECTS
    "Objects 1": [
        { korean: "칠판", romanization: "chilpan", meaning: "Whiteboard/Blackboard" },
        { korean: "책", romanization: "chaek", meaning: "Book" },
        { korean: "공책", romanization: "gongchaek", meaning: "Notebook" },
        { korean: "연필", romanization: "yeonpil", meaning: "Pencil" },
        { korean: "볼펜", romanization: "bolpen", meaning: "Ball pen" },
        { korean: "지우개", romanization: "jiugae", meaning: "Eraser" },
        { korean: "필통", romanization: "piltong", meaning: "Pencil case" },
        { korean: "시계", romanization: "sigye", meaning: "Clock" },
        { korean: "달력", romanization: "dallyeok", meaning: "Calendar" },
        { korean: "창문", romanization: "changmun", meaning: "Window" },
        { korean: "문", romanization: "mun", meaning: "Door" },
        { korean: "가방/배낭", romanization: "gabang/baenang", meaning: "Bag" },
        { korean: "수첩", romanization: "sucheop", meaning: "Pocketbook" },
        { korean: "안경", romanization: "angyeong", meaning: "Eyeglasses" },
        { korean: "칼", romanization: "kal", meaning: "Knife/Cutter" },
        { korean: "가위", romanization: "gawi", meaning: "Scissors" },
        { korean: "젓가락", romanization: "jeotgarak", meaning: "Chopstick" },
        { korean: "숟가락", romanization: "sutgarak", meaning: "Spoon" },
        { korean: "수저", romanization: "sujeo", meaning: "Spoon and chopstick" },
        { korean: "계산기", romanization: "gyesangi", meaning: "Calculator" },
        { korean: "쓰레기통", romanization: "sseuregitong", meaning: "Garbage bin" },
        { korean: "건강보험증", romanization: "geongang bheomjeung", meaning: "Health insurance card" },
        { korean: "신분증", romanization: "sinbunjeung", meaning: "Resident card" },
        { korean: "신용카드", romanization: "sinyong kadeu", meaning: "Credit card" },
        { korean: "교통카드", romanization: "gyotong kadeu", meaning: "Transport card" },
        { korean: "학생증", romanization: "haksaengjeung", meaning: "School ID" },
        { korean: "사원증", romanization: "sawonjeung", meaning: "Company ID" },
        { korean: "운전면허증", romanization: "unjeon myeonheojeung", meaning: "Driver's license" },
        { korean: "신문", romanization: "sinmun", meaning: "Newspaper" },
        { korean: "돈", romanization: "don", meaning: "Money" },
        { korean: "카드", romanization: "kadeu", meaning: "Card" },
        { korean: "우표", romanization: "upyo", meaning: "Stamp" },
        { korean: "명함", romanization: "myeongham", meaning: "Calling card" },
        { korean: "여권", romanization: "yeogwon", meaning: "Passport" },
        { korean: "우산", romanization: "usan", meaning: "Umbrella" },
        { korean: "모자", romanization: "moja", meaning: "Hat/Cap" },
        { korean: "장갑", romanization: "janggap", meaning: "Gloves" },
        { korean: "바지", romanization: "baji", meaning: "Pants" },
        { korean: "치마", romanization: "chima", meaning: "Skirt" },
        { korean: "거울", romanization: "geoul", meaning: "Mirror" }
    ],

    "Objects 2": [
        { korean: "지도", romanization: "jido", meaning: "Map" },
        { korean: "사전", romanization: "sajeon", meaning: "Dictionary" },
        { korean: "열쇠", romanization: "yeolsoe", meaning: "Key" },
        { korean: "지폐", romanization: "jipye", meaning: "Paper money" },
        { korean: "영화표", romanization: "yeonghwapyo", meaning: "Movie ticket" },
        { korean: "영수증", romanization: "yeongsujeung", meaning: "Receipt" },
        { korean: "양말", romanization: "yangmal", meaning: "Socks" },
        { korean: "운동화", romanization: "undonghwa", meaning: "Running shoes" },
        { korean: "지갑", romanization: "jigap", meaning: "Wallet" },
        { korean: "옷/의류", romanization: "ot/uiryu", meaning: "Clothes" },
        { korean: "꽃", romanization: "kkot", meaning: "Flower" },
        { korean: "공", romanization: "gong", meaning: "Ball" },
        { korean: "고무장화", romanization: "gomu janghwa", meaning: "Rubber boots" },
        { korean: "고무장갑", romanization: "gomu janggap", meaning: "Rubber gloves" },
        { korean: "귀덮개", romanization: "gwideomgae", meaning: "Ear cover" },
        { korean: "가족사진", romanization: "gajok sajin", meaning: "Family picture" },
        { korean: "화장품", romanization: "hwajanpum", meaning: "Cosmetic products" },
        { korean: "빗", romanization: "bit", meaning: "Brush" },
        { korean: "헤어드라이어", romanization: "heeo deuraiyeo", meaning: "Hair dryer" },
        { korean: "베개", romanization: "begae", meaning: "Pillow" },
        { korean: "이불", romanization: "ibul", meaning: "Blanket" },
        { korean: "린스", romanization: "rinseu", meaning: "Conditioner" },
        { korean: "샴푸", romanization: "syampu", meaning: "Shampoo" },
        { korean: "비누", romanization: "binu", meaning: "Soap" },
        { korean: "칫솔", romanization: "chitsol", meaning: "Toothbrush" },
        { korean: "치약", romanization: "chiyak", meaning: "Toothpaste" },
        { korean: "수건", romanization: "sugeon", meaning: "Towel" },
        { korean: "면도기", romanization: "myeondogi", meaning: "Razor" },
        { korean: "휴지", romanization: "hyuji", meaning: "Toilet paper" },
        { korean: "컵", romanization: "keop", meaning: "Cup" },
        { korean: "의류", romanization: "uiryu", meaning: "Clothing" },
        { korean: "티셔츠", romanization: "tisyeocheu", meaning: "T-shirt" },
        { korean: "잠바", romanization: "jamba", meaning: "Jacket" },
        { korean: "구두/신발", romanization: "gudu/sinbal", meaning: "Shoes" },
        { korean: "슬리퍼/신발화", romanization: "seullipeo/sinbalhwa", meaning: "Slippers" },
        { korean: "장화", romanization: "janghwa", meaning: "Rain boots" },
        { korean: "양말", romanization: "yangmal", meaning: "Sacks" },
        { korean: "목도리", romanization: "mokdori", meaning: "Scarf" }
    ],

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

    // ELECTRONIC APPLIANCES
    "Electronic Appliances": [
        { korean: "자동판매기/자판기", romanization: "jadong panmaegi/japangi", meaning: "Vending machine" },
        { korean: "자동인출기", romanization: "jadong inchulgi", meaning: "ATM machine" },
        { korean: "선풍기", romanization: "seonpunggi", meaning: "Electric fan" },
        { korean: "온도계", romanization: "ondogye", meaning: "Thermometer" },
        { korean: "청소기", romanization: "cheongsogi", meaning: "Vacuum cleaner" },
        { korean: "세탁기", romanization: "setakgi", meaning: "Washing machine" },
        { korean: "전화기", romanization: "jeonhwagi", meaning: "Telephone" },
        { korean: "냉장고", romanization: "naengjanggo", meaning: "Refrigerator" },
        { korean: "가습기", romanization: "gaseupgi", meaning: "Humidifier" },
        { korean: "휴대전화", romanization: "hyudae jeonhwa", meaning: "Cellphone" },
        { korean: "전자 레인지", romanization: "jeonja reinji", meaning: "Microwave" },
        { korean: "밥솥", romanization: "bapsot", meaning: "Rice cooker" },
        { korean: "사진기", romanization: "sajingi", meaning: "Camera" },
        { korean: "난로", romanization: "nallo", meaning: "Heater" },
        { korean: "다리미", romanization: "darimi", meaning: "Iron" },
        { korean: "환풍기", romanization: "hwanpunggi", meaning: "Ventilator" },
        { korean: "복사기", romanization: "boksagi", meaning: "Copier machine" }
    ],

    // FURNITURE
    "Furniture": [
        { korean: "가구", romanization: "gagu", meaning: "Furniture" },
        { korean: "서류함", romanization: "seoryuham", meaning: "Filing cabinet" },
        { korean: "보관함", romanization: "bogwanham", meaning: "Storage box/Locker" },
        { korean: "우체통", romanization: "uchetong", meaning: "Mailbox" },
        { korean: "옷장", romanization: "otjang", meaning: "Closet" },
        { korean: "책장/책꽂", romanization: "chaekjang/chaekkkot", meaning: "Bookshelf" },
        { korean: "침대", romanization: "chimdae", meaning: "Bed" },
        { korean: "의자", romanization: "uija", meaning: "Chair" },
        { korean: "서랍장", romanization: "seorapjang", meaning: "Drawer" },
        { korean: "책상", romanization: "chaeksang", meaning: "Study table" },
        { korean: "밥상", romanization: "bapsang", meaning: "Dining table" }
    ],

    // FRUIT AND FOOD
    "Fruit and Food": [
        { korean: "사과", romanization: "sagwa", meaning: "Apple" },
        { korean: "오렌지/귤", romanization: "orenji/gyul", meaning: "Orange" },
        { korean: "포도", romanization: "podo", meaning: "Grape" },
        { korean: "수박", romanization: "subak", meaning: "Watermelon" },
        { korean: "딸기", romanization: "ttalgi", meaning: "Strawberry" },
        { korean: "배", romanization: "bae", meaning: "Pear" },
        { korean: "물", romanization: "mul", meaning: "Water" },
        { korean: "주스", romanization: "juseu", meaning: "Juice" },
        { korean: "우유", romanization: "uyu", meaning: "Milk" },
        { korean: "빵", romanization: "ppang", meaning: "Bread" },
        { korean: "라면", romanization: "ramyeon", meaning: "Instant noodles" },
        { korean: "과자", romanization: "gwaja", meaning: "Snacks" },
        { korean: "아이스크림", romanization: "aiseukeurim", meaning: "Ice cream" },
        { korean: "음식", romanization: "eumsik", meaning: "Food" },
        { korean: "곡식", romanization: "goksik", meaning: "Grains" },
        { korean: "채소/야채", romanization: "chaeso/yachae", meaning: "Vegetables" },
        { korean: "반찬", romanization: "banchan", meaning: "Side dish" }
    ],

    // PLACES
    "Places": [
        { korean: "회사", romanization: "hoesa", meaning: "Workplace" },
        { korean: "사무실", romanization: "samusil", meaning: "Office" },
        { korean: "화장실", romanization: "hwajangsil", meaning: "Restroom" },
        { korean: "식당", romanization: "sikdang", meaning: "Restaurant" },
        { korean: "집/댁", romanization: "jip/daek", meaning: "House" },
        { korean: "기숙사", romanization: "gisuksa", meaning: "Dormitory" },
        { korean: "세탁소", romanization: "setakso", meaning: "Laundromat" },
        { korean: "미용실", romanization: "miyongsil", meaning: "Hair salon" },
        { korean: "시장", romanization: "sijang", meaning: "Market" },
        { korean: "마트", romanization: "mateu", meaning: "Mart" },
        { korean: "편의점", romanization: "pyeonuijeom", meaning: "Convenient store" },
        { korean: "슈퍼마켓", romanization: "syupeo maket", meaning: "Supermarket" },
        { korean: "공중전화", romanization: "gongjung jeonhwa", meaning: "Phonebooth" },
        { korean: "소방서", romanization: "sobangso", meaning: "Fire station" },
        { korean: "공장", romanization: "gongjang", meaning: "Factory" },
        { korean: "경찰서", romanization: "gyeongchalso", meaning: "Police station" },
        { korean: "회사", romanization: "hoesa", meaning: "Company" },
        { korean: "책방/책 가게/서점", romanization: "chaekbang/chaek gage/seojeom", meaning: "Book store" },
        { korean: "도서관", romanization: "doseogwan", meaning: "Library" },
        { korean: "버스 정류장", romanization: "beoseu jeongnyujang", meaning: "Bus station" },
        { korean: "주차장", romanization: "juchajang", meaning: "Parking lot" },
        { korean: "건물", romanization: "geonmul", meaning: "Building" },
        { korean: "농장", romanization: "nongjang", meaning: "Farm" },
        { korean: "병원", romanization: "byeongwon", meaning: "Hospital" },
        { korean: "우체국", romanization: "ucheguk", meaning: "Post office" },
        { korean: "약국", romanization: "yakguk", meaning: "Pharmacy" },
        { korean: "영화관", romanization: "yeonghwagwan", meaning: "Movie theater" },
        { korean: "은행", romanization: "eunhaeng", meaning: "Bank" },
        { korean: "학교", romanization: "hakgyo", meaning: "School" },
        { korean: "공원", romanization: "gongwon", meaning: "Park" },
        { korean: "부엌", romanization: "bueok", meaning: "Kitchen" },
        { korean: "돼지우리", romanization: "dwaejiuri", meaning: "Piggery" },
        { korean: "양계장", romanization: "yanggyejang", meaning: "Chicken farm" },
        { korean: "축사", romanization: "chuksa", meaning: "Poultry/Barn" },
        { korean: "교실", romanization: "gyosil", meaning: "Classroom" },
        { korean: "공항", romanization: "gonghang", meaning: "Airport" },
        { korean: "고향", romanization: "gohyang", meaning: "Hometown" },
        { korean: "노래방", romanization: "noraebang", meaning: "Karaoke" },
        { korean: "PC 방", romanization: "PC bang", meaning: "Internet cafe" },
        { korean: "지하", romanization: "jiha", meaning: "Basement" },
        { korean: "계단", romanization: "gyedan", meaning: "Stairs" }
    ],

    "Government and Public Offices": [
        { korean: "도청", romanization: "docheong", meaning: "Provincial Government Building" },
        { korean: "시청", romanization: "sicheong", meaning: "City Hall" },
        { korean: "구청", romanization: "gucheong", meaning: "Borough Office" },
        { korean: "출입국 관리 사무소", romanization: "churipguk gwalli samusso", meaning: "Immigration Office" },
        { korean: "보건소", romanization: "bogeonso", meaning: "(Public) Health Center" },
        { korean: "주민센터", romanization: "jumin senteo", meaning: "Community Service Center" }
    ],

    "Occupations": [
        { korean: "선생님/교사/교수", romanization: "seonsaengnim/gyosa/gyosu", meaning: "Teacher" },
        { korean: "회사원", romanization: "hoesawon", meaning: "Business Person" },
        { korean: "주부", romanization: "jubu", meaning: "Homemaker" },
        { korean: "경찰관", romanization: "gyeongchalgwan", meaning: "Police Officer" },
        { korean: "군인", romanization: "gunin", meaning: "Soldier" },
        { korean: "소방관", romanization: "sobang-gwan", meaning: "Fire Fighter" },
        { korean: "공무원", romanization: "gongmuwon", meaning: "Public Official" },
        { korean: "점원", romanization: "jeomwon", meaning: "Clerk" },
        { korean: "의사", romanization: "uisa", meaning: "Doctor" },
        { korean: "간호사", romanization: "ganhosa", meaning: "Nurse" },
        { korean: "요리사", romanization: "yorisa", meaning: "Cook" },
        { korean: "운전기사", romanization: "unjeon gisa", meaning: "Driver" },
        { korean: "기술자", romanization: "gisulsa", meaning: "Technician" },
        { korean: "목수", romanization: "moksu", meaning: "Carpenter" },
        { korean: "농부", romanization: "nongbu", meaning: "Farmer" },
        { korean: "어부", romanization: "eobu", meaning: "Fisherman" },
        { korean: "미용사", romanization: "miyongsa", meaning: "Hairdresser" }
    ],

    "Country": [
        { korean: "한국", romanization: "hanguk", meaning: "The Republic Of Korea" },
        { korean: "네팔", romanization: "nepal", meaning: "Nepal" },
        { korean: "동티모르", romanization: "dongtimoleu", meaning: "East Timor" },
        { korean: "몽골", romanization: "monggol", meaning: "Mongolia" },
        { korean: "미얀마", romanization: "miyanma", meaning: "Myanmar" },
        { korean: "방글라데시", romanization: "banggeulladesyi", meaning: "Bangladesh" },
        { korean: "베트남", romanization: "beteunam", meaning: "Vietnam" },
        { korean: "스리랑카", romanization: "seurirangka", meaning: "Sri Lanka" },
        { korean: "우즈베키스탄", romanization: "ujeubek'iseuton", meaning: "Uzbekistan" },
        { korean: "인도네시아", romanization: "indonesia", meaning: "Indonesia" },
        { korean: "중국", romanization: "jungguk", meaning: "China" },
        { korean: "캄보디아", romanization: "kambodia", meaning: "Cambodia" },
        { korean: "키르기스스탄", romanization: "kireugisuseutan", meaning: "Kyrgyzstan" },
        { korean: "태국", romanization: "taeguk", meaning: "Thailand" },
        { korean: "파키스탄", romanization: "pakistan", meaning: "Pakistan" },
        { korean: "필리핀", romanization: "pillipin", meaning: "Philippines" }
    ],

    "Family": [
        { korean: "있다", romanization: "itda", meaning: "To Have" },
        { korean: "없다", romanization: "eopda", meaning: "To Not Have" },
        { korean: "많다", romanization: "manta", meaning: "To Be Many" },
        { korean: "살다", romanization: "salda", meaning: "To Live" },
        { korean: "할아버지", romanization: "harabeoji", meaning: "Grandfather" },
        { korean: "할머니", romanization: "halmeoni", meaning: "Grandmother" },
        { korean: "아버지", romanization: "abeoji", meaning: "Father" },
        { korean: "어머니", romanization: "eomeoni", meaning: "Mother" },
        { korean: "형", romanization: "hyeong", meaning: "Older Brother (Boy)" },
        { korean: "오빠", romanization: "oppa", meaning: "Older Brother (Girl)" },
        { korean: "누나", romanization: "nuna", meaning: "Older Sister (Boy)" },
        { korean: "언니", romanization: "eonni", meaning: "Older Sister (Girl)" },
        { korean: "아들", romanization: "adeul", meaning: "Son" },
        { korean: "딸", romanization: "ttal", meaning: "Daughter" },
        { korean: "부인", romanization: "buin", meaning: "Wife" },
        { korean: "남편", romanization: "nampyeon", meaning: "Husband" },
        { korean: "여동생", romanization: "yeodongsaeng", meaning: "Younger Sister" },
        { korean: "남동생", romanization: "namdongsaeng", meaning: "Younger Brother" },
        { korean: "형제/아우", romanization: "hyeongje/au", meaning: "Sibling" }
    ],

    "Greetings": [
        { korean: "안녕하세요", romanization: "annyeong haseyo", meaning: "General Greeting" },
        { korean: "만나서 반갑습니다", romanization: "mannaseo bangapseumnida", meaning: "Nice To Meet You" },
        { korean: "만나서 반갑습니다", romanization: "mannaseo bangapseumnida", meaning: "Nice To Meet You Too" },
        { korean: "안녕히 계세요", romanization: "annyeonghi gyeseyo", meaning: "Goodbye (Person Leaving)" },
        { korean: "안녕히 가세요", romanization: "annyeonghi gaseyo", meaning: "Goodbye (Person Staying)" },
        { korean: "감사합니다", romanization: "gamsahamnida", meaning: "Thank You" },
        { korean: "아니에요", romanization: "anieyo", meaning: "You're Welcome" },
        { korean: "죄송합니다", romanization: "joesonghamnida", meaning: "I'm Sorry" },
        { korean: "괜찮아요", romanization: "gwaenchanhayo", meaning: "It's Ok" },
        { korean: "주말 잘 보내세요", romanization: "jumal jal bonaeseyo", meaning: "Have A Great Weekend" },
        { korean: "안녕히 주무세요", romanization: "annyeonghi jumuseyo", meaning: "Good Night!" },
        { korean: "잘 자요", romanization: "jal jayo", meaning: "Good Night!" },
        { korean: "안녕히 주무셨어요?", romanization: "annyeonghi jumusyeosseoyo?", meaning: "Good Morning?" },
        { korean: "잘 먹겠습니다", romanization: "jal meokgetseumnida", meaning: "Thank You For The Meal" },
        { korean: "맛이 드세요", romanization: "masi deuseyo", meaning: "Enjoy Your Meal!" },
        { korean: "잘 먹었습니다", romanization: "jal meogeotsseumnida", meaning: "I Enjoyed The Meal" },
        { korean: "주말 잘 보내세요", romanization: "jumal jal bonaeseyo", meaning: "Have A Great Weekend" },
        { korean: "네, 주말 잘 보내세요", romanization: "ne, jumal jal bonaeseyo", meaning: "Have A Nice Weekend!" },
        { korean: "축하합니다", romanization: "chukhahamnida", meaning: "Congratulations!" },
        { korean: "감사합니다", romanization: "gamsahamnida", meaning: "Thank You" }
    ],

    "Daily Routine": [
        { korean: "일어나다", romanization: "ireonada", meaning: "to get up" },
        { korean: "씻다", romanization: "ssitda", meaning: "to wash" },
        { korean: "아침을 먹다", romanization: "achimeul meokda", meaning: "to have breakfast" },
        { korean: "회사에 가다", romanization: "hoesae gada", meaning: "to go to work" },
        { korean: "일하다", romanization: "ilhada", meaning: "to work" },
        { korean: "쉬다", romanization: "swida", meaning: "to rest" },
        { korean: "점심을 먹다", romanization: "jeomshimeul meokda", meaning: "to have lunch" },
        { korean: "집에 오다", romanization: "jibe oda", meaning: "to come home" },
        { korean: "장을 보다", romanization: "jangeul boda", meaning: "to go grocery shopping" },
        { korean: "요리하다", romanization: "yorihada", meaning: "to cook" },
        { korean: "저녁을 먹다", romanization: "jeonyeogeul meokda", meaning: "to have dinner" },
        { korean: "커피를 마시다", romanization: "keopireul masida", meaning: "to drink coffee" },
        { korean: "운동하다", romanization: "undonghada", meaning: "to workout" },
        { korean: "노래하다", romanization: "noraehada", meaning: "to sing" },
        { korean: "게임하다", romanization: "geimhada", meaning: "to play" },
        { korean: "산책하다", romanization: "sanchaekhada", meaning: "to take a walk" },
        { korean: "소핑하다", romanization: "sopinghada", meaning: "to go shopping" },
        { korean: "책을 읽다", romanization: "chaegeul ikda", meaning: "to read" },
        { korean: "영화를 보다", romanization: "yeonghwareul boda", meaning: "to see a movie" },
        { korean: "음식을 만들다", romanization: "eumsigeul mandeulda", meaning: "to cook" },
        { korean: "한국어를 공부하다", romanization: "hangugeoreul gongbuhada", meaning: "to study Korean" },
        { korean: "친구를 만나다", romanization: "chingureul mannada", meaning: "to meet a friend" },
        { korean: "텔레비전을 보다", romanization: "tellebijyoneul boda", meaning: "to watch television" },
        { korean: "전화하다", romanization: "jeonhwahada", meaning: "to call" },
        { korean: "자다", romanization: "jada", meaning: "to sleep" }
    ],

    "Range of Hours": [
        { korean: "지금", romanization: "jigeum", meaning: "now" },
        { korean: "오늘", romanization: "oneul", meaning: "today" },
        { korean: "내일", romanization: "naeil", meaning: "tomorrow" },
        { korean: "오전", romanization: "ojeon", meaning: "a.m./morning" },
        { korean: "오후", romanization: "ohu", meaning: "p.m./afternoon" },
        { korean: "낮", romanization: "nat", meaning: "day time" },
        { korean: "밤", romanization: "bam", meaning: "night time" },
        { korean: "새벽", romanization: "saebyeok", meaning: "dawn" },
        { korean: "아침", romanization: "achim", meaning: "morning" },
        { korean: "점심", romanization: "jeomsim", meaning: "afternoon" },
        { korean: "저녁", romanization: "jeonyeok", meaning: "evening" },
        { korean: "지난달", romanization: "jinandal", meaning: "last month" },
        { korean: "이번 달", romanization: "ibeon dal", meaning: "this month" },
        { korean: "다음 달", romanization: "daeum dal", meaning: "next month" },
        { korean: "어제", romanization: "eoje", meaning: "yesterday" },
        { korean: "지난주", romanization: "jinanju", meaning: "last week" },
        { korean: "이번 주", romanization: "ibeon ju", meaning: "this week" },
        { korean: "다음 주", romanization: "daeum ju", meaning: "next week" },
        { korean: "주중/평일", romanization: "jujung/pyeongil", meaning: "weekdays" },
        { korean: "주말", romanization: "jumal", meaning: "weekends" },
        { korean: "작년", romanization: "jangnyeon", meaning: "last year" },
        { korean: "올해", romanization: "olhae", meaning: "this year" },
        { korean: "내년", romanization: "naenyeon", meaning: "next year" }
    ],

    "Looks and Personality": [
        { korean: "예쁘다", romanization: "yeppeuda", meaning: "pretty" },
        { korean: "멋있다", romanization: "meositda", meaning: "cool" },
        { korean: "키가 크다", romanization: "kiga keuda", meaning: "tall" },
        { korean: "키가 작다", romanization: "kiga jakda", meaning: "short" },
        { korean: "날씬하다", romanization: "nalssinhada", meaning: "skinny" },
        { korean: "뚱뚱하다", romanization: "ttungttunghada", meaning: "fat" },
        { korean: "재미있다", romanization: "jaemiitda", meaning: "funny" },
        { korean: "친절하다", romanization: "chinjeolhada", meaning: "kind" },
        { korean: "똑똑하다", romanization: "ttokttokada", meaning: "smart" },
        { korean: "활발하다", romanization: "hwalbalhada", meaning: "outgoing" },
        { korean: "암전하다", romanization: "amjeonhada", meaning: "introvert" },
        { korean: "부지런하다", romanization: "bujireonhada", meaning: "diligent" }
    ],

    "Money and Purchasing Goods": [
        { korean: "돈/현금", romanization: "don/hyeongeum", meaning: "money" },
        { korean: "동전", romanization: "dongjeon", meaning: "coin" },
        { korean: "지폐", romanization: "jipye", meaning: "paper money" },
        { korean: "신용카드", romanization: "sinyong kadeu", meaning: "credit card" },
        { korean: "값/가격", romanization: "gap/gagyeok", meaning: "price" },
        { korean: "싸다", romanization: "ssada", meaning: "cheap" },
        { korean: "비싸다", romanization: "bissada", meaning: "expensive" },
        { korean: "(값을) 깎다", romanization: "(gapseul) kkakda", meaning: "to bargain" },
        { korean: "넣다", romanization: "neota", meaning: "to put in" },
        { korean: "싸다/포장하다", romanization: "ssada/pojanghada", meaning: "to wrap up" },
        { korean: "바꾸다/교환하다", romanization: "bakkuda/gyohwanhada", meaning: "to exchange" },
        { korean: "환불하다", romanization: "hwanbulhada", meaning: "to refund" }
    ],

    "Signs": [
        { korean: "앞으로 가세요", romanization: "apeuro gaseyo", meaning: "To Go Forward" },
        { korean: "뒤로 가세요", romanization: "dwiro gaseyo", meaning: "To Go Backward" },
        { korean: "오른쪽으로 가세요", romanization: "oreunjjogeuro gaseyo", meaning: "To Go Right" },
        { korean: "왼쪽으로 가세요", romanization: "oenjjogeuro gaseyo", meaning: "To Go Left" },
        { korean: "위로 올라가세요", romanization: "wiro ollagaseyo", meaning: "To Go Up" },
        { korean: "아래로 내려가세요", romanization: "araero naeryeogaseyo", meaning: "To Go Down" }
    ],


    "Streets": [
        { korean: "육교", romanization: "yukgyo", meaning: "Pedestrian overpass" },
        { korean: "이정표", romanization: "ijeongpyo", meaning: "road signs" },
        { korean: "신호등", romanization: "sinhodeung", meaning: "traffic lights" },
        { korean: "횡단보도", romanization: "hoengdanbodo", meaning: "crossway" },
        { korean: "길", romanization: "gil", meaning: "road/streets" },
        { korean: "도로", romanization: "doro", meaning: "road" },
        { korean: "골목", romanization: "golmok", meaning: "alley" }
    ],

    "Stative Verb 1": [
        { korean: "시간(이) 있다", romanization: "sigan(i) itda", meaning: "to have time" },
        { korean: "시간(이) 없다", romanization: "sigan(i) eopda", meaning: "not to have time" },
        { korean: "약속(이) 있다", romanization: "yaksok(i) itda", meaning: "to have an appointment" },
        { korean: "약속(이) 없다", romanization: "yaksok(i) eopda", meaning: "not to have an appointment" },
        { korean: "일이 많다", romanization: "iri manta", meaning: "to have a lot of work" },
        { korean: "일이 적다", romanization: "iri jeokda", meaning: "not to have much work" },
        { korean: "바쁘다", romanization: "bappeuda", meaning: "to be busy" },
        { korean: "한가하다", romanization: "hangahada", meaning: "to be free" },
        { korean: "재미있다", romanization: "jaemiitda", meaning: "to be interesting/fun" },
        { korean: "재미없다", romanization: "jaemieopda", meaning: "to be not interesting/boring" },
        { korean: "좋다", romanization: "jota", meaning: "nice" },
        { korean: "괜찮다", romanization: "gwaenchanta", meaning: "fine" }
    ],

    "Stative Verb 2": [
        { korean: "빠르다(이르다)", romanization: "ppareuda(ireuda)", meaning: "early" },
        { korean: "늦다", romanization: "neutda", meaning: "late" },
        { korean: "가깝다", romanization: "gakkapda", meaning: "close" },
        { korean: "멀다", romanization: "meolda", meaning: "far" },
        { korean: "같다", romanization: "gatda", meaning: "same" },
        { korean: "다르다", romanization: "dareuda", meaning: "different" },
        { korean: "간단하다", romanization: "gandanhada", meaning: "simple" },
        { korean: "복잡하다", romanization: "bokjapada", meaning: "complicated" },
        { korean: "편하다", romanization: "pyeonhada", meaning: "comfortable" },
        { korean: "불편하다", romanization: "bulpyeonhada", meaning: "uncomfortable" },
        { korean: "가능하다", romanization: "ganeunghada", meaning: "possible" },
        { korean: "불가능하다", romanization: "bulganeunghada", meaning: "impossible" }
    ],

    "Point of Existence (Marker 에)": [
        { korean: "있다", romanization: "itda", meaning: "to exist" },
        { korean: "없다", romanization: "eopda", meaning: "to not exist" },
        { korean: "살다", romanization: "salda", meaning: "to live" },
        { korean: "많다", romanization: "manta", meaning: "to be many" },
        { korean: "별로 많다", romanization: "byeollo manta", meaning: "to be not many" },
        { korean: "머무르다", romanization: "meomureuda", meaning: "to stay (temporarily, at a place)" },
        { korean: "머물다", romanization: "meomulda", meaning: "to stay (temporarily, at a place)" },
        { korean: "묵다", romanization: "mukda", meaning: "to stay (at a hotel, lodging)" }
    ],

    "Time Verbs (Marker 에)": [
        { korean: "시작하다", romanization: "sijakhada", meaning: "to start" },
        { korean: "끝나다", romanization: "kkeunnada", meaning: "to end" },
        { korean: "출발하다", romanization: "chulbalhada", meaning: "to depart" },
        { korean: "도착하다", romanization: "dochakhada", meaning: "to arrive" },
        { korean: "출근하다", romanization: "chulgeunhada", meaning: "to go to work" },
        { korean: "퇴근하다", romanization: "toegeunhada", meaning: "to leave work" }
    ],

    "Placement/Containment Verbs (Marker 에)": [
        { korean: "놓다", romanization: "nota", meaning: "to put (place)" },
        { korean: "넣다", romanization: "neota", meaning: "to put into" },
        { korean: "담다", romanization: "damda", meaning: "to put into a container" },
        { korean: "두다", romanization: "duda", meaning: "to put (leave intentionally in placed)" },
        { korean: "올리다", romanization: "ollida", meaning: "to put/raised into" },
        { korean: "꽂다", romanization: "kkotda", meaning: "to stick/insert" },
        { korean: "걸다", romanization: "geolda", meaning: "to hang" },
        { korean: "붙이다", romanization: "buchida", meaning: "to stick/attach" },
        { korean: "쌓다", romanization: "ssata", meaning: "to pile" },
        { korean: "넣어두다", romanization: "neoeoduda", meaning: "to keep/store in" }
    ],

    "Movement Verbs (Marker 에)": [
        { korean: "가다", romanization: "gada", meaning: "to go" },
        { korean: "오다", romanization: "oda", meaning: "to come" },
        { korean: "다니다", romanization: "danida", meaning: "to attend/go regularly" },
        { korean: "나다", romanization: "nada", meaning: "to come out" },
        { korean: "들어가다", romanization: "deureogada", meaning: "to enter/to go in" },
        { korean: "들어오다", romanization: "deureooda", meaning: "to come in" },
        { korean: "돌아가다", romanization: "doragada", meaning: "to return/go back" },
        { korean: "돌아오다", romanization: "doraoda", meaning: "to come back" },
        { korean: "출근하다", romanization: "chulgeunhada", meaning: "to go to work" },
        { korean: "퇴근하다", romanization: "toegeunhada", meaning: "to leave work" },
        { korean: "출발하다", romanization: "chulbalhada", meaning: "to depart" },
        { korean: "도착하다", romanization: "dochakhada", meaning: "to arrive" },
        { korean: "내려가다", romanization: "naeryeogada", meaning: "to go down" },
        { korean: "내려오다", romanization: "naeryeooda", meaning: "to come down" },
        { korean: "올라가다", romanization: "ollagada", meaning: "to go up" },
        { korean: "올라오다", romanization: "ollaoda", meaning: "to come up" },
        { korean: "나가다", romanization: "nagada", meaning: "to go out" },
        { korean: "나오다", romanization: "naoda", meaning: "to come out" },
    ],

    "Location Words": [
        { korean: "위", romanization: "wi", meaning: "on / above / up" },
        { korean: "밑/아래", romanization: "mit/arae", meaning: "under / below / down" },
        { korean: "앞", romanization: "ap", meaning: "front" },
        { korean: "뒤", romanization: "dwi", meaning: "behind / back" },
        { korean: "안/속", romanization: "an/sok", meaning: "inside" },
        { korean: "밖", romanization: "bak", meaning: "outside" },
        { korean: "옆", romanization: "yeop", meaning: "beside / next to" },
        { korean: "사이", romanization: "sai", meaning: "in between" },
        { korean: "가운데/중간", romanization: "gaunde/junggan", meaning: "in the middle" },
        { korean: "건너편 (맞은편)", romanization: "geonneopyeon (majeunpyeon)", meaning: "opposite side / across the street" },
        { korean: "우회전", romanization: "uhoejeon", meaning: "right turn" },
        { korean: "좌회전", romanization: "jwahoejeon", meaning: "left turn" },
        { korean: "오른쪽", romanization: "oreunjjok", meaning: "right" },
        { korean: "왼쪽", romanization: "oenjjok", meaning: "left" }
    ],

    "Restaurant": [
        { korean: "자리가 있다", romanization: "jariga itda", meaning: "seats are available" },
        { korean: "자리가 없다", romanization: "jariga eopda", meaning: "seats are not available" },
        { korean: "메뉴판", romanization: "menyupan", meaning: "menu book" },
        { korean: "메뉴", romanization: "menyu", meaning: "menu" },
        { korean: "밥", romanization: "bap", meaning: "rice" },
        { korean: "반찬", romanization: "banchan", meaning: "side dishes" },
        { korean: "숟가락", romanization: "sutgarak", meaning: "spoon" },
        { korean: "젓가락", romanization: "jeotgarak", meaning: "chopsticks" },
        { korean: "앉다", romanization: "anda", meaning: "to seat" },
        { korean: "고르다", romanization: "goreuda", meaning: "to pick" },
        { korean: "시키다(주문하다)", romanization: "sikida(jumunhada)", meaning: "to order" },
        { korean: "배달하다", romanization: "baedalhada", meaning: "to deliver" }
    ],

    "Taste of Foods": [
        { korean: "맛있다", romanization: "masitda", meaning: "delicious" },
        { korean: "맛없다", romanization: "maseopda", meaning: "not tasty" },
        { korean: "맵다", romanization: "maepda", meaning: "spicy" },
        { korean: "달다", romanization: "dalda", meaning: "sweet" },
        { korean: "짜다", romanization: "jjada", meaning: "salty" },
        { korean: "싱겁다", romanization: "singgeopda", meaning: "bland" },
        { korean: "쓰다", romanization: "sseuda", meaning: "bitter" },
        { korean: "시다", romanization: "sida", meaning: "sour" }
    ],

    "Weather and Seasons": [
        { korean: "비가 오다", romanization: "biga oda", meaning: "to rain" },
        { korean: "눈이 오다", romanization: "nuni oda", meaning: "to snow" },
        { korean: "바람이 불다", romanization: "barami bulda", meaning: "to be windy" },
        { korean: "그치다", romanization: "geuchida", meaning: "to stop" },
        { korean: "날씨가 좋다", romanization: "nalssiga jota", meaning: "the weather is good" },
        { korean: "날씨가 나쁘다", romanization: "nalssiga nappeuda", meaning: "the weather is bad" },
        { korean: "맑다", romanization: "malkda", meaning: "clear" },
        { korean: "흐리다", romanization: "heurida", meaning: "cloudy" },
        { korean: "따뜻하다", romanization: "ttatteuthada", meaning: "warm" },
        { korean: "덥다", romanization: "deopda", meaning: "hot" },
        { korean: "시원하다", romanization: "siwonhada", meaning: "cool" },
        { korean: "춥다", romanization: "chupda", meaning: "cold" },
        { korean: "봄", romanization: "bom", meaning: "spring" },
        { korean: "여름", romanization: "yeoreum", meaning: "summer" },
        { korean: "가을", romanization: "gaeul", meaning: "fall/autumn" },
        { korean: "겨울", romanization: "gyeoul", meaning: "winter" }
    ],

    "Adverbs": [
        { korean: "정말/진짜", romanization: "jeongmal/jinjja", meaning: "Really/truly" },
        { korean: "참", romanization: "cham", meaning: "really" },
        { korean: "아주", romanization: "aju", meaning: "very" },
        { korean: "너무", romanization: "neomu", meaning: "too much" },
        { korean: "제일/가장", romanization: "jeil/gajang", meaning: "the most/the best" },
        { korean: "특히", romanization: "teuki", meaning: "especially" },
        { korean: "많이", romanization: "mani", meaning: "many/much/a lot" },
        { korean: "조금", romanization: "jogeum", meaning: "few/little" }
    ],

    "Feelings and Moods": [
        { korean: "기분이 좋다", romanization: "gibuni jota", meaning: "to feel good" },
        { korean: "기분이 나쁘다", romanization: "gibuni nappeuda", meaning: "to feel bad" },
        { korean: "기쁘다", romanization: "gippeuda", meaning: "please" },
        { korean: "슬프다", romanization: "seulpeuda", meaning: "sad" },
        { korean: "즐겁다", romanization: "jeulgeopda", meaning: "pleasant" },
        { korean: "신나다", romanization: "sinnada", meaning: "excited" },
        { korean: "상쾌하다", romanization: "sangkwaehada", meaning: "to feel refreshed" },
        { korean: "행복하다", romanization: "haengbokhada", meaning: "happy" },
        { korean: "피곤하다", romanization: "pigonhada", meaning: "tired" },
        { korean: "졸리다", romanization: "jollida", meaning: "sleepy" },
        { korean: "외롭다", romanization: "oeropda", meaning: "lonely" },
        { korean: "우울하다", romanization: "uulhada", meaning: "depressed" }
    ],

    "Adverbs of Frequency": [
        { korean: "항상/늘", romanization: "hangsang/neul", meaning: "Always" },
        { korean: "자주", romanization: "jaju", meaning: "usually" },
        { korean: "가끔", romanization: "gakkeum", meaning: "occasionally" }
    ],

    "Hobbies": [
        { korean: "독서하다", romanization: "dokseo-hada", meaning: "to read" },
        { korean: "낚시하다", romanization: "naksi-hada", meaning: "to go fishing" },
        { korean: "여행하다", romanization: "yeohaeng-hada", meaning: "to travel" },
        { korean: "등산하다", romanization: "deungsan-hada", meaning: "to hiking" },
        { korean: "사진을 찍다", romanization: "sajineul jjikda", meaning: "to take pictures" },
        { korean: "외국어를 공부하다", romanization: "oegugeoreul gongbu-hada", meaning: "to study foreign language" },
        { korean: "음악회에 가다", romanization: "eumakhoee gada", meaning: "to go for a concert" },
        { korean: "운동 경기를 보다", romanization: "undong gyeongireul boda", meaning: "to watch sports games" },
        { korean: "음악을 듣다", romanization: "eumageul deutda", meaning: "to listen to music" },
        { korean: "기타를 치다", romanization: "gitareul chida", meaning: "to play the guitar" },
        { korean: "피아노를 치다", romanization: "pianoreul chida", meaning: "to play the piano" },
        { korean: "춤을 추다", romanization: "chumeul chuda", meaning: "to dance" }
    ],

    "Clubs for People with Shared Interests": [
        { korean: "축구 동호회", romanization: "chukgu dongho-hoe", meaning: "soccer club" },
        { korean: "등산 동호회", romanization: "deungsan dongho-hoe", meaning: "hiking club" },
        { korean: "사진 동호회", romanization: "sajin dongho-hoe", meaning: "photography club" },
        { korean: "요리 동호회", romanization: "yori dongho-hoe", meaning: "cooking club" }
    ],

    "Sports": [
        { korean: "축구하다", romanization: "chukgu-hada", meaning: "to play soccer" },
        { korean: "농구하다", romanization: "nonggu-hada", meaning: "to play basketball" },
        { korean: "야구하다", romanization: "yagu-hada", meaning: "to play baseball" },
        { korean: "수영하다", romanization: "suyeong-hada", meaning: "to swim" },
        { korean: "테니스 치다", romanization: "teniseu chida", meaning: "to play tennis" },
        { korean: "배드민턴 치다", romanization: "baedeu-minteon chida", meaning: "to play badminton" },
        { korean: "볼링 치다", romanization: "bolling chida", meaning: "to play bowling" },
        { korean: "골프 치다", romanization: "golpeu chida", meaning: "to play golf" },
        { korean: "스케이트 타다", romanization: "seukeiteuta-da", meaning: "to skate" },
        { korean: "스키 타다", romanization: "seuki ta-da", meaning: "to ski" },
        { korean: "자전거를 타다", romanization: "jajeongeo-reul ta-da", meaning: "to bike" }
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

    "Internet": [
        { korean: "인터넷", romanization: "inteonet", meaning: "internet" },
        { korean: "웹사이트", romanization: "websaiteu", meaning: "websites" },
        { korean: "검색 엔진", romanization: "geomsaek enjin", meaning: "search engine" },
        { korean: "홈페이지", romanization: "hompyeiji", meaning: "homepage" },
        { korean: "블로그", romanization: "beullogeu", meaning: "blog" },
        { korean: "인터넷 카페", romanization: "inteonet kapye", meaning: "internet café" },
        { korean: "회원 가입", romanization: "hoewon gaip", meaning: "create an account" },
        { korean: "회원 탈퇴", romanization: "hoewon taltwoe", meaning: "delete one's account" },
        { korean: "아이디", romanization: "aidi", meaning: "ID" },
        { korean: "비밀번호", romanization: "bimilbeonho", meaning: "password" },
        { korean: "로그인", romanization: "rogeulin", meaning: "log in" },
        { korean: "로그아웃", romanization: "rogeuaut", meaning: "log out" },
        { korean: "이메일", romanization: "imeil", meaning: "email" },
        { korean: "인터넷 검색", romanization: "inteonet geomsaek", meaning: "internet search" },
        { korean: "인터넷 채팅", romanization: "inteonet chaeting", meaning: "internet chatting" },
        { korean: "화상 채팅", romanization: "hwasang chaeting", meaning: "voice chatting" }
    ],

    "Cleaning": [
        { korean: "더럽다", romanization: "deorepda", meaning: "dirty" },
        { korean: "깨끗하다", romanization: "kkaekkeutada", meaning: "clean" },
        { korean: "어지럽다", romanization: "eojireopda", meaning: "messy" },
        { korean: "정돈되어 있다", romanization: "jeongdondoeeoss-ida", meaning: "well-arranged" },
        { korean: "청소를 하다", romanization: "cheongsoreul hada", meaning: "to clean" },
        { korean: "청소기를 돌리다", romanization: "cheongsogireul dollida", meaning: "to vacuum" },
        { korean: "정리하다", romanization: "jeongihada", meaning: "to clean up" },
        { korean: "먼지를 털다", romanization: "meonjireul teolda", meaning: "to clear dust away" },
        { korean: "쓸다", romanization: "sseulda", meaning: "to sweep" },
        { korean: "닦다", romanization: "dakda", meaning: "to wipe" },
        { korean: "쓰레기를 버리다", romanization: "sseuregireul beorida", meaning: "to throw away garbage" },
        { korean: "청소 도구", romanization: "cheongso dogu", meaning: "cleaning equipment" },
        { korean: "빗자루", romanization: "bitjaru", meaning: "broom" },
        { korean: "걸레", romanization: "geolre", meaning: "mop" },
        { korean: "휴지통", romanization: "hyujitong", meaning: "garbage can" },
    ],

    "Household Chores": [
        { korean: "장을 보다", romanization: "jangeul boda", meaning: "to go grocery shopping" },
        { korean: "밥을 하다/짓다", romanization: "babeul hada/jitda", meaning: "to cook rice" },
        { korean: "음식을 만들다", romanization: "eumsigeul mandeulda", meaning: "to cook" },
        { korean: "설거지를 하다", romanization: "seolgeojireul hada", meaning: "to do the dishes" },
        { korean: "밥솥", romanization: "bapsot", meaning: "rice cooker" },
        { korean: "냄비", romanization: "naembi", meaning: "pot" },
        { korean: "프라이팬", romanization: "peuraipan", meaning: "frying pan" },
        { korean: "주방 세제", romanization: "jubang seje", meaning: "dishwasher detergent" },
        { korean: "빨래를 하다", romanization: "ppallaereul hada", meaning: "to do laundry" },
        { korean: "세탁기를 돌리다", romanization: "setakgireul dollida", meaning: "to run the washer" },
        { korean: "빨래를 널다", romanization: "ppallaereul neolda", meaning: "to hang out the wash" },
        { korean: "빨래를 걷다", romanization: "ppallaereul geotda", meaning: "to bring in laundry" },
        { korean: "옷을 다리다", romanization: "oseul darida", meaning: "to iron clothes" },
        { korean: "옷을 개다", romanization: "oseul gaeda", meaning: "to fold clothes" },
        { korean: "세탁 세제", romanization: "setak seje", meaning: "detergent" },
        { korean: "다리미", romanization: "darimi", meaning: "iron" }
    ],
    
    "Seperate Garbage Collection": [
        { korean: "일반 쓰레기", romanization: "ilban sseuregi", meaning: "regular garbage" },
        { korean: "음식물 쓰레기", romanization: "eumsigmul sseuregi", meaning: "food waste" },
        { korean: "대형 쓰레기", romanization: "daehyeong sseuregi", meaning: "large garbage" },
        { korean: "재활용 쓰레기", romanization: "jaehwalyong sseuregi", meaning: "recyclable items" },
        { korean: "헌 옷, 형광등, 건전지", romanization: "heon ot, hyeonggwangdeung, geonjeonji", meaning: "old clothes, fluorescent light bulbs, batteries" }
    ],

    "Appointments": [
        { korean: "약속을 하다", romanization: "yaksokeul hada", meaning: "to make an appointment" },
        { korean: "약속을 지키다", romanization: "yaksokeul jikida", meaning: "to keep an appointment" },
        { korean: "약속을 어기다", romanization: "yaksokeul eogida", meaning: "to break an appointment" },
        { korean: "약속에 늦다", romanization: "yaksoke neutda", meaning: "late for an appointment" },
        { korean: "방문을 하다", romanization: "bangmuneul hada", meaning: "to visit" },
        { korean: "안내하다", romanization: "annaehada", meaning: "to guide" },
        { korean: "안내를 받다", romanization: "annaereul batda", meaning: "to be guided" },
        { korean: "기다리다", romanization: "gidarida", meaning: "to wait" },
    ],

    "Invitation": [
        { korean: "초대하다", romanization: "chodaehada", meaning: "to invite" },
        { korean: "초대를 받다", romanization: "chodaereul batda", meaning: "to get invited" },
        { korean: "선물을 준비하다", romanization: "seonmul-eul junbihada", meaning: "to prepare a present" },
        { korean: "집을 찾다", romanization: "jibeul chatda", meaning: "to look for a house" },
        { korean: "마중 나가다", romanization: "majung nagada", meaning: "to come to meet someone" },
        { korean: "음식을 장만하다", romanization: "eumsigeul jangmanhada", meaning: "to prepare food" },
        { korean: "상을 차리다", romanization: "sangeul charida", meaning: "to set the table" },
        { korean: "상을 치우다", romanization: "sangeul chiuda", meaning: "to clean the table" },
        { korean: "이야기를 나누다", romanization: "iyagireul nanuda", meaning: "to have a conversation with" },
        { korean: "배웅하다", romanization: "baeunghada", meaning: "to see someone off" }
    ],

    "Prohibition": [
        { korean: "금연", romanization: "geumyeon", meaning: "no smoking" },
        { korean: "음식물 반입 금지", romanization: "eumsigmul banip geumji", meaning: "no food or drink allowed" },
        { korean: "휴대전화 사용 금지", romanization: "hyudae jeonhwa sayong geumji", meaning: "no cell phone" },
        { korean: "사진 촬영 금지", romanization: "sajin chwalyeong geumji", meaning: "no photography" },
        { korean: "실내 정숙", romanization: "silnae jeong-suk", meaning: "quiet zone" },
        { korean: "출입 금지", romanization: "churip geumji", meaning: "no trespassing" },
        { korean: "접근 금지", romanization: "jeopgeun geumji", meaning: "no approach" },
        { korean: "무단 횡단 금지", romanization: "mudan hoengdan geumji", meaning: "no jaywalking" },
        { korean: "주차 금지", romanization: "jucha geumji", meaning: "no parking" },
        { korean: "과속 금지", romanization: "gwasok geumji", meaning: "no speeding" }
    ],
    "Behavior you must not do": [
        { korean: "담배를 피우다", romanization: "dambaereul piuda", meaning: "to smoke" },
        { korean: "담배꽁초를 버리다", romanization: "dambaekongchoreul beorida", meaning: "to throw away cigarette butts" },
        { korean: "쓰레기를 버리다", romanization: "sseuregireul beorida", meaning: "to throw away trash" },
        { korean: "침을 뱉다", romanization: "chimeul baetda", meaning: "to spit" },
        { korean: "뛰어다니다", romanization: "ttwieodanida", meaning: "to run around" },
        { korean: "떠들다", romanization: "tteodeulda", meaning: "to make noise" },
        { korean: "새치기를 하다", romanization: "saechigireul hada", meaning: "to cut in line" },
        { korean: "자리를 차지하다", romanization: "jarireul chajihada", meaning: "to take space" },
        { korean: "다리를 벌려서 앉다", romanization: "darireul beollyeoseo anda", meaning: "to sit with one's legs wide open" },
        { korean: "손대다", romanization: "sondaeda", meaning: "to touch" }
    ],
    "signs for public places" : [
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

    "lexicon honorifics" : [
        { korean: "계시다", romanization: "gyesida", meaning: "to stay" },
        { korean: "잡수시다/드시다", romanization: "jabsusida/deusida", meaning: "to eat" },
        { korean: "주무시다", romanization: "jumusida", meaning: "to sleep" },
        { korean: "말씀하시다", romanization: "malsseum-hasida", meaning: "to say" },
        { korean: "편찮으시다", romanization: "pyeonchaneusida", meaning: "sick" },
        { korean: "돌아가시다", romanization: "doragasida", meaning: "to pass away" },
        { korean: "드리다", romanization: "deurida", meaning: "to give" },
        { korean: "댁", romanization: "daek", meaning: "house" },
        { korean: "성함", romanization: "seongham", meaning: "name" },
        { korean: "연세", romanization: "yeonse", meaning: "age" }
    ],

    "Everyday Manners": [
        { korean: "신발을 신고 들어가다", romanization: "sinbareul singo deureogada", meaning: "to wear shoes inside the house" },
        { korean: "한 손으로 물건을 주다", romanization: "han soneuro mulgeoneul juda", meaning: "to use one hand to give" },
        { korean: "다리를 떨다", romanization: "darireul tteolda", meaning: "to shake one's leg" },
        { korean: "다리를 꼬고 앉다", romanization: "darireul kkogo anda", meaning: "to cross one's leg while sitting" },
        { korean: "밥에 숟가락을 꽂다", romanization: "babe sutgarageul kk otda", meaning: "to put the spoon in a rice bowl" },
        { korean: "밥그릇을 들고 먹다", romanization: "bapgeureut-eul deulgo meokda", meaning: "to hold a rice bowl to eat" },
        { korean: "소리를 크게 내다", romanization: "sorireul keuge naeda", meaning: "to make noise" },
        { korean: "고개를 돌리다", romanization: "gogaereul dollida", meaning: "to turn (slightly) away (one's body)" },
        { korean: "허리를 숙이다", romanization: "heorireul sugida", meaning: "to bend one's waist" },
        { korean: "자리를 양보하다", romanization: "jarireul yangbohada", meaning: "to offer one's seat to someone else" }
    ],

    "What does age mean to Korean?": [
        { korean: "밥을 먹을 때", romanization: "babeul meogeul ttae", meaning: "when eating" },
        { korean: "어른이 먼저 숟가락을 들 때까지 기다리기", romanization: "eoreuni meonjeo sutgarageul deul ttaekkaji gidarigi", meaning: "wait for the elderly to hold their spoon first" },
        { korean: "어른이 식사를 마실 때까지 자리에서 일어나지 않기", romanization: "eoreuni siksareul masil ttaekkaji jarieseo ireonaji angi", meaning: "stay seated until the elderly finishes their meal" },
        { korean: "술을 마실 때", romanization: "sureul masil ttae", meaning: "when drinking" },
        { korean: "어른께 술을 받을 때는 두 손으로 받기", romanization: "eorunkkae sureul badeul ttaeneun du soneuro batgi", meaning: "use both hands when receiving alcoholic beverages" },
        { korean: "어른이 먼저 술을 마신 후에 마시기", romanization: "eoreuni meonjeo sureul masin hue masigi", meaning: "drink only after the elderly drink" },
        { korean: "어른 앞에서는 고개를 돌리고 술 마시기", romanization: "eorun apeseoneun gogaereul dolligo sul masigi", meaning: "turn away and drink when drinking with the elderly" },
        { korean: "물건을 주고받을 때", romanization: "mulgeoneul jugobadeul ttae", meaning: "when exchanging items" },
        { korean: "어른께 물건을 드릴 때 두 손으로 드리기", romanization: "eorunkkae mulgeoneul deuril ttae du soneuro deurigi", meaning: "use both hands when giving objects to the elderly" },
        { korean: "어른이 물건을 주실 때 두 손으로 받기", romanization: "eoreuni mulgeoneul jusil ttae du soneuro batgi", meaning: "use both hands when receiving objects from the elderly" },
        { korean: "인사를 할 때는 허리를 숙이기", romanization: "insareul hal ttaeneun heorireul sugigi", meaning: "bend your waist when greeting the elderly" },
        { korean: "어른 앞에서 담배 피우지 않기", romanization: "eorun apeseoe dambae piuji angi", meaning: "do not smoke with the elderly" },
        { korean: "지하철이나 버스에서 어른께 자리 양보하기", romanization: "jihacheorida beoseueseo eorunkkae jari yangbohagi", meaning: "offer your seat to elderly when taking public transportation" }
    ],

    "Study": [
        { korean: "공부", romanization: "gongbu", meaning: "study" },
        { korean: "쉽다", romanization: "swipda", meaning: "easy" },
        { korean: "어렵다", romanization: "eoryeopda", meaning: "difficult" },
        { korean: "공부하다", romanization: "gongbuhada", meaning: "to study" },
        { korean: "사전을 찾다", romanization: "sajeoneul chatda", meaning: "to look up the dictionary" },
        { korean: "학원에 다니다", romanization: "hagwone danida", meaning: "to go to an academy" },
        { korean: "예습하다", romanization: "yeseupada", meaning: "to preview" },
        { korean: "복습하다", romanization: "bokseupada", meaning: "to review" },
        { korean: "인터넷 강의를 듣다", romanization: "inteonet gang-uireul deutda", meaning: "to take online courses" },
        { korean: "CD 를 듣다", romanization: "CD reul deutda", meaning: "to listen to a CD" },
        { korean: "따라 하다", romanization: "ttara hada", meaning: "to repeat after" }
    ],

    "Education": [
        { korean: "교육", romanization: "gyoyuk", meaning: "education" },
        { korean: "교육", romanization: "gyoyuk", meaning: "education" },
        { korean: "과정", romanization: "gwajeong", meaning: "course" },
        { korean: "수업", romanization: "sueop", meaning: "lesson" },
        { korean: "과목", romanization: "gwamok", meaning: "subject" },
        { korean: "일정", romanization: "iljeong", meaning: "schedule" },
        { korean: "기관", romanization: "gigwan", meaning: "institution" },
        { korean: "교실", romanization: "gyosil", meaning: "classroom" },
        { korean: "자격증", romanization: "jagyeokjeung", meaning: "certificate" },
        { korean: "개강", romanization: "gaegang", meaning: "beginning of the semester" },
        { korean: "종강", romanization: "jonggang", meaning: "end of the semester" }
    ],

    "Body Parts": [
        { korean: "머리", romanization: "meori", meaning: "head" },
        { korean: "눈", romanization: "nun", meaning: "eyes" },
        { korean: "코", romanization: "ko", meaning: "nose" },
        { korean: "입", romanization: "ip", meaning: "mouth" },
        { korean: "귀", romanization: "gwi", meaning: "ears" },
        { korean: "얼굴", romanization: "eolgul", meaning: "face" },
        { korean: "어깨", romanization: "eokkae", meaning: "shoulders" },
        { korean: "팔", romanization: "pal", meaning: "arms" },
        { korean: "손", romanization: "son", meaning: "hands" },
        { korean: "허리", romanization: "heori", meaning: "waist" },
        { korean: "손목", romanization: "sonmok", meaning: "wrist" },
        { korean: "손가락", romanization: "son-garak", meaning: "fingers" },
        { korean: "몸", romanization: "mom", meaning: "body" },
        { korean: "배", romanization: "bae", meaning: "stomach" },
        { korean: "다리", romanization: "dari", meaning: "legs" },
        { korean: "발목", romanization: "balmok", meaning: "ankles" },
        { korean: "무릎", romanization: "mureup", meaning: "knees" },
        { korean: "발", romanization: "bal", meaning: "feet" }
    ],

    "Symptoms": [
        { korean: "증상", romanization: "jeungsang", meaning: "symptoms" },
        { korean: "감기에 걸리다", romanization: "gamgie geollida", meaning: "to catch a cold" },
        { korean: "열이 나다", romanization: "yeori nada", meaning: "to have a fever" },
        { korean: "기침을 하다", romanization: "gichimeul hada", meaning: "to cough" },
        { korean: "콧물이 나다", romanization: "konmuri nada", meaning: "to have a runny nose" },
        { korean: "배탈이 나다", romanization: "baetari nada", meaning: "to have an upset stomach" },
        { korean: "설사를 하다", romanization: "seolsareul hada", meaning: "to have diarrhea" },
        { korean: "소화가 안 되다", romanization: "sohwaga an doeda", meaning: "to have indigestion" },
        { korean: "토하다", romanization: "tohada", meaning: "to vomit" },
        { korean: "손을 베다", romanization: "soneul beda", meaning: "to get a cut on one's finger" },
        { korean: "손을 데다", romanization: "soneul deda", meaning: "to burn one's hand" },
        { korean: "발목을 삐다", romanization: "balmokeul ppida", meaning: "to sprain one's ankle" },
        { korean: "다리가 부러지다", romanization: "dariga bureojida", meaning: "to break one's leg" },
        { korean: "두통", romanization: "dutong", meaning: "headache" }
    ],

    "First Aid": [
        { korean: "붕대", romanization: "bungdae", meaning: "fabric bandage" },
        { korean: "연고", romanization: "yeongo", meaning: "ointment" },
        { korean: "파스", romanization: "paseu", meaning: "pain relief patch" },
        { korean: "밴드", romanization: "baendeu", meaning: "plastic bandage" },
        { korean: "알약", romanization: "alyak", meaning: "tablet" },
        { korean: "영양제", romanization: "yeongyangje", meaning: "nutritional supplement" },
        { korean: "안약", romanization: "anyak", meaning: "eye drop" },
        { korean: "반창고", romanization: "banchanggo", meaning: "band-aid" },
        { korean: "두통 약", romanization: "dutong yak", meaning: "headache medication" },
        { korean: "소독약", romanization: "sodokyak", meaning: "antiseptic" },
        { korean: "감기약", romanization: "gamgiyak", meaning: "cough, cold and flu medicine" },
        { korean: "소화제", romanization: "sohwaje", meaning: "digestion medicine" },
        { korean: "진통제", romanization: "jintongje", meaning: "painkiller" },
        { korean: "해열제", romanization: "haeyeolje", meaning: "fever reducer" },
    ],

    "Medical Centeres": [
        { korean: "내과", romanization: "naegwa", meaning: "internal medicine/clinic" },
        { korean: "정형외과", romanization: "jeonghyeong oegwa", meaning: "orthopedic office" },
        { korean: "치과", romanization: "chigwa", meaning: "dentistry" },
        { korean: "안과", romanization: "angwa", meaning: "ophthalmology" },
        { korean: "이비인후과", romanization: "ibiinhugwa", meaning: "otolaryngology" },
        { korean: "피부과", romanization: "pibugwa", meaning: "dermatology" },
        { korean: "산부인과", romanization: "sanbuingwa", meaning: "ob/gyn (obstetrics gynecology)" },
        { korean: "소아과", romanization: "soagwa", meaning: "pediatrics" }
    ],

    "Treatment": [
        { korean: "치료를 하다", romanization: "chiryoreul hada", meaning: "to treat" },
        { korean: "주사를 맞다", romanization: "jusareul matda", meaning: "to get an injection" },
        { korean: "수술하다", romanization: "susulhada", meaning: "to have surgery" },
        { korean: "약을 먹다", romanization: "yageul meokda", meaning: "to take medicine" },
        { korean: "소독을 하다", romanization: "sodokeul hada", meaning: "to disinfect" },
        { korean: "연고를 바르다", romanization: "yeongoreul bareuda", meaning: "to apply ointment" },
        { korean: "밴드를 붙이다", romanization: "baendeureul buchida", meaning: "to put on a band-aid on" },
        { korean: "파스를 붙이다", romanization: "paseureul buchida", meaning: "to apply a patch (to)" },
        { korean: "찜질을 하다", romanization: "jjimjireul hada", meaning: "to apply ice" },
        { korean: "붕대를 감다", romanization: "bungdaereul gamda", meaning: "to wrap a bandage" },
        { korean: "주무르다", romanization: "jumureuda", meaning: "to massage" },
        { korean: "깁스를 하다", romanization: "gipseureul hada", meaning: "to wear a plaster (cast)" }
    ],

    "Banks": [
        { korean: "창구", romanization: "changgu", meaning: "counter" },
        { korean: "통장", romanization: "tongjang", meaning: "bankbook" },
        { korean: "신분증", romanization: "sinbunjeung", meaning: "ID card" },
        { korean: "계좌 번호", romanization: "gyejwa beonho", meaning: "account number" },
        { korean: "주소", romanization: "juso", meaning: "address" },
        { korean: "서명", romanization: "seomyeong", meaning: "signature" },
        { korean: "비밀번호", romanization: "bimilbeonho", meaning: "password" },
        { korean: "인터넷뱅킹", romanization: "inteonet baengking", meaning: "Internet banking" },
        { korean: "체크카드", romanization: "chekeu kadeu", meaning: "check card" },
        { korean: "신용카드", romanization: "sinyong kadeu", meaning: "credit card" }
    ],

    "Banking Business and ATM": [
        { korean: "현금인출기(ATM)", romanization: "hyeongeum inchulgi (ATM)", meaning: "ATM" },
        { korean: "송금하다", romanization: "songgumhada", meaning: "to transfer" },
        { korean: "입금하다", romanization: "ipgeumhada", meaning: "to deposit" },
        { korean: "출금하다", romanization: "chulgeumhada", meaning: "to withdraw" },
        { korean: "대출하다", romanization: "daechulhada", meaning: "to loan" },
        { korean: "환전하다", romanization: "hwanjeonhada", meaning: "to exchange" },
        { korean: "계좌 이체", romanization: "gyejwa iche", meaning: "account transfer" },
        { korean: "잔액 조회", romanization: "janaek johoe", meaning: "balance inquiry" },
        { korean: "통장 정리", romanization: "tongjang jeongni", meaning: "bankbook update" },
        { korean: "수수료", romanization: "susuryo", meaning: "fees" }
    ],

    "Mail": [
        { korean: "우편물", romanization: "upyeonmul", meaning: "mail" },
        { korean: "편지", romanization: "pyeonji", meaning: "letter" },
        { korean: "엽서", romanization: "yeopseo", meaning: "postcard" },
        { korean: "카드", romanization: "kadeu", meaning: "card" },
        { korean: "편지를 쓰다", romanization: "pyeonjireul sseuda", meaning: "to write a letter" },
        { korean: "우표를 붙이다", romanization: "upyoreul buchida", meaning: "to affix a postage stamp" },
        { korean: "편지를 보내다", romanization: "pyeonjireul bonaeda", meaning: "to send a letter" },
        { korean: "편지 봉투", romanization: "pyeonji bongtu", meaning: "envelope" },
        { korean: "이메일", romanization: "imeil", meaning: "e-mails" },
        { korean: "소포/택배", romanization: "sopo/taekbae", meaning: "package/delivery service" },
        { korean: "저울에 올려놓다", romanization: "jeourae ollyeonota", meaning: "to place (something) on the scales" },
        { korean: "무게를 재다", romanization: "mugereul jaeda", meaning: "to weigh" },
        { korean: "소포를 보내다", romanization: "soporeul bonaeda", meaning: "to send a package" },
        { korean: "소포를 받다", romanization: "soporeul batda", meaning: "to receive a package" },
        { korean: "일반 우편", romanization: "ilban upyeon", meaning: "standard mail" },
        { korean: "등기 우편", romanization: "deunggi upyeon", meaning: "registered mail" },
        { korean: "국제 특급(EMS)", romanization: "gukje teukgeup (EMS)", meaning: "Express Mail" },
        { korean: "택배", romanization: "taekbae", meaning: "delivery" }
    ],

    "Education and Service": [
        { korean: "한국어 교육", romanization: "hangugeo gyoyuk", meaning: "Korean Lesson" },
        { korean: "컴퓨터 교육", romanization: "keompyuteo gyoyuk", meaning: "Computer Lesson" },
        { korean: "태권도 교육", romanization: "taegwondo gyoyuk", meaning: "Taekwondo Training" },
        { korean: "법률 교육", romanization: "beopnyul gyoyuk", meaning: "Legal Training" },
        { korean: "안전 교육", romanization: "anjeon gyoyuk", meaning: "Safety Education" },
        { korean: "국악 교육", romanization: "gugak gyoyuk", meaning: "Korean Classical Music Lessons" },
        { korean: "금융 교육", romanization: "geumyung gyoyuk", meaning: "Financial Education" },
        { korean: "영양 교육", romanization: "yeongnyang gyoyuk", meaning: "Nutritional Education" },
        { korean: "양방 진료", romanization: "yangbang jillyo", meaning: "Western Medical Treatment" },
        { korean: "한방 진료", romanization: "hanbang jillyo", meaning: "Chinese Medical Treatment" }
    ],

    "How to Use Institutions Supporting Migrant Workers": [
        { korean: "예약하다", romanization: "yeyakhada", meaning: "to make an appointment" },
        { korean: "상담을 받다", romanization: "sangdameul batda", meaning: "to get counselling" },
        { korean: "교육을 신청하다", romanization: "gyoyugeul sincheong-hada", meaning: "to enroll in a training course" },
        { korean: "교육을 받다", romanization: "gyoyugeul batda", meaning: "to take a lesson (course)" },
        { korean: "이용하다", romanization: "iyonghada", meaning: "to use" },
        { korean: "행사에 참여하다", romanization: "haengsae chamyeohada", meaning: "to participate in an event" },
        { korean: "문화 체험을 하다", romanization: "munhwa chehemeul hada", meaning: "to have a cultural experience" },
        { korean: "자원 봉사를 하다", romanization: "jawon bongsareul hada", meaning: "to volunteer" }
    ],

    "The Weather": [
        { korean: "기온", romanization: "gion", meaning: "temperature" },
        { korean: "영상", romanization: "yeongsang", meaning: "above zero" },
        { korean: "영하", romanization: "yeongha", meaning: "below zero" },
        { korean: "습도", romanization: "seupdo", meaning: "humidity" },
        { korean: "최고기온", romanization: "choego gion", meaning: "the highest temperature" },
        { korean: "최저기온", romanization: "choejeo gion", meaning: "the lowest temperature" },
        { korean: "기온이 높다", romanization: "gioni nopda", meaning: "the temperature is high" },
        { korean: "기온이 낮다", romanization: "gioni natda", meaning: "the temperature is low" },
        { korean: "기온이 올라가다", romanization: "gioni ollagada", meaning: "the temperature goes up" },
        { korean: "기온이 내려가다", romanization: "gioni naeryeogada", meaning: "the temperature goes down" },
        { korean: "습하다", romanization: "seupada", meaning: "humid" },
        { korean: "건조하다", romanization: "geonjohada", meaning: "dry" }
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

    "Seasonal Food": [
        { korean: "뜨겁다", romanization: "tteugeopda", meaning: "hot" },
        { korean: "차다/차갑다", romanization: "chada/chagapda", meaning: "cold" },
        { korean: "삼계탕", romanization: "samgyetang", meaning: "ginseng chicken soup" },
        { korean: "냉면", romanization: "naengmyeon", meaning: "cold buckwheat noodle" },
        { korean: "팥죽", romanization: "patjuk", meaning: "red bean porridge" },
        { korean: "군고구마", romanization: "gun goguma", meaning: "roasted sweet potato" },
        { korean: "콩국수", romanization: "kongguksu", meaning: "noodles in cold soybean soup" },
        { korean: "팥빙수", romanization: "patbingsu", meaning: "shaved ice dessert with red beans" },
        { korean: "찐빵", romanization: "jjinppang", meaning: "steamed bun with red bean paste" },
        { korean: "호떡", romanization: "hotteok", meaning: "filling pancake stuffed with brown sugar" }
    ],

    "Ingredients and Cooking": [
        { korean: "고기", romanization: "gogi", meaning: "meat" },
        { korean: "생선", romanization: "saengseon", meaning: "fish" },
        { korean: "채소", romanization: "chaeso", meaning: "vegetable" },
        { korean: "소고기", romanization: "sogogi", meaning: "beef" },
        { korean: "돼지고기", romanization: "dwaejigogi", meaning: "pork" },
        { korean: "닭고기", romanization: "dalgogi", meaning: "chicken" },
        { korean: "양고기", romanization: "yanggogi", meaning: "lamb" },
        { korean: "끓이다", romanization: "kkeulida", meaning: "to boil" },
        { korean: "삶다", romanization: "samda", meaning: "to simmer" },
        { korean: "굽다", romanization: "gupda", meaning: "to grill" },
        { korean: "볶다", romanization: "bokda", meaning: "to stir fry" },
        { korean: "튀기다", romanization: "twigida", meaning: "to fry" },
        { korean: "파", romanization: "pa", meaning: "leeks/green onion" },
        { korean: "양파", romanization: "yangpa", meaning: "onion" },
        { korean: "마늘", romanization: "maneul", meaning: "garlic" },
        { korean: "감자", romanization: "gamja", meaning: "potato" },
        { korean: "당근", romanization: "danggeun", meaning: "carrot" }
    ],

    "Lunar New Year's Day (설날)": [
        { korean: "한복을 입다", romanization: "hanbokkeul ipda", meaning: "to wear Hanbok" },
        { korean: "세배하다", romanization: "sebaehada", meaning: "to give a New Year's bow" },
        { korean: "덕담을 하다", romanization: "deokdameul hada", meaning: "to give words of blessing" },
        { korean: "덕담을 듣다", romanization: "deokdameul deutda", meaning: "to receive words of blessing" },
        { korean: "세뱃돈을 주다", romanization: "sebaetdoneul juda", meaning: "to give New Year's cash gifts" },
        { korean: "세뱃돈을 받다", romanization: "sebaetdoneul batda", meaning: "to receive New Year's cash gifts" },
        { korean: "떡국을 먹다", romanization: "tteokgugeul meokda", meaning: "to eat Tteokguk" },
        { korean: "윷놀이를", romanization: "yunnorireul", meaning: "to play Yut (Korean board game)" }
    ],

    "Korean Thanksgiving (추석)": [
        { korean: "고향에 내려가다", romanization: "gohyang-e naeryeogada", meaning: "to go to one's hometown" },
        { korean: "친척집에 가다", romanization: "chincheogjibe gada", meaning: "to go to a relatives' house" },
        { korean: "차례를 지내다", romanization: "charereul jinaeda", meaning: "to have a ritual for one's ancestors" },
        { korean: "절하다", romanization: "jeolhada", meaning: "to bow" },
        { korean: "성묘하다", romanization: "seongmyohada", meaning: "to pay one's respects at one's ancestors' grave" },
        { korean: "송편을 만들다", romanization: "songpyeoneul mandeulda", meaning: "to make Songpyeon (Half-moon Rice Cake)" },
        { korean: "보름달을 보다", romanization: "boreumdareul boda", meaning: "to see the full moon" },
        { korean: "소원을 빌다", romanization: "sowoneul bilda", meaning: "to make a wish" }
    ],

    "Special Days": [
        { korean: "생일", romanization: "saengil", meaning: "Birthday" },
        { korean: "백일", romanization: "baegil", meaning: "One Hundredth Day" },
        { korean: "돌", romanization: "dol", meaning: "Dol, One's First Birthday" },
        { korean: "집들이", romanization: "jipdeurie", meaning: "Housewarming Party" },
        { korean: "어버이날", romanization: "eobeinal", meaning: "Parents' Day" },
        { korean: "스승의 날", romanization: "seseungui nal", meaning: "Teacher's Day" },
        { korean: "어린이날", romanization: "eoriniinal", meaning: "Children's Day" },
        { korean: "결혼기념일", romanization: "gyeolhon ginyeomil", meaning: "Wedding Anniversary" },
        { korean: "환갑", romanization: "hwangap", meaning: "One's 60th Birthday" },
        { korean: "칠순", romanization: "chilsun", meaning: "One's 70th Birthday" }
    ],

    "Culture of Marriage": [
        { korean: "결혼식", romanization: "gyeolhonsik", meaning: "wedding ceremony" },
        { korean: "청첩장", romanization: "cheongcheopjang", meaning: "wedding invitation" },
        { korean: "축의금", romanization: "chuguigeum", meaning: "congratulatory gift of money" },
        { korean: "신랑", romanization: "sillang", meaning: "bridegroom" },
        { korean: "신부", romanization: "sinbu", meaning: "bride" },
        { korean: "주례", romanization: "jurye", meaning: "officiant" },
        { korean: "하객", romanization: "hagaek", meaning: "guest" },
        { korean: "사진 촬영을 하다", romanization: "sajin chwalyeongeul hada", meaning: "to take pictures" },
        { korean: "피로연을 하다", romanization: "piroyeoneul hada", meaning: "to have an after party to give a traditional ceremony" },
        { korean: "폐백을 드리다", romanization: "pyebaekeul deurida", meaning: "to pay respects to the groom's family" }
    ],

    "The Korean Wave": [
        { korean: "연예인", romanization: "yonyein", meaning: "celebrities" },
        { korean: "드라마", romanization: "deurama", meaning: "television shows" },
        { korean: "영화", romanization: "yeonghwa", meaning: "movies" },
        { korean: "음악 프로그램", romanization: "eumak peurogeuraem", meaning: "music programs" },
        { korean: "예능 프로그램", romanization: "yeneung peurogeuraem", meaning: "entertainment programs" },
        { korean: "가수", romanization: "gasu", meaning: "singers" },
        { korean: "영화배우", romanization: "yeonghwabau", meaning: "film actors/actresses" }
    ],

    "Economy and Industry": [
        { korean: "수출하다", romanization: "suchulhada", meaning: "to export" },
        { korean: "수입하다", romanization: "suiphada", meaning: "to import" },
        { korean: "수출품", romanization: "suchulpum", meaning: "exports" },
        { korean: "수입품", romanization: "suippum", meaning: "imports" },
        { korean: "선진국", romanization: "seonjinguk", meaning: "developed country" },
        { korean: "개발도상국", romanization: "gaebaldosangguk", meaning: "developing country" },
        { korean: "무역", romanization: "muyeok", meaning: "trade" },
        { korean: "경제 발전", romanization: "gyeongje baljeon", meaning: "economic development" }
    ],

    "Attire": [
        { korean: "작업복", romanization: "jageokbok", meaning: "work clothes" },
        { korean: "작업복", romanization: "jageokbok", meaning: "uniform" },
        { korean: "단정하다", romanization: "danjeonghada", meaning: "neat" },
        { korean: "깔끔하다", romanization: "kkalkkeumhada", meaning: "tidy" },
        { korean: "단추를 잠그다", romanization: "danchureul jamgeuda", meaning: "to button up" },
        { korean: "단추를 풀다", romanization: "danchureul pulda", meaning: "to button down" },
        { korean: "지퍼를 올리다", romanization: "jipereul ollida", meaning: "to zip up" },
        { korean: "지퍼를 내리다", romanization: "jipereul naerida", meaning: "to zip down" },
        { korean: "넥타이를 매다", romanization: "nektaireul maeda", meaning: "to tie a tie" },
        { korean: "넥타이를 풀다", romanization: "nektaireul pulda", meaning: "to untie a tie" }
    ],

    "Attitude": [
        { korean: "예의가 있다", romanization: "yeuiga itda", meaning: "polite" },
        { korean: "예의가 없다", romanization: "yeuiga eopda", meaning: "rude" },
        { korean: "반말을 하다", romanization: "banmareul hada", meaning: "to talk down" },
        { korean: "존댓말을 하다", romanization: "jondaetmareul hada", meaning: "to use honorifics" },
        { korean: "존중하다", romanization: "jonjunghada", meaning: "to respect" },
        { korean: "배려하다", romanization: "baeryeohada", meaning: "considerate" },
        { korean: "칭찬하다", romanization: "chingchanhada", meaning: "to give compliments" },
        { korean: "함부로 하다", romanization: "hamburo hada", meaning: "to behave arrogantly" },
        { korean: "피해를 주다", romanization: "pihaereul juda", meaning: "to harm someone" },
        { korean: "불쾌하다", romanization: "bulkwaehada", meaning: "unpleasant" },
        { korean: "무시하다", romanization: "musihada", meaning: "to ignore" }
    ],

    "Dormitory": [
        { korean: "방", romanization: "bang", meaning: "room" },
        { korean: "복도", romanization: "bokdo", meaning: "hallway" },
        { korean: "계단", romanization: "gyedan", meaning: "stairs" },
        { korean: "출입문", romanization: "churimmun", meaning: "entrance" },
        { korean: "세탁실", romanization: "setaksil", meaning: "laundry room" },
        { korean: "목욕실/샤워실", romanization: "mogyoksil/syawosil", meaning: "shower room" },
        { korean: "관리인", romanization: "gwalliin", meaning: "staff member" },
        { korean: "규칙을 지키다", romanization: "gyuchike ul jikida", meaning: "to follow rules and regulations" },
        { korean: "규칙을 어기다", romanization: "gyuchike ul eogida", meaning: "to break rules and regulations" }
    ],

    "Air Conditioning and Heating": [
        { korean: "냉방", romanization: "naengbang", meaning: "air conditioning" },
        { korean: "에어컨/냉방", romanization: "eokon/naengbang", meaning: "air conditioner" },
        { korean: "선풍기", romanization: "seonpunggi", meaning: "fan" },
        { korean: "전기난로", romanization: "jeonginallo", meaning: "electric heater" },
        { korean: "난방", romanization: "nanbang", meaning: "heating" },
        { korean: "전기장판", romanization: "jeongijangpan", meaning: "electric blanket" },
        { korean: "스위치를 켜다", romanization: "seuwichireul kyeoda", meaning: "to turn on the switch" },
        { korean: "스위치를 끄다", romanization: "seuwichireul kkeuda", meaning: "to turn off the switch" },
        { korean: "플러그를 꽂다", romanization: "peulleogureul kkotda", meaning: "to plug in" },
        { korean: "플러그를 뽑다", romanization: "peulleogureul ppopda", meaning: "to unplug" }
    ],

    "The Atmosphere at a Workplace": [
        { korean: "동료", romanization: "dongnyo", meaning: "colleagues" },
        { korean: "상사", romanization: "sangsa", meaning: "one's senior" },
        { korean: "부하", romanization: "buha", meaning: "one's junior" },
        { korean: "사이가 좋다", romanization: "saiga jota", meaning: "to get along" },
        { korean: "사이가 나쁘다", romanization: "saiga nappeuda", meaning: "to be on bad terms" },
        { korean: "격려하다", romanization: "gyengnyeohada", meaning: "to encourage" },
        { korean: "서로 위해주다", romanization: "seoro wihaejuda", meaning: "to care for each other" },
        { korean: "분위기가 좋다", romanization: "bunwigiga jota", meaning: "to have a good atmosphere" },
        { korean: "분위기가 나쁘다", romanization: "bunwigiga nappeuda", meaning: "to have a bad atmosphere" },
        { korean: "자유롭다", romanization: "jayuropda", meaning: "lively" },
        { korean: "규율이 엄격하다", romanization: "gyuyuri eomgyeokhada", meaning: "strict" }
    ],

    "Conflicts with Colleagues": [
        { korean: "때리다", romanization: "ttaerida", meaning: "to slap" },
        { korean: "맞다", romanization: "matda", meaning: "to be hit" },
        { korean: "욕을 하다", romanization: "yogeul hada", meaning: "to curse" },
        { korean: "짜증을 내다", romanization: "jjajeungeul naeda", meaning: "to be irritated" },
        { korean: "화가 나다", romanization: "hwaga nada", meaning: "to get angry" },
        { korean: "화를 내다", romanization: "hwareul naeda", meaning: "to lose one's temper" },
        { korean: "싸움을 하다", romanization: "ssaumeul hada", meaning: "to fight" },
        { korean: "말다툼을 하다", romanization: "maldatumeul hada", meaning: "to brawl" },
        { korean: "오해하다", romanization: "ohaehada", meaning: "to misunderstand" },
        { korean: "오해를 풀다", romanization: "ohaereul pulda", meaning: "to resolve a misunderstanding" },
        { korean: "사과하다", romanization: "sagwahada", meaning: "to apologize" },
        { korean: "화해하다", romanization: "hwahaehada", meaning: "to reconcile" }
    ],

    "Company Dinners": [
        { korean: "회식을 하다", romanization: "hoesigeul hada", meaning: "to go out to dinner with coworkers" },
        { korean: "참석하다", romanization: "chamseokada", meaning: "to attend" },
        { korean: "빠지다", romanization: "ppajida", meaning: "to excuse oneself from" },
        { korean: "한턱내다", romanization: "hanteoknaeda", meaning: "to treat" },
        { korean: "한잔하다", romanization: "hanjanhada", meaning: "to have a drink" },
        { korean: "차에 가다", romanization: "chae gada", meaning: "to go in for a second round" },
        { korean: "술을 받다", romanization: "sureul batda", meaning: "to be offered alcohol" },
        { korean: "건배하다", romanization: "geonbaehada", meaning: "to toast" }
    ],

    "Meetings at Work": [
        { korean: "환영하다", romanization: "hwanyeonghada", meaning: "to welcome" },
        { korean: "환송하다", romanization: "hwansonghada", meaning: "to farewell" },
        { korean: "축하하다", romanization: "chukhahada", meaning: "to celebrate" },
        { korean: "단합 대회", romanization: "danhap daehoe", meaning: "to become intimate" },
        { korean: "친해지다", romanization: "chinhaejida", meaning: "to become intimate" },
        { korean: "등반 대회", romanization: "deungban daehoe", meaning: "hiking event picnic/excursion" },
        { korean: "야유회 체육대회", romanization: "yayuhoe cheyukdaehoe", meaning: "athletic meet event" }
    ],

    "Sexual Harassment": [
        { korean: "성희롱", romanization: "seonghilong", meaning: "Sexual harassment" },
        { korean: "불쾌감", romanization: "bulkwaegam", meaning: "displeasure" },
        { korean: "수치심", romanization: "suchisim", meaning: "sense of humiliation" },
        { korean: "거부감", romanization: "geobugam", meaning: "abhorrence" },
        { korean: "성적 농담", romanization: "seongjeok nongdam", meaning: "sexual or sex-based jokes" },
        { korean: "신체 접촉", romanization: "sinche jeopchok", meaning: "physical contact" },
        { korean: "음담패설", romanization: "eumdampaesoel", meaning: "lewd comments" },
        { korean: "음란물", romanization: "eumnanmul", meaning: "sexual pictures or displays/pornography" },
        { korean: "동영상", romanization: "dongyeongsang", meaning: "video (clips)" }
    ],

    "Coping with Sexual Harassment": [
        { korean: "가해자", romanization: "gahaeja", meaning: "perpetrator" },
        { korean: "피해자", romanization: "pihaeja", meaning: "victim" },
        { korean: "증거", romanization: "jeunggeo", meaning: "evidence" },
        { korean: "증인", romanization: "jeungin", meaning: "witness" },
        { korean: "성범죄", romanization: "seongbeomjoe", meaning: "sexual assault" },
        { korean: "의사를 표현하다", romanization: "uisareul pyohyeonhada", meaning: "to articulate one's thoughts" },
        { korean: "신고하다", romanization: "singohada", meaning: "to report" },
        { korean: "강요하다", romanization: "gangyohada", meaning: "to force" },
        { korean: "요구하다", romanization: "yoguhada", meaning: "to require" },
        { korean: "불이익을 주다", romanization: "burigigeul juda", meaning: "to disadvantage" }
    ],

    "Hand Tools for Manufacturing": [
        { korean: "펜치", romanization: "penchi", meaning: "pincers" },
        { korean: "니퍼", romanization: "nipeo", meaning: "nippers" },
        { korean: "플라이어", romanization: "peullaieo", meaning: "pliers" },
        { korean: "드라이버", romanization: "deuraibeo", meaning: "screwdriver" },
        { korean: "끊다/구부리다", romanization: "kkeunta/guburida", meaning: "to cut/to bend" },
        { korean: "절단하다", romanization: "jeoldanhada", meaning: "to cut off" },
        { korean: "구부리다/펴다", romanization: "guburida/pyeoda", meaning: "to bend/to straighten" },
        { korean: "박다", romanization: "bakda", meaning: "to drive" },
        { korean: "전기 드릴", romanization: "jeongi deuril", meaning: "electric drill" },
        { korean: "톱", romanization: "top", meaning: "saw" },
        { korean: "망치", romanization: "mangchi", meaning: "hammer" },
        { korean: "스패너", romanization: "seupaenneo", meaning: "wrench" },
        { korean: "뚫다", romanization: "ttulda", meaning: "to drill" },
        { korean: "자르다", romanization: "jareuda", meaning: "to cut" },
        { korean: "두드리다/박다", romanization: "dudeurida/bakda", meaning: "to hammer/to drive" },
        { korean: "조이다/풀다", romanization: "joida/pulda", meaning: "to tighten up/to loosen" },
        { korean: "못/나사못", romanization: "mot/nasamot", meaning: "nail/screw" },
        { korean: "볼트/너트", romanization: "boltu/neotu", meaning: "nail bolt/nut" }
    ],

    "Manufacturing Machinery": [
        { korean: "가스 용접기", romanization: "gaseu yongjeopgi", meaning: "gas powered welder" },
        { korean: "용접봉", romanization: "yongjeopbong", meaning: "welding rod" },
        { korean: "벤딩기", romanization: "bendinggi", meaning: "strapping machine" },
        { korean: "전기 절단기", romanization: "jeongi jeoldangi", meaning: "electrical cutting machine" },
        { korean: "에어 콤프레서", romanization: "eeo kompeureseo", meaning: "air compressor" },
        { korean: "전기 용접기", romanization: "jeongi yongjeopgi", meaning: "an electric welder" },
        { korean: "호이스트", romanization: "hoiseuteu", meaning: "hoist" },
        { korean: "컨트롤 판넬", romanization: "keonteurol pannel", meaning: "control panel" },
        { korean: "핸드카", romanization: "haendeu ka", meaning: "handcar" },
        { korean: "전선 릴", romanization: "jeonseon ril", meaning: "cable reel" }
    ],

    "Tools for Work": [
        { korean: "절곡기", romanization: "jeolgokgi", meaning: "cutting machine" },
        { korean: "결속핸들", romanization: "gyeolsok haendeul", meaning: "wire tie twisting tool" },
        { korean: "쇠지레", romanization: "soejire", meaning: "crowbar" },
        { korean: "파이프", romanization: "paipeu", meaning: "pipe" },
        { korean: "렌치", romanization: "renchi", meaning: "wrench" },
        { korean: "그라인더 [연삭기]", romanization: "geuraindeo [yeonsaki]", meaning: "grinder" },
        { korean: "대패", romanization: "daepae", meaning: "plane" },
        { korean: "사포", romanization: "sapo", meaning: "sandpaper" },
        { korean: "줄", romanization: "jul", meaning: "file" },
        { korean: "정", romanization: "jeong", meaning: "chisel" },
        { korean: "송곳", romanization: "songgot", meaning: "awl" },
        { korean: "바이스", romanization: "baiseu", meaning: "vise" },
        { korean: "롱노즈 플라이어", romanization: "rongnojeu peullaieo", meaning: "long nose plier" }
    ],

    "Machine Operation": [
        { korean: "작동하다", romanization: "jakdonghada", meaning: "to operate" },
        { korean: "사용하다/쓰다", romanization: "sayonghada/sseuda", meaning: "to use" },
        { korean: "누르다", romanization: "nureuda", meaning: "to press" },
        { korean: "올리다", romanization: "ollida", meaning: "to switch on" },
        { korean: "내리다", romanization: "naerida", meaning: "to switch off" },
        { korean: "돌리다", romanization: "dollida", meaning: "to turn" },
        { korean: "끼우다", romanization: "kkiuda", meaning: "to put in" },
        { korean: "꽂다", romanization: "kkotda", meaning: "to pin" },
        { korean: "빼다", romanization: "ppaeda", meaning: "to pull out" },
        { korean: "걸다", romanization: "geolda", meaning: "to hang" },
        { korean: "적재하다", romanization: "jeokjaehada", meaning: "to load" },
        { korean: "골판지", romanization: "golpanji", meaning: "corrugated cardboard" },
        { korean: "충분하다", romanization: "chungbunhada", meaning: "enough" },
        { korean: "남다", romanization: "namda", meaning: "to remain" }
    ],

    "Packaging": [
        { korean: "재다", romanization: "jaeda", meaning: "to measure" },
        { korean: "자르다", romanization: "jareuda", meaning: "to cut" },
        { korean: "오리다", romanization: "orida", meaning: "to cut out" },
        { korean: "접다", romanization: "jeopda", meaning: "to fold" },
        { korean: "붙이다", romanization: "buchida", meaning: "to stick" },
        { korean: "달다", romanization: "dalda", meaning: "to hang" }
    ],

    "Construction Site": [
        { korean: "건설", romanization: "geonseol", meaning: "construction" },
        { korean: "공사장", romanization: "gongsajang", meaning: "construction site" },
        { korean: "벽돌", romanization: "byeokdol", meaning: "brick" },
        { korean: "철근", romanization: "cheolgeun", meaning: "rebar" },
        { korean: "시멘트", romanization: "simenteu", meaning: "cement" },
        { korean: "콘크리트", romanization: "konkeuriteu", meaning: "concrete" },
        { korean: "비계", romanization: "bigye", meaning: "scaffolding" },
        { korean: "건물을 짓다", romanization: "geonmureul jitda", meaning: "to build a building" },
        { korean: "땅을 파다", romanization: "ttangeul pada", meaning: "to dig in the ground" },
        { korean: "거푸집을 설치하다", romanization: "geupujipeul seolchihada", meaning: "to build formwork" },
        { korean: "철근을 조립하다", romanization: "cheolguneul joriphada", meaning: "to assemble rebar" },
        { korean: "콘크리트를 타설하다", romanization: "konkeuritereul taseolhada", meaning: "to place concrete" }
    ],

    "Packaging and Distribution": [
        { korean: "싣다", romanization: "sitda", meaning: "to load" },
        { korean: "내리다", romanization: "naerida", meaning: "to unload" },
        { korean: "출하하다", romanization: "chulhahada", meaning: "to ship goods" },
        { korean: "납품하다", romanization: "nappumhada", meaning: "to deliver" },
        { korean: "분류하다", romanization: "bullruhada", meaning: "to categorize/to classify" },
        { korean: "싸다/포장하다", romanization: "ssada/pojanghada", meaning: "to pack" },
        { korean: "담다/넣다", romanization: "damda/neotda", meaning: "to put (something) into" },
        { korean: "묶다", romanization: "mukda", meaning: "to bind" },
        { korean: "나르다", romanization: "nareuda", meaning: "to transport" },
        { korean: "쌓다", romanization: "ssatda", meaning: "to stack up" }
    ],

    "Workroom Environment": [
        { korean: "더럽다", romanization: "deorepda", meaning: "dirty" },
        { korean: "깨끗하다", romanization: "kkaekkeutada", meaning: "neat and clean" },
        { korean: "엉망이다", romanization: "eongmangida", meaning: "messy" },
        { korean: "정리가 잘 되어 있다", romanization: "jeongiga jal doeseo itda", meaning: "well-arranged" },
        { korean: "냄새가 심하다", romanization: "naemsaega simhada", meaning: "smelly" },
        { korean: "소음이 심하다", romanization: "soeumi simhada", meaning: "noisy" },
        { korean: "쾌적하다", romanization: "kwaejeokhada", meaning: "pleasant" },
        { korean: "버리다", romanization: "beorida", meaning: "to throw away" },
        { korean: "치우다", romanization: "chiuda", meaning: "to clean up" },
        { korean: "정리하다", romanization: "jeongihada", meaning: "to arrange" },
        { korean: "환기하다", romanization: "hwangihada", meaning: "to ventilate" }
    ],

    "Waste and Storage Supplies": [
        { korean: "폐기물", romanization: "pyegimul", meaning: "waste matter" },
        { korean: "폐수", romanization: "pyesu", meaning: "waste water" },
        { korean: "폐유", romanization: "pyeyu", meaning: "waste oil" },
        { korean: "분뇨/배설물", romanization: "bunnyo/baeseolmul", meaning: "feces and urine" },
        { korean: "환풍기", romanization: "hwanpunggi", meaning: "ventilator" },
        { korean: "손수레", romanization: "sonsure", meaning: "handcart" },
        { korean: "일륜차", romanization: "illyuncha", meaning: "wheelbarrow" },
        { korean: "사다리", romanization: "sadari", meaning: "ladder" },
        { korean: "마대", romanization: "madae", meaning: "burlap bag" },
        { korean: "바구니", romanization: "baguni", meaning: "basket" },
        { korean: "비닐 끈", romanization: "binil kkeun", meaning: "vinyl straps" }
    ],

    "Agriculture 1": [
        { korean: "논", romanization: "non", meaning: "rice paddy" },
        { korean: "밭", romanization: "bat", meaning: "field" },
        { korean: "농장/농상", romanization: "nongjang/nongsang", meaning: "farm" },
        { korean: "과수원", romanization: "gwasuwon", meaning: "orchard" },
        { korean: "비닐하우스/온실", romanization: "binil hauseu/onsil", meaning: "(vinyl) greenhouse" },
        { korean: "낫", romanization: "nat", meaning: "scythe" },
        { korean: "호미", romanization: "homi", meaning: "hoe" },
        { korean: "괭이", romanization: "gwaengi", meaning: "mattock" },
        { korean: "곡괭이", romanization: "gokgwaengi", meaning: "pickax" },
        { korean: "삽", romanization: "sap", meaning: "shovel" },
        { korean: "모종삽", romanization: "mojongsap", meaning: "trowel" },
        { korean: "갈퀴", romanization: "galkwi", meaning: "rake" },
        { korean: "쇠스랑", romanization: "soeseurang", meaning: "pitchfork" },
        { korean: "호스", romanization: "hoseu", meaning: "hose" },
        { korean: "물뿌리개", romanization: "mulppurigae", meaning: "watering can" },
        { korean: "파종상자", romanization: "pajongsangja", meaning: "seed tray" },
        { korean: "농약 분무기", romanization: "nongyak bunmugi", meaning: "chemical sprayer" },
        { korean: "경운기", romanization: "gyeoungi", meaning: "motorized cultivator" },
        { korean: "콤바인", romanization: "kombain", meaning: "combine harvester" }
    ],

    "Grain": [
        { korean: "벼", romanization: "byeo", meaning: "rice" },
        { korean: "보리", romanization: "bori", meaning: "barley" },
        { korean: "밀", romanization: "mil", meaning: "wheat" },
        { korean: "콩", romanization: "kong", meaning: "bean" }
    ],

    "Agriculture 2": [
        { korean: "키우다/기르다/재배하다", romanization: "kiuda/gireuda/jaebaehada", meaning: "to raise/to grow/to cultivate" },
        { korean: "거두다/수확하다", romanization: "geoduda/suhwakada", meaning: "to reap/to harvest" },
        { korean: "따다", romanization: "ttada", meaning: "to pick" },
        { korean: "캐다", romanization: "kaeda", meaning: "to dig out" },
        { korean: "비료를 뿌리다", romanization: "biryoreul ppurida", meaning: "to fertilize" },
        { korean: "씨앗을 뿌리다", romanization: "ssiajeul ppurida", meaning: "to sow seeds" },
        { korean: "모종을 심다", romanization: "mojongeul simda", meaning: "to plant seedlings" },
        { korean: "물을 주다", romanization: "mureul juda", meaning: "to water" },
        { korean: "거름을 주다", romanization: "georeumeul juda", meaning: "to apply manure (to a field)" },
        { korean: "잡초를 뽑다", romanization: "japchoreul ppopda", meaning: "to remove weed" },
        { korean: "벌레를 잡다", romanization: "beollereul japda", meaning: "to get rid of worms" },
        { korean: "농약을 치다", romanization: "nongyageul chida", meaning: "to spray (apply) agricultural pesticide" }
    ],

    "Livestock and Dairy Industry": [
        { korean: "돼지", romanization: "dwaeji", meaning: "pig/hog" },
        { korean: "소", romanization: "so", meaning: "cow" },
        { korean: "닭", romanization: "dak", meaning: "chicken/hen" },
        { korean: "양", romanization: "yang", meaning: "sheep" },
        { korean: "오리", romanization: "ori", meaning: "duck" },
        { korean: "말", romanization: "mal", meaning: "horse" },
        { korean: "토끼", romanization: "tokki", meaning: "rabbit" },
        { korean: "양돈", romanization: "yangdon", meaning: "hog raising" },
        { korean: "축사 사료/먹이 건초", romanization: "chuksa saryo/meogi geoncho", meaning: "cattle raising/chicken raising/cowshed/pigsty/feed/food/hay" },
        { korean: "추천하다", romanization: "chucheonhada", meaning: "to recommend" },
        { korean: "불룩해지다", romanization: "bullukhaejida", meaning: "to be bloated" },
        { korean: "가스가 차다", romanization: "gaseuga chada", meaning: "to have acid stomach" },
        { korean: "수의사", romanization: "suuisa", meaning: "veterinarian" }
    ],

    "Fishing Industry": [
        { korean: "미리미리", romanization: "mirimiri", meaning: "in advance" },
        { korean: "부르다", romanization: "bureuda", meaning: "to call (out)" },
        { korean: "단단히", romanization: "dandandhi", meaning: "firmly" },
        { korean: "혼을 내다", romanization: "honeul naeda", meaning: "to give a scolding" },
        { korean: "엉키다", romanization: "eongkida", meaning: "to tangle" },
        { korean: "제때", romanization: "jedae", meaning: "at the right moment" },
        { korean: "갈다", romanization: "galda", meaning: "to replace" },
        { korean: "그물", romanization: "geumul", meaning: "fishing net" },
        { korean: "통발", romanization: "tongbal", meaning: "fish trap" },
        { korean: "집어등", romanization: "jibeodeung", meaning: "fish-luring light" },
        { korean: "양망기", romanization: "yangmanggi", meaning: "net hauler" },
        { korean: "밧줄", romanization: "batjul", meaning: "rope" },
        { korean: "쇠사슬", romanization: "soesaseul", meaning: "chain" },
        { korean: "고리", romanization: "gori", meaning: "loop/hook" },
        { korean: "닻", romanization: "dat", meaning: "anchor" },
        { korean: "도르래", romanization: "doreullae", meaning: "pulley" },
        { korean: "뜰채", romanization: "tteulchae", meaning: "hand net" },
        { korean: "낚시 바늘", romanization: "naksi baneul", meaning: "fish hook" },
        { korean: "부자/부표", romanization: "buja/bupyo", meaning: "buoy" },
        { korean: "바늘대", romanization: "baneuldae", meaning: "netting needle" },
        { korean: "수중 펌프", romanization: "sujung peompeu", meaning: "submersible pump" },
        { korean: "수경", romanization: "sugyeong", meaning: "swimming goggles" },
        { korean: "갈퀴", romanization: "galkwi", meaning: "rake" },
        { korean: "스티로폼 상자", romanization: "seutiropm sangja", meaning: "cooler" },
        { korean: "기록하다", romanization: "girokada", meaning: "to record" },
        { korean: "수고하다", romanization: "sugohada", meaning: "to make an effort" }
    ],

    "Warehouse Management": [
        { korean: "물류 창고", romanization: "mullyu changgo", meaning: "warehouse" },
        { korean: "냉동 창고", romanization: "naengdong changgo", meaning: "cold storage" },
        { korean: "컨테이너", romanization: "keonteineo", meaning: "containers" },
        { korean: "입고하다", romanization: "ipgohada", meaning: "to stock" },
        { korean: "출고하다", romanization: "chulgohada", meaning: "to release" },
        { korean: "보관하다/저장하다", romanization: "bogwanhada/jeojangada", meaning: "to store" },
        { korean: "덮개를 덮다", romanization: "deopgaereul deopda", meaning: "to cover" },
        { korean: "온도를 유지하다", romanization: "ondoreul yujihada", meaning: "to maintain temperature" },
        { korean: "재고를 파악하다", romanization: "jaegoreul paakada", meaning: "to check inventory" },
        { korean: "관리하다", romanization: "gwallihada", meaning: "to manage" },
        { korean: "손에 익다", romanization: "sone ikda", meaning: "to get used to" },
        { korean: "속상하다", romanization: "soksanghada", meaning: "to be upset with oneself" },
    ],

    "Furniture Manufacturing": [
        { korean: "손에 익다", romanization: "sone ikda", meaning: "to get used to" },
        { korean: "속상하다", romanization: "soksanghada", meaning: "to be upset with oneself" },
        { korean: "원목을 재단하다", romanization: "wonmogeul jaedanhada", meaning: "to measure and cut a wooden board" },
        { korean: "홈을 파다", romanization: "homeul pada", meaning: "to make a groove" },
        { korean: "구멍을 뚫다", romanization: "gumeongeul ttulda", meaning: "to drill a hole" },
        { korean: "연마하다/샌딩하다", romanization: "yeonmahada/saendinghada", meaning: "to sand wood with a sander" },
        { korean: "사포질하다", romanization: "sapojilhada", meaning: "to hand-sand with sandpaper" },
        { korean: "도장하다", romanization: "dojanghada", meaning: "to stain" },
        { korean: "도색하다", romanization: "dosaekada", meaning: "to paint" },
        { korean: "줄자", romanization: "julja", meaning: "tape measure" },
        { korean: "직각자", romanization: "jikgakja", meaning: "steel square" },
        { korean: "수평대", romanization: "supyeongdae", meaning: "spirit level" },
        { korean: "프레스 기계", romanization: "peuleseu gigye", meaning: "forming press" },
        { korean: "구부리다", romanization: "guburida", meaning: "to bend" },
        { korean: "찍어 내다", romanization: "jjigeo naeda", meaning: "to stamp (out)" },
        { korean: "선반 기계", romanization: "seonban gigye", meaning: "lathe" },
        { korean: "갈다", romanization: "galda", meaning: "to grind" },
        { korean: "도려내다", romanization: "doryeonaeda", meaning: "to cut out" },
        { korean: "파내다", romanization: "panaeda", meaning: "to gouge out" },
        { korean: "밀링 기계", romanization: "milling gigye", meaning: "milling machine" },
        { korean: "깎다", romanization: "kkakda", meaning: "to cut" },
        { korean: "절단하다", romanization: "jeoldanhada", meaning: "to cut off" },
        { korean: "용접하다", romanization: "yongjeopada", meaning: "to weld" },
        { korean: "조립하다", romanization: "joriphada", meaning: "to assemble" },
        { korean: "모서리", romanization: "moseori", meaning: "edge" },
        { korean: "맞추다", romanization: "matchuda", meaning: "adjust" },
        { korean: "방심하다", romanization: "bangsimhada", meaning: "inattentive" },
        { korean: "딴생각", romanization: "ttansaenggak", meaning: "other thoughts" },
        { korean: "불꽃이 튀다", romanization: "bulkkochi twida", meaning: "to spark" },
        { korean: "가만히 있다", romanization: "gamanhi itda", meaning: "to stand still" },
        { korean: "진정하다", romanization: "jinjeonghada", meaning: "to soothe" }
    ],

    "Work-Related Injury": [
        { korean: "손가락이 잘리다", romanization: "son-garagi jallida", meaning: "to have one's finger cut off" },
        { korean: "손가락이 끼이다", romanization: "son-garagi kkiida", meaning: "to have one's finger caught" },
        { korean: "손가락이 베이다", romanization: "son-garagi beida", meaning: "to get a cut on one's finger" },
        { korean: "손가락이 데다", romanization: "son-garagi deda", meaning: "to burn one's finger" },
        { korean: "발이 깔리다", romanization: "bali kkallida", meaning: "to get a foot struck" },
        { korean: "못에 찔리다", romanization: "mose jjillida", meaning: "to get pricked by a nail" },
        { korean: "유리가 박히다", romanization: "yuriga bakhida", meaning: "to get (a piece of) glass stuck in" },
        { korean: "화상을 입다", romanization: "hwasangeul ipda", meaning: "to be burned" },
        { korean: "찰과상을 입다", romanization: "chalgwasangeul ipda", meaning: "to have a scratch" },
        { korean: "가스에 중독되다", romanization: "gase jungdokdoeda", meaning: "to be gassed" }
    ],

    "Safety Gear and Equipment": [
        { korean: "안전모", romanization: "anjeonmo", meaning: "safety hat" },
        { korean: "보안면", romanization: "boanmyeon", meaning: "safety mask" },
        { korean: "용접면", romanization: "yongjeopmyeon", meaning: "welding helmet" },
        { korean: "보안경", romanization: "boangyeong", meaning: "safety goggles" },
        { korean: "착용하다", romanization: "chagyonghada", meaning: "to wear (safety equipment)" },
        { korean: "보호복", romanization: "bohobbok", meaning: "protective clothing" },
        { korean: "마스크", romanization: "maseukeu", meaning: "dusk mask/gas mask" },
        { korean: "귀마개", romanization: "gwimakae", meaning: "safety ear plugs" },
        { korean: "귀덮개", romanization: "gwideomgae", meaning: "safety ear muffs" },
        { korean: "안전대", romanization: "anjeondae", meaning: "safety harness" },
        { korean: "목장갑", romanization: "mokjanggap", meaning: "rubber coated gloves" },
        { korean: "안전장갑", romanization: "anjeonjanggap", meaning: "safety gloves" },
        { korean: "안전화", romanization: "anjeonhwa", meaning: "safety shoes" },
        { korean: "안전장화", romanization: "anjeonjanghwa", meaning: "safety boots" }
    ],

    "On-the-job Accidents": [
        { korean: "부딪히다/충돌하다", romanization: "budithida/chungdolhada", meaning: "to collide" },
        { korean: "넘어지다", romanization: "neomeojida", meaning: "to trip over" },
        { korean: "미끄러지다", romanization: "mikkeureojida", meaning: "to slip/to fall from heights/to fall from a high elevation" },
        { korean: "떨어지다/추락하다", romanization: "tteoreojida/churakhada", meaning: "to fall into a hole" },
        { korean: "구덩이에 빠지다", romanization: "gudeong-ie ppajida", meaning: "a chip flies off" },
        { korean: "파편이 튀다 맞다", romanization: "papyeoni twida matda", meaning: "to be hit" },
        { korean: "기계에 감기다", romanization: "gigyee gamgida", meaning: "to become caught" },
        { korean: "감전되다", romanization: "gamjeondoeda", meaning: "to get an electric shock" },
        { korean: "가스가 새다/누출되다", romanization: "gaseuga saeda/nuchuldoeda", meaning: "to have gas leak" },
        { korean: "폭발하다", romanization: "pokbalhada", meaning: "to explode" },
        { korean: "불이 나다", romanization: "buli nada", meaning: "a fire breaks out" }
    ],

    "Safety Regulations": [
        { korean: "안전 수칙을 지키다", romanization: "anjeon suchik-eul jikida", meaning: "to follow safety regulations" },
        { korean: "안전 수칙을 어기다", romanization: "anjeon suchik-eul eogida", meaning: "to ignore safety regulations" },
        { korean: "규칙을 준수하다", romanization: "gyuchik-eul junsuhada", meaning: "to obey rules" },
        { korean: "살피다", romanization: "salpida", meaning: "to examine" },
        { korean: "주의하다", romanization: "juuihada", meaning: "to pay attention" },
        { korean: "점검하다", romanization: "jeomgeomhada", meaning: "to inspect" },
        { korean: "정비하다", romanization: "jeongbihada", meaning: "to maintain" },
        { korean: "보수하다", romanization: "bosuhada", meaning: "to repair" },
        { korean: "개선하다", romanization: "gaeseonhada", meaning: "to improve" },
        { korean: "조치를 취하다", romanization: "jochireul chwihada", meaning: "to take action" }
    ],

    "Health Promotion": [
        { korean: "청결을 유지하다", romanization: "cheonggyeol-eul yujihada", meaning: "to keep oneself clean" },
        { korean: "휴식을 취하다", romanization: "hyusikeul chwihada", meaning: "to rest" },
        { korean: "기분 전환을 하다", romanization: "gibun jeonhwan-eul hada", meaning: "to refresh oneself" },
        { korean: "건강 검진을 받다", romanization: "geongang geomjineul batda", meaning: "to have regular checkups" },
        { korean: "표준 체중을 유지하다", romanization: "pyojun chejung-eul yujihada", meaning: "to maintain standard weight" },
        { korean: "유산소 운동을 하다", romanization: "yusanso undong-eul hada", meaning: "to do aerobic exercise" },
        { korean: "골고루 섭취하다", romanization: "golgoru seochihada", meaning: "to take in a variety of food products" },
        { korean: "건강을 챙기다", romanization: "geongang-eul chaenggida", meaning: "to take care of one's health" },
        { korean: "건강을 해치다", romanization: "geongang-eul haechida", meaning: "to damage one's health" }
    ],

    "The Employment Permit System": [
        { korean: "제조업", romanization: "jejoup", meaning: "Manufacturing Industry" },
        { korean: "건설업", romanization: "geonseolop", meaning: "Construction Industry" },
        { korean: "서비스업", romanization: "seobiseuop", meaning: "Service Industry" },
        { korean: "보안경", romanization: "boangyeong", meaning: "safety goggles" },
        { korean: "착용하다", romanization: "chagyonghada", meaning: "to wear (safety equipment)" },
        { korean: "보호복", romanization: "bohobbok", meaning: "protective clothing" },
        { korean: "마스크", romanization: "maseukeu", meaning: "dusk mask/gas mask" },
        { korean: "귀마개", romanization: "gwimakae", meaning: "safety ear plugs" },
        { korean: "귀덮개", romanization: "gwideomgae", meaning: "safety ear muffs" },
        { korean: "안전대", romanization: "anjeondae", meaning: "safety harness" },
        { korean: "목장갑", romanization: "mokjanggap", meaning: "rubber coated gloves" },
        { korean: "안전장갑", romanization: "anjeonjanggap", meaning: "safety gloves" },
        { korean: "안전화", romanization: "anjeonhwa", meaning: "safety shoes" },
        { korean: "안전장화", romanization: "anjeonjanghwa", meaning: "safety boots" }
    ],

    "On-the-job Accidents": [
        { korean: "부딪히다/충돌하다", romanization: "budithida/chungdolhada", meaning: "to collide" },
        { korean: "넘어지다", romanization: "neomeojida", meaning: "to trip over" },
        { korean: "미끄러지다", romanization: "mikkeureojida", meaning: "to slip/to fall from heights/to fall from a high elevation" },
        { korean: "떨어지다/추락하다", romanization: "tteoreojida/churakhada", meaning: "to fall into a hole" },
        { korean: "구덩이에 빠지다", romanization: "gudeong-ie ppajida", meaning: "a chip flies off" },
        { korean: "파편이 튀다 맞다", romanization: "papyeoni twida matda", meaning: "to be hit" },
        { korean: "기계에 감기다", romanization: "gigyee gamgida", meaning: "to become caught" },
        { korean: "감전되다", romanization: "gamjeondoeda", meaning: "to get an electric shock" },
        { korean: "가스가 새다/누출되다", romanization: "gaseuga saeda/nuchuldoeda", meaning: "to have gas leak" },
        { korean: "폭발하다", romanization: "pokbalhada", meaning: "to explode" },
        { korean: "불이 나다", romanization: "buli nada", meaning: "a fire breaks out" }
    ],

    "Safety Regulations": [
        { korean: "안전 수칙을 지키다", romanization: "anjeon suchik-eul jikida", meaning: "to follow safety regulations" },
        { korean: "안전 수칙을 어기다", romanization: "anjeon suchik-eul eogida", meaning: "to ignore safety regulations" },
        { korean: "규칙을 준수하다", romanization: "gyuchik-eul junsuhada", meaning: "to obey rules" },
        { korean: "살피다", romanization: "salpida", meaning: "to examine" },
        { korean: "주의하다", romanization: "juuihada", meaning: "to pay attention" },
        { korean: "점검하다", romanization: "jeomgeomhada", meaning: "to inspect" },
        { korean: "정비하다", romanization: "jeongbihada", meaning: "to maintain" },
        { korean: "보수하다", romanization: "bosuhada", meaning: "to repair" },
        { korean: "개선하다", romanization: "gaeseonhada", meaning: "to improve" },
        { korean: "조치를 취하다", romanization: "jochireul chwihada", meaning: "to take action" }
    ],

    "Health Promotion": [
        { korean: "청결을 유지하다", romanization: "cheonggyeol-eul yujihada", meaning: "to keep oneself clean" },
        { korean: "휴식을 취하다", romanization: "hyusikeul chwihada", meaning: "to rest" },
        { korean: "기분 전환을 하다", romanization: "gibun jeonhwan-eul hada", meaning: "to refresh oneself" },
        { korean: "건강 검진을 받다", romanization: "geongang geomjineul batda", meaning: "to have regular checkups" },
        { korean: "표준 체중을 유지하다", romanization: "pyojun chejung-eul yujihada", meaning: "to maintain standard weight" },
        { korean: "유산소 운동을 하다", romanization: "yusanso undong-eul hada", meaning: "to do aerobic exercise" },
        { korean: "골고루 섭취하다", romanization: "golgoru seochihada", meaning: "to take in a variety of food products" },
        { korean: "건강을 챙기다", romanization: "geongang-eul chaenggida", meaning: "to take care of one's health" },
        { korean: "건강을 해치다", romanization: "geongang-eul haechida", meaning: "to damage one's health" }
    ],

    "The Employment Permit System": [
        { korean: "제조업", romanization: "jejoup", meaning: "Manufacturing Industry" },
        { korean: "건설업", romanization: "geonseolop", meaning: "Construction Industry" },
        { korean: "서비스업", romanization: "seobiseuop", meaning: "Service Industry" },
        { korean: "축산업", romanization: "chuksanop", meaning: "Meat And Dairy Industry" },
        { korean: "농업", romanization: "nongop", meaning: "Agriculture Industry" },
        { korean: "어업", romanization: "eobeop", meaning: "Fishing Industry" },
        { korean: "문의하다", romanization: "munuihada", meaning: "to make inquiries" },
        { korean: "한국어능력시험", romanization: "hangugeo neungnyeok siheom", meaning: "EPS-TOPIK" },
        { korean: "신분증", romanization: "sinbunjeung", meaning: "identification card" },
        { korean: "수험료", romanization: "suheomnyo", meaning: "exam fee" },
        { korean: "수험표", romanization: "suheomp'yo", meaning: "identification slip" },
        { korean: "접수증", romanization: "jeopsujeung", meaning: "proof of application" },
        { korean: "증명사진", romanization: "jeungmyeongsajin", meaning: "identification picture" },
        { korean: "성적표", romanization: "seongjeokpyo", meaning: "report card" },
        { korean: "합격하다", romanization: "hapgyeokhada", meaning: "to pass an exam" },
        { korean: "불합격하다", romanization: "bulhapgyeokhada", meaning: "to be disqualified/to fail" }
    ],

    "Working Conditions": [
        { korean: "근로조건", romanization: "geunrojogeon", meaning: "working conditions" },
        { korean: "계약 기간", romanization: "gyeyak gigan", meaning: "period of employment" },
        { korean: "수습 기간", romanization: "suseup gigan", meaning: "period of probation" },
        { korean: "근무시간", romanization: "geunmusigan", meaning: "working hours" },
        { korean: "휴게 시간", romanization: "hyuge sigan", meaning: "rest breaks" },
        { korean: "임금", romanization: "imgeum", meaning: "wages" },
        { korean: "지급일", romanization: "jigeupil", meaning: "payday" },
        { korean: "지급 방법", romanization: "jigeup bangbeop", meaning: "wage payment options" },
        { korean: "업무 내용", romanization: "eomu naeyong", meaning: "details of work" },
        { korean: "제공하다", romanization: "jegonghada", meaning: "to offer/to provide" },
        { korean: "부담하다", romanization: "budamhada", meaning: "to burden/to bear" },
        { korean: "숙식", romanization: "suksik", meaning: "room and board" }
    ],

    "Employment Procedures": [
        { korean: "면접을 보다", romanization: "myeonjeop-eul boda", meaning: "to have a job interview" },
        { korean: "사업주", romanization: "saeopju", meaning: "business owner" },
        { korean: "취업자", romanization: "chwieopja", meaning: "employee" },
        { korean: "고용하다", romanization: "goyonghada", meaning: "to hire" },
        { korean: "취업하다", romanization: "chwieopada", meaning: "to be employed" },
        { korean: "계약을 하다", romanization: "gyeyak-eul hada", meaning: "to make a contract" },
        { korean: "사인하다/서명하다", romanization: "sainhada/seomyeonghada", meaning: "to sign" },
        { korean: "근무하다", romanization: "geunmuhada", meaning: "to work" },
        { korean: "근무지", romanization: "geunmuji", meaning: "a place of work" },
        { korean: "업체 명", romanization: "eopche myeong", meaning: "the name of a company" },
        { korean: "퇴직하다", romanization: "toejikhada", meaning: "to retire" },
        { korean: "해고하다", romanization: "haegohada", meaning: "to fire" }
    ],

    "Entry Process": [
        { korean: "비자/사증", romanization: "bija/sajeung", meaning: "Visa" },
        { korean: "여권", romanization: "yeogwon", meaning: "passport" },
        { korean: "유효 기간", romanization: "yuhyo gigan", meaning: "expiration date" },
        { korean: "발급을 신청하다", romanization: "balgeup-eul sincheong-hada", meaning: "to apply for an issuance" },
        { korean: "발급 받다", romanization: "balgeup batda", meaning: "to be issued" },
        { korean: "통역", romanization: "tongyeok", meaning: "interpretation" },
        { korean: "입국하다", romanization: "ipgukhada", meaning: "to enter (a country)" },
        { korean: "입국 심사를 받다", romanization: "ipguk simsareul batda", meaning: "to go through immigration" },
        { korean: "입국이 금지되다", romanization: "ipguki geumjidoeda", meaning: "to be denied entry" },
        { korean: "취업 교육을 받다", romanization: "chwieop gyoyugeul batda", meaning: "to receive employment training" },
        { korean: "작업장에 배치되다", romanization: "jageomjang-e baechidoeda", meaning: "to be assigned to a workshop" },
        { korean: "입국 신고서", romanization: "ipguk singoseo", meaning: "arrival card" }
    ],

    "Alien Registration": [
        { korean: "출입국 관리소", romanization: "churipguk gwalliso", meaning: "Immigration Service Office" },
        { korean: "외국인 등록을 하다", romanization: "oegugin deungnogeul hada", meaning: "to be registered as a foreign national" },
        { korean: "사업자 등록증 사본", romanization: "saeopja deungrokjeung sabon", meaning: "copy of business registration certificate" },
        { korean: "수수료", romanization: "susuryo", meaning: "process fees" },
        { korean: "번호표를 뽑다", romanization: "beonhopyoreul ppopda", meaning: "to take a number to register" },
        { korean: "지문을 등록하다", romanization: "jimun-eul deungnokada", meaning: "fingerprint" },
        { korean: "외국인 등록 신청서", romanization: "oegugin deungnok sincheongse", meaning: "application form for the alien registration card" }
    ],

    "Enrollment in Insurance Plans": [
        { korean: "상해 보험", romanization: "sanghae boheom", meaning: "accident insurance" },
        { korean: "산재 보험", romanization: "sanjae boheom", meaning: "worker's compensation" },
        { korean: "보험에 가입하다", romanization: "boheme gaiphada", meaning: "to enroll in insurance plans" },
        { korean: "보험료를 내다/납입하다", romanization: "bohemnyo-reul naeda/nabiphada", meaning: "to pay an insurance premium" },
        { korean: "질병", romanization: "jilbyeong", meaning: "disease" },
        { korean: "상해", romanization: "sanghae", meaning: "injury" },
        { korean: "장해", romanization: "janghae", meaning: "disability" },
        { korean: "사망", romanization: "samang", meaning: "death" },
        { korean: "보상을 받다", romanization: "bosangeul batda", meaning: "to receive settlement funds" },
        { korean: "보험금을 환급 받다", romanization: "boheomgeumeul hwangeup batda", meaning: "to have expenses reimbursed" },
        { korean: "만기가 되다", romanization: "mangiga doeda", meaning: "to expire" },
        { korean: "소멸되다", romanization: "somyeoldoeda", meaning: "to lapse" }
    ],

    "Filing out Insurance Claims": [
        { korean: "보험금을 청구하다", romanization: "boheomgeumeul cheongguhada", meaning: "to file an insurance claim" },
        { korean: "지급 심사를 받다", romanization: "jigeup simsareul batda", meaning: "to go through review" },
        { korean: "보험금을 지급하다", romanization: "boheomgeumeul jigeupada", meaning: "to pay out insurance claims" },
        { korean: "보험금을 타다", romanization: "boheomgeumeul tada", meaning: "to receive insurance payouts" },
        { korean: "청구서", romanization: "cheongguseo", meaning: "bill" },
        { korean: "영수증", romanization: "yeongsujeung", meaning: "receipt" },
        { korean: "내역서", romanization: "naeyokseo", meaning: "medical invoice" },
        { korean: "진단서", romanization: "jindanseo", meaning: "medical report" },
        { korean: "병원비 치료비/요양비", romanization: "byeongwonbi chiryobi/yoyangbi", meaning: "medical bills/medical expenses" },
        { korean: "휴업 급여", romanization: "hyuep geupyeo", meaning: "temporary incapacity benefit" },
        { korean: "장해 보상금", romanization: "janghae bosanggeum", meaning: "disability compensation" }
    ],

    "Salary and Taxes": [
        { korean: "급여 명세서", romanization: "geupyeo myeongseseo", meaning: "pay stub" },
        { korean: "급여 내역", romanization: "geupyeo naeyok", meaning: "details of wages" },
        { korean: "기본급", romanization: "gibongeup", meaning: "base pay" },
        { korean: "실수령액", romanization: "silsuryeongaek", meaning: "net pay" },
        { korean: "세금", romanization: "segeum", meaning: "taxes" },
        { korean: "식대", romanization: "sikdae", meaning: "subsistence" },
        { korean: "총액", romanization: "chongaek", meaning: "gross pay" },
        { korean: "공제하다", romanization: "gongjehada", meaning: "to deduct" },
        { korean: "상여금", romanization: "sangyeogeum", meaning: "bonus" },
        { korean: "퇴직금", romanization: "toejikgeum", meaning: "retirement plan contributions" },
        { korean: "국민연금", romanization: "gungminyeongeum", meaning: "national pension" },
        { korean: "연말정산", romanization: "yeonmaljeongsan", meaning: "tax returns" }
    ],

    "Extra Pay": [
        { korean: "법정 근로 시간", romanization: "beopjeong geunno sigan", meaning: "standard working hours" },
        { korean: "연장 근로 시간", romanization: "yeonjang geunno sigan", meaning: "overtime hours" },
        { korean: "야간 근로 시간", romanization: "yagan geunno sigan", meaning: "night work hours" },
        { korean: "휴일 근로 시간", romanization: "hyuil geunno sigan", meaning: "holiday work hours" },
        { korean: "수당을 받다", romanization: "sudangeul batda", meaning: "to receive bonuses" },
        { korean: "포함되다", romanization: "pohamdoeda", meaning: "to be included" },
        { korean: "별도로 지급하다", romanization: "byeoldoro jigeupada", meaning: "to pay separately" },
        { korean: "가불하다", romanization: "gabullhada", meaning: "to receive an advance pay" },
        { korean: "시급", romanization: "sigeup", meaning: "hourly wage" },
        { korean: "일당", romanization: "ildang", meaning: "daily wage" },
        { korean: "최저임금", romanization: "choejeo imgeum", meaning: "minimum wage" }
    ],

    "Vacation": [
        { korean: "휴가를 신청하다", romanization: "hyugareul sincheong-hada", meaning: "to request vacation leave" },
        { korean: "휴가를 내다", romanization: "hyugareul naeda", meaning: "to submit a vacation" },
        { korean: "휴가를 받다", romanization: "hyugareul batda", meaning: "to request to receive vacation time" },
        { korean: "휴가를 쓰다", romanization: "hyugareul sseuda", meaning: "to take vacation" },
        { korean: "유급 휴일", romanization: "yugeup hyuil", meaning: "paid time-off days" },
        { korean: "무급 휴일", romanization: "mugeup hyuil", meaning: "unpaid time-off days" },
        { korean: "법정 휴일", romanization: "beopjeong hyuil", meaning: "statutory vacation" },
        { korean: "약정 휴일", romanization: "yakjeong hyuil", meaning: "contractual time off" },
        { korean: "연차 휴가", romanization: "yeoncha hyuga", meaning: "annual leave" },
        { korean: "출산 휴가", romanization: "chulsan hyuga", meaning: "maternity leave" }
    ],

    "Sick Leave": [
        { korean: "병가", romanization: "byeongga", meaning: "sick leave" },
        { korean: "병가 사유", romanization: "byeongga sayu", meaning: "causes of sick leave" },
        { korean: "병가 기간", romanization: "byeongga gigan", meaning: "period of sick leave" },
        { korean: "소속", romanization: "sosok", meaning: "affiliation" },
        { korean: "직위", romanization: "jikwi", meaning: "position" },
        { korean: "비상", romanization: "bisang", meaning: "emergency" },
        { korean: "연락처", romanization: "yeollakcheo", meaning: "contact list" },
        { korean: "통원 치료를 하다", romanization: "tongwon chiryoreul hada", meaning: "to receive outpatient treatment" },
        { korean: "입원을 하다", romanization: "ibwoneul hada", meaning: "to be hospitalized" },
        { korean: "조퇴하다", romanization: "jotwaehada", meaning: "to leave early" },
        { korean: "결근하다", romanization: "gyeolgeunhada", meaning: "to be absent from work" },
        { korean: "무단결근하다", romanization: "mudangyeolgeunhada", meaning: "to be absent from work without authorization" }
    ],

    "Change of a Work Location": [
        { korean: "근로계약이 만료되다", romanization: "geunno gyeyagi mallyodoeda", meaning: "a contract of employment expires" },
        { korean: "근로계약이 해지되다", romanization: "geunno gyeyagi haejidoeda", meaning: "an employment contract is terminated" },
        { korean: "계약을 갱신하다", romanization: "gyeyageul gaengshinhada", meaning: "to renew a contract" },
        { korean: "갱신을 거절하다", romanization: "gaengsineul georjeolhada", meaning: "to refuse to renew a contract" },
         { korean: "사업장 변경 사유", romanization: "saeopjang byeongyeong sayu", meaning: "reasons for change of a work location" },
        { korean: "임금을 체불하다", romanization: "imgeumeul chebulhada", meaning: "to delay payment of wages/to be in arrears" },
        { korean: "휴업하다 폐업하다", romanization: "hyueopada pyeeopada", meaning: "to be closed temporarily/to be closed" },
        { korean: "폭언을 하다", romanization: "pogeoneul hada", meaning: "to utter" },
        { korean: "폭행을 하다", romanization: "pokhaengeul hada", meaning: "to assault/to attack" },
        { korean: "사업장 변경 신청서", romanization: "saeopjang byeongyeong sincheongse", meaning: "application for change of a work location" },
        { korean: "사업장 추가", romanization: "saeopjang chuga", meaning: "addition of a work location" }
    ],

    "Early Return to Home Country and Temporary Leave": [
        { korean: "조기 귀국하다", romanization: "jogi gwigukada", meaning: "early return to home country" },
        { korean: "재입국하다", romanization: "jaipgukada", meaning: "to re-enter" },
        { korean: "면제되다", romanization: "myeonjedoeda", meaning: "to be exempted" },
        { korean: "개인 사정", romanization: "gaein sajeong", meaning: "personal circumstances" },
        { korean: "집안 사정", romanization: "jiban sajeong", meaning: "family circumstances" },
        { korean: "병환", romanization: "byeonghwan", meaning: "illness" },
        { korean: "편찮으시다", romanization: "pyeonchaneusida", meaning: "ill" },
        { korean: "재입국 허가 신청서", romanization: "jaipguk heoga sincheongse", meaning: "application for re-entry permit" },
        { korean: "동의서 [허가서]", romanization: "donguiseo [heogaseo]", meaning: "consent form (permission form)" },
        { korean: "출국 예정 신고서", romanization: "chulguk yejeong singose", meaning: "departure form" }
    ],

    "Extension of Stay": [
        { korean: "체류하다", romanization: "cheryuhada", meaning: "to stay" },
        { korean: "체류 기간", romanization: "cheryu gigan", meaning: "sojourn period" },
        { korean: "체류 가능 기간", romanization: "cheryu ganeung gigan", meaning: "allowed length of stay" },
        { korean: "변경 가능 횟수", romanization: "byeongyeong ganeung hoetsu", meaning: "possible number of changes" },
        { korean: "연장하다", romanization: "yeonjanghada", meaning: "to extend" },
        { korean: "체류지 입증 서류", romanization: "cheryuji ipjeung seoryu", meaning: "proof of residency" },
        { korean: "자진 출국 각서", romanization: "jajin chulguk gakseo", meaning: "voluntary departure form" },
        { korean: "임대차 계약서", romanization: "imdaecha gyeyakse", meaning: "lease contract" },
        { korean: "신원 보증", romanization: "sinwon bojeung", meaning: "reference" },
        { korean: "취업 활동 기간 연장 신청서", romanization: "chwieop hwaldong gigan yeonjang sincheongse", meaning: "application for extension of work period" },
        { korean: "구직등록필증", romanization: "gujikdeungrokpiljeung", meaning: "job certificate of registration confirmation" }
    ],

    "Status of Sojourn": [
        { korean: "합법 체류", romanization: "hapbeop cheryu", meaning: "legal stay" },
        { korean: "불법 체류", romanization: "bulbeop cheryu", meaning: "illegal stay" },
        { korean: "체류 자격 외 활동", romanization: "cheryu jagyeok oe hwaldong", meaning: "activities not permitted with one's status of sojourn" },
        { korean: "자격을 부여하다", romanization: "jagyeogeul buyeohada", meaning: "to grant status of sojourn" },
        { korean: "자격을 획득하다", romanization: "jagyeogeul hwakdeukhada", meaning: "to obtain a status of sojourn" },
        { korean: "자격을 변경하다", romanization: "jagyeogeul byeongyeonghada", meaning: "to change status" },
        { korean: "추방되다", romanization: "chubangdoeda", meaning: "to be deported" },
        { korean: "벌금을 내다", romanization: "beolgeumeul naeda", meaning: "to pay the fine" },
        { korean: "강제 출국을 당하다", romanization: "gangje chulgugeul danghada", meaning: "to be deported" },
        { korean: "자진 출국하다", romanization: "jajin chulgukhada", meaning: "to leave voluntarily" }
    ],

    // NEW NUMBER PRACTICE CATEGORIES
    "Numbers Practice - Prices (Sino-Korean)": [],
    "Numbers Practice - Dates (Sino-Korean)": [],
    "Numbers Practice - Native Korean (1-20)": [],
    "Numbers Practice - Phone Numbers": [],
    "Telling Time (12hr)": [],

    "Counter Units (Native)": [
        { korean: "동", romanization: "dong", meaning: "block of buildings/houses" },
        { korean: "번/회", romanization: "beon/hwe", meaning: "no. of action done" },
        { korean: "정", romanization: "jeong", meaning: "no. of pieces of medicine" },
        { korean: "공기", romanization: "gonggi", meaning: "rice in a bowl" },
        { korean: "그릇", romanization: "geureut", meaning: "dish serve in bowl" },
        { korean: "접시", romanization: "jeopsi", meaning: "no. of dish serve in plate" },
        { korean: "조각", romanization: "jogak", meaning: "slices of food" },
        { korean: "가지", romanization: "gaji", meaning: "categories, kinds, sorts, groups, ways" },
        { korean: "통", romanization: "tong", meaning: "big round fruits / no. of phone calls/ emails/ letters / large round container" },
        { korean: "묶음", romanization: "mukeum", meaning: "bundle/package" },
        { korean: "포기", romanization: "pogi", meaning: "plants from roots" },
        { korean: "줄", romanization: "jul", meaning: "things arranged in lines" },
        { korean: "판", romanization: "pan", meaning: "dish serve in plate" },
        { korean: "바구니", romanization: "baguni", meaning: "basket of items" },
        { korean: "장", romanization: "jang", meaning: "thin/flat objects" },
        { korean: "송이", romanization: "songi", meaning: "bunches/stems" },
        { korean: "척", romanization: "cheok", meaning: "ships" },
        { korean: "개", romanization: "gae", meaning: "general items" },
        { korean: "갑", romanization: "gap", meaning: "handful of box" },
        { korean: "상자", romanization: "sangja", meaning: "no. of large box" },
        { korean: "봉지", romanization: "bongji", meaning: "bags of small things" },
        { korean: "포대", romanization: "podae", meaning: "sacks of items" },
        { korean: "잔", romanization: "jan", meaning: "no. of cups/glasses" },
        { korean: "병", romanization: "byeong", meaning: "no. of bottles" },
        { korean: "권", romanization: "gwon", meaning: "binded things/books" },
        { korean: "잎", romanization: "ip", meaning: "no. of leaves/petals" },
        { korean: "그루", romanization: "geuru", meaning: "no. of trees" },
        { korean: "마리", romanization: "mari", meaning: "no. of animals" },
        { korean: "채", romanization: "chae", meaning: "units of houses" },
        { korean: "살", romanization: "sal", meaning: "Age (years old)" },
        { korean: "분/명/사람", 
        romanization: "bun/myeong/saram", 
        meaning: "collective of people - 분 (honorific/polite for guests, elders), 명 (general/neutral for counting people), 사람 (natural/casual, also means 'person' or nationality)" },
        { korean: "시간", romanization: "sigan", meaning: "duration of time" },
        { korean: "시", romanization: "si", meaning: "no. of hours" },
        { korean: "달", romanization: "dal", meaning: "duration of months" },
        { korean: "벌", romanization: "beol", meaning: "pair of clothes / set of clothes" },
        { korean: "켤레", romanization: "kyeollae", meaning: "pair of things that wear on feet/hands" },
        { korean: "쌍", romanization: "ssang", meaning: "pair of animals, people and some special object" },
        { korean: "대", romanization: "dae", meaning: "machines/appliances/vehicles/musical instruments" },
        { korean: "자루", romanization: "jaru", meaning: "long handled things/tools" }
    ],

    "Counter Units (Sino)": [
        { korean: "번", romanization: "beon", meaning: "number" },
        { korean: "호", romanization: "ho", meaning: "no. of house/rooms" },
        { korean: "세", romanization: "se", meaning: "age" },
        { korean: "년", romanization: "nyeon", meaning: "years and duration" },
        { korean: "월", romanization: "wol", meaning: "months of the year" },
        { korean: "일", romanization: "il", meaning: "dates and days" },
        { korean: "박", romanization: "bak", meaning: "number of nights" },
        { korean: "개월", romanization: "gaewol", meaning: "duration of months" },
        { korean: "주", romanization: "ju", meaning: "number of weeks" },
        { korean: "분", romanization: "bun", meaning: "no. of minutes" },
        { korean: "초", romanization: "cho", meaning: "number of seconds" },
        { korean: "인분", romanization: "inbun", meaning: "portions of food" },
        { korean: "층", romanization: "cheung", meaning: "no. of floors" },
        { korean: "원", romanization: "won", meaning: "korean currency" }
    ]
};