# vanish-text

Pure CSS animated text vanish effect. Letters skew and fly off screen alternating left and right with a glow trail.

## Structure

```
vanish-text/
├── index.html
└── style.css
```

## Changes from original

- Folder: `disappear-text` → `vanish-text`
- Class: `.disappear` → `.vanish-wrap`
- Word: `DISAPPEAR` → `PHANTOM`
- Keyframes: `disappearleft` / `disappearright` → `flyLeft` / `flyRight`
- Fixed duplicate `nth-child(2)` selector bug from original
- Even/odd alternating pattern applied cleanly across all 7 letters

## Usage

Open `index.html` in any modern browser.