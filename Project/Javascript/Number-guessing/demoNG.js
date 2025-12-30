const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Hi Welcome");
console.log("U Have 7 chances");
console.log("Lets Start :- ");

let low, high;

let nums;
let chance = 7;
let guessCount = 0;

rl.question("Entre The lower Bound : - ", (lowInput) => {
  low = parseInt(lowInput);

  rl.question("Entre The Higher Bound :- ", (highInput) => {
    high = parseInt(highInput);

    nums = Math.floor(Math.random() * (high - low + 1)) + low;
    console.log("\n u hv 7 chance to guess");
    console.log("Lets Start");
    askGuess();
  });
});

function askGuess() {
  if (guessCount >= chance) {
    console.log(`Sorry the nums was ${nums} try next`);
  }
  rl.question("Entre You Guess :- ", (guesInput) => {
    let guess = parseInt(guesInput);

    guessCount++;
    if (guess === nums) {
      console.log(`Correct ! the number ${nums} you guessed`);
      rl.close();
    } else if (guess > nums) {
      console.log("Too High ! try lower");
      askGuess();
    } else if (guess < nums) {
      console.log("Too Low ! try Higher");
      askGuess();
    }
  });
}
