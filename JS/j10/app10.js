let logs = ["INFO", "ERROR", "INFO", "WARN", "ERROR", "SUCCESS"];
let count = {};
logs.forEach((l) => {
  count[l] = (count[l] || 0) + 1;
});

console.log(count);
