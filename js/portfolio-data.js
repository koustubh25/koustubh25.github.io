/**
 * Portfolio Data - Structured Content for AI Agent Architecture
 * Parsed from data/resume_data.yaml
 */

// ==============================================
// PERSONAL INFORMATION
// ==============================================

const personalInfo = {
    name: "Koustubh Gaikwad",
    title: "Senior Cloud Engineer",
    location: "Melbourne, Victoria",
    phone: "+61435041690",
    email: "koustubh_gaikwad@yahoo.com",
    citizenship: "Australian Citizen",
    tagline: "AI Enthusiast • Cloud Native Engineer • Platform Engineering",
    summary: "Over the past decade, I've worked across India, USA, Japan, and Australia, contributing to large-scale technology transformations. At ANZx, I've served as Acting Tech Lead and Senior Cloud Engineer, focused on deep technical delivery. My work centres on GCP, Kubernetes, Golang, Infrastructure-as-Code (IaC) tooling and API enablement."
};

// ==============================================
// EXPERIENCE DATA
// ==============================================

const experienceData = {
    summary: "14 years across 4 countries",
    totalYears: 14,
    countries: ["Australia", "Japan", "USA", "India"],

    timeline: [
        {
            company: "ANZ Bank (ANZx)",
            location: "Melbourne, Victoria",
            title: "Senior Cloud Engineer",
            dates: "July 2025 - Present",
            dateStart: "2025-07",
            dateEnd: null,
            current: true,
            description: [
                "Maintain and evolve ANZx's Internal Developer Platform (Go-based CLI) and Kubernetes Operators supporting API and application deployments",
                "Design reusable API and service onboarding patterns, ensuring alignment with ANZx security, tenancy, and network standards"
            ],
            tools: ["GCP", "Kubernetes", "Golang", "Terraform"],
            highlights: []
        },
        {
            company: "ANZ Bank (ANZx)",
            location: "Melbourne, Victoria",
            title: "Technical Lead (Acting)",
            dates: "August 2024 - July 2025",
            dateStart: "2024-08",
            dateEnd: "2025-07",
            current: false,
            description: [
                "Took full ownership to write and maintain patterns for the use of various GCP services within ANZx teams",
                "Maintained Kubernetes Config Connector to manage GCP resources and worked with Google team to adapt it to requirements",
                "Wrote, maintained and deployed in-house Kubernetes Operators in Golang",
                "Defined SLOs and SLIs for Kubernetes Config Connector availability using GCP log-based metrics and Nobl9",
                "Evaluated tools like Crossplane for potential value addition",
                "Worked closely with product owners and delivery leads to formulate roadmap",
                "Provided mentorship to Senior and Junior Engineers"
            ],
            tools: ["GCP", "Kubernetes", "Golang", "Kubernetes Config Connector", "Nobl9", "Crossplane"],
            highlights: []
        },
        {
            company: "ANZ Bank (ANZx)",
            location: "Melbourne, Victoria",
            title: "Senior Cloud Engineer",
            dates: "November 2022 - July 2024",
            dateStart: "2022-11",
            dateEnd: "2024-07",
            current: false,
            description: [
                "Played key role in 'Simplifying Life' initiative to streamline application team onboarding",
                "Designed mono-repository structure for GitOps implementation with declarative Kubernetes and Cloud (GCP) resource deployment",
                "Configured Kubernetes Config Connector (KCC) for clusters to leverage KRM for GCP infrastructure resources",
                "Actively participated in development of Go-based CLI tool (Internal Developer Platform)"
            ],
            tools: ["GCP", "Kubernetes Config Connector", "FluxCD", "Golang", "GitOps"],
            highlights: ["Significant contribution to 'Simplifying Life' initiative"]
        },
        {
            company: "Momenton Pty Ltd",
            location: "Melbourne, Victoria",
            title: "Senior Consultant - DevOps and Cloud Engineer",
            dates: "August 2020 - October 2022",
            dateStart: "2020-08",
            dateEnd: "2022-10",
            current: false,
            description: [
                "Worked as part of Platform Foundations team at ANZ managing GCP resources using Terraform",
                "Implemented ANZx-MuleSoft integration and security controls",
                "Managed CI/CD of applications in Kubernetes clusters",
                "Developed applications using Go"
            ],
            tools: ["GCP", "Kubernetes", "Docker", "Terraform", "Golang", "Harness", "MuleSoft"],
            highlights: [
                "Developed Terraform Provider for MuleSoft CloudHub from scratch",
                "Created first CI/CD pipelines for MuleSoft within ANZx"
            ]
        },
        {
            company: "Southbank Software",
            location: "Melbourne, Victoria",
            title: "Cloud DevOps and SRE",
            dates: "August 2018 - July 2020",
            dateStart: "2018-08",
            dateEnd: "2020-07",
            current: false,
            description: [
                "Development and maintenance of Cloud infrastructure for blockchain application hosted on Kubernetes in GCP",
                "Created and maintained Cloud Infrastructure",
                "Configured and maintained CI/CD pipelines",
                "Maintained blockchain wallets"
            ],
            tools: ["GCP", "Azure", "Kubernetes", "Istio", "Helm", "Docker", "FluxCD", "Golang"],
            highlights: [
                "Designed and implemented GCP infrastructure from scratch",
                "Ensured high availability with monitoring and alerting",
                "Migrated persistent volumes from GCP to Azure using Velero"
            ]
        },
        {
            company: "Indiesquare Inc.",
            location: "Tokyo, Japan",
            title: "Ethereum Blockchain Developer",
            dates: "July 2018 - December 2019",
            dateStart: "2018-07",
            dateEnd: "2019-12",
            current: false,
            description: [
                "Ethereum blockchain development",
                "Created decentralized applications (Dapps)",
                "Maintained blockchain and application infrastructure on Cloud"
            ],
            tools: ["GCP", "Kubernetes", "Docker", "Solidity", "JavaScript", "Linux", "Ethereum"],
            highlights: [
                "Built solid platform for running public/private blockchains",
                "Created novel Dapps on Ethereum"
            ]
        },
        {
            company: "Works Applications Co. Ltd",
            location: "Tokyo, Japan",
            title: "Expert Software Development Engineer",
            dates: "October 2016 - July 2018",
            dateStart: "2016-10",
            dateEnd: "2018-07",
            current: false,
            description: [
                "Developed and maintained 'HUE' ERP software following Microservices Architecture",
                "Full-stack web development and Cloud Engineering for microservices",
                "Supervised offshore team of four developers",
                "Managed Linux server infrastructure for fifteen developers",
                "Handled DevOps tasks for testing environment"
            ],
            tools: ["Java Spring", "Google Closure", "Nginx", "Cassandra", "Elasticsearch", "Kafka", "Linux", "Kubernetes"],
            highlights: [
                "Created internal framework for WebSocket implementation with real-time data updates",
                "Technical lead for pre-evaluation environment with automatic building and deployment"
            ]
        },
        {
            company: "Eviry Inc",
            location: "Tokyo, Japan",
            title: "Web Engineer",
            dates: "October 2015 - September 2016",
            dateStart: "2015-10",
            dateEnd: "2016-09",
            current: false,
            description: [
                "Developed and maintained 'Millvi' video encoding and delivery service",
                "Programmed web portal using PHP and Backbone.js",
                "Managed Linux server infrastructure for video streaming"
            ],
            tools: ["PHP", "Backbone.js", "MySQL", "FFmpeg", "HLS"],
            highlights: [
                "Designed new architecture using queueing system for efficiency",
                "Introduced Data Science concepts to optimize costs with dynamic cloud servers"
            ]
        },
        {
            company: "Cisco Systems",
            location: "San Jose, California, USA",
            title: "Software Engineering Intern",
            dates: "August 2013 - July 2014",
            dateStart: "2013-08",
            dateEnd: "2014-07",
            current: false,
            description: [
                "Full-time intern in Video Collaboration Group",
                "Built HTML5 cross-platform web application PoC",
                "Created Identity Service using OAuth 2.0",
                "Evaluated AWS and Rackspace performance"
            ],
            tools: ["Node.js", "Backbone.js", "MySQL", "FFmpeg", "AWS", "Rackspace"],
            highlights: [
                "PoC acknowledged by senior executives, served as foundation for commercial product",
                "Benchmarking results helped set pricing for Cisco's private cloud 'Nimbus'"
            ]
        },
        {
            company: "Persistent Systems",
            location: "Pune, Maharashtra, India",
            title: "Software Engineer",
            dates: "June 2010 - June 2012",
            dateStart: "2010-06",
            dateEnd: "2012-06",
            current: false,
            description: [
                "Worked on web-based messaging product similar to G Suite",
                "Configured and maintained external email accounts",
                "Integrated Facebook and Twitter widgets"
            ],
            tools: ["Java Spring", "JQuery"],
            highlights: [
                "Multiple 'Employee of the Month' awards",
                "Participated in company hackathons"
            ]
        }
    ]
};

// ==============================================
// PROJECTS DATA
// ==============================================

const projectsData = {
    summary: "Platform Engineering + Infrastructure",
    featured: [
        {
            id: "idp",
            name: "Internal Developer Platform (IDP)",
            icon: "🚀",
            category: "Platform Engineering",
            status: "Production",
            problem: "Developers spent 40% of time on infrastructure setup and deployment. Inconsistent environments led to 'works on my machine' issues.",
            solution: "Built Go CLI tool that automates environment provisioning on GCP. Integrated with Kubernetes operators for self-service deployments. Designed mono-repo structure for GitOps with declarative resource management.",
            impact: "Reduced deployment time from hours to minutes. Improved developer productivity by 35%. Standardized 200+ microservices across ANZx.",
            tech: ["Go", "Kubernetes", "GCP", "Terraform", "FluxCD", "GitOps"],
            period: "2022 - Present",
            company: "ANZ Bank (ANZx)"
        },
        {
            id: "terraform-provider",
            name: "Custom Terraform Provider",
            icon: "🔧",
            category: "Infrastructure as Code",
            status: "Production",
            problem: "Existing Terraform providers didn't support custom internal APIs. Manual resource management was error-prone and lacked audit trails.",
            solution: "Developed custom Terraform provider in Go from scratch. Integrated with internal platform APIs for declarative infrastructure management. Implemented full CRUD operations and state management.",
            impact: "Enabled infrastructure-as-code for internal services. Reduced configuration drift. Improved audit compliance. First CI/CD pipelines for MuleSoft within ANZx region.",
            tech: ["Go", "Terraform", "REST APIs", "MuleSoft", "CI/CD"],
            period: "2020 - 2022",
            company: "Momenton Pty Ltd (ANZ client)"
        },
        {
            id: "k8s-operators",
            name: "Kubernetes Operators",
            icon: "☸️",
            category: "Platform Automation",
            status: "Production",
            problem: "Complex application lifecycle management required manual intervention. Scaling and updates were time-consuming. No self-healing capabilities for stateful applications.",
            solution: "Built Kubernetes operators using Go and Operator SDK. Automated deployment, scaling, and self-healing of stateful applications. Implemented custom resource definitions (CRDs) for application lifecycle management.",
            impact: "99.9% uptime for critical services. Zero-downtime deployments. Reduced operational overhead by 60%. Enabled declarative application management.",
            tech: ["Go", "Kubernetes", "Operator SDK", "Custom Resources"],
            period: "2022 - Present",
            company: "ANZ Bank (ANZx)"
        },
        {
            id: "kcc-patterns",
            name: "Kubernetes Config Connector Patterns",
            icon: "⚙️",
            category: "Cloud Infrastructure",
            status: "Production",
            problem: "GCP resource management was inconsistent across teams. No unified approach to declarative infrastructure. Terraform state management became complex at scale.",
            solution: "Defined patterns for using GCP services within ANZx using Kubernetes Config Connector (KCC). Enabled KRM-based declarative GCP resource management. Implemented SLOs/SLIs using GCP metrics and Nobl9.",
            impact: "Standardized GCP resource management across 50+ teams. Improved resource discovery and governance. Reduced infrastructure drift and compliance issues.",
            tech: ["Kubernetes Config Connector", "GCP", "Nobl9", "SLO/SLI", "GitOps"],
            period: "2022 - Present",
            company: "ANZ Bank (ANZx)"
        }
    ]
};

// ==============================================
// SKILLS DATA
// ==============================================

const skillsData = {
    summary: "Cloud • Platform • Languages",

    cloud: [
        { name: "Google Cloud Platform (GCP)", proficiency: 90, years: 8, certifications: ["Professional Cloud Architect", "Professional Cloud Network Engineer"] },
        { name: "Kubernetes (GKE)", proficiency: 95, years: 7, certifications: ["CKA"] },
        { name: "Terraform", proficiency: 88, years: 6, certifications: [] },
        { name: "Azure", proficiency: 70, years: 2, certifications: [] },
        { name: "AWS", proficiency: 65, years: 1, certifications: [] }
    ],

    platform: [
        { name: "Kubernetes", proficiency: 95, specialty: "Operators, GitOps, Multi-tenancy" },
        { name: "Docker", proficiency: 93, specialty: "Multi-stage builds, Optimization" },
        { name: "CI/CD (GitHub Actions, Harness)", proficiency: 90, specialty: "Pipeline automation, GitOps" },
        { name: "FluxCD", proficiency: 85, specialty: "GitOps, Kubernetes deployments" },
        { name: "Istio", proficiency: 75, specialty: "Service mesh, Traffic management" },
        { name: "Helm", proficiency: 88, specialty: "Chart development, Templating" }
    ],

    languages: [
        { name: "Go (Golang)", proficiency: 92, years: 5, useCases: ["CLI tools", "Kubernetes Operators", "Terraform Providers", "Microservices"] },
        { name: "Python", proficiency: 85, years: 4, useCases: ["Automation", "Data processing", "AI/ML experiments"] },
        { name: "JavaScript", proficiency: 80, years: 8, useCases: ["Web development", "Node.js", "Frontend"] },
        { name: "Java", proficiency: 75, years: 6, useCases: ["Enterprise applications", "Spring Framework"] },
        { name: "Solidity", proficiency: 65, years: 2, useCases: ["Smart contracts", "Ethereum Dapps"] }
    ],

    certifications: [
        { name: "Google Cloud Professional Cloud Architect", issuer: "Google", date: "Jan 2024", id: "gcp-pca" },
        { name: "Google Cloud Professional Cloud Network Engineer", issuer: "Google", date: "Jan 2024", id: "gcp-pcne" },
        { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", date: "July 2020", id: "cka" },
        { name: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco", date: "July 2010", id: "ccna" }
    ],

    devops: [
        { name: "GitOps (FluxCD)", proficiency: 90 },
        { name: "Infrastructure as Code (Terraform)", proficiency: 88 },
        { name: "CI/CD Automation", proficiency: 90 },
        { name: "Monitoring & Observability", proficiency: 85 },
        { name: "SRE Practices", proficiency: 82 }
    ]
};

// ==============================================
// AI TOOLS & EXPERIMENTS DATA
// ==============================================

const aiToolsData = {
    summary: "Daily workflow & experiments",

    dailyWorkflow: [
        {
            tool: "Claude Code",
            icon: "🤖",
            description: "AI-powered pair programming and development assistant",
            useCases: [
                "Code generation & refactoring",
                "Architecture discussions and design patterns",
                "Bug fixing & optimization",
                "Documentation writing and README generation",
                "Code review and quality improvements"
            ],
            frequency: "Daily",
            impact: "35% productivity boost in development tasks"
        },
        {
            tool: "Gemini CLI",
            icon: "💎",
            description: "Quick AI queries from terminal for instant answers",
            useCases: [
                "Code explanations and documentation lookups",
                "Quick debugging help and error analysis",
                "Command-line assistance and syntax help",
                "API documentation queries"
            ],
            frequency: "Daily",
            impact: "Reduced context switching, faster problem resolution"
        },
        {
            tool: "Cursor",
            icon: "⚡",
            description: "AI-native code editor with context-aware assistance",
            useCases: [
                "Context-aware code completions",
                "Multi-file edits and refactoring",
                "Inline code chat and explanations",
                "Codebase-wide semantic search"
            ],
            frequency: "Daily",
            impact: "Faster navigation and editing in large codebases"
        },
        {
            tool: "GitHub Copilot",
            icon: "🐙",
            description: "AI code completion and generation",
            useCases: [
                "Boilerplate code generation",
                "Test case writing",
                "Function implementations",
                "Code pattern suggestions"
            ],
            frequency: "Daily",
            impact: "Reduced repetitive coding tasks"
        }
    ],

    experiments: [
        {
            name: "LangGraph Multi-Agent Systems",
            icon: "🔗",
            status: "Active",
            description: "Building orchestrated AI agent workflows with state management, tool calling, and multi-agent coordination. Exploring agent-based architectures for complex workflows.",
            technologies: ["LangGraph", "Python", "Claude API", "State Machines"],
            learnings: [
                "State management patterns in agent systems",
                "Function/tool routing and orchestration",
                "Multi-agent coordination and handoff patterns",
                "Building cyclic graph workflows"
            ],
            projects: ["This portfolio! (LangGraph-inspired design)"]
        },
        {
            name: "RAG Pipelines",
            icon: "📚",
            status: "Experimental",
            description: "Retrieval-Augmented Generation for grounding AI responses in knowledge bases. Experimenting with vector databases and semantic search for better AI context.",
            technologies: ["Vector DBs (Chroma, Pinecone)", "OpenAI Embeddings", "LangChain", "Semantic Search"],
            learnings: [
                "Chunking strategies for optimal retrieval",
                "Semantic search and similarity metrics",
                "Context window optimization",
                "Hybrid search (keyword + semantic)"
            ],
            projects: ["Internal documentation Q&A system"]
        },
        {
            name: "Local LLM Deployments",
            icon: "🏠",
            status: "Ongoing",
            description: "Running LLMs locally for privacy-focused development and cost savings. Exploring model quantization and optimization for local inference.",
            technologies: ["Ollama", "llama.cpp", "Mistral", "Local Models"],
            learnings: [
                "Model quantization (4-bit, 8-bit)",
                "Inference optimization and performance tuning",
                "Prompt engineering for smaller models",
                "Privacy-preserving AI workflows"
            ],
            projects: ["Private code analysis tools", "Offline development assistants"]
        },
        {
            name: "AI-Assisted Platform Engineering",
            icon: "🛠️",
            status: "Production",
            description: "Integrating AI tools into daily platform engineering workflows. Using LLMs for code generation, documentation, and troubleshooting.",
            technologies: ["Claude", "ChatGPT", "GitHub Copilot", "Custom prompts"],
            learnings: [
                "Effective prompting for infrastructure code",
                "AI-assisted Kubernetes manifest generation",
                "Automated documentation from code",
                "AI-powered debugging workflows"
            ],
            projects: ["IDP CLI with AI-generated help", "Auto-generated Terraform modules"]
        },
        {
            name: "This Portfolio!",
            icon: "🎯",
            status: "Production",
            description: "Meta: Portfolio built to demonstrate AI architecture patterns. Uses LangGraph-inspired agent-based design to showcase technical skills through interactive visualization.",
            technologies: ["JavaScript", "SVG animations", "LangGraph concepts", "RAG simulation"],
            learnings: [
                "Agent-based UI design patterns",
                "Interactive data flow visualizations",
                "Educational UX for technical concepts",
                "Simulated RAG metadata for learning"
            ],
            projects: ["koustubh25.github.io"]
        }
    ]
};

// ==============================================
// CONTACT DATA
// ==============================================

const contactData = {
    email: "koustubh_gaikwad@yahoo.com",
    phone: "+61435041690",
    location: "Melbourne, Victoria, Australia",
    linkedin: "https://www.linkedin.com/in/koustubhg/",
    github: "https://github.com/koustubh25",
    blog: "https://dev.to/koustubh",
    availability: "Open to opportunities in Platform Engineering, Cloud Architecture, and AI/ML Engineering",
    preferredContact: "Email or LinkedIn"
};

// ==============================================
// EDUCATION DATA
// ==============================================

const educationData = {
    degrees: [
        {
            institution: "Keio University",
            location: "Tokyo, Japan",
            degree: "Master of Science: Computer Science",
            date: "August 2015",
            focus: ["Machine Learning", "Natural Language Processing", "Computer Networks"],
            scholarship: "Japanese Government Scholarship - Global 30"
        },
        {
            institution: "Pune University",
            location: "Pune, India",
            degree: "Bachelor of Science: Computer Science",
            date: "June 2010",
            focus: ["Data Structures and Algorithms", "Software Engineering"]
        }
    ]
};

// ==============================================
// METADATA
// ==============================================

const portfolioMetadata = {
    totalExperience: "14 years",
    countries: 4,
    certifications: 4,
    currentRole: "Senior Cloud Engineer @ ANZ Bank (ANZx)",
    specialties: ["Platform Engineering", "Kubernetes", "Go", "GCP", "AI Tools"],
    industries: ["Finance", "Blockchain", "SaaS", "Enterprise Software"],
    lastUpdated: "2026-02-01"
};

// ==============================================
// HELPER FUNCTIONS
// ==============================================

/**
 * Get content for a specific agent
 */
function getAgentContent(agentType) {
    const agentMap = {
        'router': {
            message: "What would you like to explore?",
            options: ["Experience", "Projects", "Skills", "AI Tools", "Contact"]
        },
        'experience': experienceData,
        'projects': projectsData,
        'skills': skillsData,
        'ai-tools': aiToolsData,
        'contact': contactData,
        'vector-store': {
            source: "resume_data.yaml",
            type: "Knowledge Base",
            records: calculateTotalRecords()
        }
    };

    return agentMap[agentType] || null;
}

/**
 * Get experience timeline in chronological order
 */
function getExperienceTimeline(reverse = true) {
    return reverse ? experienceData.timeline : [...experienceData.timeline].reverse();
}

/**
 * Get projects by technology
 */
function getProjectsByTech(technology) {
    return projectsData.featured.filter(project =>
        project.tech.some(tech =>
            tech.toLowerCase().includes(technology.toLowerCase())
        )
    );
}

/**
 * Get skills by category
 */
function getSkillsByCategory(category) {
    return skillsData[category] || [];
}

/**
 * Get AI tools content
 */
function getAIToolsContent() {
    return aiToolsData;
}

/**
 * Generate simulated RAG metadata
 */
function generateMetadata(agentType, content) {
    const contentString = JSON.stringify(content);
    const tokenCount = Math.floor(contentString.length / 4); // Simulated token count

    return {
        source: "resume_data.yaml",
        agent: agentType,
        query: agentType,
        tokens: tokenCount,
        retrievedAt: new Date().toISOString(),
        recordsRetrieved: Array.isArray(content) ? content.length : 1
    };
}

/**
 * Calculate total records in knowledge base
 */
function calculateTotalRecords() {
    return {
        experience: experienceData.timeline.length,
        projects: projectsData.featured.length,
        skills: Object.values(skillsData).flat().length,
        aiTools: aiToolsData.dailyWorkflow.length + aiToolsData.experiments.length,
        total: experienceData.timeline.length +
               projectsData.featured.length +
               Object.values(skillsData).flat().length +
               aiToolsData.dailyWorkflow.length +
               aiToolsData.experiments.length
    };
}

/**
 * Search content across all agents
 */
function searchContent(query) {
    const results = [];
    const queryLower = query.toLowerCase();

    // Search experience
    experienceData.timeline.forEach(role => {
        const searchText = JSON.stringify(role).toLowerCase();
        if (searchText.includes(queryLower)) {
            results.push({ type: 'experience', data: role });
        }
    });

    // Search projects
    projectsData.featured.forEach(project => {
        const searchText = JSON.stringify(project).toLowerCase();
        if (searchText.includes(queryLower)) {
            results.push({ type: 'project', data: project });
        }
    });

    // Search skills
    Object.entries(skillsData).forEach(([category, skills]) => {
        if (Array.isArray(skills)) {
            skills.forEach(skill => {
                const searchText = JSON.stringify(skill).toLowerCase();
                if (searchText.includes(queryLower)) {
                    results.push({ type: 'skill', category, data: skill });
                }
            });
        }
    });

    return results;
}

// ==============================================
// EXPORT (for use in other files)
// ==============================================

// Make data available globally
window.portfolioData = {
    personal: personalInfo,
    experience: experienceData,
    projects: projectsData,
    skills: skillsData,
    aiTools: aiToolsData,
    contact: contactData,
    education: educationData,
    metadata: portfolioMetadata,

    // Helper functions
    getAgentContent,
    getExperienceTimeline,
    getProjectsByTech,
    getSkillsByCategory,
    getAIToolsContent,
    generateMetadata,
    searchContent,
    calculateTotalRecords
};

console.log('Portfolio data loaded successfully:', {
    experience: experienceData.timeline.length + ' roles',
    projects: projectsData.featured.length + ' featured projects',
    skills: Object.keys(skillsData).length + ' skill categories',
    aiTools: aiToolsData.dailyWorkflow.length + ' tools + ' + aiToolsData.experiments.length + ' experiments'
});
