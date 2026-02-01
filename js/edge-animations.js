/**
 * Edge & Animation System
 * SVG edge drawing and particle flow animations for AI Agent Architecture
 */

// ==============================================
// CONNECTION MAP
// ==============================================

const CONNECTIONS = {
    // Router connects to all action agents
    router: ['experience', 'projects', 'skills', 'ai-tools', 'contact'],

    // All action agents connect to vector store
    experience: ['vector-store'],
    projects: ['vector-store'],
    skills: ['vector-store'],
    'ai-tools': ['vector-store'],
    contact: ['vector-store']
};

// ==============================================
// STATE
// ==============================================

const edgeState = {
    edges: [],
    activeEdges: new Set(),
    particles: [],
    svgContainer: null,
    particlesContainer: null,
    isAnimating: false,
    reducedMotion: false
};

// ==============================================
// INITIALIZATION
// ==============================================

/**
 * Initialize edge and animation system
 */
function initEdgeSystem() {
    // Check for reduced motion preference
    edgeState.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Get containers
    edgeState.svgContainer = document.getElementById('graphEdges');
    edgeState.particlesContainer = document.getElementById('particlesContainer');

    if (!edgeState.svgContainer) {
        console.warn('SVG container not found. Edges will not be drawn.');
        return;
    }

    // Draw initial edges
    drawAllEdges();

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            drawAllEdges();
        }, 300);
    });

    // Page Visibility API - pause animations when tab hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.body.classList.add('page-hidden');
        } else {
            document.body.classList.remove('page-hidden');
        }
    });

    console.log('Edge system initialized');
}

// ==============================================
// EDGE DRAWING
// ==============================================

/**
 * Draw all edges between nodes
 */
function drawAllEdges() {
    if (!edgeState.svgContainer) return;

    // Skip on mobile
    if (window.innerWidth < 768) {
        edgeState.svgContainer.innerHTML = '';
        return;
    }

    // Clear existing edges
    edgeState.svgContainer.innerHTML = '';
    edgeState.edges = [];

    // Draw edges for each connection
    Object.entries(CONNECTIONS).forEach(([source, targets]) => {
        targets.forEach(target => {
            drawEdge(source, target);
        });
    });
}

/**
 * Draw a single edge between two nodes
 */
function drawEdge(sourceId, targetId) {
    const sourceNode = document.querySelector(`[data-node="${sourceId}"]`);
    const targetNode = document.querySelector(`[data-node="${targetId}"]`);

    if (!sourceNode || !targetNode) {
        console.warn(`Cannot draw edge: ${sourceId} -> ${targetId} (node not found)`);
        return;
    }

    const start = getNodeCenter(sourceNode);
    const end = getNodeCenter(targetNode);

    // Create curved bezier path
    const path = createCurvedPath(start, end);

    // Create SVG path element
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', path);
    pathElement.setAttribute('class', `edge edge--${targetId}`);
    pathElement.setAttribute('fill', 'none');
    pathElement.setAttribute('data-source', sourceId);
    pathElement.setAttribute('data-target', targetId);

    edgeState.svgContainer.appendChild(pathElement);

    // Store edge data
    edgeState.edges.push({
        source: sourceId,
        target: targetId,
        element: pathElement,
        path: path
    });
}

/**
 * Get center coordinates of a node
 */
function getNodeCenter(node) {
    const rect = node.getBoundingClientRect();
    const containerRect = edgeState.svgContainer.getBoundingClientRect();

    return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top
    };
}

/**
 * Create curved bezier path between two points
 */
function createCurvedPath(start, end) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;

    // Calculate control points for smooth curve
    const cp1x = start.x + dx * 0.5;
    const cp1y = start.y;
    const cp2x = end.x - dx * 0.5;
    const cp2y = end.y;

    // Cubic bezier curve
    return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
}

// ==============================================
// EDGE ACTIVATION
// ==============================================

/**
 * Activate edge (when data flows through it)
 */
function activateEdge(sourceId, targetId) {
    const edge = edgeState.edges.find(e => e.source === sourceId && e.target === targetId);

    if (!edge) {
        console.warn(`Edge not found: ${sourceId} -> ${targetId}`);
        return;
    }

    edge.element.classList.add('edge--active', 'edge--transferring');
    edgeState.activeEdges.add(`${sourceId}-${targetId}`);

    // Create particles if not reduced motion
    if (!edgeState.reducedMotion && edgeState.particlesContainer) {
        createParticles(edge, targetId);
    }
}

/**
 * Deactivate edge
 */
function deactivateEdge(sourceId, targetId) {
    const edge = edgeState.edges.find(e => e.source === sourceId && e.target === targetId);

    if (!edge) return;

    edge.element.classList.remove('edge--active', 'edge--transferring');
    edgeState.activeEdges.delete(`${sourceId}-${targetId}`);
}

/**
 * Deactivate all edges
 */
function deactivateAllEdges() {
    edgeState.edges.forEach(edge => {
        edge.element.classList.remove('edge--active', 'edge--transferring');
    });
    edgeState.activeEdges.clear();
    clearAllParticles();
}

// ==============================================
// PARTICLE SYSTEM
// ==============================================

/**
 * Create particles flowing along an edge
 */
function createParticles(edge, targetType, count = 3) {
    if (!edgeState.particlesContainer) return;

    const pathLength = edge.element.getTotalLength();

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = `particle particle--${targetType}`;

        // Position particle at start of path
        const startPoint = edge.element.getPointAtLength(0);
        particle.style.left = startPoint.x + 'px';
        particle.style.top = startPoint.y + 'px';

        edgeState.particlesContainer.appendChild(particle);

        // Animate particle along path
        const delay = (i / count) * 1000; // Stagger particles
        setTimeout(() => {
            animateParticleAlongPath(particle, edge.element, pathLength);
        }, delay);

        edgeState.particles.push(particle);
    }
}

/**
 * Animate particle along SVG path
 */
function animateParticleAlongPath(particle, pathElement, pathLength) {
    const duration = 1000; // 1 second
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        if (progress < 1) {
            // Get point along path
            const distance = progress * pathLength;
            const point = pathElement.getPointAtLength(distance);

            // Update particle position
            particle.style.left = point.x + 'px';
            particle.style.top = point.y + 'px';

            // Fade in/out
            if (progress < 0.1) {
                particle.style.opacity = progress / 0.1;
            } else if (progress > 0.9) {
                particle.style.opacity = (1 - progress) / 0.1;
            } else {
                particle.style.opacity = 1;
            }

            requestAnimationFrame(animate);
        } else {
            // Animation complete
            particle.classList.add('particle--complete');
            particle.style.opacity = 0;

            // Remove after fade out
            setTimeout(() => {
                particle.remove();
                const index = edgeState.particles.indexOf(particle);
                if (index > -1) {
                    edgeState.particles.splice(index, 1);
                }
            }, 100);
        }
    }

    requestAnimationFrame(animate);
}

/**
 * Clear all particles
 */
function clearAllParticles() {
    if (!edgeState.particlesContainer) return;

    edgeState.particlesContainer.innerHTML = '';
    edgeState.particles = [];
}

// ==============================================
// ANIMATION SEQUENCES
// ==============================================

/**
 * Play full animation sequence for agent interaction
 *
 * Sequence:
 * 1. Node glow (0.3s)
 * 2. Edge activation to vector store (0.3s)
 * 3. Vector store pulse (0.5s)
 * 4. Edge to response panel (0.3s)
 * 5. Panel appears (0.4s)
 * Total: ~1.8s
 */
async function playAgentSequence(agentType) {
    if (edgeState.isAnimating) {
        console.log('Animation already in progress');
        return;
    }

    edgeState.isAnimating = true;

    try {
        const agentNode = document.querySelector(`[data-node="${agentType}"]`);
        const vectorStoreNode = document.querySelector('[data-node="vector-store"]');

        if (!agentNode || !vectorStoreNode) {
            console.warn('Required nodes not found for animation sequence');
            return;
        }

        // Step 1: Activate agent node (0.3s)
        agentNode.classList.add('node--active');
        await wait(300);

        // Step 2: Activate edge to vector store (0.3s)
        activateEdge(agentType, 'vector-store');
        await wait(300);

        // Step 3: Vector store retrieval pulse (0.5s)
        vectorStoreNode.classList.add('node--retrieving');
        await wait(500);
        vectorStoreNode.classList.remove('node--retrieving');

        // Step 4: Edge to response panel (conceptual - 0.3s)
        // In actual implementation, this would trigger panel opening
        await wait(300);

        // Cleanup
        setTimeout(() => {
            deactivateEdge(agentType, 'vector-store');
            agentNode.classList.remove('node--active');
            edgeState.isAnimating = false;
        }, 500);

    } catch (error) {
        console.error('Error in animation sequence:', error);
        edgeState.isAnimating = false;
    }
}

/**
 * Helper: Wait for specified milliseconds
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ==============================================
// UTILITY FUNCTIONS
// ==============================================

/**
 * Get edge element by source and target
 */
function getEdge(sourceId, targetId) {
    return edgeState.edges.find(e => e.source === sourceId && e.target === targetId);
}

/**
 * Check if edge is active
 */
function isEdgeActive(sourceId, targetId) {
    return edgeState.activeEdges.has(`${sourceId}-${targetId}`);
}

/**
 * Get all active edges
 */
function getActiveEdges() {
    return Array.from(edgeState.activeEdges);
}

// ==============================================
// PUBLIC API
// ==============================================

window.edgeSystem = {
    init: initEdgeSystem,
    drawAllEdges,
    activateEdge,
    deactivateEdge,
    deactivateAllEdges,
    playAgentSequence,
    getEdge,
    isEdgeActive,
    getActiveEdges,
    state: edgeState
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEdgeSystem);
} else {
    initEdgeSystem();
}

console.log('Edge animations module loaded');
