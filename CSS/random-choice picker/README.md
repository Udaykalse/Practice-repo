# ChoicePicker — Let Fate Decide

A beautifully designed random choice picker with a slot-machine spin animation, confetti celebration, and modern glassmorphism UI. Just type your options, hit Enter, and let fate choose.

---

## Features

- **Easing spin animation** — cycling decelerates naturally before locking onto a winner
- **Confetti burst** — colourful particles shower the screen when a winner is selected
- **Live tag preview** — choices appear as pills as you type, no submit needed
- **Winner banner** — highlighted result shown in a dedicated card with a "Spin again" shortcut
- **Clear all** — trash icon resets everything instantly
- **Choice counter** — live count of how many options are in the pool
- **Keyboard-first** — Enter to spin, no mouse required
- **Fully responsive** — fluid layout from 320 px mobile to wide desktop
- **Reduced-motion safe** — respects `prefers-reduced-motion` for accessibility
- **Dark glassmorphism theme** — ambient orb background, deep navy + electric violet + gold palette

---

## Usage

1. Open `index.html` in any modern browser — no build step, no dependencies.
2. Type your choices in the text area, separated by commas.
3. Press **Enter** or click **Spin** to start the animation.
4. The winner is highlighted and displayed in the winner banner below.
5. Click **Spin again** or press Enter to spin another round.
6. Click the trash icon (top right) to clear all choices.

---

## Project Structure

```
random-choice-picker/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). No polyfills required.
