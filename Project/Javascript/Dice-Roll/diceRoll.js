const readLine = require("readline");

const RL = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function rollDice() {
  const num = Math.floor(Math.random() * 6) + 1;

  if (num === 1) {
    console.log("[-----]");
    console.log("[-----]");
    console.log("[--1--]");
    console.log("[-----]");
    console.log("[-----]");
  }
  if (num === 2) {
    console.log("[-----]");
    console.log("[-----]");
    console.log("[--2--]");
    console.log("[-----]");
    console.log("[-----]");
  }
  if (num === 3) {
    console.log("[-----]");
    console.log("[-----]");
    console.log("[--3--]");
    console.log("[-----]");
    console.log("[-----]");
  }
  if (num === 4) {
    console.log("[-----]");
    console.log("[-----]");
    console.log("[--4--]");
    console.log("[-----]");
    console.log("[-----]");
  }
  if (num === 5) {
    console.log("[-----]");
    console.log("[-----]");
    console.log("[--5--]");
    console.log("[-----]");
    console.log("[-----]");
  }
  if (num === 6) {
    console.log("[-----]");
    console.log("[-----]");
    console.log("[--6--]");
    console.log("[-----]");
    console.log("[-----]");
  }

  RL.question("Press Y to roll Again and n to exit :- ", (answer) => {
    console.log("\n");
    if (answer.toLowerCase() === "y") {
      rollDice();
    } else {
      RL.close();
    }
  });
}

rollDice();
