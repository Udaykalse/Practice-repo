const calcInterest = (p, r, t) => (p * r * t) / 100;

const displayInterest = (amt) => console.log(`Interest Earend : ₹${amt}`);

function bankApp(p, r, t) {
  const interest = calcInterest(p, r, t);
  displayInterest(interest);
}

bankApp(1000, 5, 1);
