const colors = [
  { hex: "hsl(223,90%,50%)", label: "Blue" },
  { hex: "hsl(340,90%,55%)", label: "Pink" },
  { hex: "hsl(150,80%,40%)", label: "Green" },
  { hex: "hsl(30,95%,50%)", label: "Orange" },
  { hex: "hsl(270,80%,60%)", label: "Purple" },
  { hex: "hsl(0,85%,55%)", label: "Red" },
  { hex: "hsl(190,80%,45%)", label: "Teal" },
];
const swatchEl = document.getElementById("swatches");
colors.forEach((c, i) => {
  const s = document.createElement("div");
  s.className = "swatch" + (i === 0 ? " active" : "");
  s.style.background = c.hex;
  s.title = c.label;
  s.onclick = () => {
    document
      .querySelectorAll(".swatch")
      .forEach((x) => x.classList.remove("active"));
    s.classList.add("active");
    document.documentElement.style.setProperty("--primary", c.hex);
  };
  swatchEl.appendChild(s);
});

const speedSlider = document.getElementById("speed");
const speedVal = document.getElementById("speed-val");
speedSlider.oninput = () => {
  const v = parseFloat(speedSlider.value);
  speedVal.textContent = v.toFixed(1) + "×";
  const dur = (3 / v).toFixed(2) + "s";
  document
    .querySelectorAll(
      ".bike__body,.bike__front,.bike__handlebars,.bike__pedals,.bike__pedals-spin,.bike__seat,.bike__spokes,.bike__spokes-spin,.bike__tire",
    )
    .forEach((el) => {
      el.style.animationDuration = dur;
    });
};

const sizeSlider = document.getElementById("size");
const sizeVal = document.getElementById("size-val");
sizeSlider.oninput = () => {
  const v = parseFloat(sizeSlider.value);
  sizeVal.textContent = v.toFixed(1) + "em";
  document.querySelector(".bike").style.width = v + "em";
};

const strokeSlider = document.getElementById("stroke");
const strokeVal = document.getElementById("stroke-val");
strokeSlider.oninput = () => {
  const v = parseFloat(strokeSlider.value);
  strokeVal.textContent = v.toFixed(1);
  document.querySelector("#bikesvg > g").setAttribute("stroke-width", v);
};

let paused = false;
document.getElementById("btn-pause").onclick = function () {
  paused = !paused;
  this.textContent = paused ? "Play" : "Pause";
  this.classList.toggle("active", !paused);
  document
    .querySelectorAll(
      ".bike__body,.bike__front,.bike__handlebars,.bike__pedals,.bike__pedals-spin,.bike__seat,.bike__spokes,.bike__spokes-spin,.bike__tire",
    )
    .forEach((el) => {
      el.style.animationPlayState = paused ? "paused" : "running";
    });
};

let bouncing = false;
document.getElementById("btn-bounce").onclick = function () {
  bouncing = !bouncing;
  this.classList.toggle("active", bouncing);
  document.querySelector(".bike").style.animation = bouncing
    ? "bounceRide 0.6s ease-in-out infinite"
    : "";
};

let nightMode = false;
document.getElementById("btn-night").onclick = function () {
  nightMode = !nightMode;
  this.classList.toggle("active", nightMode);
  document.querySelector(".wrap").style.background = nightMode ? "#0d1117" : "";
};

document.querySelector(".bike").onclick = function () {
  const rect = this.getBoundingClientRect();
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    const angle = Math.random() * Math.PI * 2;
    const dist = 40 + Math.random() * 80;
    const size = 4 + Math.random() * 8;
    const hue = Math.floor(Math.random() * 360);
    p.style.cssText = `position:fixed;left:${rect.left + rect.width / 2}px;top:${rect.top + rect.height / 2}px;width:${size}px;height:${size}px;border-radius:50%;background:hsl(${hue},90%,55%);pointer-events:none;transition:transform 0.6s cubic-bezier(.2,.8,.3,1),opacity 0.6s;z-index:9999;`;
    document.body.appendChild(p);
    requestAnimationFrame(() => {
      p.style.transform = `translate(${Math.cos(angle) * dist}px,${Math.sin(angle) * dist}px)`;
      p.style.opacity = "0";
    });
    setTimeout(() => p.remove(), 700);
  }
};
