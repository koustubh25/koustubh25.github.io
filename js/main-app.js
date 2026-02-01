/**
 * Main Application Logic
 * Handles node interactions, state management, and UI orchestration
 * Requires: portfolio-data.js, agent-responses.js, edge-animations.js
 */

// ==============================================
// APPLICATION STATE
// ==============================================

const appState = {
    currentNode: null,
    panelOpen: false,
    animationInProgress: false,
    visitedNodes: [],
    graphLayout: 'desktop', // desktop | tablet | mobile
    reducedMotion: false
};

// ==============================================
// INITIALIZATION
// ==============================================

/**
 * Initialize the application
 */
function initApp() {
    console.log('Initializing portfolio application...');

    // Check reduced motion preference
    appState.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Detect layout
    updateLayout();

    // Setup event listeners
    setupEventListeners();

    // Handle initial URL hash
    handleInitialRoute();

    // Announce app ready to screen readers
    announceToScreenReader('Portfolio loaded. Navigate nodes with Tab and Enter keys.');

    console.log('Portfolio application initialized');
}

/**
 * Update layout based on viewport size
 */
function updateLayout() {
    const width = window.innerWidth;

    if (width >= 1200) {
        appState.graphLayout = 'desktop';
    } else if (width >= 768) {
        appState.graphLayout = 'tablet';
    } else {
        appState.graphLayout = 'mobile';
    }
}

// ==============================================
// KEYBOARD NAVIGATION
// ==============================================

/**
 * Track keyboard usage for enhanced focus styling
 */
function setupKeyboardTracking() {
    // Detect when Tab key is used
    function handleFirstTab(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
            window.addEventListener('mousedown', handleMouseDown);
        }
    }

    function handleMouseDown() {
        document.body.classList.remove('user-is-tabbing');
        window.removeEventListener('mousedown', handleMouseDown);
        window.addEventListener('keydown', handleFirstTab);
    }

    window.addEventListener('keydown', handleFirstTab);
}

/**
 * Setup focus trap for response panel
 */
function setupFocusTrap(panel) {
    const focusableElements = panel.querySelectorAll(
        'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Handle Tab and Shift+Tab
    panel.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}

/**
 * Get all nodes as an array
 */
function getAllNodes() {
    return Array.from(document.querySelectorAll('.node[role="button"]'));
}

/**
 * Get currently focused node
 */
function getCurrentNodeIndex() {
    const nodes = getAllNodes();
    return nodes.findIndex(node => node === document.activeElement);
}

/**
 * Focus node by index
 */
function focusNodeByIndex(index) {
    const nodes = getAllNodes();
    if (index >= 0 && index < nodes.length) {
        nodes[index].focus();
    }
}

/**
 * Setup arrow key navigation between nodes
 */
function setupArrowNavigation() {
    document.addEventListener('keydown', (e) => {
        // Only handle arrow keys when panel is closed and a node has focus
        if (appState.panelOpen) return;

        const currentIndex = getCurrentNodeIndex();
        if (currentIndex === -1) return;

        let newIndex = currentIndex;

        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                e.preventDefault();
                newIndex = (currentIndex + 1) % getAllNodes().length;
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                newIndex = currentIndex - 1;
                if (newIndex < 0) newIndex = getAllNodes().length - 1;
                break;
            default:
                return;
        }

        focusNodeByIndex(newIndex);
    });
}

// ==============================================
// EVENT LISTENERS
// ==============================================

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Track keyboard usage for focus styling
    setupKeyboardTracking();

    // Setup arrow key navigation
    setupArrowNavigation();

    // Node clicks
    document.querySelectorAll('.node[role="button"]').forEach(node => {
        node.addEventListener('click', () => handleNodeClick(node));

        node.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNodeClick(node);
            }
        });
    });

    // Panel close triggers
    const backdrop = document.querySelector('.panel-backdrop');
    if (backdrop) {
        backdrop.addEventListener('click', closePanel);
    }

    document.querySelectorAll('.panel__close, .panel__back').forEach(btn => {
        btn.addEventListener('click', closePanel);
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && appState.panelOpen) {
            closePanel();
        }
    });

    // Browser history
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.node) {
            handleNodeClick(document.querySelector(`[data-node="${e.state.node}"]`), true);
        } else if (appState.panelOpen) {
            closePanel(true);
        }
    });

    // Window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateLayout();
            if (window.edgeSystem) {
                window.edgeSystem.drawAllEdges();
            }
        }, 300);
    });
}

// ==============================================
// NODE INTERACTION
// ==============================================

/**
 * Handle node click with full animation sequence
 */
async function handleNodeClick(nodeElement, skipHistory = false) {
    // Prevent clicks on vector store and during animations
    const nodeType = nodeElement.getAttribute('data-node');

    if (nodeType === 'vector-store') {
        console.log('Vector store is not clickable');
        return;
    }

    if (appState.animationInProgress) {
        console.log('Animation in progress, ignoring click');
        return;
    }

    // Special handling for router node
    if (nodeType === 'router') {
        handleRouterClick();
        return;
    }

    console.log(`Node clicked: ${nodeType}`);
    appState.animationInProgress = true;

    try {
        // Close existing panel if open
        if (appState.panelOpen) {
            await closePanelWithoutHistory();
        }

        // Deactivate all nodes
        document.querySelectorAll('.node').forEach(n => {
            n.classList.remove('node--active');
        });

        // Activate clicked node
        nodeElement.classList.add('node--active');

        // Wait for CSS transition
        await wait(300);

        // Play edge animation sequence (if not on mobile and no reduced motion)
        if (appState.graphLayout !== 'mobile' && !appState.reducedMotion && window.edgeSystem) {
            await window.edgeSystem.playAgentSequence(nodeType);
        }

        // Display response panel
        await displayResponsePanel(nodeType);

        // Update state
        appState.currentNode = nodeType;
        appState.panelOpen = true;
        if (!appState.visitedNodes.includes(nodeType)) {
            appState.visitedNodes.push(nodeType);
        }

        // Update browser history
        if (!skipHistory) {
            history.pushState({ node: nodeType }, '', '#' + nodeType);
        }

        // Announce to screen readers
        announceToScreenReader(`Opened ${nodeType} agent panel`);

    } catch (error) {
        console.error('Error in node click handler:', error);
        showErrorPanel('Failed to load content. Please try again.');
    } finally {
        appState.animationInProgress = false;
    }
}

/**
 * Handle router node click
 */
function handleRouterClick() {
    console.log('Router clicked - showing navigation options');
    // Could display a special router panel or do nothing
    announceToScreenReader('Router node. Select an agent below to explore.');
}

// ==============================================
// PANEL MANAGEMENT
// ==============================================

/**
 * Display response panel with agent content
 */
async function displayResponsePanel(agentType) {
    const panel = document.getElementById('responsePanel');
    const backdrop = document.querySelector('.panel-backdrop');

    if (!panel || !backdrop) {
        console.warn('Panel or backdrop not found');
        return;
    }

    // Get content
    const content = window.agentResponses ?
        window.agentResponses.get(agentType) :
        `<p>Content for ${agentType} not available</p>`;

    // Update panel content
    const contentArea = panel.querySelector('.panel__content');
    if (contentArea) {
        contentArea.innerHTML = content;

        // Trigger skill bar animations if skills panel
        if (agentType === 'skills' && window.agentResponses) {
            window.agentResponses.animateSkillBars();
        }
    }

    // Update metadata
    const metadata = window.agentResponses ?
        window.agentResponses.generateMetadata(agentType, content) :
        { agent: agentType, tokens: 0 };

    updatePanelMetadata(panel, metadata);

    // Update panel data attribute
    panel.setAttribute('data-agent', agentType);

    // Show panel and backdrop
    backdrop.classList.add('active');
    panel.classList.add('active');
    panel.setAttribute('aria-hidden', 'false');

    // Setup focus trap for keyboard navigation
    setupFocusTrap(panel);

    // Focus first focusable element
    await wait(100);
    const firstFocusable = panel.querySelector('button, a, [tabindex="0"]');
    if (firstFocusable) {
        firstFocusable.focus();
    }

    // Scroll to top
    if (contentArea) {
        contentArea.scrollTop = 0;
    }
}

/**
 * Update panel metadata section
 */
function updatePanelMetadata(panel, metadata) {
    const metadataContainer = panel.querySelector('.panel__metadata');
    if (!metadataContainer) return;

    const agentIcons = {
        'experience': '💼',
        'projects': '🚀',
        'skills': '⚡',
        'ai-tools': '🤖',
        'contact': '📧',
        'router': '🎯'
    };

    const agentIcon = agentIcons[metadata.agent] || '📊';
    const agentName = metadata.agent.charAt(0).toUpperCase() + metadata.agent.slice(1).replace('-', ' ');

    metadataContainer.innerHTML = `
        <div class="metadata__item">
            <span class="metadata__label">Agent:</span>
            <span class="metadata__value">${agentIcon} ${agentName}</span>
        </div>
        <div class="metadata__item">
            <span class="metadata__label">Retrieved from:</span>
            <span class="metadata__value">${metadata.source || 'resume_data.yaml'}</span>
        </div>
        <div class="metadata__item">
            <span class="metadata__label">Query:</span>
            <span class="metadata__value">"${metadata.query || metadata.agent}"</span>
        </div>
        <div class="metadata__item">
            <span class="metadata__label">Tokens:</span>
            <span class="metadata__value">${metadata.tokens || 0}</span>
        </div>
    `;
}

/**
 * Close panel (public wrapper)
 */
async function closePanel(skipHistory = false) {
    await closePanelInternal(skipHistory);

    // Update browser history
    if (!skipHistory && appState.panelOpen) {
        history.pushState({}, '', window.location.pathname);
    }
}

/**
 * Close panel without history update (internal)
 */
async function closePanelWithoutHistory() {
    return closePanelInternal(true);
}

/**
 * Internal panel close logic
 */
async function closePanelInternal(skipHistory) {
    const panel = document.getElementById('responsePanel');
    const backdrop = document.querySelector('.panel-backdrop');

    if (!panel || !backdrop) return;

    // Hide panel
    panel.classList.remove('active', 'minimized');
    panel.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('active');

    // Deactivate all nodes
    document.querySelectorAll('.node').forEach(n => {
        n.classList.remove('node--active');
    });

    // Deactivate all edges
    if (window.edgeSystem) {
        window.edgeSystem.deactivateAllEdges();
    }

    // Update state
    appState.currentNode = null;
    appState.panelOpen = false;

    // Announce to screen readers
    announceToScreenReader('Panel closed');

    await wait(400); // Wait for close animation
}

/**
 * Show error panel
 */
function showErrorPanel(message) {
    const panel = document.getElementById('responsePanel');
    if (!panel) return;

    const contentArea = panel.querySelector('.panel__content');
    if (contentArea) {
        contentArea.innerHTML = `
            <div style="text-align: center; padding: var(--spacing-xl);">
                <h2 style="color: #ef4444;">⚠️ Error</h2>
                <p style="color: var(--color-text-secondary); margin-top: var(--spacing-md);">
                    ${message}
                </p>
                <button onclick="closePanel()" style="margin-top: var(--spacing-lg); padding: var(--spacing-sm) var(--spacing-lg); background: var(--color-accent-tertiary); color: var(--color-bg-deep); border: none; border-radius: var(--radius-md); cursor: pointer;">
                    Close
                </button>
            </div>
        `;
    }

    // Show panel
    const backdrop = document.querySelector('.panel-backdrop');
    if (backdrop) backdrop.classList.add('active');
    panel.classList.add('active');
    panel.setAttribute('aria-hidden', 'false');
}

// ==============================================
// ROUTING
// ==============================================

/**
 * Handle initial URL route
 */
function handleInitialRoute() {
    const hash = window.location.hash.slice(1); // Remove #

    if (hash) {
        const node = document.querySelector(`[data-node="${hash}"]`);
        if (node) {
            setTimeout(() => {
                handleNodeClick(node, true);
            }, 500); // Wait for everything to load
        }
    }
}

// ==============================================
// UTILITY FUNCTIONS
// ==============================================

/**
 * Wait for specified milliseconds
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Announce to screen readers
 */
function announceToScreenReader(message) {
    let announcer = document.getElementById('screenReaderAnnouncer');

    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'screenReaderAnnouncer';
        announcer.setAttribute('role', 'status');
        announcer.setAttribute('aria-live', 'polite');
        announcer.className = 'sr-only';
        document.body.appendChild(announcer);
    }

    announcer.textContent = message;

    // Clear after announcement
    setTimeout(() => {
        announcer.textContent = '';
    }, 1000);
}

// ==============================================
// PUBLIC API
// ==============================================

window.portfolioApp = {
    init: initApp,
    handleNodeClick,
    closePanel,
    state: appState
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Make closePanel globally accessible for inline onclick handlers
window.closePanel = closePanel;

console.log('Main application module loaded');
