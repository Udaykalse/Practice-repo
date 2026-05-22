gsap.registerPlugin(Draggable);

const body = document.body;
const loginForm = document.getElementById("loginForm");
const cordBead = document.querySelector(".cord-bead");
const cordLine = document.querySelector(".cord-line");
const hitArea = document.querySelector(".cord-hit");
const particlesEl = document.getElementById("particles");
const toast = document.getElementById("toast");
const togglePw = document.getElementById("togglePw");
const pwInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

let isOn = false;
let particleInterval = null;

const clickSound = new Audio("https://assets.codepen.io/605876/click.mp3");

Draggable.create(hitArea, {
  type: "y",
  bounds: { minY: 0, maxY: 60 },
  onDrag: function () {
    gsap.set(cordBead, { y: this.y });
    gsap.set(cordLine, { attr: { y2: 180 + this.y } });
  },
  onRelease: function () {
    if (this.y > 30) toggleLamp();
    gsap.to([cordBead, hitArea], {
      y: 0,
      duration: 0.5,
      ease: "back.out(2.5)",
    });
    gsap.to(cordLine, {
      attr: { y2: 180 },
      duration: 0.5,
      ease: "back.out(2.5)",
    });
  },
});

function toggleLamp() {
  isOn = !isOn;
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
  body.setAttribute("data-on", isOn);
  document.documentElement.style.setProperty("--on", isOn ? 1 : 0);

  if (isOn) {
    loginForm.classList.add("active");
    gsap.to(body, { backgroundColor: "#1c1f24", duration: 0.6 });
    startParticles();
  } else {
    loginForm.classList.remove("active");
    gsap.to(body, { backgroundColor: "#121417", duration: 0.6 });
    stopParticles();
  }
}

function startParticles() {
  stopParticles();
  particleInterval = setInterval(() => {
    const p = document.createElement("div");
    p.className = "particle";
    const size = 3 + Math.random() * 6;
    p.style.cssText = `
            width:${size}px;
            height:${size}px;
            left:${30 + Math.random() * 40}%;
            top:${60 + Math.random() * 20}%;
            animation-duration:${2 + Math.random() * 3}s;
            animation-delay:${Math.random() * 0.5}s;
        `;
    particlesEl.appendChild(p);
    setTimeout(() => p.remove(), 5000);
  }, 200);
}

function stopParticles() {
  clearInterval(particleInterval);
  particlesEl.innerHTML = "";
}

togglePw.addEventListener("click", () => {
  const isText = pwInput.type === "text";
  pwInput.type = isText ? "password" : "text";
  togglePw.textContent = isText ? "👁" : "🙈";
});

function showToast(msg, type = "") {
  toast.textContent = msg;
  toast.className = "toast show " + type;
  setTimeout(() => {
    toast.className = "toast";
  }, 2800);
}

function handleSubmit(e) {
  e.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!user || !pass) {
    loginForm.classList.add("shake");
    setTimeout(() => loginForm.classList.remove("shake"), 400);
    showToast("Please fill in all fields", "error");
    return false;
  }

  if (pass.length < 6) {
    showToast("Password too short", "error");
    return false;
  }

  loginBtn.classList.add("loading");
  loginBtn.disabled = true;

  setTimeout(() => {
    loginBtn.classList.remove("loading");
    loginBtn.disabled = false;
    showToast("Welcome, " + user + "! ✨", "success");
  }, 1800);

  return false;
}

document.querySelectorAll(".form-group input").forEach((input) => {
  input.addEventListener("focus", () => {
    gsap.to(input.closest(".input-wrap"), { scale: 1.02, duration: 0.2 });
  });
  input.addEventListener("blur", () => {
    gsap.to(input.closest(".input-wrap"), { scale: 1, duration: 0.2 });
  });
});
