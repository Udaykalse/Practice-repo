# glow-lamp

Pure CSS + HTML interactive lamp brightness controller. Drag the slider to control bulb glow intensity from 0 to 10.

## Structure

```
glow-lamp/
├── index.html
└── style.css
```

## Changes from original

| Original | Updated |
|---|---|
| `.lamp-wrapper` | `.fixture-wrap` |
| `.lamp` | `.fixture` |
| `.lamp-part.-top` | `.shade-cap` |
| `.lamp-part.-top-part` | `.cap-side` |
| `.lamp-part.-body` | `.shade-body` |
| `.lamp-part.-bottom` | `.shade-base` |
| `.blub` | `.bulb` |
| `.lamp-rope` | `.cord` |
| `.wall-light-shadow` | `.beam` |
| `.sun` | `.star-icon` |
| `.ray` | `.spike` |
| `data-light` | `data-glow` |
| `slider` (id) | `brightSlider` (id) |
| CSS var `--lamp-*` | `--fixture-*` |
| CSS var `--lamp-light-color` | `--glow-soft` |
| CSS var `--lamp-dark-color` | `--glow-vivid` |
| CSS var `--rope-color` | `--cord-col` |

## Usage

Open `index.html` in any modern browser and drag the slider.