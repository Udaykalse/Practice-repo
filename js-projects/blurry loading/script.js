const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
const progressFill = document.querySelector(".progress-fill");
const loadingLabel = document.querySelector(".loading-label");
const loaderWrapper = document.querySelector(".loader-wrapper");

let load = 0;

const labels = [
  "Initializing...",
  "Loading assets...",
  "Almost there...",
  "Finishing up...",
  "Welcome!"
];

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const blurring = () => {
  load++;

  if (load > 99) {
    clearInterval(int);
    loadText.innerText = "100%";
    progressFill.style.width = "100%";
    loadingLabel.innerText = labels[4];
    loaderWrapper.classList.add("done");

    setTimeout(() => {
      loaderWrapper.style.opacity = "0";
      loaderWrapper.style.transition = "opacity 0.8s ease";
    }, 800);

    return;
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0.1);
  progressFill.style.width = `${load}%`;
  bg.style.filter = `blur(${scale(load, 0, 100, 28, 0)}px)`;

  if (load < 25)       loadingLabel.innerText = labels[0];
  else if (load < 50)  loadingLabel.innerText = labels[1];
  else if (load < 75)  loadingLabel.innerText = labels[2];
  else                 loadingLabel.innerText = labels[3];
};

let int = setInterval(blurring, 30);