function countDown(t) {
  const interval = setInterval(() => {
    let mins = Math.floor(t / 60);
    let secs = t % 60;
    let timer =
      String(mins).padStart(2, "0") + " : " + String(secs).padStart(2, "0");

    process.stdout.write(timer + "\r");

    t--;

    if (t < 0) {
      clearInterval(interval);
      console.log("Fire in the Hole");
    }
  }, 1000);
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Entre the time in seconds : - ", (t) => {
  countDown(parseInt(t));
  readline.close();
});
