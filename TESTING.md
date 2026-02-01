# Testing Checklist - AI Agent Portfolio

This document provides a comprehensive testing checklist for the LangGraph-inspired portfolio website.

## Quick Start Testing

### Local Testing
```bash
# Start local server
python3 -m http.server 8000

# Or use any other static server
npx http-server -p 8000

# Open in browser
http://localhost:8000
```

## Browser Testing Matrix

### Desktop Browsers

| Browser | Version | OS | Status | Notes |
|---------|---------|----|----|-------|
| Chrome | Latest | macOS | ⏳ Pending | Baseline |
| Chrome | Latest | Windows | ⏳ Pending | |
| Chrome | Latest | Linux | ⏳ Pending | |
| Firefox | Latest | macOS | ⏳ Pending | SVG rendering |
| Firefox | Latest | Windows | ⏳ Pending | |
| Safari | Latest | macOS | ⏳ Pending | Webkit-specific |
| Edge | Latest | Windows | ⏳ Pending | Chromium |

### Mobile Browsers

| Browser | Device | Size | Status | Notes |
|---------|--------|------|--------|-------|
| Safari | iPhone SE | 375×667 | ⏳ Pending | Smallest |
| Safari | iPhone 12/13 | 390×844 | ⏳ Pending | Standard |
| Safari | iPhone 14 Pro Max | 430×932 | ⏳ Pending | Largest |
| Safari | iPad | 768×1024 | ⏳ Pending | Tablet |
| Chrome | Android (small) | 360×640 | ⏳ Pending | Budget |
| Chrome | Android (large) | 412×915 | ⏳ Pending | Flagship |

## Functional Testing Checklist

### 1. Graph Interaction (Desktop)

- [ ] **Router Node**
  - [ ] Click opens info (or does nothing - as designed)
  - [ ] Visual feedback on hover
  - [ ] Keyboard accessible (Tab + Enter)

- [ ] **Experience Node**
  - [ ] Click triggers animation sequence (~1.8s)
  - [ ] Edge animates to vector store
  - [ ] Particles flow along edge
  - [ ] Vector store pulses
  - [ ] Panel opens with content
  - [ ] Timeline displays correctly

- [ ] **Projects Node**
  - [ ] Animation sequence complete
  - [ ] Panel shows 3+ projects
  - [ ] Problem/Solution/Impact format
  - [ ] Tech tags visible

- [ ] **Skills Node**
  - [ ] Animation sequence complete
  - [ ] Skill bars animate
  - [ ] Percentages match bars
  - [ ] Categories organized

- [ ] **AI Tools Node**
  - [ ] Animation sequence complete
  - [ ] Daily workflow section
  - [ ] Experiments section (4 items)
  - [ ] Status badges (Active/Experimental)

- [ ] **Contact Node**
  - [ ] Animation sequence complete
  - [ ] Email address correct
  - [ ] LinkedIn link works
  - [ ] GitHub link works
  - [ ] Opens in new tab

- [ ] **Vector Store Node**
  - [ ] Not clickable (visual only)
  - [ ] Pulses during agent queries
  - [ ] Position correct

### 2. Response Panel

- [ ] **Opening Animation**
  - [ ] Slides up smoothly (0.4s)
  - [ ] No jank or stuttering
  - [ ] Backdrop fades in
  - [ ] Content loads immediately

- [ ] **Panel Header**
  - [ ] "Back to Graph" button works
  - [ ] Close (✕) button works
  - [ ] Minimize (−) button works
  - [ ] Buttons keyboard accessible

- [ ] **Panel Metadata**
  - [ ] Agent icon correct
  - [ ] Agent name correct
  - [ ] "Retrieved from: resume_data.yaml"
  - [ ] Query shows agent type
  - [ ] Token count present

- [ ] **Panel Content**
  - [ ] Scrolling works
  - [ ] Content formatted correctly
  - [ ] Links work
  - [ ] Timeline items aligned
  - [ ] Skill bars animate

- [ ] **Closing Methods**
  - [ ] Close button
  - [ ] Back button
  - [ ] Backdrop click
  - [ ] Escape key
  - [ ] Browser back button
  - [ ] All methods work correctly

### 3. Mobile Layout (< 768px)

- [ ] **Linear Card Layout**
  - [ ] Nodes display as vertical cards
  - [ ] No graph visualization
  - [ ] Cards have adequate spacing
  - [ ] Touch targets ≥ 44px

- [ ] **Card Interactions**
  - [ ] Touch feedback on press
  - [ ] Visual state change (pressed)
  - [ ] No accidental double-taps
  - [ ] Scrolling doesn't trigger tap

- [ ] **Mobile Panel**
  - [ ] Opens full screen
  - [ ] Slides up from bottom
  - [ ] No backdrop (full screen)
  - [ ] Close returns to cards
  - [ ] Content scrollable

- [ ] **Connecting Arrows**
  - [ ] Arrows between cards
  - [ ] No arrow after last card
  - [ ] Animates when active

- [ ] **No Horizontal Scroll**
  - [ ] All content fits width
  - [ ] Cards don't overflow
  - [ ] Panel doesn't overflow

### 4. Tablet Layout (768px - 1199px)

- [ ] **Grid Layout**
  - [ ] 3-column grid
  - [ ] Router spans full width
  - [ ] Vector store centered bottom
  - [ ] Nodes positioned correctly

- [ ] **Simplified Edges**
  - [ ] Edges visible
  - [ ] Thinner than desktop
  - [ ] Smaller particles
  - [ ] Animations smooth

- [ ] **Panel Behavior**
  - [ ] 90% width
  - [ ] Centered
  - [ ] Backdrop works
  - [ ] Content readable

### 5. Keyboard Navigation

- [ ] **Tab Navigation**
  - [ ] Tab moves through nodes
  - [ ] Focus visible (cyan outline)
  - [ ] Tab order logical
  - [ ] Skip link works (Tab from top)

- [ ] **Arrow Keys**
  - [ ] Right/Down: next node
  - [ ] Left/Up: previous node
  - [ ] Cycles through all nodes
  - [ ] Works when panel closed

- [ ] **Activation**
  - [ ] Enter activates node
  - [ ] Space activates node
  - [ ] Opens panel correctly

- [ ] **Panel Focus Trap**
  - [ ] Tab stays in panel
  - [ ] Shift+Tab works
  - [ ] Cycles first ↔ last
  - [ ] Focus returns on close

- [ ] **Escape Key**
  - [ ] Closes panel
  - [ ] Focus returns to node
  - [ ] Works from anywhere in panel

### 6. Accessibility

- [ ] **Screen Reader**
  - [ ] Announces "Portfolio loaded"
  - [ ] Announces panel opens
  - [ ] Announces panel closes
  - [ ] Node labels read correctly

- [ ] **ARIA Attributes**
  - [ ] role="button" on nodes
  - [ ] role="dialog" on panel
  - [ ] aria-label on all nodes
  - [ ] aria-hidden on edges/particles
  - [ ] aria-live announcements

- [ ] **Color Contrast**
  - [ ] Text readable on background
  - [ ] Meets WCAG AA (4.5:1)
  - [ ] Focus indicators visible
  - [ ] Link colors distinguishable

- [ ] **Reduced Motion**
  - [ ] Particles disabled
  - [ ] Edges static
  - [ ] Transitions quick
  - [ ] Core functionality works

### 7. Content Accuracy

- [ ] **Experience Timeline**
  - [ ] ANZ 2022-Present
  - [ ] Acting Tech Lead 2020-2022
  - [ ] Rakuten 2015-2020
  - [ ] Dates accurate
  - [ ] Roles accurate

- [ ] **Projects**
  - [ ] Internal Developer Platform
  - [ ] Custom Terraform Provider
  - [ ] Kubernetes Operators
  - [ ] Problem/Solution/Impact clear
  - [ ] Tech stacks correct

- [ ] **Skills**
  - [ ] Kubernetes 95%
  - [ ] GCP 90%
  - [ ] Go 92%
  - [ ] All categories present
  - [ ] Bars animate

- [ ] **AI Tools**
  - [ ] Claude Code
  - [ ] Gemini CLI
  - [ ] LangGraph
  - [ ] Local LLMs
  - [ ] Status badges

- [ ] **Contact**
  - [ ] Email: koustubh.gaikwad@gmail.com
  - [ ] LinkedIn: /in/koustubhg/
  - [ ] GitHub: koustubh25
  - [ ] All links work

## Performance Testing

### Lighthouse Audit

```bash
# Run Lighthouse (Chrome DevTools)
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Select "Performance, Accessibility, Best Practices, SEO"
# 4. Click "Generate report"
```

**Target Scores:**
- [ ] Performance: > 90
- [ ] Accessibility: > 95
- [ ] Best Practices: > 90
- [ ] SEO: > 90

### Core Web Vitals

- [ ] **FCP (First Contentful Paint)**
  - Target: < 1s
  - Actual: _____

- [ ] **LCP (Largest Contentful Paint)**
  - Target: < 2.5s
  - Actual: _____

- [ ] **FID (First Input Delay)**
  - Target: < 100ms
  - Actual: _____

- [ ] **CLS (Cumulative Layout Shift)**
  - Target: < 0.1
  - Actual: _____

### Network Testing

- [ ] **Fast 3G**
  - [ ] Loads acceptably
  - [ ] Animations smooth
  - [ ] Content readable

- [ ] **Slow 3G**
  - [ ] Core features work
  - [ ] Graceful degradation
  - [ ] No broken UI

- [ ] **Offline**
  - [ ] Graceful error message
  - [ ] No blank screen
  - [ ] Retry option

### Animation Performance

- [ ] **60fps Target**
  - [ ] Particle animations
  - [ ] Edge animations
  - [ ] Panel slide
  - [ ] Node transitions
  - [ ] No dropped frames

- [ ] **Chrome DevTools Performance**
  ```
  1. Open DevTools > Performance
  2. Click Record
  3. Interact with site
  4. Stop recording
  5. Check for jank (yellow/red bars)
  ```

## User Journey Testing

### Journey 1: Technical Recruiter (< 1 min)

**Goal:** Quick skill verification and contact

```
Steps:
1. Load page
2. Read intro text
3. Click "Skills" node
4. Scan skill bars (Kubernetes, GCP, Go)
5. Click "Contact" node
6. Copy LinkedIn URL

Success: Complete in < 60 seconds
```

- [ ] Journey completed
- [ ] Time: _____ seconds
- [ ] All information found
- [ ] No confusion

### Journey 2: Engineering Manager (< 3 min)

**Goal:** Evaluate technical depth and projects

```
Steps:
1. Load page
2. Notice LangGraph design
3. Click "Projects" node
4. Read IDP project details
5. Click "AI Tools" node
6. Review experiments
7. Click "Experience" node
8. Verify ANZ employment
9. Click GitHub link (new tab)

Success: Understands technical capability
```

- [ ] Journey completed
- [ ] Time: _____ seconds
- [ ] Technical depth clear
- [ ] Projects impressive
- [ ] No information missing

### Journey 3: AI/ML Recruiter (< 2 min)

**Goal:** Verify AI expertise

```
Steps:
1. Load page (notices agent architecture)
2. Reads "LangGraph" mention
3. Click "AI Tools" node
4. Sees Claude Code, Gemini CLI, LangGraph
5. Reads experiments (RAG, local LLMs)
6. Click "Projects" node
7. Validates Kubernetes/Go depth
8. Click "Contact" node

Success: AI expertise evident from design + content
```

- [ ] Journey completed
- [ ] Time: _____ seconds
- [ ] AI expertise clear
- [ ] Design reinforces message
- [ ] Contact easy to find

## Edge Case Testing

### Rapid Interactions

- [ ] **Double Click Node**
  - [ ] No double-trigger
  - [ ] Animation lock prevents issues
  - [ ] State remains consistent

- [ ] **Click During Animation**
  - [ ] Ignored gracefully
  - [ ] No broken state
  - [ ] Console message (dev mode)

- [ ] **Spam Click Different Nodes**
  - [ ] Queued or ignored
  - [ ] No race conditions
  - [ ] UI consistent

### Browser Navigation

- [ ] **Back Button**
  - [ ] Panel closes
  - [ ] Returns to graph
  - [ ] No broken state

- [ ] **Forward Button**
  - [ ] Panel reopens (if was open)
  - [ ] Correct content
  - [ ] State restored

- [ ] **Refresh During Animation**
  - [ ] Resets cleanly
  - [ ] No errors
  - [ ] Reinitializes correctly

### Extreme Screen Sizes

- [ ] **Very Wide (3440×1440)**
  - [ ] Graph centered
  - [ ] Max-width constraints
  - [ ] No excessive stretching

- [ ] **Very Narrow (320px)**
  - [ ] Mobile cards fit
  - [ ] Text doesn't overflow
  - [ ] Touch targets adequate

- [ ] **Very Tall (1080×1920 portrait)**
  - [ ] Content flows correctly
  - [ ] No layout breaks
  - [ ] Scrolling works

### Low-End Devices

- [ ] **Slow CPU**
  - [ ] Animations degrade gracefully
  - [ ] Core functionality works
  - [ ] No freezing

- [ ] **Low Memory**
  - [ ] No memory leaks
  - [ ] Stable over time
  - [ ] No crashes

## Developer Tools Checks

### Console

- [ ] **No Errors**
  - [ ] On page load
  - [ ] During interactions
  - [ ] On panel open/close

- [ ] **No Warnings**
  - [ ] Or all warnings explained
  - [ ] No deprecation warnings

- [ ] **Expected Logs** (Dev Mode)
  - [ ] "Main application module loaded"
  - [ ] "Edge animations module loaded"
  - [ ] "Portfolio application initialized"
  - [ ] Performance measurements

### Network

- [ ] **Total Bundle Size**
  - Target: < 100KB
  - HTML: ~5KB
  - CSS: ~20KB
  - JS: ~30KB
  - Fonts: (external)
  - Total: _____KB

- [ ] **Resource Loading**
  - [ ] No 404 errors
  - [ ] Fonts load correctly
  - [ ] CSS loads
  - [ ] JS loads in order

- [ ] **Caching**
  - [ ] CSS cached
  - [ ] JS cached
  - [ ] Fonts cached
  - [ ] HTML not cached

### Performance Panel

- [ ] **No Layout Thrashing**
  - [ ] Reads batched
  - [ ] Writes batched
  - [ ] No interleaving

- [ ] **Efficient Repaints**
  - [ ] Only changed elements
  - [ ] Composited animations
  - [ ] No full-page repaints

- [ ] **Memory Stable**
  - [ ] No upward trend
  - [ ] Garbage collection healthy
  - [ ] No detached DOM nodes

## Real Device Testing

### Minimum Required

- [ ] **Mac (Safari)**
  - Device: _____________
  - Version: _____________
  - Issues: _____________

- [ ] **Windows PC (Chrome/Edge)**
  - Device: _____________
  - Version: _____________
  - Issues: _____________

- [ ] **iPhone (Safari)**
  - Model: _____________
  - iOS: _____________
  - Issues: _____________

- [ ] **Android Phone (Chrome)**
  - Model: _____________
  - Android: _____________
  - Issues: _____________

## Regression Testing

After any changes, re-verify:

- [ ] All graphs render
- [ ] All panels open
- [ ] All content accurate
- [ ] All links work
- [ ] No new console errors
- [ ] Performance maintained
- [ ] Accessibility maintained

## Known Issues

Document any issues found:

1. **Issue:** _________________
   **Severity:** Critical/High/Medium/Low
   **Browser:** _________________
   **Steps to Reproduce:** _________________
   **Workaround:** _________________

2. **Issue:** _________________
   **Severity:** Critical/High/Medium/Low
   **Browser:** _________________
   **Steps to Reproduce:** _________________
   **Workaround:** _________________

## Sign-Off

**Tested By:** _________________
**Date:** _________________
**Ready for Production:** [ ] Yes [ ] No
**Notes:** _________________
