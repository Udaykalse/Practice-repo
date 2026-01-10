function getTopScorers(marks) {
  const highestMarks = marks.filter(function (score) {
    return score > 75;
  });
  return highestMarks;
}

console.log(getTopScorers([45, 88, 92, 70, 76]));