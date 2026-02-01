# Portfolio Website - Revised UX Requirements
## AI Agent Architecture Theme

## Hosting
- **Repository:** `koustubh25.github.io`
- **URL:** https://koustubh25.github.io
- **Platform:** GitHub Pages (static hosting)

---

## Theme: AI Agent Portfolio

**Concept:** Portfolio designed as an interactive **LangGraph-style agent workflow** that demonstrates AI/ML expertise through its design itself.

### Why This Theme?
- **Demonstrates AI expertise** - Shows understanding of modern AI agent architectures
- **Technical credibility** - Appeals to technical recruiters and engineering teams
- **Educational** - Helps recruiters understand AI agent workflows while learning about you
- **Unique** - Stands out from typical developer portfolios
- **Authentic** - Reflects your actual daily work with LangGraph, Claude Code, Gemini CLI

### Visual Theme
- **Dark technical palette** - Deep blues/purples with cyan/electric blue accents
- **AI-inspired aesthetics** - Glowing edges, animated data flows, neural network vibes
- **Monospace typography** - Code-focused, terminal-style fonts
- **Minimalist UI chrome** - Content-first, clean lines, no unnecessary decoration
- **Syntax highlighting** - Code-style coloring for different content types

### Color Palette

```
Primary Colors:
- Background Deep:     #0a0e27  (deep navy, almost black)
- Background Surface:  #141b2d  (slightly lighter surface)
- Background Elevated: #1e2740  (cards, nodes)

Accent Colors:
- Primary Accent:      #00d9ff  (electric cyan - for active states)
- Secondary Accent:    #7c3aed  (vibrant purple - for nodes)
- Tertiary Accent:     #06b6d4  (cyan 500 - for links/highlights)
- Success:             #10b981  (emerald - for completed states)
- Warning:             #f59e0b  (amber - for in-progress)

Text Colors:
- Primary Text:        #e2e8f0  (slate 200)
- Secondary Text:      #94a3b8  (slate 400)
- Muted Text:          #64748b  (slate 500)
- Code/Terminal:       #06b6d4  (cyan 500)

Glow/Effects:
- Cyan Glow:           rgba(0, 217, 255, 0.3)
- Purple Glow:         rgba(124, 58, 237, 0.3)
```

### Existing Assets
| File | Description |
|------|-------------|
| `data/resume_data.yaml` | Source of truth for all content (experience, skills, education, certifications) |

### Data Source
All portfolio content derived from `data/resume_data.yaml`:
- Professional summary
- Skills categorized by type
- Work experience (companies, roles, dates, descriptions)
- Education and certifications
- AI experiments and projects
- Links (LinkedIn, GitHub, Blog)

This ensures single source of truth for all professional data.

---

## Core Concept: LangGraph Flow Visualization

The portfolio is presented as an **interactive agent workflow graph**, similar to LangGraph architecture diagrams.

### High-Level Architecture

```
                    ┌──────────────┐
                    │   [START]    │
                    │   Visitor    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    Router    │
                    │    Agent     │
                    └──────┬───────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
         ▼                 ▼                 ▼
    ┌─────────┐       ┌─────────┐      ┌─────────┐
    │Experience│       │Projects │      │ Skills  │
    │  Agent   │       │  Agent  │      │  Agent  │
    └────┬─────┘       └────┬────┘      └────┬────┘
         │                  │                 │
         └──────────────────┼─────────────────┘
                           │
                           ▼
                  ┌────────────────┐
                  │  Vector Store  │
                  │ resume_data.yaml│
                  └────────┬───────┘
                           │
                           ▼
                  ┌────────────────┐
                  │   Response     │
                  │   Generator    │
                  └────────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    [END]     │
                    │   Display    │
                    └──────────────┘
```

### Visual Design Language

**Nodes (Agents):**
- Rounded rectangles with glowing borders
- Different colors by type (Experience = purple, Projects = cyan, Skills = green)
- Hover: glow intensifies, slight scale up
- Active: animated pulse border
- Icon + Label inside each node

**Edges (Data Flow):**
- Animated flowing lines between nodes
- Dotted particles moving along edges
- Color matches destination node
- Thicker when active/hovered

**Background:**
- Subtle grid pattern (like graph paper)
- Faint connecting lines between all nodes
- Dark gradient from top to bottom

---

## Interface Layout

### Desktop View (1200px+)

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  KOUSTUBH GAIKWAD                            [GitHub] [LinkedIn]   │
│  Platform Engineer • AI Enthusiast • Melbourne                     │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                      ┌─────────────────┐                          │
│                      │   What would    │                          │
│                      │   you like to   │                          │
│                      │   explore?      │                          │
│                      └────────┬────────┘                          │
│                               │                                   │
│              ┌────────────────┼────────────────┐                  │
│              ▼                ▼                ▼                  │
│         ┌─────────┐      ┌─────────┐     ┌─────────┐             │
│         │  💼     │      │  🚀     │     │  ⚡     │             │
│         │Experience│      │Projects │     │ Skills  │             │
│         └─────────┘      └─────────┘     └─────────┘             │
│              │                │                │                  │
│              └────────────────┼────────────────┘                  │
│                               │                                   │
│                               ▼                                   │
│                      ┌─────────────────┐                          │
│                      │   📊 Vector     │                          │
│                      │   Store (RAG)   │                          │
│                      └────────┬────────┘                          │
│                               │                                   │
│                               ▼                                   │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │                                                            │   │
│  │  Response Panel (Content Display Area)                    │   │
│  │                                                            │   │
│  │  [Content appears here when agents are triggered]         │   │
│  │                                                            │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                    │
│  🤖 Powered by: LangGraph-inspired architecture • RAG-enabled     │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Mobile View (< 768px)

```
┌──────────────────────────┐
│                          │
│   KOUSTUBH GAIKWAD       │
│   Platform Engineer      │
│   AI Enthusiast          │
│                          │
├──────────────────────────┤
│                          │
│   What would you like    │
│   to explore?            │
│                          │
│   ┌──────────────────┐   │
│   │   💼 Experience  │   │
│   └──────────────────┘   │
│           ↓              │
│   ┌──────────────────┐   │
│   │   🚀 Projects    │   │
│   └──────────────────┘   │
│           ↓              │
│   ┌──────────────────┐   │
│   │   ⚡ Skills      │   │
│   └──────────────────┘   │
│           ↓              │
│   ┌──────────────────┐   │
│   │   🎯 AI Tools    │   │
│   └──────────────────┘   │
│           ↓              │
│   ┌──────────────────┐   │
│   │   📧 Contact     │   │
│   └──────────────────┘   │
│                          │
├──────────────────────────┤
│                          │
│  [Response Panel]        │
│                          │
│  Content appears here    │
│  when you tap a node     │
│                          │
└──────────────────────────┘
```

---

## Agent Node Types

### 1. Router Agent (Entry Point)
```
┌─────────────────────┐
│      🎯 Router      │
│                     │
│  What would you     │
│  like to explore?   │
└─────────────────────┘
```
- **Purpose:** Entry point, guides user to specialized agents
- **Visual:** Larger node, centered, pulsing glow
- **Color:** Primary accent (cyan)
- **Always visible:** Yes

### 2. Experience Agent
```
┌─────────────────────┐
│   💼 Experience     │
│                     │
│  14 years across    │
│  4 countries        │
└─────────────────────┘
```
- **Purpose:** Retrieves career history, roles, companies
- **Visual:** Purple glow (#7c3aed)
- **Sub-nodes:** ANZ, Momenton, Southbank, Japan, USA, India
- **Data source:** `experience` section from YAML

### 3. Projects Agent
```
┌─────────────────────┐
│   🚀 Projects       │
│                     │
│  Platform eng +     │
│  Infrastructure     │
└─────────────────────┘
```
- **Purpose:** Showcases key technical projects
- **Visual:** Cyan glow (#00d9ff)
- **Sub-nodes:** IDP, Terraform Provider, K8s Operators
- **Data source:** `experience.accomplishments` + curated projects

### 4. Skills Agent
```
┌─────────────────────┐
│   ⚡ Skills         │
│                     │
│  Cloud • Platform   │
│  Languages          │
└─────────────────────┘
```
- **Purpose:** Technical skills breakdown
- **Visual:** Green glow (#10b981)
- **Sub-nodes:** Cloud, Platform, Languages, Certifications
- **Data source:** `skills` section from YAML

### 5. AI Tools Agent (NEW)
```
┌─────────────────────┐
│   🤖 AI Tools       │
│                     │
│  Daily workflow     │
│  & experiments      │
└─────────────────────┘
```
- **Purpose:** Showcases AI/ML tools and projects
- **Visual:** Purple/pink glow (#ec4899)
- **Sub-nodes:** Claude Code, LangGraph, Gemini CLI, Local LLMs, RAG
- **Content:**
  - Daily tools used (Claude Code, Gemini CLI)
  - AI experiments (LangGraph agents, RAG pipelines)
  - Local LLM setups
  - AI-assisted development workflows

### 6. Contact Agent
```
┌─────────────────────┐
│   📧 Contact        │
│                     │
│  Let's connect      │
└─────────────────────┘
```
- **Purpose:** Contact information and social links
- **Visual:** Orange glow (#f59e0b)
- **Content:** Email, LinkedIn, GitHub, Blog
- **Data source:** `links` section from YAML

### 7. Vector Store (Data Source)
```
┌─────────────────────┐
│   📊 Vector Store   │
│                     │
│  resume_data.yaml   │
│  (RAG-enabled)      │
└─────────────────────┘
```
- **Purpose:** Visual representation of data source
- **Visual:** Database icon, subtle glow
- **Behavior:** Shows connection lines to all agents
- **Educational:** Helps recruiters understand RAG concept

---

## Interaction Model

### Primary Interaction: Click Agent Nodes

**User Journey:**
```
1. Land on page
   ↓
2. See Router Agent + Specialized Agents
   ↓
3. Click on "Experience" node
   ↓
4. Animation:
   - Experience node glows/pulses
   - Edge animates from Experience → Vector Store
   - Vector Store pulses (data retrieval simulation)
   - Edge animates Vector Store → Response Panel
   ↓
5. Response Panel slides up/fades in with content
   ↓
6. User can click sub-nodes or go back to Router
```

### Visual Feedback During Interaction

```
IDLE STATE:
┌─────────┐
│ Node    │  ← Subtle border glow
└─────────┘

HOVER STATE:
┌─────────┐
│ Node    │  ← Brighter glow, slight scale (1.05x)
└─────────┘     Cursor: pointer

ACTIVE/LOADING STATE:
┌─────────┐
│ Node    │  ← Pulsing animation
└─────────┘
    ↓
  ≋≋≋≋≋  ← Animated edge (particles flowing)
    ↓
┌─────────┐
│ Vector  │  ← Pulse animation
│ Store   │
└─────────┘

COMPLETED STATE:
┌─────────┐
│ Node    │  ← Checkmark overlay or success color
└─────────┘
```

---

## Response Panel Design

### Panel Appearance
```
┌────────────────────────────────────────────────────────────┐
│  ← Back to Graph                              [Minimize]   │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  💼 Experience Agent Response                              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                            │
│  Retrieved from: resume_data.yaml                          │
│  Query: "experience"                                       │
│  Tokens: 1,247                                             │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 🏦 ANZ Bank (ANZx) - 2022 to Present                 │   │
│  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │   │
│  │                                                      │   │
│  │ Tech Lead (Acting) → Senior Cloud Engineer          │   │
│  │ Melbourne, Australia                                 │   │
│  │                                                      │   │
│  │ Key Contributions:                                   │   │
│  │ • Built Internal Developer Platform (Go CLI)        │   │
│  │ • Kubernetes Operators in Go                        │   │
│  │ • Defined SLOs/SLIs using GCP metrics               │   │
│  │                                                      │   │
│  │ Tech Stack:                                          │   │
│  │ GCP • Kubernetes • Go • Terraform • FluxCD          │   │
│  │                                                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                            │
│  [View More Roles ↓]                                       │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Panel States

**Minimized (default):**
- Hidden or small bar at bottom
- Graph is primary focus
- Encourages exploration

**Expanded (after clicking node):**
- Slides up from bottom (desktop)
- Fades in (mobile fullscreen)
- Semi-transparent background to see graph behind
- Easy to dismiss (click outside or "Back to Graph" button)

**Metadata Display:**
- Show what data was "retrieved"
- Simulate RAG behavior (educational for recruiters)
- Token count, data source visualization

---

## Node Interaction Patterns

### Example: Experience Agent Flow

```
User clicks "Experience" node:

Step 1: Node Activation
┌─────────────┐
│ 💼         │  ← Glowing intensifies
│ Experience  │     Scale: 1.1x
└──────┬──────┘     Duration: 0.3s
       │

Step 2: Data Flow Animation
       │
       ▼ ← Animated particles flow down
   ≋≋≋≋≋≋≋
       ▼
┌─────────────┐
│ 📊 Vector   │  ← Pulses 2x
│ Store       │     Duration: 0.5s
└──────┬──────┘
       │

Step 3: Response Flow
       │
       ▼ ← Animated particles flow to panel
   ≋≋≋≋≋≋≋
       ▼
┌─────────────────────────────┐
│  Response Panel             │  ← Slides up
│  (Content appears)          │     Duration: 0.4s
└─────────────────────────────┘

Total animation: ~1.2s
```

### Sub-Node Expansion

When Experience node is active, show sub-nodes:

```
Before Click:
┌─────────────┐
│ 💼         │
│ Experience  │
└─────────────┘


After Click:
┌─────────────┐
│ 💼         │
│ Experience  │
└──────┬──────┘
       │
   ┌───┴───┬───────┬────────┐
   │       │       │        │
   ▼       ▼       ▼        ▼
 [ANZ]  [Japan] [Momenton] [More]

Each sub-node is clickable for deeper content
```

---

## Content Display Styles

### Code Block Style for Technical Content

```
┌────────────────────────────────────────┐
│ // Current Role                        │
│ const role = {                         │
│   title: "Senior Cloud Engineer",     │
│   company: "ANZ Bank (ANZx)",         │
│   location: "Melbourne, AU",          │
│   period: "2022 - Present",           │
│   focus: [                            │
│     "Internal Developer Platform",   │
│     "Kubernetes Operators (Go)",     │
│     "GCP Architecture"               │
│   ]                                   │
│ }                                     │
└────────────────────────────────────────┘
```

### Timeline View for Experience

```
2025 ━━━━━━━━━━━━━━━━━━━━━━━━━ Present
  │
  ├─ Senior Cloud Engineer (ANZ)
  │
2024 ━━━━━━━━━━━━━━━━━━━━━━━━━
  │
  ├─ Tech Lead - Acting (ANZ)
  │
2022 ━━━━━━━━━━━━━━━━━━━━━━━━━
  │
  ├─ Senior Consultant (Momenton)
  │
2020 ━━━━━━━━━━━━━━━━━━━━━━━━━
  │
  ├─ Cloud DevOps (Southbank)
  │
2018 ━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Skills Matrix

```
┌─────────────────────────────────────────────┐
│ Cloud Platforms                    ████████ │
│ GCP (deep expertise)                    90% │
│ AWS (familiar)                          60% │
│ Azure (familiar)                        50% │
│                                             │
│ Platform Engineering               █████████│
│ Kubernetes                              95% │
│ Terraform                               90% │
│ Go                                      85% │
│                                             │
│ Certifications                     █████████│
│ ✓ CKA - Kubernetes Admin                   │
│ ✓ GCP Professional Architect               │
│ ✓ GCP Network Engineer                     │
└─────────────────────────────────────────────┘
```

---

## AI Tools Section Design

### AI Tools Agent Response Panel

```
┌────────────────────────────────────────────────────────────┐
│  🤖 AI Tools & Experiments                                 │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                            │
│  Daily Workflow Tools                                      │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ $ claude-code                                        │  │
│  │ AI-powered pair programming                          │  │
│  │ • Code generation & refactoring                      │  │
│  │ • Architecture discussions                           │  │
│  │ • Bug fixing & optimization                          │  │
│  │                                                      │  │
│  │ $ gemini-cli                                         │  │
│  │ Quick AI queries from terminal                       │  │
│  │ • Code explanations                                  │  │
│  │ • Documentation lookups                              │  │
│  │                                                      │  │
│  │ $ cursor                                             │  │
│  │ AI-native code editor                                │  │
│  │ • Context-aware completions                          │  │
│  │ • Multi-file edits                                   │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  Experiments & Projects                                    │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ 🔗 LangGraph Multi-Agent Systems                     │  │
│  │    Building orchestrated AI workflows                │  │
│  │    • State management                                │  │
│  │    • Tool calling & function routing                 │  │
│  │    • Multi-agent coordination                        │  │
│  │                                                      │  │
│  │ 📚 RAG Pipelines                                     │  │
│  │    Retrieval-Augmented Generation experiments        │  │
│  │    • Vector embeddings                               │  │
│  │    • Semantic search                                 │  │
│  │    • Context injection                               │  │
│  │                                                      │  │
│  │ 🏠 Local LLM Deployments                             │  │
│  │    Privacy-focused AI development                    │  │
│  │    • Ollama for local inference                      │  │
│  │    • Model optimization                              │  │
│  │    • Cost-effective experimentation                  │  │
│  │                                                      │  │
│  │ 🤖 This Portfolio!                                   │  │
│  │    Built to demonstrate AI architecture patterns     │  │
│  │    • LangGraph-inspired design                       │  │
│  │    • Agent-based content routing                     │  │
│  │    • RAG simulation                                  │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  [View Code Samples →]                                     │
└────────────────────────────────────────────────────────────┘
```

---

## Typography

### Font Stack

```
Headings:
font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;

Body Text:
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

Code Blocks:
font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
```

### Type Scale

```
Hero/H1:      48px (3rem)     - Page title
H2:           32px (2rem)     - Section headers
H3:           24px (1.5rem)   - Sub-sections
H4:           20px (1.25rem)  - Card titles
Body:         16px (1rem)     - Main content
Small:        14px (0.875rem) - Metadata, labels
Tiny:         12px (0.75rem)  - Timestamps, hints
```

---

## Animations & Micro-interactions

### Node Pulse Animation
```
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 217, 255, 0.8);
  }
}

Duration: 2s
Iteration: infinite
Easing: ease-in-out
```

### Edge Flow Animation (Particles)
```
Particles:
- Size: 4px diameter circles
- Color: Matches destination node
- Speed: 1s to traverse edge
- Quantity: 3-5 particles
- Spacing: Evenly distributed along path
```

### Panel Slide-Up Animation
```
From: transform: translateY(100%)
To:   transform: translateY(0)
Duration: 0.4s
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

### Hover Effects
```
Nodes:
- Scale: 1 → 1.05
- Glow intensity: +30%
- Cursor: pointer
- Duration: 0.2s

Links:
- Underline slide-in
- Color shift to accent
- Duration: 0.2s
```

---

## Responsive Behavior

### Desktop (1200px+)
- Full graph visualization
- Nodes arranged in optimal layout
- Response panel as overlay (60% width)
- All edges visible
- Hover interactions rich

### Tablet (768px - 1199px)
- Simplified graph layout
- Fewer visible edges
- Response panel full width
- Touch-friendly node sizes (min 60px)

### Mobile (< 768px)
- **Linear flow (no graph visualization)**
- Nodes stacked vertically
- Connecting lines simplified
- Each node full width
- Tap to expand content inline
- No overlay panel, content expands in place

```
Mobile Layout:

┌──────────────┐
│ Router Agent │
└──────┬───────┘
       ↓
┌──────────────┐
│ Experience   │ ← Tap to expand
└──────┬───────┘
       ↓
┌──────────────┐
│ Projects     │
└──────┬───────┘
       ↓
┌──────────────┐
│ Skills       │
└──────┬───────┘
```

---

## Accessibility

### Keyboard Navigation
- **Tab:** Move between nodes
- **Enter/Space:** Activate focused node
- **Esc:** Close response panel
- **Arrow keys:** Navigate sub-nodes

### Screen Readers
- ARIA labels on all nodes
- ARIA live regions for dynamic content
- Semantic HTML structure
- Alt text for visual elements
- Role="button" for interactive nodes

### Color Contrast
- All text meets WCAG AA (4.5:1 minimum)
- Accent colors have sufficient contrast on dark bg
- Focus indicators highly visible (cyan outline, 3px)

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  - Disable particle animations
  - Use simple fade instead of slide
  - No pulsing effects
  - Instant state changes
}
```

---

## User Journeys

### Journey 1: Technical Recruiter (1 minute)
```
Goal: Quickly assess technical fit

1. Land on page
   ↓
2. See graph layout
   "Interesting - shows AI knowledge just through design"
   ↓
3. Click "Skills" node
   ↓
4. See skills breakdown with certifications
   "✓ CKA, GCP certs - good fit"
   ↓
5. Click "Contact" node
   ↓
6. Open LinkedIn

Time: ~60 seconds
Impression: Technical + creative, understands modern AI
```

### Journey 2: Engineering Manager (3 minutes)
```
Goal: Understand project experience and depth

1. Land on page
   ↓
2. Click "Projects" node
   ↓
3. Read about IDP (Internal Developer Platform)
   "Impressive - built CLI in Go"
   ↓
4. Click sub-node: "Kubernetes Operators"
   ↓
5. See technical details
   ↓
6. Click "AI Tools" node
   "Uses Claude Code, LangGraph - actively learning AI"
   ↓
7. Click "Experience" node
   ↓
8. Review ANZ role details
   ↓
9. Navigate to GitHub to see code

Time: ~3 minutes
Impression: Strong platform engineering + AI interest
```

### Journey 3: AI/ML Recruiter (2 minutes)
```
Goal: Validate AI/ML expertise

1. Land on page
   "Portfolio itself demonstrates LangGraph understanding"
   ↓
2. Click "AI Tools" node
   ↓
3. Read about daily tools
   "Uses Claude Code, Gemini CLI, LangGraph - genuine"
   ↓
4. See RAG experiments
   "Understands modern AI patterns"
   ↓
5. Click "Projects" to see if AI integrated
   ↓
6. Click "Skills" to validate cloud expertise
   ↓
7. Contact via LinkedIn

Time: ~2 minutes
Impression: Authentic AI practitioner, not just buzzwords
```

---

## Content Hierarchy

### Level 0: Instant Understanding (No Click)
- Visual graph = AI architecture knowledge
- Name, title, location
- Node labels show areas of expertise
- "Powered by LangGraph" tagline

### Level 1: Agent Overview (1 Click)
- **Experience:** Career timeline, current role
- **Projects:** Key technical achievements
- **Skills:** Cloud, platform, languages breakdown
- **AI Tools:** Daily workflow + experiments
- **Contact:** All contact methods

### Level 2: Detailed Content (2 Clicks)
- Specific roles (ANZ details, Japan experience)
- Project deep-dives (IDP architecture, Terraform provider)
- Skill specializations (Kubernetes, Go, GCP)
- AI tool usage patterns

### Level 3: External Links (3 Clicks)
- GitHub repositories
- LinkedIn profile
- Blog articles
- Code samples

---

## Graph Layout Algorithms

### Desktop: Force-Directed Layout
```
Concept: Nodes repel each other, edges pull connected nodes together

Router (center)
    │
    ├─── Experience (top-left, purple)
    │
    ├─── Projects (top-right, cyan)
    │
    ├─── Skills (bottom-left, green)
    │
    ├─── AI Tools (bottom-right, pink)
    │
    └─── Contact (far right, orange)

All connect to:
Vector Store (bottom-center, gray)
```

### Tablet: Simplified Grid
```
Row 1:  [Router]

Row 2:  [Experience]  [Projects]  [Skills]

Row 3:  [AI Tools]    [Contact]

Row 4:  [Vector Store]
```

### Mobile: Linear Stack
```
[Router]
   ↓
[Experience]
   ↓
[Projects]
   ↓
[Skills]
   ↓
[AI Tools]
   ↓
[Contact]
```

---

## Performance Targets

- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Lighthouse Performance:** > 90
- **Lighthouse Accessibility:** > 95
- **Bundle Size:** < 100KB (excluding fonts)
- **Animation Frame Rate:** 60fps

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Graceful degradation:**
- No graph animations → static layout
- Reduced motion respected
- Works without JavaScript (static content display)

---

## Edge Cases & Error States

### Node Click (No Content)
```
┌─────────────────────────┐
│ ⚠️ Content Loading...   │
│                         │
│ Please wait while we    │
│ retrieve information    │
└─────────────────────────┘
```

### Data Source Unavailable
```
┌─────────────────────────┐
│ ❌ Unable to Load Data  │
│                         │
│ Try refreshing the page │
│ or contact via LinkedIn │
└─────────────────────────┘
```

### Mobile Without JavaScript
- Show simplified content in linear order
- All content accessible
- No interactive graph, just sections

---

## Success Metrics (Conceptual)

### Engagement
- **Time on page:** > 2 minutes (deeper than typical portfolios)
- **Nodes clicked:** Average 3-4 (exploration)
- **Bounce rate:** < 40%

### Understanding
- Recruiters grasp AI expertise through design
- Technical depth visible without overwhelming
- Contact information found in < 2 clicks

### Memorability
- Portfolio design itself demonstrates skills
- Stands out from typical developer portfolios
- Educational (teaches LangGraph concepts)

---

## Future Enhancements (Not in Initial Build)

### Phase 2: Real AI Backend
- Connect to actual LLM (Claude API)
- True RAG pipeline with vector embeddings
- Natural language queries
- Real-time response generation

### Phase 3: Interactive Features
- Customize graph layout (drag nodes)
- Filter by technology (show only Go projects)
- Timeline scrubber (filter by date range)
- Dark/Light theme toggle

### Phase 4: Analytics
- Track which nodes are clicked most
- Heatmap of user journeys
- A/B test different layouts

---

## Meta: Portfolio About AI-Assisted Development

**The portfolio itself is meta commentary:**

This portfolio was designed using AI tools (Claude Code), demonstrates AI architecture patterns (LangGraph), and showcases AI experimentation.

The design tells recruiters:
1. **"I understand modern AI architectures"** - through LangGraph-style visualization
2. **"I use AI tools daily"** - through the AI Tools node content
3. **"I can build with AI"** - the portfolio is the proof
4. **"I explain complex concepts simply"** - the graph makes AI approachable

**Tagline possibilities:**
- "Built with AI. Demonstrates AI. Explores AI."
- "Portfolio designed as a LangGraph workflow"
- "Where AI meets Platform Engineering"
- "Powered by: LangGraph architecture • Claude Code • RAG patterns"

---

## Design Philosophy Summary

### Core Principles
1. **Show, don't tell** - Design demonstrates AI knowledge
2. **Technical but approachable** - Graph is educational, not intimidating
3. **Content-first** - UI serves content, not vice versa
4. **Fast & performant** - No bloat, respect user's time
5. **Accessible** - Everyone can navigate, regardless of ability

### Visual Language
- **Dark, technical, modern** - Appeals to engineering culture
- **Glowing accents** - AI/tech aesthetic
- **Monospace typography** - Developer-focused
- **Animated data flows** - Brings architecture to life
- **Clean minimalism** - No unnecessary decoration

### UX Strategy
- **Progressive disclosure** - From graph overview → detailed content
- **Multi-path navigation** - Click any node, explore freely
- **Educational** - Teaches LangGraph concepts through interaction
- **Mobile-friendly** - Adapts gracefully to all devices
- **Keyboard accessible** - Power users can navigate efficiently

---

**End of Requirements Document**

This document focuses on **design and UX** only. Implementation details (React vs vanilla JS, state management, API integration) are intentionally omitted and will be determined during technical planning phase.
