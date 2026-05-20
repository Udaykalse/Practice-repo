const bubbleContainer = document.getElementById("bubbles");
const colors = [
  "rgba(255,255,255,0.3)",
  "rgba(135,206,235,0.4)",
  "rgba(173,216,230,0.35)",
];

for (let i = 0; i < 18; i++) {
  const b = document.createElement("div");
  b.className = "bubble";
  const size = Math.random() * 40 + 10;
  b.style.cssText = `
    width:${size}px;
    height:${size}px;
    left:${Math.random() * 100}%;
    background:${colors[Math.floor(Math.random() * 3)]};
    animation-duration:${Math.random() * 8 + 5}s;
    animation-delay:${Math.random() * 8}s
  `;
  bubbleContainer.appendChild(b);
}

function waveLabel(el) {
  el.innerHTML = el.innerText
    .split("")
    .map(
      (c, i) =>
        `<span style="transition-delay:${i * 50}ms">${c}</span>`
    )
    .join("");
}

waveLabel(document.getElementById("email-label"));
waveLabel(document.getElementById("pwd-label"));

const eyeBtn = document.getElementById("eye-btn");
const pwdInput = document.getElementById("password");

eyeBtn.addEventListener("click", () => {
  const show = pwdInput.type === "password";
  pwdInput.type = show ? "text" : "password";
  eyeBtn.textContent = show ? "🙈" : "👁";
});

const strengthFill = document.getElementById("strength-fill");
const levels = [
  { color: "#e74c3c", width: "25%" },
  { color: "#e67e22", width: "50%" },
  { color: "#f1c40f", width: "75%" },
  { color: "#2ecc71", width: "100%" },
];

pwdInput.addEventListener("input", () => {
  const v = pwdInput.value;
  if (v.length === 0) {
    strengthFill.style.width = "0";
    return;
  }
  let score = 0;
  if (v.length >= 8) score++;
  if (/[A-Z]/.test(v)) score++;
  if (/[0-9]/.test(v)) score++;
  if (/[^A-Za-z0-9]/.test(v)) score++;
  const lvl = levels[Math.max(0, score - 1)];
  strengthFill.style.width = lvl.width;
  strengthFill.style.background = lvl.color;
});

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function (e) {
  const rect = loginBtn.getBoundingClientRect();
  const r = document.createElement("span");
  r.className = "ripple";
  const size = Math.max(rect.width, rect.height);
  r.style.cssText = `
    width:${size}px;
    height:${size}px;
    left:${e.clientX - rect.left - size / 2}px;
    top:${e.clientY - rect.top - size / 2}px
  `;
  loginBtn.appendChild(r);
  setTimeout(() => r.remove(), 600);

  const email = document.getElementById("email").value;
  const pwd = document.getElementById("password").value;

  if (!email || !pwd) {
    const container = document.getElementById("container");
    container.classList.add("shake");
    setTimeout(() => container.classList.remove("shake"), 400);
    return;
  }

  const success = document.getElementById("success");
  success.classList.add("show");
  setTimeout(() => success.classList.remove("show"), 2200);
});