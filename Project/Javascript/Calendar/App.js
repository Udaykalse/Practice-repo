const readLine = require("readline");

const rdLine = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rdLine.question("Enter Year :- ", (year) => {
  rdLine.question("Enter Month (1/12) : - ", (month) => {
    year = parseInt(year);
    month = parseInt(month);
    console.log("Mo Tu We Th Fr Sa Su");

    const firstDay = new Date(year, month - 1, 1).getDay();

    const daysInMonth = new Date(year, month, 0).getDate();

    let dayCounter = 1;
    let start = firstDay === 0 ? 6 : firstDay - 1;
    for (let week = 0; week < 6; week++) {
      let line = "";
      for (let day = 0; day < 7; day++) {
        if (week === 0 && day < start) {
          line += "  ";
        } else if (dayCounter > daysInMonth) {
          line += "  ";
        } else {
          line += String(dayCounter).padStart(2, " ") + " ";
          dayCounter++;
        }
      }
      console.log(line.trimEnd());
    }
    rdLine.close();
  });
});
