function totalMarks(...marks) {
  var sum = 0;
  for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return sum;
}

console.log(totalMarks(10, 20, 30));
