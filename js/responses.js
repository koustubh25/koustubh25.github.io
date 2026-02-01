/**
 * Pre-written Responses - Conversation Tree
 * All of Hachi's responses with keyword matching
 */

const hachiResponses = {
    // Initial greeting (shown on page load)
    initial: {
        message: `Woof! I'm Hachi, Koustubh's Golden Retriever. 🦴

My human trained me to tell you about his work - he's been exploring AI tools lately, so I'm pretty smart for a dog!

Quick summary:
• ${resumeData.quickSummary[0]}
• ${resumeData.quickSummary[1]}
• ${resumeData.quickSummary[2]}
• ${resumeData.quickSummary[3]}

What would you like to sniff out?`,
        suggestions: ["[1] Experience", "[2] Projects", "[3] Skills", "[4] AI & Expts", "[5] Education", "[6] Contact"]
    },

    // Experience - Level 1
    experience: {
        message: `*fetches the career history* 🦴

🏦 **ANZ Bank (2022 - Present)** · Melbourne
   Tech Lead (Acting) → Senior Cloud Engineer
   Building IDP, Kubernetes Operators, GCP platform

💼 **Momenton (2020 - 2022)** · Consulting at ANZ
   Terraform, custom providers, CI/CD pipelines

⛓️ **Southbank Software (2018 - 2020)** · Blockchain startup
   Built GCP infrastructure from scratch, GitOps, Helm

🇯🇵 **Japan (2015 - 2018)** · Works Applications, Eviry
   Full-stack, microservices, DevOps

🇺🇸 **Cisco (2013 - 2014)** · Silicon Valley intern
   Cloud benchmarking, OAuth services

🇮🇳 **Persistent Systems (2010 - 2012)** · Pune, India
   Web messaging product development

Want me to dig deeper into any role?`,
        suggestions: ["[1] ANZ Details", "[2] Japan Roles", "[3] Skills", "[4] Contact", "[0] ← Back"]
    },

    // ANZ Details - Level 2
    anzDetails: {
        message: `*tail wags* This is where my human spends most of his time!

At **ANZ (ANZx digital bank)**, he's been part of the Cloud Foundations team since 2022.

**As Acting Tech Lead (2024-2025):**
• Led team building Kubernetes Operators in Go
• Architected GitOps patterns with FluxCD
• Defined SLOs/SLIs for platform reliability using GCP metrics and Nobl9
• Mentored senior and junior engineers
• Worked closely with product owners on roadmap planning

**Key project: Internal Developer Platform**
A Go-based CLI that lets teams self-serve infrastructure and deployments without manual tickets.

**Tech stack:**
GCP, Kubernetes, Go, Terraform, Helm, Kustomize, Kubernetes Config Connector, FluxCD

*brings back the bone* Want to hear about specific projects or skills?`,
        suggestions: ["[1] Projects", "[2] Skills", "[3] Experience", "[4] Contact", "[0] ← Back"]
    },

    // Japan Roles - Level 2
    japanRoles: {
        message: `*ears perk up* Ah, my human's Japan chapter! He lived in Tokyo for several years.

🏢 **Works Applications (2016-2018)** - Expert Software Engineer
• Full-stack development on 'HUE' ERP (Microservices Architecture)
• Tech lead for pre-evaluation environment
• Managed offshore team of 4 developers
• Built internal WebSocket framework for real-time updates
• Tech: Java Spring, Cassandra, Elasticsearch, Kafka, Kubernetes

🎥 **Eviry (2015-2016)** - Web Engineer
• Video encoding and delivery service 'Millvi'
• Redesigned streaming architecture with queueing system
• Implemented HTTP Live Streaming (HLS)
• Tech: PHP, Backbone.js, FFmpeg

🎓 He also got his **Master's degree from Keio University** in Tokyo, studying Machine Learning and NLP!

The Japan connection is why I'm named "Hachi" - after Hachiko, the famous loyal dog. 🐕`,
        suggestions: ["[1] Education", "[2] Skills", "[3] Experience", "[4] Contact", "[0] ← Back"]
    },

    // Projects - Level 1
    projects: {
        message: `*tail wags excitedly* Let me show you my human's favorite projects!

**1. Internal Developer Platform (IDP)**
   Problem: Teams waited for manual infrastructure provisioning
   Solution: Go-based CLI for self-service infrastructure
   Impact: Dramatically reduced time-to-market
   Tech: Go, Kubernetes, GCP, Terraform, GitOps

**2. Terraform Custom Provider (MuleSoft)**
   Problem: No IaC solution for MuleSoft CloudHub
   Solution: Built complete Terraform provider from scratch
   Impact: Enabled automated integration infrastructure
   Tech: Terraform, Golang, MuleSoft CloudHub API

**3. Kubernetes Operators (Go)**
   Problem: Needed declarative GCP resource management
   Solution: Custom K8s Operators for ANZx workflows
   Impact: Teams manage cloud via familiar K8s patterns
   Tech: Golang, Kubernetes, GCP, Config Connector

Want details on any project?`,
        suggestions: ["[1] IDP Details", "[2] Terraform Provider", "[3] K8s Operators", "[4] Skills", "[0] ← Back"]
    },

    // IDP Details - Level 2
    idpDetails: {
        message: `*brings back detailed specs* Here's the scoop on the Internal Developer Platform!

**The Problem:**
Before the IDP, teams needed to raise tickets and wait days for infrastructure provisioning. Lots of manual work, inconsistent patterns, and frustrated developers.

**The Solution:**
A comprehensive Go-based CLI tool that automates:
• Infrastructure provisioning on GCP
• API onboarding with security patterns
• Kubernetes deployments
• GitOps workflows with FluxCD
• Resource lifecycle management

**How it works:**
\`\`\`
$ anzx-cli create-api my-service
✓ Created GCP project
✓ Configured networking
✓ Set up Kubernetes namespace
✓ Applied security policies
✓ Initialized GitOps repo
🎉 Ready to deploy!
\`\`\`

**Tech Stack:**
Go (CLI), Kubernetes, GCP, Terraform, Helm, Kustomize, FluxCD

**Impact:**
Teams went from days of waiting to minutes of self-service. Developer happiness went way up! 📈`,
        suggestions: ["[1] Projects", "[2] Skills", "[3] Experience", "[4] Contact", "[0] ← Back"]
    },

    // Terraform Provider Details - Level 2
    terraformProvider: {
        message: `*proud tail wag* This was a challenging project my human built from the ground up!

**The Challenge:**
MuleSoft CloudHub (SaaS integration platform) had no Terraform support. Teams were managing integration resources manually, leading to configuration drift and errors.

**The Solution:**
Built a complete Terraform provider for MuleSoft CloudHub:
• Resource lifecycle management (Create, Read, Update, Delete)
• Integration with MuleSoft CloudHub API
• State management and drift detection
• CI/CD pipeline integration

**Code Example:**
\`\`\`hcl
resource "mulesoft_application" "my_api" {
  name        = "my-integration-api"
  environment = "production"
  workers     = 2
  region      = "ap-southeast-2"
}
\`\`\`

**Impact:**
First team at ANZx to manage MuleSoft infrastructure as code. Became the standard for all integration deployments.

**Tech:** Terraform Plugin SDK, Golang, MuleSoft CloudHub API, Harness CI/CD`,
        suggestions: ["[1] Projects", "[2] Skills", "[3] Experience", "[4] Contact", "[0] ← Back"]
    },

    // K8s Operators Details - Level 2
    k8sOperators: {
        message: `*ears perk up* Kubernetes Operators! My human writes these in Go.

**What are Kubernetes Operators?**
They extend Kubernetes to manage complex applications and infrastructure using custom resources.

**What my human built:**
Custom operators for ANZx-specific workflows:
• Managing GCP resources via Kubernetes Config Connector
• Automating application onboarding
• Enforcing security and compliance policies
• Handling complex deployment patterns

**Example Custom Resource:**
\`\`\`yaml
apiVersion: anzx.io/v1
kind: APIService
metadata:
  name: my-service
spec:
  gcpProject: my-project
  networking: private
  securityLevel: high
\`\`\`

The operator watches for these resources and automatically provisions everything needed!

**Tech Stack:**
• Golang (controller logic)
• Kubernetes Controller Runtime
• Kubernetes Config Connector
• GCP APIs

**Why it matters:**
Developers use familiar Kubernetes patterns to manage complex cloud infrastructure. No need to learn GCP-specific tools!`,
        suggestions: ["[1] Projects", "[2] Kubernetes Skills", "[3] Go Skills", "[4] Contact", "[0] ← Back"]
    },

    // Skills - Level 1
    skills: {
        message: `*tilts head thoughtfully* Here's what my human is really good at:

**☁️ Cloud Platforms**
• **GCP** (deep expertise) - Projects, Networking, IAM, GKE, Config Connector
• AWS (some experience) - EC2, S3, Lambda
• Azure (familiar) - Used in previous blockchain role

**🎯 Platform Engineering**
• Kubernetes / GKE - CKA certified, writes Operators
• Terraform - Custom providers, modules, state management
• Helm & Kustomize - Application templating
• FluxCD - GitOps deployments
• Kubernetes Config Connector - Infrastructure as Kubernetes

**💻 Programming Languages**
• **Golang** (primary) - CLI tools, operators, microservices
• Python - Automation, scripting
• JavaScript - Full-stack web development
• Java - Enterprise applications (previous roles)

**🚀 DevOps & Practices**
• CI/CD - Harness, GitHub Actions, ArgoCD
• GitOps - FluxCD, infrastructure as code
• Observability - Prometheus, Grafana, GCP Monitoring
• SRE - SLOs, SLIs, incident response

**📜 Certifications**
• Certified Kubernetes Administrator (CKA) - 2020
• GCP Professional Cloud Architect - 2024
• GCP Professional Cloud Network Engineer - 2024

Which area would you like to explore?`,
        suggestions: ["[1] Kubernetes", "[2] Golang", "[3] Terraform", "[4] GCP", "[5] Projects", "[0] ← Back"]
    },

    // Kubernetes Skills - Level 2
    kubernetesSkills: {
        message: `*ears perk up* Oh, Kubernetes! My human loves that stuff!

**Certification:**
• Certified Kubernetes Administrator (CKA) since 2020

**Experience:**
• Writes Kubernetes Operators in Go (current role)
• Manages GKE clusters at enterprise scale
• GitOps with FluxCD for declarative deployments
• Templating with Helm & Kustomize
• Kubernetes Config Connector for GCP resource management
• Disaster recovery with Velero

**Specific Skills:**
• Controller development (custom operators)
• CRD (Custom Resource Definition) design
• RBAC and security policies
• Multi-tenancy patterns
• Cluster lifecycle management
• Monitoring and observability

**Real-world usage:**
He's been working with Kubernetes since 2018, from startup scale at Southbank to enterprise banking scale at ANZ.

At ANZ, he manages the platform that runs hundreds of services across multiple GKE clusters!`,
        suggestions: ["[1] Go Skills", "[2] GCP", "[3] Projects", "[4] Skills", "[0] ← Back"]
    },

    // Golang Skills - Level 2
    golangSkills: {
        message: `*tail wags* My human writes Go code every day!

**What he builds in Go:**
• **CLI tools** - Internal Developer Platform (IDP)
• **Kubernetes Operators** - Custom controllers for cloud resources
• **Terraform Providers** - MuleSoft CloudHub provider from scratch
• **Microservices** - API services and backend systems

**Go expertise includes:**
• Standard library mastery
• Concurrency patterns (goroutines, channels)
• Error handling best practices
• Testing and benchmarking
• Module management
• CLI frameworks (Cobra, etc.)
• Kubernetes controller-runtime
• Terraform plugin SDK

**Real projects:**
The Internal Developer Platform CLI is thousands of lines of Go code, handling complex workflows for infrastructure provisioning, API onboarding, and deployment automation.

The Terraform provider he built uses Go's interface system beautifully to implement the Terraform plugin protocol.

**Why Go?**
My human loves Go for its simplicity, excellent tooling, and perfect fit for cloud-native development. Plus, most Kubernetes ecosystem tools are written in Go!`,
        suggestions: ["[1] Projects", "[2] Kubernetes", "[3] Skills", "[4] Contact", "[0] ← Back"]
    },

    // Terraform Skills - Level 2
    terraformSkills: {
        message: `*fetches the Infrastructure-as-Code knowledge* 🦴

**Terraform Expertise:**

**Built from scratch:**
• Complete Terraform provider for MuleSoft CloudHub
• Custom provider development using Terraform Plugin SDK
• Resource lifecycle implementation (CRUD operations)

**Daily usage:**
• Managing GCP resources at ANZ
• Module development for reusable infrastructure patterns
• State management and workspaces
• CI/CD integration for automated deployments

**Advanced topics:**
• Custom provider development in Go
• Terraform Plugin SDK
• State file management
• Remote backends (GCS)
• Module composition
• Policy as code

**Real impact:**
The custom Terraform provider he built became the standard way to manage integration infrastructure at ANZx, enabling proper version control and automated deployments.

He's been using Terraform professionally since 2020, managing everything from small projects to enterprise-scale cloud infrastructure.`,
        suggestions: ["[1] GCP", "[2] Projects", "[3] Skills", "[4] Contact", "[0] ← Back"]
    },

    // GCP Skills - Level 2
    gcpSkills: {
        message: `*tail wags proudly* Google Cloud Platform is my human's specialty!

**Certifications:**
• Professional Cloud Architect (Jan 2024)
• Professional Cloud Network Engineer (Jan 2024)

**Deep Experience With:**
• **GKE** - Enterprise Kubernetes clusters
• **Networking** - VPCs, Cloud NAT, Private Service Connect
• **IAM** - Security policies, service accounts, Workload Identity
• **Projects** - Organization-level management
• **Kubernetes Config Connector** - Managing GCP via K8s
• **Cloud Build** - CI/CD pipelines
• **Monitoring & Logging** - Observability at scale

**Real-world Expertise:**
At ANZ, he manages a platform serving hundreds of services across multiple GCP projects. This involves:
• Multi-project organization design
• Network architecture with private connectivity
• Security and compliance patterns
• Cost optimization
• SLO/SLI monitoring using GCP metrics

**Years of Experience:**
Working with GCP since 2018, from greenfield deployments at startups to enterprise banking infrastructure.

The depth of knowledge comes from not just using GCP services, but architecting entire platforms on GCP!`,
        suggestions: ["[1] Kubernetes", "[2] Projects", "[3] Skills", "[4] Contact", "[0] ← Back"]
    },

    // AI & Experiments - Level 1
    aiExperiments: {
        message: `*tail wags excitedly* This is my human's favorite topic lately!

He's been exploring AI-assisted development:

🤖 **AI-Assisted Coding**
   Daily use of Claude, Cursor, and Copilot
   (Fun fact: He built me with AI assistance!)

🏠 **Local LLM Deployments**
   Running models locally for dev workflows
   Experimenting with different model sizes

🧠 **RAG & Embeddings**
   Exploring retrieval-augmented generation patterns
   Building knowledge systems with vector databases

🔗 **LangChain & LangGraph**
   Building AI agents and workflows
   Experimenting with tool use and memory

**Why this matters:**
My human believes AI tools are transforming software development. He's not just using them - he's exploring how to build intelligent systems that can help developers be more productive.

He's particularly interested in local LLM deployments for privacy and control, and RAG patterns for grounding AI responses in actual knowledge.

I think treats are still the most important technology, but what do I know? 🦴`,
        suggestions: ["[1] Projects", "[2] Skills", "[3] Experience", "[4] Contact", "[0] ← Back"]
    },

    // Education - Level 1
    education: {
        message: `*sits proudly* My human is well-educated!

🎓 **Master of Science: Computer Science**
   Keio University, Tokyo, Japan (2015)
   Focus: Machine Learning, Natural Language Processing, Computer Networks

   *He got a Japanese Government Scholarship to study there!*

🎓 **Bachelor of Science: Computer Science**
   Pune University, Pune, India (2010)
   Focus: Data Structures and Algorithms, Software Engineering

**Academic Achievements:**
• Japanese Government Scholarship - Global 30 (2012)
• English Session Encouragement Award from IEICE Japan (2015)
• Published research on "Scalable and Cost-effective Live Video Encoding in Cloud"

**The Japan Connection:**
That's why I'm named Hachi - after Hachiko, the famous loyal dog from Tokyo! 🐕

My human's time in Japan studying ML and NLP laid the foundation for his current interest in AI and LLM technologies.`,
        suggestions: ["[1] AI & Expts", "[2] Certifications", "[3] Experience", "[4] Contact", "[0] ← Back"]
    },

    // Certifications - Level 2
    certifications: {
        message: `*brings back all the certificates* 📜

**Cloud & Kubernetes:**
• **Google Cloud Professional Cloud Architect** (Jan 2024)
• **Google Cloud Professional Cloud Network Engineer** (Jan 2024)
• **Certified Kubernetes Administrator (CKA)** (July 2020)

**Academic & Other:**
• English Session Encouragement Award - IEICE Japan (2015)
• Japanese Government Scholarship - Global 30 (2012)
• Cisco Certified Network Associate (2010)

**What these mean:**
The GCP certifications demonstrate deep knowledge of cloud architecture and networking. The CKA shows hands-on Kubernetes expertise.

My human maintains these certifications because he believes in continuous learning and validated expertise, especially in the fast-moving cloud-native space.`,
        suggestions: ["[1] Skills", "[2] Projects", "[3] Experience", "[4] Contact", "[0] ← Back"]
    },

    // Contact - Level 1
    contact: {
        message: `*tail wags* Ready to connect with my human?

📧 **Email:** koustubh_gaikwad@yahoo.com
📱 **Phone:** +61 435 041 690
📍 **Location:** Melbourne, Victoria, Australia
🌏 **Citizenship:** Australian Citizen

**Connect online:**
🔗 **LinkedIn:** linkedin.com/in/koustubhg
💻 **GitHub:** github.com/koustubh25
📝 **Blog:** dev.to/koustubh

**Best way to reach:**
LinkedIn is usually fastest! My human is active there and responds quickly.

His GitHub has some interesting projects, and his blog has articles about cloud and DevOps topics.

*sits and waits hopefully* Will you reach out? 🐕`,
        suggestions: ["[1] Experience", "[2] Projects", "[3] Skills", "[4] AI & Expts", "[0] ← Start"]
    },

    // Fallback response for unmatched queries
    fallback: {
        message: `*tilts head* Hmm, I only know about my human's work stuff!

Try asking about his experience, skills, projects, or certifications - or just click a topic below!

(But between us, MY favorite topic is definitely treats 🦴)`,
        suggestions: ["[1] Experience", "[2] Skills", "[3] Projects", "[4] AI & Expts", "[5] Contact"]
    }
};

/**
 * Keyword mapping for natural language queries
 */
const keywordMap = {
    // Experience keywords
    experience: ["experience", "work", "job", "career", "history", "roles", "worked", "employment"],
    anzDetails: ["anz", "anzx", "bank", "banking", "acting lead", "tech lead", "current"],
    japanRoles: ["japan", "tokyo", "japanese", "works applications", "eviry", "keio"],

    // Projects keywords
    projects: ["project", "projects", "built", "created", "developed"],
    idpDetails: ["idp", "internal developer platform", "platform", "cli", "developer platform"],
    terraformProvider: ["terraform provider", "mulesoft", "cloudhub", "custom provider"],
    k8sOperators: ["operator", "operators", "kubernetes operator", "k8s operator", "controller"],

    // Skills keywords
    skills: ["skill", "skills", "technology", "technologies", "tech stack", "tools", "know"],
    kubernetesSkills: ["kubernetes", "k8s", "gke", "container", "containers", "pods", "cka"],
    golangSkills: ["go", "golang", "go language"],
    terraformSkills: ["terraform", "iac", "infrastructure as code", "tf"],
    gcpSkills: ["gcp", "google cloud", "cloud platform", "google cloud platform"],

    // AI keywords (Easter egg!)
    aiExperiments: ["ai", "llm", "artificial intelligence", "machine learning", "ml", "gpt", "claude", "langchain", "langgraph", "rag", "embeddings"],

    // Education keywords
    education: ["education", "degree", "university", "studied", "study", "school", "master", "bachelor", "keio", "pune"],
    certifications: ["certification", "certifications", "certified", "certificate", "certs", "cert"],

    // Contact keywords
    contact: ["contact", "email", "phone", "reach", "connect", "linkedin", "github", "blog"]
};

/**
 * Match user input to response using keyword matching
 * @param {string} input - User's input text
 * @returns {object} - Response object with message and suggestions
 */
function matchResponse(input) {
    const normalizedInput = input.toLowerCase().trim();

    // Check each keyword category
    for (const [responseKey, keywords] of Object.entries(keywordMap)) {
        for (const keyword of keywords) {
            if (normalizedInput.includes(keyword)) {
                return hachiResponses[responseKey] || hachiResponses.fallback;
            }
        }
    }

    // No match found, return fallback
    return hachiResponses.fallback;
}

/**
 * Get response by key (for chip navigation)
 * @param {string} key - Response key
 * @returns {object} - Response object
 */
function getResponse(key) {
    return hachiResponses[key] || hachiResponses.fallback;
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { hachiResponses, matchResponse, getResponse };
}
