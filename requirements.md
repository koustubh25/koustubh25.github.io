# Portfolio Website - UX Requirements

## Hosting
- **Repository:** `koustubh25.github.io`
- **URL:** https://koustubh25.github.io
- **Platform:** GitHub Pages (static hosting)

## Theme: Meet Hachi

**Hachi** is Koustubh's 3-year-old Golden Retriever who serves as the AI assistant for this portfolio.

### Why Hachi?
- **Memorable** - A dog assistant stands out from typical portfolios
- **Approachable** - Golden Retrievers are friendly and welcoming
- **Personal** - Shows personality beyond just tech skills
- **Japan connection** - "Hachi" references Hachiko, the famous loyal dog, tying to Koustubh's years in Japan

### Visual Theme
- **Warm color palette** - Golden/amber accents (#D4A574, #E8C39E) on dark background (#1a1a2e, #16213e)
- **Dog-inspired touches** - Subtle paw print in corner, bone-shaped cursor on hover (optional)
- **Hachi avatar** - `static/hachiko_steady.gif` (illustrated Golden Retriever)
- **Friendly aesthetic** - Rounded corners, warm shadows, inviting feel

### Existing Assets
| File | Description |
|------|-------------|
| `app/static/hachiko_steady.gif` | Hachi avatar - illustrated Golden Retriever, happy expression |
| `app/static/hachiko_thinking.gif` | Hachi loading/thinking - tail wagging animation |
| `app/data/resume_data.yaml` | Source of truth for all profile content (experience, skills, education, etc.) |

### Data Source
All portfolio content should be derived from `app/data/resume_data.yaml`:
- Professional summary
- Skills list
- Work experience (companies, roles, dates, descriptions)
- Education
- Certifications
- Links (LinkedIn, GitHub, Blog)

This ensures consistency between the PDF resume and the portfolio site.

### Hachi Avatar

**Asset:** `app/static/hachiko_steady.gif`

![Hachi Avatar](static/hachiko_steady.gif)

- Illustrated Golden Retriever, friendly and approachable
- Warm golden color matches the theme palette
- Happy expression with tongue out - welcoming vibe
- Clean cartoon style - works well at small sizes
- GIF format allows for subtle animation if needed later (tail wag, blink)

**Usage:**
- Display next to each Hachi message bubble
- Size: ~48px in chat, ~64px in header/intro
- No additional border needed - clean edges

### Hachi's Personality
- **Enthusiastic but helpful** - Eager to share info about his human
- **Loyal** - Proudly talks about Koustubh's achievements
- **Playful touches** - Occasional dog references without being cheesy
- **Professional core** - The content stays professional, just delivered with warmth
- **Honest about limitations** - Doesn't pretend to be a real AI

### Example Hachi Messages
```
"Woof! I'm Hachi, Koustubh's Golden Retriever. 🐕

My human trained me to tell you about his work - he's been
exploring AI tools like LangChain and LangGraph, so I'm
pretty smart for a dog!

He's a Platform Engineer at ANZ who builds cool things
with Kubernetes and Go.

What would you like to sniff out?"
```

```
"*tail wags* Ah, you want to know about his skills!

Here's what my human is really good at..."
```

```
"*tilts head* Hmm, I'm just a dog - try clicking
one of the topics above! 🦴"
```

---

## Response Engine Architecture

### Current: Pre-written Responses
The initial implementation uses a **conversation tree** with pre-written responses. This is:
- Fast (instant responses)
- Free (no API costs)
- Offline-capable
- Predictable (quality controlled)

### Future: LLM Integration (Extensible)
The architecture should be designed to easily swap in an LLM backend later:

```
┌─────────────────────────────────────────────────────────────┐
│                    RESPONSE ENGINE                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   User Input                                                │
│       │                                                     │
│       ▼                                                     │
│   ┌─────────────────┐                                       │
│   │ Response Router │ ◄── Decides which backend to use      │
│   └────────┬────────┘                                       │
│            │                                                │
│       ┌────┼────┐                                           │
│       ▼    ▼    ▼                                           │
│   ┌──────┐ ┌──────┐ ┌──────┐                                │
│   │Local │ │Browser│ │ API  │                               │
│   │Tree  │ │ LLM  │ │ LLM  │                                │
│   └──────┘ └──────┘ └──────┘                                │
│      │        │        │                                    │
│      └────────┼────────┘                                    │
│               ▼                                             │
│   ┌─────────────────┐                                       │
│   │ Response Format │ ◄── Consistent output format          │
│   └─────────────────┘                                       │
│               │                                             │
│               ▼                                             │
│         Hachi Message                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Three backend options:**
| Backend | Cost | Latency | Setup |
|---------|------|---------|-------|
| Local Tree | Free | Instant | None |
| Browser LLM | Free | ~1-2s after load | ~300MB download, ~1 min (cached) |
| API LLM | ~$0.01/query | ~1-2s | API key required |

### Interface Contract
Both backends should return the same format:
```javascript
{
  message: string,        // Hachi's response text
  suggestions: string[],  // Follow-up chip options
  metadata?: {            // Optional extras
    source: 'local' | 'llm',
    confidence?: number
  }
}
```

### Phase 2: Browser-Based LLM ("Smart Hachi")

**Technology:** WebLLM (MLC) with the smallest viable model

**Model Selection Priority: Speed > Quality**
Use the smallest SLM that can handle basic Q&A. Acceptable if responses are less polished - fast loading matters more than perfect answers.

| Model | Size | Download (50Mbps) | Recommendation |
|-------|------|-------------------|----------------|
| SmolLM-360M-Instruct | ~300MB | ~1 min | **Preferred - fastest** |
| TinyLlama-1.1B | ~600MB | ~2 min | Fallback if SmolLM too weak |
| Qwen2-0.5B-Instruct | ~1GB | ~3 min | Alternative |
| Phi-3-mini | ~1.5GB | ~5 min | Only if smaller models fail |

**User Experience:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Hachi Mode:  [Basic]  [🧠 Smart Hachi]                    │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ 🐕 *tail wags* Want me to get smarter?              │   │
│   │                                                     │   │
│   │ Enable "Smart Hachi" to download a small AI model   │   │
│   │ (~300MB, one-time). Then I can answer ANY question  │   │
│   │ about my human - not just the pre-written ones!     │   │
│   │                                                     │   │
│   │ [Enable Smart Hachi 🧠]  [Maybe Later]              │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**How it works:**
1. User clicks "Enable Smart Hachi"
2. Download SmolLM-360M (~300MB) via WebLLM
3. Show download progress UI (see below)
4. Cache model in IndexedDB (persists across sessions)
5. On subsequent visits, model loads from cache (~3-5s)
6. All inference runs locally in browser (WebGPU)

**Download Progress UI:**
Use `hachiko_thinking.gif` (tail wagging) to keep user entertained during download, plus a progress bar:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              [hachiko_thinking.gif]                         │
│                 (tail wagging)                              │
│                                                             │
│   🐕 I'm getting smarter! Just a moment...                  │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│   │
│   └─────────────────────────────────────────────────────┘   │
│                    45% · 135MB / 300MB                      │
│                                                             │
│   (This only happens once - I'll remember next time!)       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Loading states:**
| State | Animation | Message |
|-------|-----------|---------|
| Downloading | `hachiko_thinking.gif` + progress bar | "I'm getting smarter! Just a moment..." |
| Loading from cache | `hachiko_thinking.gif` | "Waking up... 🐕" |
| Generating response | `hachiko_thinking.gif` | "Thinking..." |
| Ready | `hachiko_steady.gif` | (normal responses) |

**System Prompt for Browser LLM:**
```
You are Hachi, a friendly Golden Retriever who knows everything about
your human, Koustubh Gaikwad. You speak in first person as a dog.

Use occasional dog mannerisms (*tail wags*, *ears perk up*) but keep
them subtle - max 1 per message. Always be helpful and professional
while maintaining a warm, friendly tone.

Here is everything you know about your human:
[INJECT: resume_data.yaml content]

Only answer questions about Koustubh's professional background.
If asked about unrelated topics, playfully redirect to work topics.
```

**Fallback behavior:**
- If WebGPU not supported → Show "Your browser doesn't support Smart Hachi"
- If download fails → Fall back to Basic mode
- If inference fails → Fall back to pre-written response

**Mobile Devices: Smart Hachi Disabled**
- Do NOT show "Enable Smart Hachi" toggle on mobile devices
- Reasons:
  - Mobile GPUs are weaker, inference would be slow
  - 300MB download on mobile data is unfriendly
  - Battery drain from WebGPU inference
  - Touch interface doesn't benefit as much from conversational AI
- Detection: Check `window.innerWidth < 768` or use `navigator.userAgent` for mobile
- Mobile users get Basic Hachi only (pre-written responses work great on mobile)

**Benefits:**
- No API costs (runs entirely in browser)
- Works offline after initial download
- Fast responses after model loads (~100-500ms)
- Privacy-preserving (nothing sent to servers)
- Impressive tech demo for recruiters

### Future: API LLM (Phase 3)
If browser LLM isn't sufficient, add API option:
1. **System prompt** - Include Hachi's personality, Koustubh's full profile as context
2. **Guardrails** - Keep responses on-topic (professional background only)
3. **Fallback** - If LLM fails/times out, fall back to local tree
4. **Hybrid mode** - Use local for common questions (fast), LLM for novel questions
5. **Cost control** - Rate limiting, caching common responses

---

## Target Audience

### Primary: Recruiters & Hiring Managers
- Time-poor, scanning multiple candidates
- Want quick answers: "Can this person do X?"
- Need to extract key info fast (skills, experience, contact)
- May be on mobile between meetings

### Secondary: Engineering Peers & Collaborators
- More technical, may explore deeper
- Interested in specific projects/tech choices
- Might check GitHub/blog links

---

## Core UX Principles

1. **Zero friction to value** - Visitor sees relevant info immediately, no clicks required
2. **Progressive disclosure** - High-level first, details on demand
3. **Scannable** - Key info visible even without interaction
4. **Conversational but efficient** - Chat feels natural but doesn't waste time
5. **Mobile-first** - Works perfectly on phone (recruiters often on-the-go)

---

## Interface Layout

> **Note:** In the ASCII diagrams below, `🐕` or `[IMG]` represents the Hachi avatar (`static/hachiko_steady.gif`)

### Desktop View (1200px+)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│                          KOUSTUBH GAIKWAD                                  │
│                   Platform Engineer · Melbourne                            │
│                                                                            │
│     ┌─────────────────────────────────────────────────────────────────┐    │
│     │                                                                 │    │
│     │                      CHAT AREA                                  │    │
│     │                   (scrollable)                                  │    │
│     │                                                                 │    │
│     │  ┌─────────────────────────────────────────────────────────┐   │    │
│     │  │ [IMG]                                                   │   │    │
│     │  │ hachi                                                   │   │    │
│     │  │ Woof! I'm Hachi, Koustubh's Golden Retriever.           │   │    │
│     │  │                                                         │   │    │
│     │  │ My human is a Platform Engineer at ANZ - he builds      │   │    │
│     │  │ Internal Developer Platforms and Kubernetes Operators   │   │    │
│     │  │ in Go. 14 years in tech across 4 countries!             │   │    │
│     │  │                                                         │   │    │
│     │  │ What would you like to sniff out?                       │   │    │
│     │  │                                                         │   │    │
│     │  └─────────────────────────────────────────────────────────┘   │    │
│     │                                                                 │    │
│     │     ┌──────────────┐ ┌────────────┐ ┌────────────┐             │    │
│     │     │[1] Experience│ │[2] Projects│ │[3] Skills  │             │    │
│     │     └──────────────┘ └────────────┘ └────────────┘             │    │
│     │                                                                 │    │
│     │     ┌──────────────┐ ┌────────────┐ ┌────────────┐             │    │
│     │     │[4] AI & Expts│ │[5] Education│ │[6] Contact│             │    │
│     │     └──────────────┘ └────────────┘ └────────────┘             │    │
│     │                                                                 │    │
│     └─────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│          ┌─────────────────────────────────────────────────┐  ┌───┐       │
│          │ Or ask about skills, experience, projects...    │  │ ➤ │       │
│          └─────────────────────────────────────────────────┘  └───┘       │
│                          (secondary - smaller, muted)                      │
│                                                                            │
│                      LinkedIn  ·  GitHub  ·  Blog                          │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Mobile View (< 768px)

```
┌──────────────────────────┐
│                          │
│    KOUSTUBH GAIKWAD      │
│  Platform Engineer · Melb │
│                          │
├──────────────────────────┤
│                          │
│ ┌──────────────────────┐ │
│ │ 🐕                   │ │
│ │                      │ │
│ │ Woof! I'm Hachi,     │ │
│ │ Koustubh's Golden    │ │
│ │ Retriever.           │ │
│ │                      │ │
│ │ My human builds      │ │
│ │ platforms at ANZ...  │ │
│ │                      │ │
│ └──────────────────────┘ │
│                          │
│ ┌──────────┐ ┌─────────┐ │
│ │Experience│ │ Skills  │ │
│ └──────────┘ └─────────┘ │
│ ┌──────────┐ ┌─────────┐ │
│ │ Projects │ │AI & Exp │ │
│ └──────────┘ └─────────┘ │
│      ┌─────────────┐     │
│      │   Contact   │     │
│      └─────────────┘     │
│                          │
├──────────────────────────┤
│ Or ask a question...  ➤  │
│      (secondary)         │
└──────────────────────────┘
```

---

## Interaction Model

### Design Principle: Chips First, Typing Second

Since we're using pre-written responses (not a real LLM), we **steer users toward chip-based navigation** to ensure a great experience:

| Element | Priority | Rationale |
|---------|----------|-----------|
| **Suggestion chips** | Primary | Guaranteed good responses, discoverable |
| **Text input** | Secondary | For curious users, graceful fallback |

**Input field design:**
- Smaller, less prominent than chips
- Placeholder: "Or ask about skills, experience, projects..."
- Positioned below chips, not competing for attention

```
Primary:   [Experience]  [Projects]  [Skills]  [Contact]

Secondary: ┌─────────────────────────────────────────┐
           │ Or ask about skills, experience...   ➤ │
           └─────────────────────────────────────────┘
```

---

### 1. Initial Load (No Interaction Required)

Hachi **proactively** delivers value immediately:

```
┌─────────────────────────────────────────────────────────────┐
│ 🐕                                                          │
│                                                             │
│ Woof! I'm Hachi, Koustubh's Golden Retriever. 🦴            │
│                                                             │
│ My human trained me to tell you about his work - he's been  │
│ exploring AI tools lately, so I'm pretty smart for a dog!   │
│                                                             │
│ Quick summary:                                              │
│ • 14 years in tech across Australia, Japan, USA and India   │
│ • Currently Platform Engineer at ANZ (was Acting Tech Lead) │
│ • Builds Internal Developer Platforms & K8s Operators in Go │
│ • GCP certified (Architect & Network Engineer)              │
│                                                             │
│ What would you like to sniff out?                           │
└─────────────────────────────────────────────────────────────┘

    [1] Experience  [2] Projects  [3] Skills  [4] AI & Expts  [5] Contact

    Press 1-5 to select, or click
```

**Why this works for recruiters:**
- Key qualifications visible in 5 seconds
- Hachi makes it memorable and personable
- No interaction needed to get the gist
- Chips provide clear next steps if interested

---

### 2. Chip-Based Navigation (Primary Path)

Clicking a chip triggers a conversational response with relevant follow-ups.

**Example: User clicks [Experience]**

```
┌─────────────────────────────────────────────────────────────┐
│ 👤  Experience                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🐕                                                          │
│                                                             │
│ *fetches the career history* 🦴                             │
│                                                             │
│ 🏦 ANZ Bank (2022 - Present) · Melbourne                    │
│    Tech Lead (Acting) → Senior Cloud Engineer               │
│    Building IDP, Kubernetes Operators, GCP platform         │
│                                                             │
│ 💼 Momenton (2020 - 2022) · Consulting at ANZ               │
│    Terraform, custom providers, CI/CD pipelines             │
│                                                             │
│ ⛓️ Southbank Software (2018 - 2020) · Blockchain startup    │
│    Built GCP infrastructure from scratch, GitOps, Helm      │
│                                                             │
│ 🇯🇵 Japan (2015 - 2018) · Works Applications, Eviry         │
│    Full-stack, microservices, DevOps                        │
│                                                             │
│ 🇺🇸 Cisco (2013 - 2014) · Silicon Valley intern             │
│    Cloud benchmarking, OAuth services                       │
│                                                             │
│ Want me to dig deeper into any role?                        │
└─────────────────────────────────────────────────────────────┘

    [ANZ Details]  [Japan Roles]  [← Back]  [Contact]
```

---

### 3. Drill-Down (Second Level)

**Example: User clicks [ANZ Details]**

```
┌─────────────────────────────────────────────────────────────┐
│ 👤  Tell me more about ANZ                                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🐕                                                          │
│                                                             │
│ *tail wags* This is where my human spends most of his time! │
│                                                             │
│ At ANZ (ANZx digital bank), he's been part of the Cloud     │
│ Foundations team since 2022.                                │
│                                                             │
│ As Acting Tech Lead (2024-2025):                            │
│ • Led team building Kubernetes Operators in Go              │
│ • Architected GitOps patterns with FluxCD                   │
│ • Defined SLOs/SLIs for platform reliability                │
│ • Mentored senior and junior engineers                      │
│                                                             │
│ Key project: Internal Developer Platform                    │
│ A Go-based CLI that lets teams self-serve infrastructure    │
│ and deployments without manual tickets.                     │
│                                                             │
│ Tech: GCP, Kubernetes, Go, Terraform, Helm, Kustomize       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

    [Projects]  [Skills]  [← Experience]  [Contact]
```

---

### 3b. AI & Experiments Section (New)

**Example: User clicks [AI & Experiments]**

```
┌─────────────────────────────────────────────────────────────┐
│ 👤  AI & Experiments                                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🐕                                                          │
│                                                             │
│ *tail wags excitedly* This is my human's favorite topic!    │
│                                                             │
│ He's been exploring AI-assisted development:                │
│                                                             │
│ 🤖 AI-Assisted Coding                                       │
│    Daily use of Claude, Cursor, and Copilot                 │
│    (Fun fact: He built me with AI assistance!)              │
│                                                             │
│ 🏠 Local LLM Deployments                                    │
│    Running models locally for dev workflows                 │
│                                                             │
│ 🧠 RAG & Embeddings                                         │
│    Exploring retrieval-augmented generation patterns        │
│                                                             │
│ 🔗 LangChain & LangGraph                                    │
│    Building AI agents and workflows                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

    [Projects]  [Skills]  [Experience]  [Contact]
```

---

### 4. Free-Form Questions (Secondary Path)

Users can type questions. The system matches keywords to pre-written responses.

**Keyword matching strategy:**
- Match against known topics: "kubernetes", "gcp", "go", "terraform", "experience", etc.
- Fuzzy matching for typos: "kuberntes" → "kubernetes"
- Multiple keywords trigger best match: "kubernetes experience" → K8s section

**When no match is found:**
Hachi gracefully redirects without feeling like a failure:

**Example: User types "do you know kubernetes?"**

```
┌─────────────────────────────────────────────────────────────┐
│ 👤  do you know kubernetes?                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🐕                                                          │
│                                                             │
│ *ears perk up* Oh, Kubernetes! My human loves that stuff!   │
│                                                             │
│ • Certified Kubernetes Administrator (CKA) since 2020       │
│ • Writes Kubernetes Operators in Go (current role)          │
│ • Manages GKE clusters at enterprise scale                  │
│ • GitOps with FluxCD, templating with Helm & Kustomize      │
│ • Kubernetes Config Connector for GCP resource management   │
│ • Disaster recovery with Velero                             │
│                                                             │
│ He's been working with Kubernetes since 2018, from startup  │
│ to enterprise banking scale.                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘

    [Projects]  [GCP Experience]  [Certifications]
```

**Fallback for unmatched questions:**

```
┌─────────────────────────────────────────────────────────────┐
│ 👤  what's your favorite food?                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🐕                                                          │
│                                                             │
│ *tilts head* Hmm, I only know about my human's work stuff!  │
│                                                             │
│ Try asking about his experience, skills, projects, or       │
│ certifications - or just click a topic below!               │
│                                                             │
│ (But between us, MY favorite food is definitely treats 🦴)  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

    [Experience]  [Skills]  [Projects]  [Contact]
```

---

### 5. Easter Egg: AI Keywords

If user types "AI", "LLM", "artificial intelligence", "machine learning", or "GPT", trigger the AI & Experiments response:

```
┌─────────────────────────────────────────────────────────────┐
│ 👤  AI                                                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🐕                                                          │
│                                                             │
│ *ears perk up* Oh, you want to know about AI?               │
│                                                             │
│ My human's been deep into this lately:                      │
│ • AI-assisted coding (that's how he built me!)              │
│ • Running local LLMs for dev workflows                      │
│ • Exploring RAG patterns and embeddings                     │
│ • Building agents with LangChain & LangGraph                │
│                                                             │
│ I think treats are the future, but what do I know? 🦴       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

    [AI & Experiments]  [Projects]  [Skills]  [Contact]
```

This ensures anyone curious about AI gets a great response, even if they don't click the chip.

---

## Common User Journeys

### Journey 1: Busy Recruiter (30 seconds)

```
LOAD PAGE
    │
    ▼
┌─────────────────────────────────────┐
│ Sees intro: "14 years, ANZ, Go,     │
│ Kubernetes, GCP certified"          │
│                                     │
│ ✓ Gets the gist immediately         │
└─────────────────────────────────────┘
    │
    ▼
CLICKS [Contact]
    │
    ▼
┌─────────────────────────────────────┐
│ Sees LinkedIn, email, phone         │
│                                     │
│ ✓ Copies LinkedIn URL, moves on     │
└─────────────────────────────────────┘
```

**Total time: 30 seconds**
**Interaction: 1 click**

---

### Journey 2: Hiring Manager Validating Skills (2 minutes)

```
LOAD PAGE
    │
    ▼
READS INTRO
    │
    ▼
CLICKS [Skills]
    │
    ▼
┌─────────────────────────────────────┐
│ Sees skills grouped by category     │
│ - Cloud: GCP (deep), AWS (some)     │
│ - Platform: K8s, Terraform, Helm    │
│ - Languages: Go, Python             │
│                                     │
│ Thinks: "GCP focus, not AWS heavy"  │
└─────────────────────────────────────┘
    │
    ▼
TYPES "terraform experience"
    │
    ▼
┌─────────────────────────────────────┐
│ Gets detailed Terraform response    │
│ including custom provider project   │
│                                     │
│ ✓ Validated: "Strong IaC skills"    │
└─────────────────────────────────────┘
    │
    ▼
CLICKS [Contact]
```

**Total time: 2 minutes**
**Interactions: 2 clicks, 1 typed question**

---

### Journey 3: Technical Interviewer Deep Dive (5+ minutes)

```
LOAD PAGE
    │
    ▼
CLICKS [Projects]
    │
    ▼
┌─────────────────────────────────────┐
│ Sees project list:                  │
│ - Internal Developer Platform       │
│ - Terraform Provider (MuleSoft)     │
│ - Kubernetes Operators              │
└─────────────────────────────────────┘
    │
    ▼
CLICKS [IDP Details]
    │
    ▼
┌─────────────────────────────────────┐
│ Detailed explanation of IDP         │
│ - Problem it solves                 │
│ - Tech stack (Go, K8s, GCP)         │
│ - Impact                            │
└─────────────────────────────────────┘
    │
    ▼
TYPES "tell me about the terraform provider"
    │
    ▼
┌─────────────────────────────────────┐
│ Detailed explanation:               │
│ - Built from scratch                │
│ - MuleSoft CloudHub integration     │
│ - IaC for integration resources     │
└─────────────────────────────────────┘
    │
    ▼
CLICKS [GitHub] (external link)
```

**Total time: 5+ minutes**
**Interactions: Multiple, exploring depth**

---

## Content Hierarchy

### Level 0: Instant Value (No Click)
- Name, title, location
- 14 years experience
- Current role (ANZ, Platform Engineer)
- Key tech (Go, Kubernetes, GCP)
- Certifications headline

### Level 1: Topic Overview (1 Click)
- Experience timeline (all roles, brief)
- Skills by category
- Project list
- Education summary
- Contact links

### Level 2: Details (2 Clicks)
- Specific role details
- Project deep-dives
- Certification details
- Tech-specific experience

### Level 3: Free Exploration (Typed Questions - Secondary)
- Specific tech questions (if matched)
- Comparison questions ("GCP vs AWS?") (if matched)
- Graceful redirect to chips if no match
- **Future LLM mode:** Could handle any question intelligently

---

## Quick Access Patterns

### Always Visible
- Name and title (header)
- Social links (footer): LinkedIn, GitHub, Blog
- Input field (can always type)

### Persistent Chips (After Any Response)
Always show contextual navigation with number keys:
```
[0] ← Back  [1] Experience  [2] Skills  [3] Contact
```

### Keyboard Navigation (Primary - Claude Code Style)

**Design Philosophy:** Keyboard-first interaction like Claude Code CLI. Mouse clicks work but keyboard is the primary way to navigate.

**Number Keys for Chip Selection:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   What would you like to sniff out?                         │
│                                                             │
│   [1] Experience    [2] Projects    [3] Skills              │
│   [4] AI & Expts    [5] Education   [6] Contact             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Press 1-6 to select, or click with mouse
```

**Keyboard Shortcuts:**
| Key | Action |
|-----|--------|
| `1-9` | Select chip by number (shown in brackets) |
| `←` / `→` | Navigate between chips horizontally |
| `↑` / `↓` | Navigate between chip rows |
| `Enter` | Select focused chip / send typed message |
| `Esc` | Clear input / go back |
| `/` | Focus input field |

**Arrow Key Navigation:**
- Chips have a "focused" state (highlighted border)
- Arrow keys move focus between chips
- `Enter` activates the focused chip
- Focus wraps around (right arrow on last chip → first chip)
- Visual indicator shows which chip is focused:
```
  [1] Experience   [[2] Projects]   [3] Skills
                    ↑ focused (highlighted)
```

**Visual Design:**
- Show number in brackets before each chip: `[1] Experience`
- Subtle styling - number should be visible but not distracting
- On hover/focus, highlight the chip
- Mouse click also works for accessibility

**Mobile Note:** On mobile, number keys aren't practical - rely on touch/tap instead

---

## Micro-Interactions

### Typing Indicator
When Hachi "responds", show `hachiko_thinking.gif` (tail wagging) for 500-800ms:
```
┌─────────────────────────────────────┐
│ [hachiko_thinking.gif]  ●●●         │
└─────────────────────────────────────┘
```
Then swap to `hachiko_steady.gif` and reveal message with fade-in.

### Chip Hover
Subtle scale + glow on hover:
```
Before:  [Experience]
Hover:   【Experience】 (slight grow + border glow)
```

### Message Appear
Messages slide in from bottom with fade:
```
↑ New message slides up and fades in
```

### Scroll Behavior
- Auto-scroll to latest message
- Smooth scrolling
- "Scroll to bottom" button if user scrolled up

---

## Edge Cases

### Very Long Conversations
- Keep last 20 messages visible
- Older messages fade out (or "Show earlier" button)
- Prevents page from getting too heavy

### Rapid Clicking
- Debounce chip clicks (300ms)
- Show loading state if needed

### No JavaScript
- Fallback: Show static content with all sections expanded
- Basic HTML structure remains readable

### Screen Readers
- Proper ARIA labels on chat messages
- Live region for new messages
- Chips are buttons with clear labels

---

## Content Tone

### Hachi's Personality
- **Enthusiastic & loyal** - Proud of his human, eager to share
- **Professional core** - Content is accurate and substantive
- **Playful touches** - Dog mannerisms (*tail wags*, *ears perk up*) but not overused
- **Helpful** - Always offers next steps
- **Warm** - Makes visitors feel welcome

### Example Tone:
```
❌ "OMG yes he totally knows Kubernetes!!!"
❌ "He has experience with Kubernetes."
✅ "*ears perk up* Oh, Kubernetes! My human loves that stuff!
    He's been building Operators in Go and managing GKE
    clusters since 2018."
```

### Dog Mannerisms (Use Sparingly)
- `*tail wags*` - When sharing good news or accomplishments
- `*ears perk up*` - When recognizing a keyword/topic
- `*fetches the info*` - When retrieving data
- `*tilts head*` - When confused or fallback
- `*brings back*` - When returning with details
- `🦴` - Occasional bone emoji as signature

**Rule:** Max 1 dog mannerism per message. Keep it subtle.

---

## Success Metrics (Conceptual)

1. **Time to key info** - Can user understand profile in <10 seconds?
2. **Clicks to contact** - Maximum 2 clicks to reach contact info
3. **Mobile usability** - Full functionality on phone
4. **Bounce rate** - Does the intro hook keep people engaged?

---

## Summary

The interface prioritizes **instant value delivery** for time-poor recruiters while allowing **progressive exploration** for those who want depth. Hachi the Golden Retriever makes the portfolio memorable and approachable while the chip-based navigation ensures discoverability without requiring users to guess what to type.

Key differentiators:
- **Hachi** - A loyal dog assistant that stands out from typical portfolios
- **Proactive** - Hachi tells you about Koustubh before you even ask
- **Personal** - Shows personality while staying professional
- **Japan connection** - "Hachi" references the famous loyal dog, tying to Koustubh's years in Tokyo

---

## Future Enhancements

### Phase 1 (Current Build): Pre-written Responses
- Chip-based navigation (primary)
- Keyword matching for typed input (secondary)
- Graceful fallback to chips when no match
- Content sourced from `app/data/resume_data.yaml`
- Fast, free, offline-capable, works everywhere

### Phase 2: Browser-Based LLM ("Smart Hachi")
Add "Enable Smart Hachi" toggle for in-browser AI:
1. Integrate WebLLM with smallest viable model (SmolLM-360M preferred)
2. Download model (~300MB) on user opt-in - fast ~1 min download
3. Cache in IndexedDB for return visits
4. Inject resume_data.yaml as context
5. Show download progress, loading states
6. Fallback to Basic mode if WebGPU unavailable

**Priority: Speed over quality** - smaller model with faster load times is preferred even if responses are less polished.

**Why browser LLM over API:**
- Zero cost (no API fees)
- Privacy (nothing leaves the browser)
- Offline capable after download
- Impressive tech demo ("this runs locally!")

### Phase 3: API LLM (Optional)
If browser LLM proves insufficient:
1. Add Claude/OpenAI API configuration
2. Hybrid mode: browser LLM for most, API for complex
3. Rate limiting and response caching
4. Cost monitoring

### Phase 4: Enhanced Features
- Voice input ("Hey Hachi, tell me about...")
- Multi-language support (Japanese given the Japan connection)
- Analytics on common questions
- Animated Hachi (tail wag on response, thinking animation)
- `hachiko_thinking.gif` for loading states
