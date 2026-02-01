/**
 * Resume Data - Parsed from resume_data.yaml
 * Single source of truth for all portfolio content
 */

const resumeData = {
    personal: {
        name: "KOUSTUBH GAIKWAD",
        title: "SENIOR CLOUD ENGINEER",
        displayTitle: "Platform Engineer",
        location: "Melbourne, Victoria",
        phone: "+61435041690",
        email: "koustubh_gaikwad@yahoo.com",
        citizenship: "Australian Citizen"
    },

    summary: "Over the past decade, I've worked across India, USA, Japan, and Australia, contributing to large-scale technology transformations. At ANZx, I've served as Acting Tech Lead and Senior Cloud Engineer, focused on deep technical delivery. My work centres on GCP, Kubernetes, Golang, Infrastructure-as-Code (IaC) tooling and API enablement. I actively explore emerging technologies including AI-assisted development workflows and local LLM deployments.",

    quickSummary: [
        "14 years in tech across Australia, Japan, USA and India",
        "Currently Platform Engineer at ANZ (was Acting Tech Lead)",
        "Builds Internal Developer Platforms & K8s Operators in Go",
        "GCP certified (Architect & Network Engineer)"
    ],

    skills: {
        cloud: ["Google Cloud Platform (GCP)", "AWS (some experience)", "Azure"],
        platform: ["Kubernetes (GKE)", "Terraform", "Helm", "Kustomize", "FluxCD", "Kubernetes Config Connector"],
        languages: ["Golang", "Python", "JavaScript", "Java"],
        devops: ["CI/CD", "GitOps", "Docker", "Harness"],
        certifications: [
            "Certified Kubernetes Administrator (CKA)",
            "Google Cloud Professional Cloud Architect",
            "Google Cloud Professional Cloud Network Engineer"
        ]
    },

    experience: [
        {
            company: "ANZ BANK (ANZx)",
            location: "Melbourne, Victoria",
            title: "Senior Cloud Engineer (following org restructure)",
            dates: "July 2025 - Present",
            current: true,
            description: [
                "Maintain and evolve ANZx's Internal Developer Platform (Go-based CLI) and Kubernetes Operators supporting API and application deployments.",
                "Design reusable API and service onboarding patterns, ensuring alignment with ANZx security, tenancy, and network standards."
            ]
        },
        {
            company: "ANZ BANK (ANZx)",
            location: "Melbourne, Victoria",
            title: "Technical Lead (Acting)",
            dates: "August 2024 - July 2025",
            current: false,
            description: [
                "As a part of the Cloud Foundations team, take full ownership to write and maintain patterns for the use of various GCP services used within ANZx teams",
                "Maintain and use Kubernetes Config Connector to manage GCP resources within the bank and work with google team in order to adapt it to the bank's requirements",
                "Write, maintain and deploy some in-house Kubernetes Operators in Golang",
                "Defined SLOs and SLIs for Kubernetes Config Connector availability using GCP log-based metrics and Nobl9",
                "Evaluate use of tools that could possibly add value. Currently looking at crossplane.",
                "Work closely with product owners and delivery leads in order to formulate the roadmap",
                "Work closely with Senior and Junior Engineers and provide mentorship"
            ]
        },
        {
            company: "ANZ BANK (ANZx)",
            location: "Melbourne, Victoria",
            title: "Senior Cloud Engineer",
            dates: "November 2022 - July 2024",
            current: false,
            description: [
                "Played a key role in the 'Simplifying Life' initiative to simplify the onboarding process for application teams on infrastructure platforms.",
                "Designed a mono-repository structure specifically tailored for GitOps implementation.",
                "Configured Kubernetes Config Connector (KCC) for clusters, enabling them to leverage KRM for deploying GCP infrastructure resources.",
                "Actively participated in the development of a Go-based command-line interface (CLI) tool which is their Internal Developer Platform (IDP)"
            ],
            tools: ["Google Cloud Platform", "Kubernetes Config Connector (KCC)", "FluxCD", "Golang"]
        },
        {
            company: "Momenton PTY LTD.",
            location: "Melbourne, Victoria",
            title: "Senior Consultant - DevOps and Cloud Engineer",
            dates: "August 2020 - October 2022",
            current: false,
            description: [
                "ANZ was the consulting client. Worked as part of the 'Platform Foundations' team at ANZ.",
                "Collaborated with solution architects and security partners to design and implement secure API gateway patterns.",
                "Overseeing the lifecycle of GCP resources using Terraform",
                "Managing the CI/CD of applications in the Kubernetes Cluster",
                "Developing applications using Go"
            ],
            tools: ["GCP", "Kubernetes", "Docker", "Terraform", "Golang", "Harness (CI/CD tool)"],
            accomplishments: [
                "Developed a Terraform Provider for the creation and management of MuleSoft CloudHub resources from the ground up.",
                "Created and executed the first CI/CD pipelines for MuleSoft within the ANZx region."
            ]
        },
        {
            company: "Southbank Software",
            location: "Melbourne, Victoria",
            title: "Cloud DevOps and SRE",
            dates: "August 2018 - July 2020",
            current: false,
            description: [
                "Development and maintenance of Cloud infrastructure for a Blockchain based application hosted on Kubernetes in GCP.",
                "Creating and maintaining Cloud Infrastructure",
                "Configuring and maintaining CI/CD pipelines",
                "Responsible for the release process"
            ],
            tools: ["GCP", "Azure", "Kubernetes", "Istio", "Helm", "Docker", "FluxCD", "Golang"],
            accomplishments: [
                "Designed and implemented Infrastructure to be hosted on GCP from scratch",
                "Ensured high availability with relevant monitoring and alerting",
                "Migration of persistent volumes on GCP to Azure in Kubernetes using Velero"
            ]
        },
        {
            company: "Works Applications Co. Ltd",
            location: "Tokyo, Japan",
            title: "Expert Software Development Engineer",
            dates: "October 2016 - July 2018",
            current: false,
            description: [
                "Developed and maintained Works Applications' 'HUE' ERP software, which follows the Microservices Architecture (MSA)",
                "Conducted Full-stack Web Development to design software and services, alongside Cloud Engineering for microservices",
                "Supervised the work of an offshore team of four developers, acting as their mentor",
                "Managed Linux server infrastructure for a team of fifteen developers"
            ],
            tools: ["Java Spring Framework", "Google closure JS library", "Nginx", "Apache Cassandra", "Elasticsearch", "Apache Kafka", "Linux"]
        },
        {
            company: "Eviry Inc",
            location: "Tokyo, Japan",
            title: "Web Engineer",
            dates: "October 2015 - September 2016",
            current: false,
            description: [
                "Developed and maintained 'Millvi', a product that offers video encoding and delivery services.",
                "Programmed the web service portal utilising PHP and Backbone.js.",
                "Managed and maintained the Linux server infrastructure for video streaming services."
            ]
        },
        {
            company: "Cisco Systems",
            location: "San Jose, California, USA",
            title: "Software Engineering Intern",
            dates: "August 2013 - July 2014",
            current: false,
            description: [
                "Full-time intern for a year in the Video Collaboration Group at Cisco Systems.",
                "Built a PoC with personalized video content from Facebook, Dailymotion, Youtube, Soundcloud and cable TV",
                "Built a separate Identity Service using OAuth 2.0 protocol",
                "Performed various benchmarking tests to evaluate AWS and Rackspace performance"
            ]
        }
    ],

    education: [
        {
            institution: "Keio University",
            location: "Tokyo, Japan",
            degree: "Master of Science: Computer Science",
            date: "August 2015",
            focus: ["Machine Learning", "Natural Language Processing", "Computer Networks"]
        },
        {
            institution: "Pune University",
            location: "Pune, India",
            degree: "Bachelor of Science: Computer Science",
            date: "June 2010",
            focus: ["Data Structures and Algorithms", "Software Engineering"]
        }
    ],

    certifications: [
        {
            name: "Google Cloud Professional Cloud Architect",
            date: "Jan 2024"
        },
        {
            name: "Google Cloud Professional Cloud Network Engineer",
            date: "Jan 2024"
        },
        {
            name: "Certified Kubernetes Administrator",
            date: "July 2020"
        },
        {
            name: "English Session Encouragement Award (IEICE Japan)",
            date: "September 2015"
        },
        {
            name: "Japanese Government Scholarship - Global 30",
            date: "September 2012"
        },
        {
            name: "Cisco Certified Network Associate",
            date: "July 2010"
        }
    ],

    projects: [
        {
            name: "Internal Developer Platform (IDP)",
            description: "A Go-based CLI tool that lets teams self-serve infrastructure and deployments without manual tickets.",
            problem: "Teams needed to wait for manual infrastructure provisioning, creating bottlenecks and slowing down delivery.",
            solution: "Built a comprehensive CLI in Go that automates infrastructure provisioning, API onboarding, and deployments.",
            impact: "Dramatically reduced time-to-market for new services and improved developer experience.",
            tech: ["Go", "Kubernetes", "GCP", "Terraform", "GitOps"]
        },
        {
            name: "Terraform Custom Provider (MuleSoft CloudHub)",
            description: "Developed a Terraform Provider for MuleSoft CloudHub from scratch, enabling Infrastructure-as-Code for integration resources.",
            problem: "No IaC solution existed for managing MuleSoft CloudHub resources, leading to manual configuration and drift.",
            solution: "Built a complete Terraform provider with resource lifecycle management for MuleSoft CloudHub.",
            impact: "Enabled automated, version-controlled management of integration infrastructure at ANZx.",
            tech: ["Terraform", "Golang", "MuleSoft CloudHub API", "CI/CD"]
        },
        {
            name: "Kubernetes Operators (Go)",
            description: "Wrote and maintained in-house Kubernetes Operators to manage GCP resources and custom workflows.",
            problem: "Teams needed declarative management of GCP resources within Kubernetes workflows.",
            solution: "Developed custom Kubernetes Operators in Go to extend K8s API for ANZx-specific use cases.",
            impact: "Enabled teams to manage cloud resources using familiar Kubernetes patterns.",
            tech: ["Golang", "Kubernetes", "Kubernetes Config Connector", "GCP"]
        }
    ],

    aiExperiments: [
        {
            name: "AI-Assisted Coding",
            description: "Daily use of Claude, Cursor, and GitHub Copilot for development workflows.",
            note: "Fun fact: Built this portfolio with AI assistance!"
        },
        {
            name: "Local LLM Deployments",
            description: "Running models locally for dev workflows and experimentation."
        },
        {
            name: "RAG & Embeddings",
            description: "Exploring retrieval-augmented generation patterns for knowledge systems."
        },
        {
            name: "LangChain & LangGraph",
            description: "Building AI agents and workflows using LangChain framework."
        }
    ],

    links: {
        linkedin: "https://www.linkedin.com/in/koustubhg/",
        blog: "https://dev.to/koustubh",
        github: "https://github.com/koustubh25"
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = resumeData;
}
