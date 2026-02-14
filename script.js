// MAIN JAVASCRIPT FILE - Controls all the flashcard behavior

// VARIABLES TO TRACK STATE
let currentCategory = null; // Which category is selected
let currentCards = []; // Array of cards in current category
let currentCardIndex = 0; // Which card we're on (starts at 0)
let isFlipped = false; // Is the card showing the back?

// GET REFERENCES TO HTML ELEMENTS
const categoryContainer = document.getElementById('category-container');
const categoryButtonsDiv = document.getElementById('category-buttons');
const flashcardArea = document.getElementById('flashcard-area');
const flashcard = document.getElementById('flashcard');
const cardContent = flashcard.querySelector('.card-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const cardCounter = document.getElementById('card-counter');
const backToCategoriesBtn = document.getElementById('back-to-categories');
const shuffleBtn = document.getElementById('shuffle-btn');

// SHUFFLE FUNCTION - Randomizes an array
function shuffleArray(array) {
    const shuffled = [...array];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

// STEP 1: CREATE CATEGORY BUTTONS WHEN PAGE LOADS
function createCategoryButtons() {
    for (let categoryName in flashcardData) {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.textContent = categoryName;
        
        // Mark memorized categories with special color
        const memorizedCategories = [
            "Animals", "Animal Farm", "Wild Animals", "Objects 1", "Objects 2",
            "Mode of Transportation", "Electronic Appliances", "Furniture", 
            "Fruit and Food", "Places", "Government and Public Offices", 
            "Occupations", "Country", "Family", "Range of Hours", 
            "Looks and Personality", "Money and Purchasing Goods", "Stative Verb 1",
            "Restaurant", "Taste of Foods", "Adverbs", "Adverbs of Frequency",
            "Numbers Practice - Prices (Sino-Korean)", "Numbers Practice - Dates (Sino-Korean)",
            "Numbers Practice - Native Korean (1-20)", "Numbers Practice - Phone Numbers",
            "Telling Time (12hr)", "Counter Units (Native)", "Counter Units (Sino)", "Regular Verbs (ㅅ ending)", 
            "Regular Verbs (ㄷ ending)","Regular Verbs (ㅂ ending)", "Verbs 1", "Verbs 2", "Verbs 3",
            "Sports", "Clubs for People with Shared Interests", "Grain", "The Korean Wave", "Streets",
            "Seperate Garbage Collection", "Packaging", "Tourism", "Irregular Verbs (ㄷ ending)", 
            "Irregular Verbs (ㅅ ending)", "Location Words", "Point of Existence (Marker 에)", 
            "Daily Routine", "Signs", "Meetings at Work"
        ];

        if (memorizedCategories.includes(categoryName)) {
            button.classList.add('memorized');
        }

        button.addEventListener('click', function() {
            loadCategory(categoryName);
        });
        
        categoryButtonsDiv.appendChild(button);
    }
}

// STEP 2: LOAD A CATEGORY
function loadCategory(categoryName) {
    currentCategory = categoryName;
    
    // Check if this is a number practice category
    if (categoryName === "Numbers Practice - Prices (Sino-Korean)") {
        currentCards = generatePriceCards();
    } else if (categoryName === "Numbers Practice - Dates (Sino-Korean)") {
        currentCards = generateDateCards();
    } else if (categoryName === "Numbers Practice - Native Korean (1-20)") {
        currentCards = generateNativeNumberCards();
    } else if (categoryName === "Numbers Practice - Phone Numbers") {
        currentCards = generatePhoneNumberCards();
    } else if (categoryName === "Telling Time (12hr)") {
        currentCards = generateTellingTimeCards();
    } else if (categoryName === "Counter Units (Native)" || categoryName === "Counter Units (Sino)") {
        // Regular category - shuffle the cards
        currentCards = shuffleArray(flashcardData[categoryName]);
    } else {
        // Regular category - shuffle the cards
        currentCards = shuffleArray(flashcardData[categoryName]);
    }
    
    currentCardIndex = 0;
    isFlipped = false;
    
    categoryContainer.classList.add('hidden');
    flashcardArea.classList.remove('hidden');
    
    displayCard();
}

// STEP 3: DISPLAY A CARD
function displayCard() {
    const card = currentCards[currentCardIndex];
    
    if (isFlipped) {
        // Show BACK of card
        const spokenText = card.spokenKorean || card.korean;
        
        // Check if card has breakdown data (Reading Practice category)
        let breakdownHTML = '';
        if (card.breakdown && card.breakdown.length > 0) {
            breakdownHTML = '<div class="breakdown-section">';
            breakdownHTML += '<h3>Vocabulary Breakdown:</h3>';
            breakdownHTML += '<div class="breakdown-list">';
            
            card.breakdown.forEach(item => {
                breakdownHTML += '<div class="breakdown-item">';
                breakdownHTML += `<div class="breakdown-word"><strong>${item.word}</strong></div>`;
                
                if (item.dictForm !== item.word) {
                    breakdownHTML += `<div class="breakdown-dict">Dictionary form: ${item.dictForm}</div>`;
                }
                
                breakdownHTML += `<div class="breakdown-role">${item.role}</div>`;
                breakdownHTML += `<div class="breakdown-meaning">${item.meaning}</div>`;
                
                if (item.conjugation) {
                    breakdownHTML += `<div class="breakdown-conjugation">${item.conjugation}</div>`;
                }
                
                if (item.explanation) {
                    breakdownHTML += `<div class="breakdown-explanation">${item.explanation}</div>`;
                }
                
                breakdownHTML += '</div>';
            });
            
            breakdownHTML += '</div></div>';
        }
        
        cardContent.innerHTML = `
            <div class="card-back">
                <div class="korean">${spokenText}</div>
                <div class="romanization">${card.romanization}</div>
                <div class="meaning">${card.meaning}</div>
                ${breakdownHTML}
            </div>
        `;
        
        // Speak the Korean text
        speakKorean(spokenText);
    } else {
        // Show FRONT of card
        cardContent.innerHTML = `
            <div class="card-front">${card.korean}</div>
        `;
    }
    
    cardCounter.textContent = `${currentCardIndex + 1} / ${currentCards.length}`;
    updateNavigationButtons();
}

// SPEECH SYNTHESIS FUNCTION
function speakKorean(text) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.8; // Slightly slower for learning
    
    window.speechSynthesis.speak(utterance);
}

// STEP 4: UPDATE NAVIGATION BUTTONS
function updateNavigationButtons() {
    if (currentCardIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
    
    if (currentCardIndex === currentCards.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

// STEP 5: FLIP CARD (when clicked)
flashcard.addEventListener('click', function() {
    isFlipped = !isFlipped;
    displayCard();
});

// STEP 6: PREVIOUS BUTTON
prevBtn.addEventListener('click', function() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        isFlipped = false;
        displayCard();
    }
});

// STEP 7: NEXT BUTTON
nextBtn.addEventListener('click', function() {
    if (currentCardIndex < currentCards.length - 1) {
        currentCardIndex++;
        isFlipped = false;
        displayCard();
    }
});

// STEP 8: BACK TO CATEGORIES BUTTON
backToCategoriesBtn.addEventListener('click', function() {
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    
    flashcardArea.classList.add('hidden');
    categoryContainer.classList.remove('hidden');
    
    currentCategory = null;
    currentCards = [];
    currentCardIndex = 0;
    isFlipped = false;
});

// STEP 9: SHUFFLE BUTTON
shuffleBtn.addEventListener('click', function() {
    currentCards = shuffleArray(currentCards);
    currentCardIndex = 0;
    isFlipped = false;
    displayCard();
});

// RUN THIS WHEN PAGE LOADS
createCategoryButtons();

// SEARCH FEATURE
const categorySearch = document.getElementById('category-search');

categorySearch.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    const buttons = categoryButtonsDiv.querySelectorAll('.category-btn');
    let visibleCount = 0;

    buttons.forEach(function(btn) {
        if (btn.textContent.toLowerCase().includes(query)) {
            btn.style.display = '';
            visibleCount++;
        } else {
            btn.style.display = 'none';
        }
    });

    // Remove old no-results message if any
    const existing = categoryButtonsDiv.querySelector('.no-results');
    if (existing) existing.remove();

    if (visibleCount === 0) {
        const msg = document.createElement('p');
        msg.className = 'no-results';
        msg.textContent = 'No categories found.';
        categoryButtonsDiv.appendChild(msg);
    }
});

// DARK MODE TOGGLE
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check if user has a saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
}

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
});