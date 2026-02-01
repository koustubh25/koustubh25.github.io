/**
 * Portfolio Website - Main Application Logic
 * Hachi AI Assistant - Conversational Portfolio Interface
 */

// ============================================
// STATE MANAGEMENT
// ============================================

const appState = {
    currentFocusedChipIndex: 0,
    conversationHistory: [],
    isTyping: false
};

// ============================================
// DOM ELEMENTS
// ============================================

const elements = {
    chatMessages: null,
    chipsContainer: null,
    inputField: null,
    submitButton: null
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    elements.chatMessages = document.getElementById('chatMessages');
    elements.chipsContainer = document.getElementById('chipsContainer');
    elements.inputField = document.getElementById('inputField');
    elements.submitButton = document.getElementById('submitButton');

    // Show initial message
    showInitialMessage();

    // Set up event listeners
    setupEventListeners();
});

// ============================================
// INITIAL MESSAGE
// ============================================

function showInitialMessage() {
    const initial = hachiResponses.initial;
    addHachiMessage(initial.message, initial.suggestions);
}

// ============================================
// MESSAGE RENDERING
// ============================================

/**
 * Add a Hachi message to the chat
 */
function addHachiMessage(text, suggestions = []) {
    // Show typing indicator
    showTypingIndicator();

    // Wait a moment, then show the actual message
    setTimeout(() => {
        removeTypingIndicator();

        const messageEl = createHachiMessageElement(text);
        elements.chatMessages.appendChild(messageEl);

        // Update chips with new suggestions
        if (suggestions && suggestions.length > 0) {
            updateChips(suggestions);
        }

        // Scroll to bottom
        scrollToBottom();

        // Save to history
        appState.conversationHistory.push({
            type: 'hachi',
            text: text,
            suggestions: suggestions
        });
    }, 600); // 600ms typing delay
}

/**
 * Add a user message to the chat
 */
function addUserMessage(text) {
    const messageEl = createUserMessageElement(text);
    elements.chatMessages.appendChild(messageEl);

    scrollToBottom();

    // Save to history
    appState.conversationHistory.push({
        type: 'user',
        text: text
    });
}

/**
 * Create Hachi message HTML element
 */
function createHachiMessageElement(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message message--hachi';

    const avatar = document.createElement('img');
    avatar.src = 'static/hachiko_steady.gif';
    avatar.alt = 'Hachi avatar';
    avatar.className = 'message__avatar';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message__content';

    const textDiv = document.createElement('div');
    textDiv.className = 'message__text';
    textDiv.innerHTML = formatMessageText(text);

    contentDiv.appendChild(textDiv);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);

    return messageDiv;
}

/**
 * Create user message HTML element
 */
function createUserMessageElement(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message message--user';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message__content';

    const textDiv = document.createElement('div');
    textDiv.className = 'message__text';
    textDiv.textContent = text;

    contentDiv.appendChild(textDiv);
    messageDiv.appendChild(contentDiv);

    return messageDiv;
}

/**
 * Format message text (convert markdown-like syntax to HTML)
 */
function formatMessageText(text) {
    // Convert **bold** to <strong>
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Convert bullet points with • to proper list items
    const lines = formatted.split('\n');
    let inList = false;
    let result = [];

    for (let line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('•')) {
            if (!inList) {
                result.push('<ul>');
                inList = true;
            }
            result.push(`<li>${trimmed.substring(1).trim()}</li>`);
        } else {
            if (inList) {
                result.push('</ul>');
                inList = false;
            }
            result.push(line);
        }
    }

    if (inList) {
        result.push('</ul>');
    }

    formatted = result.join('\n');

    // Convert line breaks to <br> (but not inside lists)
    formatted = formatted.replace(/\n(?!<)/g, '<br>');

    return formatted;
}

/**
 * Show typing indicator
 */
function showTypingIndicator() {
    if (appState.isTyping) return;
    appState.isTyping = true;

    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typingIndicator';

    indicator.innerHTML = `
        <img src="static/hachiko_thinking.gif" alt="Hachi thinking" class="typing-indicator__avatar">
        <div class="typing-indicator__dots">
            <span class="typing-indicator__dot"></span>
            <span class="typing-indicator__dot"></span>
            <span class="typing-indicator__dot"></span>
        </div>
    `;

    elements.chatMessages.appendChild(indicator);
    scrollToBottom();
}

/**
 * Remove typing indicator
 */
function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
    appState.isTyping = false;
}

/**
 * Scroll chat to bottom
 */
function scrollToBottom() {
    setTimeout(() => {
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    }, 100);
}

// ============================================
// CHIP NAVIGATION
// ============================================

/**
 * Update suggestion chips
 */
function updateChips(suggestions) {
    elements.chipsContainer.innerHTML = '';

    suggestions.forEach((suggestion, index) => {
        const chip = createChipElement(suggestion, index);
        elements.chipsContainer.appendChild(chip);
    });

    // Reset focused chip index
    appState.currentFocusedChipIndex = 0;
    updateChipFocus();
}

/**
 * Create a chip element
 */
function createChipElement(text, index) {
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.setAttribute('data-index', index);
    chip.setAttribute('role', 'button');
    chip.setAttribute('tabindex', '0');

    // Extract number and label from text like "[1] Experience"
    const match = text.match(/^\[(\d+)\]\s*(.+)$/);
    if (match) {
        const number = match[1];
        const label = match[2];

        chip.innerHTML = `<span class="chip__number">[${number}]</span>${label}`;
        chip.setAttribute('data-number', number);
        chip.setAttribute('data-label', label);
    } else {
        chip.textContent = text;
        chip.setAttribute('data-label', text);
    }

    // Click handler
    chip.addEventListener('click', () => handleChipClick(chip));

    return chip;
}

/**
 * Handle chip click
 */
function handleChipClick(chip) {
    const label = chip.getAttribute('data-label');
    const number = chip.getAttribute('data-number');

    // Determine which response to show based on label
    const responseKey = mapChipLabelToResponseKey(label);
    const response = getResponse(responseKey);

    // Show user's selection
    addUserMessage(label);

    // Show Hachi's response
    addHachiMessage(response.message, response.suggestions);
}

/**
 * Map chip label to response key
 */
function mapChipLabelToResponseKey(label) {
    const labelLower = label.toLowerCase();

    // Direct mappings
    const mappings = {
        'experience': 'experience',
        'projects': 'projects',
        'skills': 'skills',
        'ai & expts': 'aiExperiments',
        'education': 'education',
        'contact': 'contact',
        'anz details': 'anzDetails',
        'japan roles': 'japanRoles',
        'idp details': 'idpDetails',
        'terraform provider': 'terraformProvider',
        'k8s operators': 'k8sOperators',
        'kubernetes': 'kubernetesSkills',
        'golang': 'golangSkills',
        'terraform': 'terraformSkills',
        'gcp': 'gcpSkills',
        'go skills': 'golangSkills',
        'kubernetes skills': 'kubernetesSkills',
        'certifications': 'certifications',
        '← back': 'initial',
        '← start': 'initial',
        'start': 'initial'
    };

    return mappings[labelLower] || 'fallback';
}

/**
 * Update chip focus (for keyboard navigation)
 */
function updateChipFocus() {
    const chips = elements.chipsContainer.querySelectorAll('.chip');
    chips.forEach((chip, index) => {
        if (index === appState.currentFocusedChipIndex) {
            chip.classList.add('chip--focused');
            chip.focus();
        } else {
            chip.classList.remove('chip--focused');
        }
    });
}

/**
 * Navigate chips with arrow keys
 */
function navigateChips(direction) {
    const chips = elements.chipsContainer.querySelectorAll('.chip');
    const totalChips = chips.length;

    if (totalChips === 0) return;

    if (direction === 'left' || direction === 'up') {
        appState.currentFocusedChipIndex = (appState.currentFocusedChipIndex - 1 + totalChips) % totalChips;
    } else if (direction === 'right' || direction === 'down') {
        appState.currentFocusedChipIndex = (appState.currentFocusedChipIndex + 1) % totalChips;
    }

    updateChipFocus();
}

/**
 * Activate focused chip
 */
function activateFocusedChip() {
    const chips = elements.chipsContainer.querySelectorAll('.chip');
    if (chips[appState.currentFocusedChipIndex]) {
        chips[appState.currentFocusedChipIndex].click();
    }
}

/**
 * Select chip by number (1-9)
 */
function selectChipByNumber(number) {
    const chip = elements.chipsContainer.querySelector(`[data-number="${number}"]`);
    if (chip) {
        chip.click();
    }
}

// ============================================
// TEXT INPUT HANDLING
// ============================================

/**
 * Handle text input submission
 */
function handleTextInput() {
    const input = elements.inputField.value.trim();

    if (!input) return;

    // Show user message
    addUserMessage(input);

    // Clear input
    elements.inputField.value = '';

    // Match to response using keyword matching
    const response = matchResponse(input);

    // Show Hachi's response
    addHachiMessage(response.message, response.suggestions);
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Submit button click
    elements.submitButton.addEventListener('click', handleTextInput);

    // Input field enter key
    elements.inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleTextInput();
        }
    });

    // Global keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Don't intercept if user is typing in input
        if (document.activeElement === elements.inputField) {
            return;
        }

        // Number keys (1-9) for chip selection
        if (e.key >= '1' && e.key <= '9') {
            e.preventDefault();
            selectChipByNumber(e.key);
            return;
        }

        // Arrow keys for chip navigation
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            navigateChips('left');
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            navigateChips('right');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            navigateChips('up');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            navigateChips('down');
        }

        // Enter to activate focused chip
        if (e.key === 'Enter') {
            e.preventDefault();
            activateFocusedChip();
        }

        // Escape to clear input
        if (e.key === 'Escape') {
            elements.inputField.value = '';
            elements.inputField.blur();
        }

        // "/" to focus input
        if (e.key === '/') {
            e.preventDefault();
            elements.inputField.focus();
        }
    });

    // Prevent chip focus from keyboard tab (we use arrow keys instead)
    elements.chipsContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            // Allow tab, but don't override our custom navigation
        }
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
