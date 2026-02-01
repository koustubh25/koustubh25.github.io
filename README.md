# Koustubh Gaikwad - Portfolio Website

**Live Site:** [https://koustubh25.github.io](https://koustubh25.github.io)

A conversational portfolio website featuring Hachi, a Golden Retriever AI assistant who presents professional information through an engaging chat interface.

## Features

- **Hachi AI Assistant**: Conversational interface with warm personality
- **Keyboard-First Navigation**: Number keys (1-9) and arrow keys for quick navigation
- **Pre-written Responses**: Instant responses covering all professional topics
- **Warm Theme**: Golden/amber accents on dark background
- **Fully Responsive**: Mobile-first design with touch optimization
- **Accessible**: ARIA labels, keyboard navigation, screen reader support

## User Journeys

### 1. Busy Recruiter (30 seconds)
**Goal:** Quick assessment of candidate qualifications

1. Load page
2. Read Hachi's intro message (see key qualifications immediately)
3. Click `[6] Contact`
4. Copy LinkedIn URL

**Time:** ~30 seconds | **Interactions:** 1 click

### 2. Hiring Manager Validating Skills (2 minutes)
**Goal:** Verify specific technical skills

1. Load page
2. Read intro
3. Click `[3] Skills`
4. Type "terraform experience"
5. Read detailed Terraform response
6. Click `[6] Contact`

**Time:** ~2 minutes | **Interactions:** 2 clicks, 1 typed question

### 3. Technical Interviewer Deep Dive (5+ minutes)
**Goal:** Understand technical depth and projects

1. Load page
2. Click `[2] Projects`
3. Click `[1] IDP Details`
4. Type "tell me about the terraform provider"
5. Click `[1] Kubernetes`
6. Navigate to GitHub

**Time:** 5+ minutes | **Interactions:** Multiple clicks and questions

## Content Hierarchy

### Level 0: Instant Value (No Click)
- Name, title, location
- 14 years experience across 4 countries
- Current role: Platform Engineer at ANZ
- Key tech: Go, Kubernetes, GCP
- GCP certifications

### Level 1: Topic Overview (1 Click)
- **Experience**: Timeline of all roles
- **Projects**: IDP, Terraform Provider, K8s Operators
- **Skills**: Cloud, Platform, Languages, DevOps
- **AI & Experiments**: AI-assisted coding, LLMs, RAG, LangChain
- **Education**: Master's (Keio), Bachelor's (Pune)
- **Contact**: Email, phone, LinkedIn, GitHub, blog

### Level 2: Details (2 Clicks)
- Specific role details (ANZ, Japan)
- Project deep-dives (problem/solution/impact)
- Skill specializations (Kubernetes, Go, Terraform, GCP)
- Certifications with dates

### Level 3: Free Exploration (Typed Questions)
- Keyword matching (50+ keywords)
- Easter eggs (AI keywords)
- Graceful fallbacks

## Technology Stack

- **Frontend**: Vanilla JavaScript (no frameworks)
- **Styling**: CSS3 with CSS Variables
- **Data**: Parsed from `data/resume_data.yaml`
- **Hosting**: GitHub Pages
- **Assets**: GIF avatars (Hachi steady/thinking)

## File Structure

```
.
├── index.html              # Main HTML structure
├── css/
│   └── styles.css          # Warm theme, responsive design
├── js/
│   ├── app.js              # Main application logic
│   ├── data.js             # Parsed resume data
│   └── responses.js        # Conversation tree
├── static/
│   ├── hachiko_steady.gif  # Hachi avatar (48px)
│   └── hachiko_thinking.gif # Loading indicator
└── data/
    └── resume_data.yaml    # Single source of truth
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `1-9` | Select chip by number |
| `←→↑↓` | Navigate between chips |
| `Enter` | Activate focused chip / Submit input |
| `Esc` | Clear input field |
| `/` | Focus text input |

## Hachi's Personality

- **Enthusiastic but professional**: Proud of his human's achievements
- **Helpful**: Always offers next steps
- **Playful touches**: Max 1 dog mannerism per message (*tail wags*, *ears perk up*)
- **Honest about limitations**: Knows only about work topics

### Example Responses

```
"*ears perk up* Oh, Kubernetes! My human loves that stuff!"

"*tail wags* This is where my human spends most of his time!"

"*tilts head* Hmm, I only know about my human's work stuff!"
```

## Development

### Local Testing

```bash
# Start a simple HTTP server
python3 -m http.server 8000

# Visit http://localhost:8000
```

### Updating Content

All content comes from `data/resume_data.yaml`. To update:

1. Edit `data/resume_data.yaml`
2. The changes will be reflected in `js/data.js` (manual sync for now)
3. Commit and push to deploy

### Making Changes

```bash
# Make your changes
git add .
git commit -m "Your descriptive message"
git push origin main

# GitHub Pages auto-deploys from main branch
# Site updates in 1-2 minutes
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- ✓ Semantic HTML
- ✓ ARIA labels and roles
- ✓ Keyboard navigation
- ✓ Screen reader support
- ✓ Color contrast (WCAG AA)
- ✓ Reduced motion support
- ✓ Focus indicators

## Performance

- Fast load times (< 3s)
- No external dependencies
- Optimized GIFs
- CSS animations (60fps)
- No layout shift

## Future Enhancements (Phase 2)

Phase 2 will add browser-based LLM:

- **Smart Hachi Mode**: Optional WebLLM integration
- **Model**: SmolLM-360M (~300MB, one-time download)
- **Benefits**: Answer ANY question, runs locally, no API costs
- **Mobile**: Disabled on mobile (battery/performance)

Phase 2 NOT yet implemented.

## Credits

Built with assistance from Claude (Anthropic).

Design inspired by the warmth and loyalty of Hachi, Koustubh's Golden Retriever, and Hachiko, the famous loyal dog from Tokyo.

## License

© 2026 Koustubh Gaikwad. All rights reserved.

---

**Made with ❤️ (and 🦴) by Koustubh and Hachi**
