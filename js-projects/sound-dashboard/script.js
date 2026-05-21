const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsContainer = document.getElementById("buttons");
const nowPlaying = document.getElementById("now-playing");
const nowPlayingText = document.getElementById("now-playing-text");

const icons = {
  applause: "👏",
  boo: "👎",
  gasp: "😱",
  tada: "🎉",
  victory: "🏆",
  wrong: "❌",
};

let activeBtn = null;

const stopSounds = () => {
  sounds.forEach((sound) => {
    const el = document.getElementById(sound);
    el.pause();
    el.currentTime = 0;
  });
  if (activeBtn) {
    activeBtn.classList.remove("playing");
    activeBtn = null;
  }
  nowPlaying.classList.add("hidden");
};

const createRipple = (btn, e) => {
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  btn.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
};

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = `${icons[sound]} ${sound}`;
  btn.setAttribute("aria-label", `Play ${sound}`);

  btn.addEventListener("click", (e) => {
    if (activeBtn === btn) {
      stopSounds();
      return;
    }
    stopSounds();
    createRipple(btn, e);
    const audio = document.getElementById(sound);
    audio.play();
    btn.classList.add("playing");
    activeBtn = btn;
    nowPlayingText.textContent = `Playing: ${icons[sound]} ${sound}`;
    nowPlaying.classList.remove("hidden");
    audio.addEventListener("ended", () => {
      btn.classList.remove("playing");
      activeBtn = null;
      nowPlaying.classList.add("hidden");
    }, { once: true });
  });

  buttonsContainer.appendChild(btn);
});