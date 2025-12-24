function student(name, ...marks) {
  var total = 0;
  for (var i = 0; i < marks.length; i++) {
    total = total + marks[i];
  }
  return {
    name: name,
    totalMarks: total,
  };
}

console.log(student("Siddharth", 90, 78, 79));
