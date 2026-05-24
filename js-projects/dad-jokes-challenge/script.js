const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const laughBtn = document.getElementById("laughBtn");
const counterEl = document.getElementById("counter");
const ratingEl = document.getElementById("rating");
const streakEl = document.getElementById("streak");
const streakCountEl = document.getElementById("streakCount");

let survived = 0;
let streak = 0;
let isLoading = false;

const ratings = ["😐", "🙂", "😄", "😆", "🤣"];

const getRating = (n) => {
  if (n === 0) return "";
  if (n < 3)  return ratings[1];
  if (n < 6)  return ratings[2];
  if (n < 10) return ratings[3];
  return ratings[4];
};

const updateStreak = () => {
  if (streak >= 3) {
    streakEl.classList.remove("hidden");
    streakCountEl.textContent = streak;
  } else {
    streakEl.classList.add("hidden");
  }
};

const generateJoke = async () => {
  if (isLoading) return;
  isLoading = true;
  jokeEl.classList.add("fade");
  jokeBtn.classList.add("loading");
  jokeBtn.textContent = "Loading...";

  await new Promise((r) => setTimeout(r, 250));

  try {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const data = await res.json();
    jokeEl.textContent = data.joke;
  } catch {
    jokeEl.textContent = "Oops! Couldn't fetch a joke. Check your connection.";
  }

  jokeEl.classList.remove("fade");
  jokeBtn.classList.remove("loading");
  jokeBtn.textContent = "Get a Joke";
  isLoading = false;
};

jokeBtn.addEventListener("click", () => {
  survived++;
  streak++;
  counterEl.textContent = `${survived} joke${survived !== 1 ? "s" : ""} survived`;
  ratingEl.textContent = getRating(survived);
  updateStreak();
  generateJoke();
});

laughBtn.addEventListener("click", () => {
  streak = 0;
  updateStreak();
  generateJoke();
});

generateJoke();