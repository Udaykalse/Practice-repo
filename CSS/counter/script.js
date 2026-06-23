const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

const formatNumber = (n) => {
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
};

const animateCounter = (el, target, duration = 2000) => {
  const start = performance.now();

  const step = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuart(progress);
    const current = Math.round(eased * target);

    el.textContent = formatNumber(current);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = formatNumber(target);
    }
  };

  requestAnimationFrame(step);
};

const animateTotalCounter = (el, target, duration = 2200) => {
  const start = performance.now();

  const step = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuart(progress);
    const current = Math.round(eased * target);

    el.textContent = formatNumber(current);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = formatNumber(target);
    }
  };

  requestAnimationFrame(step);
};

const observeCards = () => {
  const cards = document.querySelectorAll(".stat-card");
  const totalEl = document.getElementById("total-count");

  let total = 0;
  cards.forEach((card) => {
    total += parseInt(card.dataset.target, 10);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const card = entry.target;
        const counterEl = card.querySelector(".counter");
        const target = parseInt(card.dataset.target, 10);

        if (!card.dataset.animated) {
          card.dataset.animated = "true";
          animateCounter(counterEl, target);
        }

        observer.unobserve(card);
      });
    },
    { threshold: 0.2 },
  );

  cards.forEach((card) => observer.observe(card));

  const totalObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateTotalCounter(totalEl, total);
        totalObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 },
  );

  const totalBar = document.querySelector(".total-bar");
  if (totalBar) totalObserver.observe(totalBar);
};

document.addEventListener("DOMContentLoaded", observeCards);
