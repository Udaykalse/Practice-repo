const textarea = document.getElementById("textarea");
const tagsEl = document.getElementById("tags");
const spinBtn = document.getElementById("spinBtn");
const clearBtn = document.getElementById("clearBtn");
const choiceCount = document.getElementById("choiceCount");
const winnerBanner = document.getElementById("winnerBanner");
const winnerName = document.getElementById("winnerName");
const spinAgainBtn = document.getElementById("spinAgainBtn");
const confettiCanvas = document.getElementById("confetti");

let isSpinning = false;
let currentWinner = null;

const parseTags = (input) =>
  input
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t.length > 0);

const renderTags = (tags) => {
  const existing = [...tagsEl.querySelectorAll(".tag")].map(
    (el) => el.textContent,
  );
  const isSame =
    existing.length === tags.length && tags.every((t, i) => t === existing[i]);
  if (isSame) return;

  tagsEl.innerHTML = "";
  tags.forEach((tag, i) => {
    const el = document.createElement("span");
    el.classList.add("tag");
    el.textContent = tag;
    el.style.animationDelay = `${i * 30}ms`;
    tagsEl.appendChild(el);
  });
};

const updateUI = () => {
  const tags = parseTags(textarea.value);
  renderTags(tags);
  const n = tags.length;
  choiceCount.textContent = `${n} choice${n !== 1 ? "s" : ""}`;
  spinBtn.disabled = n < 2 || isSpinning;
};

const getTagElements = () => [...tagsEl.querySelectorAll(".tag")];

const highlightTag = (el) => el.classList.add("highlight");
const unhighlightTag = (el) => el.classList.remove("highlight");
const setWinner = (el) => {
  el.classList.remove("highlight");
  el.classList.add("winner");
  currentWinner = el;
};

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const randomSelect = () => {
  if (isSpinning) return;
  const tags = getTagElements();
  if (tags.length < 2) return;

  isSpinning = true;
  spinBtn.disabled = true;
  spinBtn.classList.add("spinning");
  winnerBanner.hidden = true;

  if (currentWinner) {
    currentWinner.classList.remove("winner");
    currentWinner = null;
  }

  const totalDuration = 2800;
  const startTime = performance.now();
  let lastTag = null;

  const step = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / totalDuration, 1);
    const eased = easeOut(progress);
    const interval = 60 + eased * 340;

    if (lastTag) unhighlightTag(lastTag);

    let next;
    do {
      next = pickRandom(tags);
    } while (next === lastTag && tags.length > 1);

    highlightTag(next);
    lastTag = next;

    if (progress < 1) {
      setTimeout(() => requestAnimationFrame(step), interval);
    } else {
      unhighlightTag(next);
      const winner = pickRandom(tags);
      setWinner(winner);
      winnerName.textContent = winner.textContent;
      winnerBanner.hidden = false;
      winnerBanner.style.animation = "none";
      requestAnimationFrame(() => {
        winnerBanner.style.animation = "";
      });
      launchConfetti();
      isSpinning = false;
      spinBtn.classList.remove("spinning");
      spinBtn.disabled = false;
    }
  };

  requestAnimationFrame(step);
};

const clearAll = () => {
  textarea.value = "";
  tagsEl.innerHTML = "";
  choiceCount.textContent = "0 choices";
  spinBtn.disabled = true;
  winnerBanner.hidden = true;
  if (currentWinner) {
    currentWinner.classList.remove("winner");
    currentWinner = null;
  }
  textarea.focus();
};

const launchConfetti = () => {
  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const colors = [
    "#7c3aed",
    "#f59e0b",
    "#a78bfa",
    "#fcd34d",
    "#0ea5e9",
    "#f472b6",
  ];
  const particles = Array.from({ length: 90 }, () => ({
    x: Math.random() * confettiCanvas.width,
    y: -10 - Math.random() * 100,
    w: 7 + Math.random() * 7,
    h: 4 + Math.random() * 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: -2 + Math.random() * 4,
    vy: 3 + Math.random() * 5,
    rotation: Math.random() * Math.PI * 2,
    spin: -0.1 + Math.random() * 0.2,
    opacity: 1,
  }));

  let frame;
  const draw = () => {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let alive = false;
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08;
      p.rotation += p.spin;
      if (p.y > confettiCanvas.height - 60) {
        p.opacity -= 0.04;
      }
      if (p.opacity > 0) alive = true;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (alive) {
      frame = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  };

  cancelAnimationFrame(frame);
  draw();
};

textarea.addEventListener("input", updateUI);

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const tags = parseTags(textarea.value);
    if (tags.length >= 2 && !isSpinning) {
      randomSelect();
    }
  }
});

spinBtn.addEventListener("click", randomSelect);
clearBtn.addEventListener("click", clearAll);
spinAgainBtn.addEventListener("click", () => {
  if (currentWinner) {
    currentWinner.classList.remove("winner");
    currentWinner = null;
  }
  winnerBanner.hidden = true;
  randomSelect();
});

window.addEventListener("resize", () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});

textarea.focus();
