# Social Stats Counter

A sleek, animated social media metrics dashboard with glassmorphism UI, eased counter animations, and platform-specific accent colors across Instagram, YouTube, Facebook, and X/Twitter.

## Features Added

- Smooth easeOutQuart animation using `requestAnimationFrame` instead of `setTimeout`
- Smart number formatting (K / M suffixes for large counts)
- IntersectionObserver — counters animate only when scrolled into view
- Total reach aggregator bar across all platforms
- Glassmorphism card design with per-platform glow on hover
- Ambient background orbs with reduced-motion support
- X/Twitter added as a 4th platform card
- Fully responsive: 2-column grid on desktop → 1-column on mobile
- Trend indicators (up/down) with color-coded percentage badges

## Folder Structure

```
social-stats-counter/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Usage

Open `index.html` directly in a browser — no build step or server required.

To customise a platform's target number, edit the `data-target` attribute on any `.stat-card` in `index.html`.
