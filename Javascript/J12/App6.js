const getAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length;

const logAverage = (avg) => console.log(`The Average is ₹${avg}`);

function processMarks(arr) {
  const avg = getAverage(arr);
  logAverage(avg);
}

processMarks([10, 20, 30]);
