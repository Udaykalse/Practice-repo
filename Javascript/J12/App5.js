const checkSpeed = (s) => s > 100;

const warnDriver = (overLimit) =>
  console.log(overLimit ? "Slow Down !" : "SAFE SPEED");

function radar(speed) {
  const isOver = checkSpeed(speed);
  warnDriver(isOver);
}

radar(120)
