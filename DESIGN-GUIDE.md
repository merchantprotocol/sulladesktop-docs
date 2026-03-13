# Merchant Protocol Design Guide

> This document defines the Merchant Protocol brand design system. It is the single source of truth for colors, typography, spacing, effects, and component patterns used across all Merchant Protocol properties — including docs, marketing pages, and tools. The canonical reference is the main website theme at `www-merchantprotocol/wp-content/themes/merchantprotocol`.

---

## 1. IDENTITY & AESTHETIC

**Noir Terminal Editorial** — three visual languages fused into one:

1. **Terminal** — Green-on-black, monospace type, `$` command prompts, traffic-light window chrome, terminal output formatting. The skeleton of the brand.

2. **Magazine Editorial** — Playfair Display serif headlines at 900 weight, magazine-style layouts, running headers, pull quotes with green left borders, drop caps. Think Bloomberg Businessweek meets a hacker zine.

3. **Cinematic** — Static CRT scanlines, film grain noise, vignette darkening at edges, radial green glows, cursor glow that follows the mouse. Matrix-style green character rain is optional and site-specific (e.g. marketing homepage only, not documentation sites).

**The mood is:**

- Dark, moody, premium — not playful or startup-y
- Terminal/hacker energy — green-on-black, monospace, command prompts
- Editorial sophistication — serif headlines, magazine-style layouts
- Cinematic atmosphere — static CRT scanlines, film grain, vignette, cursor glow
- Confident & sparse — lots of negative space, no clutter, no unnecessary color
- Masculine, cinematic — no pastels, no bubbly UI, no light themes

---

## 2. COLOR PALETTE

### Core Colors (CSS Custom Properties)

```css
:root {
  /* Backgrounds — darkest to lightest */
  --bg: #0d1117; /* Main page background */
  --surface-1: #161b22; /* Cards, sidebars, elevated surfaces */
  --surface-2: #1c2128; /* Terminal bars, secondary surfaces */
  --surface-3: #21262d; /* Tertiary surfaces, overlays */

  /* Borders */
  --border: #30363d; /* Primary borders */
  --border-muted: #21262d; /* Subtle borders */

  /* Text */
  --text: #e6edf3; /* Primary text (near-white) */
  --text-muted: #8b949e; /* Secondary text (gray) */
  --text-dim: #6e7681; /* Tertiary text (dim gray) */

  /* Green accent system — THE signature color */
  --green: #2ea043; /* Base green (buttons, borders, accents) */
  --green-bright: #3fb950; /* Bright green (highlights, hover states) */
  --green-glow: rgba(
    46,
    160,
    67,
    0.4
  ); /* Standard glow for box-shadows */
  --green-glow-soft: rgba(
    63,
    185,
    80,
    0.15
  ); /* Subtle glow for ambient effects */
  --green-glow-strong: rgba(
    63,
    185,
    80,
    0.6
  ); /* Intense glow for hover/active states */

  /* Terminal traffic light dots */
  --red-dot: #ff5f57;
  --yellow-dot: #febc2e;
  --green-dot: #28c840;
}
```

### Extended Green Scale

| Token            | Hex           | Usage                                              |
| ---------------- | ------------- | -------------------------------------------------- |
| Green Darkest    | `#196c2e`     | Deepest green accent                               |
| Green Darker     | `#238636`     | Dark green                                         |
| Green Dark       | `#2EA043`     | Base green — buttons, borders                      |
| **Green Bright** | **`#3FB950`** | **Primary brand color — links, highlights, hover** |
| Green Light      | `#56d364`     | Light green accents                                |
| Green Lighter    | `#7ee787`     | Matrix rain bright heads                           |
| Green Lightest   | `#aff5b4`     | Lightest green tint                                |

### Emphasis Scale (Gray Ramp)

| Level | Hex       | Usage                          |
| ----- | --------- | ------------------------------ |
| 0     | `#0d1117` | Deepest background             |
| 100   | `#161b22` | Cards, surfaces                |
| 200   | `#1c2128` | Tint color, secondary surfaces |
| 300   | `#21262d` | Tertiary surfaces              |
| 400   | `#30363d` | Borders, dividers              |
| 500   | `#484f58` | Mid-gray                       |
| 600   | `#6e7681` | Dim text                       |
| 700   | `#8b949e` | Muted/secondary text           |
| 800   | `#b1bac4` | Light text                     |
| 900   | `#e6edf3` | Primary text                   |
| 1000  | `#ffffff` | Pure white                     |

### Status Colors

| Status  | Hex       | Usage                                |
| ------- | --------- | ------------------------------------ |
| Info    | `#58a6ff` | Informational alerts                 |
| Success | `#3FB950` | Success states (same as brand green) |
| Warning | `#e3b341` | Warning alerts                       |
| Danger  | `#f85149` | Error/danger states                  |

### Syntax Highlighting Colors

| Token             | Hex       | Usage                        |
| ----------------- | --------- | ---------------------------- |
| Comment           | `#6e7681` | Code comments                |
| Punctuation       | `#8b949e` | Brackets, semicolons         |
| Keyword           | `#ff7b72` | Language keywords (red)      |
| String            | `#a5d6ff` | String literals (light blue) |
| Number/Constant   | `#79c0ff` | Numbers, constants (blue)    |
| Function          | `#d2a8ff` | Function names (purple)      |
| Property/Operator | `#7ee787` | Properties (green)           |
| Variable          | `#ffa657` | Variables (orange)           |

### Colors That Do NOT Belong

- **No blue links** — links are always `#3FB950` (green-bright), never blue
- **No blue primary** — the old Hasura base had `#3482f3` as primary; this must be fully overridden
- **No bright colors** — no multi-color palettes, no pastels, no gradients
- **No light themes** — dark mode only, enforced

---

## 3. TYPOGRAPHY

### Font Families

Three font families, each with a specific role:

```css
:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

| Font                 | Role                                                                                      | Source                                    |
| -------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------- |
| **Playfair Display** | Display headlines, editorial elements, stat numbers                                       | Google Fonts (400, 700, 900 weights)      |
| **JetBrains Mono**   | Code, terminal text, UI labels, nav links, section labels, body text in terminal contexts | Google Fonts (300, 400, 500, 700 weights) |
| **System Sans**      | Long-form body text in articles/docs                                                      | System font stack                         |

**Google Fonts Import:**

```html
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=JetBrains+Mono:wght@300;400;500;700&display=swap"
  rel="stylesheet" />
```

### Type Scale

| Element             | Font             | Weight | Size                         | Line-Height | Notes                                     |
| ------------------- | ---------------- | ------ | ---------------------------- | ----------- | ----------------------------------------- |
| Body default        | `--font-mono`    | 400    | 16px (inherited)             | 1.7         | Terminal aesthetic                        |
| Hero headline h1    | `--font-display` | 900    | `clamp(3rem, 8vw, 6.5rem)`   | 1.05        | Green italic `<em>`                       |
| Section h2          | `--font-display` | 900    | `clamp(2.5rem, 5vw, 4.5rem)` | 1.1         | Large cinematic                           |
| Editorial h2        | `--font-display` | 900    | `clamp(2rem, 4vw, 3.5rem)`   | 1.15        | Magazine style                            |
| Product name        | `--font-display` | 900    | 1.3rem                       | —           | Color: `--green-bright`                   |
| Stat number         | `--font-display` | 900    | 3rem                         | 1           | Green-bright, text-shadow glow            |
| TOC number          | `--font-display` | 900    | 1.5rem                       | —           | Color: `--text-dim`                       |
| TOC title           | `--font-display` | 700    | 1.1rem                       | —           | Color: `--text`                           |
| Pull quote          | `--font-display` | 700    | 1.6rem                       | 1.5         | Italic, green left border                 |
| Nav logo text       | `--font-mono`    | 700    | 0.85rem                      | —           | `letter-spacing: 0.05em`                  |
| Nav links           | `--font-mono`    | 400    | 0.75rem                      | —           | Uppercase, `letter-spacing: 0.08em`       |
| Section label       | `--font-mono`    | 500    | 0.65rem                      | —           | Uppercase, `letter-spacing: 0.3em`, green |
| Running header      | `--font-mono`    | 400    | 0.6rem                       | —           | Uppercase, `letter-spacing: 0.2em`        |
| Terminal body       | `--font-mono`    | 400    | 0.85rem                      | 1.8         | Code output                               |
| Terminal title      | `--font-mono`    | 400    | 0.7rem                       | —           | Color: `--text-muted`                     |
| Editorial body      | `--font-mono`    | 400    | 0.9rem                       | 2           | Color: `--text-muted`                     |
| Body article (docs) | `--font-body`    | 400    | 1.125rem                     | 1.9         | Long-form reading                         |
| Stat label          | `--font-mono`    | 400    | 0.7rem                       | —           | Uppercase, `letter-spacing: 0.2em`        |
| Code inline         | `--font-mono`    | —      | 0.85em                       | —           | Color: `--green-bright`                   |
| Code block          | `--font-mono`    | —      | 0.8rem                       | 1.8         | Green-bright for code                     |

### Key Typography Patterns

- **Italic emphasis** on `<em>` inside headlines: `--green-bright` with `text-shadow: 0 0 40px var(--green-glow)`
- **Drop cap**: First letter of editorial text — `font-size: 4.5rem`, green-bright, floated left, `line-height: 0.75`
- **Selection**: `::selection { background: var(--green); color: #fff; }` (or `rgba(63, 185, 80, 0.3)` with white text)
- **Links**: `--green-bright` color, no underline. Hover: white with green text-shadow glow
- **Text smoothing**: `-webkit-font-smoothing: antialiased`

---

## 4. ATMOSPHERIC OVERLAYS (CRT EFFECTS)

These fixed overlays create the "CRT monitor" feel. **CRT scanlines are static — no animation.** The overlay is frozen in place.

### CRT Scanlines (z-index: 10000)

```css
.crt-overlay {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 10000;
}

/* Static scanlines — NO animation */
.crt-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.08) 2px,
    rgba(0, 0, 0, 0.08) 4px
  );
}

/* Vignette — darkened edges */
.crt-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
}
```

### Film Grain (z-index: 9999)

```css
.film-grain {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 128px 128px;
  animation: grain 0.5s steps(4) infinite;
}

@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-5px, 5px);
  }
  50% {
    transform: translate(5px, -5px);
  }
  75% {
    transform: translate(-5px, -5px);
  }
}
```

### Matrix Rain Canvas (z-index: 0) — OPTIONAL

Matrix rain is **optional and site-specific**. Use it on marketing/hero pages where atmosphere matters. **Do NOT use it on documentation sites** — it's distracting when reading technical content.

When used, it sits BEHIND all content. Content sections need `position: relative; z-index: 1;` and a solid background to cover it.

```css
#matrixCanvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.15;
}
```

---

## 5. COMPONENT PATTERNS

### Navigation

- Position: fixed, top, full-width, z-index 9000
- Height: 64px
- Background: `rgba(13, 17, 23, 0.85)` with `backdrop-filter: blur(20px)`
- Scrolled state: more opaque (0.95) with box-shadow `0 4px 24px rgba(0,0,0,0.3)`
- Border bottom: `1px solid rgba(48, 54, 61, 0.5)`
- Logo: SVG shield + mono text, 0.85rem, weight 700
- Nav links: mono, 0.75rem, uppercase, letter-spacing 0.08em
- CTA button: green background, white text, rounded 6px, hover glow

### Buttons

**Primary (green filled):**

```css
padding: 14px 32px;
background: var(--green); /* #2EA043 */
color: #fff;
font-family: var(--font-mono);
font-size: 0.85rem;
font-weight: 500;
border-radius: 8px;
letter-spacing: 0.05em;
/* Hover: --green-bright bg, glow shadow, -2px lift */
```

**Outline (ghost):**

```css
padding: 14px 32px;
background: transparent;
color: var(--text);
border: 1px solid var(--border);
border-radius: 8px;
/* Hover: green border, green-bright text, subtle glow, -2px lift */
```

### Terminal Window Chrome

```css
.terminal-window {
  background: var(--surface-1); /* #161b22 */
  border: 1px solid var(--border); /* #30363d */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2);
}

.terminal-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: var(--surface-2); /* #1c2128 */
  border-bottom: 1px solid var(--border);
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.terminal-dot.red {
  background: #ff5f57;
}
.terminal-dot.yellow {
  background: #febc2e;
}
.terminal-dot.green {
  background: #28c840;
}
```

### Code Blocks

```css
pre {
  background: #1a1e24;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem 1.75rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  line-height: 1.8;
  color: var(--text-muted);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03);
}

code {
  background: var(--surface-2);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85em;
  color: var(--green-bright); /* #3FB950 */
  border: 1px solid var(--border);
}
```

### Cards

- Background: `--surface-1` (#161b22)
- Border: `1px solid var(--border)` (#30363d)
- Border-radius: 12px
- Hover: border turns green `#3FB950` with `box-shadow: 0 0 20px rgba(46, 160, 67, 0.1)`

### Tables

- Border-collapse: collapse
- Border: `1px solid var(--border)`
- Border-radius: 8px
- Header background: `--surface-2` (#1c2128)
- Header text: `--green-bright`, uppercase, mono, 0.65rem, `letter-spacing: 0.08em`
- Header border-bottom: `2px solid var(--green)`
- Cell padding: `0.65rem 1rem`
- Cell color: `--text-muted`
- Row hover: background `--surface-1`

### Links

- Color: `--green-bright` (#3FB950) — **NEVER blue**
- Text-decoration: none
- Hover: color white (#e6edf3) with `text-shadow: 0 0 10px var(--green-glow)`

### Blockquotes / Pull Quotes

- Border-left: `3px solid var(--green)`
- Padding: `1.5rem 0 1.5rem 1.5rem`
- Font: `--font-display`, 700, italic, 1.6rem
- Line-height: 1.5
- Green glow on left border: `box-shadow: 0 0 12px var(--green-glow), -4px 0 20px var(--green-glow)`

### Dividers

**Green Rule (horizontal):**

```css
height: 3px;
background: var(--green-bright);
box-shadow: 0 0 12px var(--green-glow), 0 0 4px var(--green-glow);
```

**Green Column (vertical):**

```css
width: 2px;
height: 120px;
margin: 0 auto;
background: linear-gradient(
  to bottom,
  transparent,
  var(--green),
  transparent
);
box-shadow: 0 0 15px var(--green-glow);
```

**Cinematic Divider:**

```css
width: 100%;
height: 1px;
background: linear-gradient(
  90deg,
  transparent 0%,
  var(--green) 35%,
  var(--green-bright) 50%,
  var(--green) 65%,
  transparent 100%
);
box-shadow: 0 0 15px var(--green-glow), 0 0 30px var(--green-glow-soft);
```

### Sidebar (Docs)

- Background: `#0d1117` (matches page background)
- Border-right: `1px solid #21262d`
- Active link: green left border + green background `rgba(63, 185, 80, 0.08)`
- Active link color: `#3FB950`
- Hover background: `rgba(63, 185, 80, 0.06)`

### Footer

- Background: `#0d1117`
- Section titles: `#3FB950`, uppercase, mono, `letter-spacing: 0.1em`
- Text: `#8b949e`
- Links: hover to green

### Scrollbar

```css
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--bg);
}
::-webkit-scrollbar-thumb {
  background: var(--green);
  border-radius: 3px;
}
```

---

## 6. SPACING & LAYOUT

### Content Widths

| Container          | Max Width | Padding |
| ------------------ | --------- | ------- |
| Magazine wrap      | 1280px    | 0 2rem  |
| Editorial sections | 800px     | —       |
| Hero content       | 900px     | —       |
| Stack section      | 1200px    | —       |
| Docs container     | 900px     | —       |

### Section Padding

| Section   | Padding        |
| --------- | -------------- |
| Hero      | 8rem 3rem 6rem |
| TOC       | 4rem 0         |
| Editorial | 8rem 3rem      |
| Stats     | 6rem 3rem      |
| Stack     | 8rem 3rem      |

### Responsive Breakpoints

```
1024px: Cards shrink, tighter spacing
 900px: Grids collapse to single column
 768px: Nav links hide, padding reduces to 1.5rem, stacked layouts
 480px: Headlines shrink, tighter grids
```

### Z-Index Stack

```
     0  — Matrix rain canvas (optional, marketing pages only)
     1  — Content sections (with solid bg)
    10  — Hero content
  9000  — Navigation
  9998  — Cursor glow
  9999  — Film grain overlay
 10000  — CRT scanlines + vignette overlay (static, no animation)
```

---

## 7. ANIMATION & TRANSITIONS

### Primary Easing Curve

```css
cubic-bezier(0.16, 1, 0.3, 1)  /* Spring-like ease-out */
```

### Timing Scale

| Duration | Usage                                                   |
| -------- | ------------------------------------------------------- |
| 0.2s     | Micro-interactions (hover color, padding shifts)        |
| 0.3s     | Standard transitions (links, nav, buttons, cursor glow) |
| 0.4s     | Card hover glow/border effects                          |
| 0.5s     | Tilt reset, grain animation                             |
| 0.6s     | Deck card hover transforms                              |
| 0.8s     | Scroll reveal animations                                |
| 1.0s     | Hero terminal float-in (staggered)                      |
| 1.2s     | Hero terminal spread transition                         |

### Scroll Reveal

- Elements start: `opacity: 0; transform: translateY(40px);`
- Variants: `.from-left` (translateX -60px), `.from-right` (translateX 60px), `.scale-up` (scale 0.9)
- Observer: `threshold: 0.1`, `rootMargin: '0px 0px -60px 0px'`
- Transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`

### Card Hover Effects

- 3D tilt: max ±8 degrees, perspective 800px, scale 1.02
- Lift: translateY(-2px) to translateY(-30px) depending on component
- Glow: box-shadow with `var(--green-glow)` or `var(--green-glow-strong)`
- Border: transitions to `var(--green)`

### Cursor Glow

- 400x400px radial gradient div following mouse
- Color: `rgba(46, 160, 67, 0.06)`, transparent at 70%
- Fixed position, z-index 9998
- Fade in/out: 0.3s transition

---

## 8. WHAT DOES NOT BELONG

- **Blue links or blue primary colors** — everything is green
- **Light themes** — dark mode only, always
- **Bright gradients or multi-color palettes** — green-on-black only
- **Playful/rounded/bubbly UI** — this is noir, not startup
- **Pastel colors or feminine styling** — masculine, cinematic aesthetic
- **Matrix rain on documentation/content-heavy sites** — reserve for marketing pages only
- **Animated CRT scanlines** — scanline overlay must be static/frozen, never moving
- **External CSS frameworks** — custom styles only
- **Default/generic styling** — every element should feel intentional

---

## 9. APPLYING TO DOCUSAURUS (Protocol Docs)

The protocol-docs site uses Docusaurus 3.x. Key Docusaurus variables that must be set:

```css
:root {
  --ifm-color-primary: #3fb950;
  --ifm-color-primary-dark: #2ea043;
  --ifm-color-primary-darker: #238636;
  --ifm-color-primary-darkest: #196c2e;
  --ifm-color-primary-light: #56d364;
  --ifm-color-primary-lighter: #7ee787;
  --ifm-color-primary-lightest: #aff5b4;
  --ifm-background-color: #0d1117;
  --ifm-background-surface-color: #161b22;
  --ifm-font-color-base: #e6edf3;
  --ifm-font-color-secondary: #8b949e;
  --ifm-link-color: #3fb950;
  --ifm-link-hover-color: #e6edf3;
  --ifm-link-hover-decoration: none;
  --ifm-heading-color: #e6edf3;
  --ifm-navbar-background-color: rgba(13, 17, 23, 0.85);
  --ifm-navbar-link-color: #e6edf3;
  --ifm-navbar-link-hover-color: #3fb950;
  --ifm-footer-background-color: #0d1117;
  --ifm-menu-color-active: #3fb950;
  --ifm-menu-color-background-active: rgba(63, 185, 80, 0.08);
  --ifm-tabs-color-active: #3fb950;
  --ifm-code-background: rgba(63, 185, 80, 0.08);
  --ifm-table-border-color: #30363d;
  --ifm-toc-border-color: #21262d;
  --ifm-toc-link-color: #8b949e;
  --ifm-color-scheme: dark;
  --ifm-font-family-base: -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --ifm-font-family-monospace: 'JetBrains Mono', 'Courier New',
    monospace;
  --ifm-heading-font-family: 'Playfair Display', Georgia, serif;
}
```

### Known Issues to Fix

1. **Blue links from Hasura base styles** — `styles.hasura.css` defines `--ifm-color-primary: #3482f3` (blue). The protocol-custom.scss overrides must have higher specificity or load later to win.
2. **Missing Playfair Display** — headings should use Playfair Display serif, not General Sans
3. **Missing CRT overlay** — docs site should have subtle scanlines + vignette for brand consistency
4. **Font import** — need Google Fonts import for Playfair Display + JetBrains Mono
5. **Link hover** — should transition to white with green glow, not default blue hover

---

## 10. COPY & CONTENT VOICE

- **Confident, declarative, no hedging** — "We built X" not "We try to build X"
- **Technical but accessible** — real product names and terms, explained when needed
- **Magazine editorial tone** — feature article, not marketing copy
- **Terminal/hacker metaphors** — "Ship", "Deploy", "Stack", "Pipeline", "Protocol"
- **Short, punchy sentences** mixed with longer editorial paragraphs
