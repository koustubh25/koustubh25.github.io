/**
 * Agent Response Generators
 * Generate HTML content for each agent type
 * Requires: portfolio-data.js
 */

// ==============================================
// EXPERIENCE AGENT
// ==============================================

/**
 * Generate Experience Agent response
 */
function generateExperienceResponse() {
    const data = window.portfolioData.experience;
    const timeline = window.portfolioData.getExperienceTimeline(true); // Most recent first

    let html = `
        <h2 id="experienceTitle" style="margin-bottom: var(--spacing-lg);">💼 Experience Timeline</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xl);">
            ${data.summary} • ${data.countries.join(', ')}
        </p>

        <div class="timeline">
    `;

    timeline.forEach(role => {
        html += `
            <div class="timeline__item">
                <div class="timeline__date">${role.dates}</div>
                <div class="timeline__title">${role.title}</div>
                <div class="timeline__description">
                    <strong>Company:</strong> ${role.company}<br>
                    <strong>Location:</strong> ${role.location}<br>
                    ${role.description.slice(0, 2).map(desc => `• ${desc}<br>`).join('')}
                    ${role.highlights.length > 0 ? `<br><strong>Key Achievement:</strong><br>• ${role.highlights[0]}` : ''}
                </div>
                ${role.tools.length > 0 ? `
                    <div class="tech-tags" style="margin-top: var(--spacing-sm);">
                        ${role.tools.slice(0, 5).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    });

    html += '</div>';

    return html;
}

/**
 * Generate ANZ Details sub-response
 */
function generateANZDetails() {
    const anzRoles = window.portfolioData.experience.timeline
        .filter(role => role.company.includes('ANZ'))
        .reverse(); // Most recent first

    let html = `
        <h2 style="margin-bottom: var(--spacing-lg);">🏦 ANZ Bank (ANZx) Journey</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xl);">
            ${anzRoles.length} roles across ${anzRoles.reduce((sum, r) => {
                const years = r.dateEnd ?
                    (new Date(r.dateEnd).getFullYear() - new Date(r.dateStart).getFullYear()) :
                    (new Date().getFullYear() - new Date(r.dateStart).getFullYear());
                return sum + Math.max(years, 1);
            }, 0)} years
        </p>
    `;

    anzRoles.forEach((role, index) => {
        html += `
            <div class="content-card">
                <div class="card__header">
                    <h3>${role.title}</h3>
                </div>
                <div class="card__body">
                    <p><strong>Period:</strong> ${role.dates}</p>
                    <p><strong>Key Responsibilities:</strong></p>
                    <ul>
                        ${role.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                    ${role.highlights.length > 0 ? `
                        <p><strong>Achievements:</strong></p>
                        <ul>
                            ${role.highlights.map(h => `<li>${h}</li>`).join('')}
                        </ul>
                    ` : ''}
                    ${role.tools.length > 0 ? `
                        <div class="tech-tags">
                            ${role.tools.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });

    return html;
}

// ==============================================
// PROJECTS AGENT
// ==============================================

/**
 * Generate Projects Agent response
 */
function generateProjectsResponse() {
    const data = window.portfolioData.projects;

    let html = `
        <h2 id="projectsTitle" style="margin-bottom: var(--spacing-lg);">🚀 Featured Projects</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xl);">
            ${data.summary} • ${data.featured.length} highlighted projects
        </p>
    `;

    data.featured.forEach(project => {
        html += `
            <div class="content-card">
                <div class="card__header">
                    <h3>${project.icon} ${project.name}</h3>
                </div>
                <div class="card__body">
                    <p style="color: var(--color-text-muted); margin-bottom: var(--spacing-sm);">
                        ${project.category} • ${project.period} • ${project.company}
                    </p>

                    <p><strong>Problem:</strong> ${project.problem}</p>
                    <p><strong>Solution:</strong> ${project.solution}</p>
                    <p><strong>Impact:</strong> ${project.impact}</p>

                    <div class="tech-tags">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    return html;
}

/**
 * Generate IDP Project Details
 */
function generateIDPDetails() {
    const idp = window.portfolioData.projects.featured.find(p => p.id === 'idp');

    if (!idp) return '<p>Project details not found.</p>';

    return `
        <h2 style="margin-bottom: var(--spacing-lg);">${idp.icon} ${idp.name}</h2>

        <div class="content-card">
            <div class="card__header">
                <h3>Overview</h3>
            </div>
            <div class="card__body">
                <p><strong>Status:</strong> <span style="color: var(--color-success);">${idp.status}</span></p>
                <p><strong>Period:</strong> ${idp.period}</p>
                <p><strong>Category:</strong> ${idp.category}</p>
                <p><strong>Company:</strong> ${idp.company}</p>
            </div>
        </div>

        <div class="content-card">
            <div class="card__header">
                <h3>Problem Statement</h3>
            </div>
            <div class="card__body">
                <p>${idp.problem}</p>
            </div>
        </div>

        <div class="content-card">
            <div class="card__header">
                <h3>Solution Architecture</h3>
            </div>
            <div class="card__body">
                <p>${idp.solution}</p>
                <div class="tech-tags">
                    ${idp.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>

        <div class="content-card">
            <div class="card__header">
                <h3>Business Impact</h3>
            </div>
            <div class="card__body">
                <p>${idp.impact}</p>
            </div>
        </div>
    `;
}

// ==============================================
// SKILLS AGENT
// ==============================================

/**
 * Generate Skills Agent response
 */
function generateSkillsResponse() {
    const data = window.portfolioData.skills;

    let html = `
        <h2 id="skillsTitle" style="margin-bottom: var(--spacing-lg);">⚡ Technical Skills</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xl);">
            ${data.summary}
        </p>
    `;

    // Cloud & Platform Skills
    html += `
        <h3 style="color: var(--color-accent-tertiary); margin-bottom: var(--spacing-md);">☁️ Cloud & Platform</h3>
    `;

    data.cloud.forEach(skill => {
        html += generateSkillBar(skill.name, skill.proficiency);
    });

    // Programming Languages
    html += `
        <h3 style="color: var(--color-accent-tertiary); margin: var(--spacing-xl) 0 var(--spacing-md);">💻 Programming Languages</h3>
    `;

    data.languages.forEach(skill => {
        html += generateSkillBar(skill.name, skill.proficiency);
    });

    // DevOps & Tools
    html += `
        <h3 style="color: var(--color-accent-tertiary); margin: var(--spacing-xl) 0 var(--spacing-md);">🔧 DevOps & Tools</h3>
    `;

    data.platform.forEach(skill => {
        html += generateSkillBar(skill.name, skill.proficiency);
    });

    // Certifications
    if (data.certifications.length > 0) {
        html += `
            <h3 style="color: var(--color-accent-tertiary); margin: var(--spacing-xl) 0 var(--spacing-md);">🎓 Certifications</h3>
            <div style="display: grid; gap: var(--spacing-sm);">
        `;

        data.certifications.forEach(cert => {
            html += `
                <div style="padding: var(--spacing-sm); background: var(--color-bg-elevated); border-radius: var(--radius-md); border-left: 3px solid var(--color-accent-tertiary);">
                    <strong>${cert.name}</strong><br>
                    <span style="color: var(--color-text-secondary); font-size: var(--font-size-small);">
                        ${cert.issuer} • ${cert.date}
                    </span>
                </div>
            `;
        });

        html += '</div>';
    }

    return html;
}

/**
 * Helper: Generate skill bar HTML
 */
function generateSkillBar(name, proficiency) {
    return `
        <div class="skill-bar">
            <div class="skill-bar__label">${name}</div>
            <div class="skill-bar__track">
                <div class="skill-bar__fill" style="width: 0%;" data-width="${proficiency}%"></div>
            </div>
            <div class="skill-bar__percentage">${proficiency}%</div>
        </div>
    `;
}

/**
 * Animate skill bars (call after DOM is updated)
 */
function animateSkillBars() {
    setTimeout(() => {
        document.querySelectorAll('.skill-bar__fill').forEach(fill => {
            const targetWidth = fill.getAttribute('data-width');
            fill.style.width = targetWidth;
        });
    }, 100);
}

// ==============================================
// AI TOOLS AGENT
// ==============================================

/**
 * Generate AI Tools Agent response
 */
function generateAIToolsResponse() {
    const data = window.portfolioData.aiTools;

    let html = `
        <h2 id="aiToolsTitle" style="margin-bottom: var(--spacing-lg);">🤖 AI Tools & Experiments</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xl);">
            ${data.summary} • Demonstrating AI-native development workflows
        </p>

        <h3 style="color: var(--color-accent-primary); margin-bottom: var(--spacing-md);">Daily Workflow Tools</h3>
    `;

    data.dailyWorkflow.forEach(tool => {
        html += `
            <div class="content-card" style="border-left: 3px solid var(--color-accent-tertiary);">
                <div class="card__header">
                    <h3>${tool.icon} ${tool.tool}</h3>
                </div>
                <div class="card__body">
                    <p style="color: var(--color-text-muted); margin-bottom: var(--spacing-sm);">
                        ${tool.description} • <strong>${tool.frequency}</strong>
                    </p>
                    <p><strong>Use Cases:</strong></p>
                    <ul>
                        ${tool.useCases.map(useCase => `<li>${useCase}</li>`).join('')}
                    </ul>
                    ${tool.impact ? `<p style="color: var(--color-success); margin-top: var(--spacing-sm);"><strong>Impact:</strong> ${tool.impact}</p>` : ''}
                </div>
            </div>
        `;
    });

    html += `
        <h3 style="color: var(--color-accent-primary); margin: var(--spacing-xl) 0 var(--spacing-md);">Experiments & Projects</h3>
    `;

    data.experiments.forEach(experiment => {
        const statusColor = {
            'Active': 'var(--color-success)',
            'Experimental': 'var(--color-warning)',
            'Ongoing': 'var(--color-accent-primary)',
            'Production': 'var(--color-success)'
        }[experiment.status] || 'var(--color-text-secondary)';

        html += `
            <div class="content-card">
                <div class="card__header">
                    <h3>${experiment.icon} ${experiment.name}</h3>
                </div>
                <div class="card__body">
                    <p style="color: ${statusColor}; margin-bottom: var(--spacing-sm);">
                        <strong>Status:</strong> ${experiment.status}
                    </p>
                    <p>${experiment.description}</p>

                    <p style="margin-top: var(--spacing-md);"><strong>Technologies:</strong></p>
                    <div class="tech-tags">
                        ${experiment.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>

                    <p style="margin-top: var(--spacing-md);"><strong>Key Learnings:</strong></p>
                    <ul>
                        ${experiment.learnings.map(learning => `<li>${learning}</li>`).join('')}
                    </ul>

                    ${experiment.projects && experiment.projects.length > 0 ? `
                        <p style="margin-top: var(--spacing-md);"><strong>Projects:</strong></p>
                        <ul>
                            ${experiment.projects.map(project => `<li>${project}</li>`).join('')}
                        </ul>
                    ` : ''}
                </div>
            </div>
        `;
    });

    return html;
}

// ==============================================
// CONTACT AGENT
// ==============================================

/**
 * Generate Contact Agent response
 */
function generateContactResponse() {
    const data = window.portfolioData.contact;
    const personal = window.portfolioData.personal;

    return `
        <h2 id="contactTitle" style="margin-bottom: var(--spacing-lg);">📧 Let's Connect</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xl);">
            ${data.preferredContact}
        </p>

        <div class="content-card">
            <div class="card__header">
                <h3>Contact Information</h3>
            </div>
            <div class="card__body">
                <div style="display: grid; gap: var(--spacing-md);">
                    <div>
                        <strong style="color: var(--color-accent-tertiary);">Email:</strong><br>
                        <a href="mailto:${data.email}" style="color: var(--color-text-primary); text-decoration: none;">
                            ${data.email}
                        </a>
                    </div>

                    <div>
                        <strong style="color: var(--color-accent-tertiary);">Phone:</strong><br>
                        <a href="tel:${data.phone}" style="color: var(--color-text-primary); text-decoration: none;">
                            ${data.phone}
                        </a>
                    </div>

                    <div>
                        <strong style="color: var(--color-accent-tertiary);">Location:</strong><br>
                        ${data.location}
                    </div>
                </div>
            </div>
        </div>

        <div class="content-card">
            <div class="card__header">
                <h3>Professional Links</h3>
            </div>
            <div class="card__body">
                <div style="display: grid; gap: var(--spacing-sm);">
                    <a href="${data.linkedin}" target="_blank" rel="noopener noreferrer"
                       style="display: flex; align-items: center; gap: var(--spacing-sm); padding: var(--spacing-sm); background: var(--color-bg-elevated); border-radius: var(--radius-md); text-decoration: none; color: var(--color-text-primary); border-left: 3px solid #0077b5;">
                        <span style="font-size: 1.5rem;">💼</span>
                        <div>
                            <strong>LinkedIn</strong><br>
                            <span style="color: var(--color-text-secondary); font-size: var(--font-size-small);">Professional network</span>
                        </div>
                    </a>

                    <a href="${data.github}" target="_blank" rel="noopener noreferrer"
                       style="display: flex; align-items: center; gap: var(--spacing-sm); padding: var(--spacing-sm); background: var(--color-bg-elevated); border-radius: var(--radius-md); text-decoration: none; color: var(--color-text-primary); border-left: 3px solid #333;">
                        <span style="font-size: 1.5rem;">🐙</span>
                        <div>
                            <strong>GitHub</strong><br>
                            <span style="color: var(--color-text-secondary); font-size: var(--font-size-small);">Code repositories</span>
                        </div>
                    </a>

                    <a href="${data.blog}" target="_blank" rel="noopener noreferrer"
                       style="display: flex; align-items: center; gap: var(--spacing-sm); padding: var(--spacing-sm); background: var(--color-bg-elevated); border-radius: var(--radius-md); text-decoration: none; color: var(--color-text-primary); border-left: 3px solid var(--color-accent-tertiary);">
                        <span style="font-size: 1.5rem;">📝</span>
                        <div>
                            <strong>Blog</strong><br>
                            <span style="color: var(--color-text-secondary); font-size: var(--font-size-small);">Technical articles</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div class="content-card" style="border: 2px solid var(--color-success);">
            <div class="card__header">
                <h3>Availability</h3>
            </div>
            <div class="card__body">
                <p style="color: var(--color-success);">
                    ✓ ${data.availability}
                </p>
                <p style="margin-top: var(--spacing-md); color: var(--color-text-secondary);">
                    Interested in Platform Engineering, Cloud Architecture, Kubernetes, Go, and AI/ML Engineering roles.
                </p>
            </div>
        </div>
    `;
}

// ==============================================
// RESPONSE ROUTER
// ==============================================

/**
 * Get response content for an agent
 */
function getAgentResponse(agentType, subType = null) {
    const responses = {
        'router': generateRouterResponse,
        'experience': generateExperienceResponse,
        'projects': generateProjectsResponse,
        'skills': generateSkillsResponse,
        'ai-tools': generateAIToolsResponse,
        'contact': generateContactResponse,

        // Sub-responses
        'anz-details': generateANZDetails,
        'idp-details': generateIDPDetails
    };

    const generator = responses[subType || agentType];

    if (!generator) {
        return `<p>Response generator not found for: ${agentType}</p>`;
    }

    return generator();
}

/**
 * Generate Router Agent response
 */
function generateRouterResponse() {
    return `
        <h2 style="margin-bottom: var(--spacing-lg);">🎯 Agent Router</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xl);">
            What would you like to explore about ${window.portfolioData.personal.name}?
        </p>

        <div style="display: grid; gap: var(--spacing-md);">
            <button class="content-card" style="cursor: pointer; border: 2px solid var(--color-accent-secondary); text-align: left;">
                <div class="card__header">
                    <h3>💼 Experience</h3>
                </div>
                <div class="card__body">
                    <p>${window.portfolioData.experience.summary}</p>
                </div>
            </button>

            <button class="content-card" style="cursor: pointer; border: 2px solid var(--color-accent-primary); text-align: left;">
                <div class="card__header">
                    <h3>🚀 Projects</h3>
                </div>
                <div class="card__body">
                    <p>${window.portfolioData.projects.summary}</p>
                </div>
            </button>

            <button class="content-card" style="cursor: pointer; border: 2px solid var(--color-success); text-align: left;">
                <div class="card__header">
                    <h3>⚡ Skills</h3>
                </div>
                <div class="card__body">
                    <p>${window.portfolioData.skills.summary}</p>
                </div>
            </button>
        </div>
    `;
}

// ==============================================
// METADATA GENERATION
// ==============================================

/**
 * Generate simulated RAG metadata for response
 */
function generateResponseMetadata(agentType, content) {
    const tokenCount = Math.floor(content.length / 4);

    return {
        agent: agentType,
        source: 'resume_data.yaml',
        query: agentType,
        tokens: tokenCount,
        retrievedAt: new Date().toISOString()
    };
}

// ==============================================
// PUBLIC API
// ==============================================

window.agentResponses = {
    get: getAgentResponse,
    generateMetadata: generateResponseMetadata,
    animateSkillBars,

    // Individual generators
    experience: generateExperienceResponse,
    projects: generateProjectsResponse,
    skills: generateSkillsResponse,
    aiTools: generateAIToolsResponse,
    contact: generateContactResponse,
    anzDetails: generateANZDetails,
    idpDetails: generateIDPDetails,
    router: generateRouterResponse
};

console.log('Agent responses module loaded');
