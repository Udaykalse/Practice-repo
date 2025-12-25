document.addEventListener("DOMContentLoaded", function () {
  const flyBtn = document.getElementById("flyBtn");
  const cawBtn = document.getElementById("cawBtn");
  const speedBtn = document.getElementById("speedBtn");
  const crowContainer = document.querySelector(".crow-container");
  const crow = document.querySelector(".crow");
  const cawSound = document.getElementById("cawSound");

  let isFlying = true;
  let animationSpeed = "normal";

  flyBtn.addEventListener("click", function () {
    if (isFlying) {
      crowContainer.style.animationPlayState = "paused";
      flyBtn.innerHTML = '<i class="fas fa-feather-alt"></i> Resume Flying';
    } else {
      crowContainer.style.animationPlayState = "running";
      flyBtn.innerHTML = '<i class="fas fa-feather-alt"></i> Pause Flying';
    }
    isFlying = !isFlying;
  });

  cawBtn.addEventListener("click", function () {
    crow.classList.add("cawing");

    cawSound.currentTime = 0;
    cawSound.play().catch((e) => console.log("Audio play failed:", e));

    setTimeout(() => {
      crow.classList.remove("cawing");
    }, 1500);

    const originalText = cawBtn.innerHTML;
    cawBtn.innerHTML = '<i class="fas fa-volume-up"></i> Cawing!';

    setTimeout(() => {
      cawBtn.innerHTML = originalText;
    }, 1500);
  });

  speedBtn.addEventListener("click", function () {
    crowContainer.classList.remove("fast", "slow");

    if (animationSpeed === "normal") {
      animationSpeed = "fast";
      crowContainer.classList.add("fast");
      speedBtn.innerHTML = '<i class="fas fa-tachometer-alt"></i> Speed: Fast';
    } else if (animationSpeed === "fast") {
      animationSpeed = "slow";
      crowContainer.classList.add("slow");
      speedBtn.innerHTML = '<i class="fas fa-tachometer-alt"></i> Speed: Slow';
    } else {
      animationSpeed = "normal";
      speedBtn.innerHTML =
        '<i class="fas fa-tachometer-alt"></i> Speed: Normal';
    }
  });

  setInterval(() => {
    const feathers = document.querySelectorAll(".feather");
    feathers.forEach((feather) => {
      const randomY = Math.random() * 5;
      const randomX = Math.random() * 5;
      feather.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${
        Math.random() * 20 - 10
      }deg)`;
    });
  }, 1000);

  document.addEventListener("mousemove", function (e) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 50;

    crowContainer.style.transform = `translate(-50%, -50%) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  console.log("Enhanced Crow Animation Loaded!");
  console.log(
    "Features: Interactive controls, parallax effect, detailed textures, and realistic animations."
  );
});
